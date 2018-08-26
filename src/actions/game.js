import { UPDATE_GAME } from './types';

export const updateGame = payload => ({
  type: UPDATE_GAME,
  payload
});

export const step = where => (dispatch, getState, socket) => {
  socket.emit('STEP', where);
};
