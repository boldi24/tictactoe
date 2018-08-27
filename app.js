const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const uuidv1 = require('uuid/v1');

const tictactoe = require('./server/tictactoe');

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  res.redirect('/');
});

let clientsWaiting = [];
let clientsPlaying = [];
const roomIdGameMap = new Map();

const broadCast = (title, obj) => {
  io.emit(title, obj);
};

const broadCastPeopleWaiting = () => {
  broadCast('UPDATE_MENU', { peopleWaiting: clientsWaiting.length });
};

io.on('connection', client => {
  console.log('a user connected');
  client.on('LOGIN', username => {
    console.log('User entered with name: ', username);
    client.emit('UPDATE_MENU', { peopleWaiting: clientsWaiting.length });
    client.emit('LOGIN_SUCCESS', { username });
    client.username = username;
  });

  client.on('JOIN_RANDOM', () => {
    client.emit('UPDATE_MENU', { isInGame: false, isInQueue: true });
    clientsWaiting.push(client);
    broadCastPeopleWaiting();
  });

  client.on('STEP', where => {
    const game = roomIdGameMap.get(client.gameId);
    if (!game) return;
    const newGame = tictactoe.stepGameState(game, where, client);
    if (newGame) {
      roomIdGameMap.set(client.gameId, newGame);
      io.to(client.gameId).emit('UPDATE_GAME', newGame);
    }
  });

  client.on('LEAVE_GAME', () => {
    const index = clientsPlaying.find(c => c.id === client.id);
    console.log('LEAVE_GAME');
    clientsPlaying = [...clientsPlaying.slice(0, index), ...clientsPlaying.slice(index + 1)];
    client.leave(client.gameId);
    client.emit('UPDATE_MENU', { isInGame: false, isInQueue: false });
    broadCastPeopleWaiting();
    roomIdGameMap.delete(client.gameId);
  });

  client.on('disconnect', () => {
    clientsWaiting = clientsWaiting.filter(c => c.id !== client.id);
    clientsPlaying = clientsPlaying.filter(c => c.id !== client.id);
    broadCastPeopleWaiting();
  });
});

const port = process.env.PORT || 8080;
http.listen(port, () => console.log(`Example app listening on port ${port} !`));

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
    io.to(gameId).emit('UPDATE_MENU', { isInGame: true, isInQueue: false, peopleWaiting: clientsWaiting.length });
    xPlayer.emit('UPDATE_GAME', { isX: true, opponentName: oPlayer.username });
    oPlayer.emit('UPDATE_GAME', { isX: false, opponentName: xPlayer.username });
    io.to(gameId).emit('UPDATE_GAME', initGS);
  }
};

setInterval(matchPeople, 2000);
