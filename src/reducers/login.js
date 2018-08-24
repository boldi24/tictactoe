import { LOGIN_SUCCESS } from '../actions/types';

const initialState = {
  username: null
};

export default (state = initialState, action) => {
  switch (action) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
