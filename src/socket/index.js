import io from 'socket.io-client';
import { loginSuccess } from '../actions/login';
import {updatePeopleWaiting} from "../actions/menu";

let dp = null;

const setupSocket = () => {
  const socket = io('http://localhost:8080');
  socket.on('LOGIN_SUCCESS', (username) => {
    console.log('Client received: loginsuccess');
    dp(loginSuccess(username));
  });
  socket.on('UPDATE_PEOPLEWAITING', (peopleWaiting) => {
    dp(updatePeopleWaiting(peopleWaiting));
  });
  return socket;
};

export const setDispatch = d => {
  dp = d;
};

export default setupSocket;
