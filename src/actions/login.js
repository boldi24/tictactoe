import { LOGIN_SUCCESS } from './types';

const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const logIn = username => dispatch => {
  console.log(username);
  dispatch(loginSuccess());
};
