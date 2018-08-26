import { UPDATE_MENU } from './types';

export const updateMenu = payload => ({
  type: UPDATE_MENU,
  payload
});

export const joinGame = () => (dispatch, getState, socket) => {
  socket.emit('JOIN_RANDOM');
};
