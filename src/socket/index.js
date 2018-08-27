import io from 'socket.io-client';
import { loginSuccess } from '../actions/login';
import { updateMenu } from '../actions/menu';
import { updateGame } from '../actions/game';

let dp = null;

const setupSocket = () => {
  const socket = io('http://localhost:8080');
  socket.on('LOGIN_SUCCESS', username => {
    dp(loginSuccess(username));
  });
  socket.on('UPDATE_MENU', data => {
    dp(updateMenu(data));
  });
  socket.on('UPDATE_GAME', game => {
    dp(updateGame(game));
  });
  return socket;
};

export const setDispatch = d => {
  dp = d;
};

export default setupSocket;
