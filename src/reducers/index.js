import { combineReducers } from 'redux';
import login from './login';
import menu from './menu';
import game from './game';

export default combineReducers({
  login,
  menu,
  game
});
