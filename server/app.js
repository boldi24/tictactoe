const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'dist')));

io.on('connection', client => {
  console.log('a user connected');
  client.on('LOGIN', username => {
    console.log('User entered with name: ', username);
    client.emit('LOGIN_SUCCESS', { username });
  });
});

http.listen(8080, () => console.log('Example app listening on port 8080!'));
