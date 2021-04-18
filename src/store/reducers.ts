import { combineReducers } from 'redux';
import quote from './Quote/quote.reducer';
import { ReduxReducers } from '../constants/types';

const reducers: ReduxReducers = {
  quote,
};

export default combineReducers(reducers);
