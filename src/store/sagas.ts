import { watchRemoveQuote } from './Quote/quote.sagas';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([watchRemoveQuote()]);
}
