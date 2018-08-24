import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import setupSocket from '../socket';

export default preloadedState =>
  createStore(
    rootReducer,
    preloadedState || {},
    compose(applyMiddleware(thunkMiddleware.withExtraArgument(setupSocket())))
  );
