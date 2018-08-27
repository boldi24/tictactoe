import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import setupSocket, { setDispatch } from '../socket';

export default preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState || {},
    compose(applyMiddleware(thunkMiddleware.withExtraArgument(setupSocket())))
  );
  setDispatch(store.dispatch);
  return store;
};
