import { UPDATE_GAME } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_GAME:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
