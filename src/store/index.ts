import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const INITIAL_STATE = {};

export const initializeSagaMiddleware = () => {
  sagaMiddleware.run(rootSaga);
};

export const initializeStore = (initialState = INITIAL_STATE) => {
  return createStore(rootReducer, initialState, enhancer);
};
