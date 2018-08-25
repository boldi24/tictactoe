import { UPDATE_PEOPLEWAITING } from '../actions/types';

const initialState = {
  peopleWaiting: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PEOPLEWAITING:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
