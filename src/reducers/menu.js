import { UPDATE_MENU } from '../actions/types';

const initialState = {
  peopleWaiting: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MENU:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
