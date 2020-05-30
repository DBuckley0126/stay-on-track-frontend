import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import {appSagas, authenticationSagas} from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  let store = {};

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(sagaMiddleware),
  )(createStore);

  store = createStoreWithMiddleware(rootReducer, initialState);

  sagaMiddleware.run(appSagas);
  sagaMiddleware.run(authenticationSagas);

  return store;
}

const store = configureStore();

export default store;
