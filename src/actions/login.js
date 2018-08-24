import { LOGIN_SUCCESS } from './types';

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const logIn = username => (dispatch, getState, socket) => {
  socket.emit('LOGIN', username);
};
