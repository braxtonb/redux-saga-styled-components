import { takeEvery, put } from 'redux-saga/effects';
import {
  REMOVE_QUOTE_REQUEST__QUOTE,
  REMOVE_QUOTE_ERROR__QUOTE,
  REMOVE_QUOTE_SUCCESS__QUOTE,
} from './quote.types';
import { AnyAction } from 'redux';

export function* removeQuote(action: AnyAction) {
  try {
    yield put({ type: REMOVE_QUOTE_SUCCESS__QUOTE, payload: action.payload });
  } catch (error) {
    console.error(
      `[removeQuote] issue removing quote error=${JSON.stringify(
        error,
        null,
        2,
      )}`,
    );
    yield put({ type: REMOVE_QUOTE_ERROR__QUOTE, payload: action.payload });
  }
}

export function* watchRemoveQuote() {
  yield takeEvery(REMOVE_QUOTE_REQUEST__QUOTE, removeQuote);
}
