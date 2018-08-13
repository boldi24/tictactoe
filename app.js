const express = require('express') ;
const path = require('path');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'dist')));

io.on('connection', client => {
  console.log('a user connected');
});

http.listen(3000, () => console.log('Example app listening on port 3000!'));
