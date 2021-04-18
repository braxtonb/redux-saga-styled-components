import { put } from '@redux-saga/core/effects';
import { emptyGeneratorFn } from '../../constants/test-constants';
import { ReduxActionQuote } from '../../constants/types';
import { removeQuote } from './quote.sagas';
import { REMOVE_QUOTE_SUCCESS__QUOTE } from './quote.types';

describe('removeQuote saga test', () => {
  const action: ReduxActionQuote = {
    type: REMOVE_QUOTE_SUCCESS__QUOTE,
    payload: 1,
  };
  const generator = removeQuote(action);
  const emptyGenerator = emptyGeneratorFn();

  it(`should dispatch a ${REMOVE_QUOTE_SUCCESS__QUOTE} action`, () => {
    expect(generator.next().value).toStrictEqual(
      put({ type: REMOVE_QUOTE_SUCCESS__QUOTE, payload: action.payload }),
    );
  });

  it('should be done', () => {
    expect(generator.next()).toStrictEqual(emptyGenerator.next());
  });
});
