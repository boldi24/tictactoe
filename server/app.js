const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'dist')));

const overallState = {
  peopleWaiting: 0
};

io.on('connection', client => {
  console.log('a user connected');
  client.on('LOGIN', username => {
    console.log('User entered with name: ', username);
    client.emit('LOGIN_SUCCESS', { username });
    overallState.peopleWaiting += 1;
    io.emit('UPDATE_PEOPLEWAITING', { peopleWaiting: overallState.peopleWaiting });
  });
  client.on('disconnect', () => {
    overallState.peopleWaiting -= 1;
    io.emit('UPDATE_PEOPLEWAITING', { peopleWaiting: overallState.peopleWaiting });
  });
});

http.listen(8080, () => console.log('Example app listening on port 8080!'));
