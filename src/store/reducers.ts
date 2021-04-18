import { combineReducers } from 'redux';
import quote from './Quote/quote.reducer';

const reducers = {
  quote,
};

export default combineReducers(reducers);
