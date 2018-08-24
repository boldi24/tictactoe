import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import setupSocket, {setDispatch} from '../socket';

export default preloadedState => {
  const composeEnhancers =
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    preloadedState || {},
    composeEnhancers(applyMiddleware(thunkMiddleware.withExtraArgument(setupSocket()), logger))
  );
  setDispatch(store.dispatch);
  return store;
};
