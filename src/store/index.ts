import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { ReduxState } from '../constants/types';
import { INITIAL_QUOTE_STATE } from './Quote/quote.reducer';

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const INITIAL_STATE: ReduxState = {
  quote: INITIAL_QUOTE_STATE,
};

export const initializeSagaMiddleware = () => {
  sagaMiddleware.run(rootSaga);
};

export const initializeStore = (initialState = INITIAL_STATE) => {
  return createStore(rootReducer, initialState, enhancer);
};
