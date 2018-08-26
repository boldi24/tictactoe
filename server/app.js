const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const uuidv1 = require('uuid/v1');

const tictactoe = require('./tictactoe');

app.use(express.static(path.join(__dirname, 'dist')));

let clientsWaiting = [];
const clientsPlaying = [];
const roomIdGameMap = new Map();

io.on('connection', client => {
  console.log('a user connected');
  client.on('LOGIN', username => {
    console.log('User entered with name: ', username);
    client.emit('LOGIN_SUCCESS', { username });
    client.username = username;
    io.emit('UPDATE_MENU', { peopleWaiting: clientsWaiting.length });
  });

  client.on('JOIN_RANDOM', () => {
    client.emit('UPDATE_MENU', { isInGame: false });
    clientsWaiting.push(client);
  });

  client.on('STEP', where => {
    const game = roomIdGameMap.get(client.gameId);
    if (!tictactoe.canPlayerStep(game, client)) return;
    const newGame = tictactoe.stepGameState(game, where);
    roomIdGameMap.set(client.gameId, newGame);
    io.to(client.gameId).emit('UPDATE_GAME', newGame);
  });

  client.on('disconnect', () => {
    clientsWaiting = clientsWaiting.filter(c => c.id !== client.id);
    io.emit('UPDATE_MENU', { peopleWaiting: clientsWaiting.length });
  });
});

http.listen(8080, () => console.log('Example app listening on port 8080!'));

const matchPeople = () => {
  while (clientsWaiting.length > 1) {
    const xPlayer = clientsWaiting.pop();
    const oPlayer = clientsWaiting.pop();
    const initGS = tictactoe.getInitialGameState();
    const gameId = uuidv1();
    xPlayer.gameId = gameId;
    oPlayer.gameId = gameId;
    xPlayer.isX = true;
    oPlayer.isX = false;
    xPlayer.join(gameId);
    oPlayer.join(gameId);
    clientsPlaying.push(xPlayer, oPlayer);
    roomIdGameMap.set(gameId, initGS);
    io.to(gameId).emit('UPDATE_MENU', { isInGame: true });
    xPlayer.emit('UPDATE_GAME', { isX: true, opponentName: oPlayer.username });
    oPlayer.emit('UPDATE_GAME', { isX: false, opponentName: xPlayer.username });
    io.to(gameId).emit('UPDATE_GAME', initGS);
  }
};

setInterval(matchPeople, 2000);
