import {
  REMOVE_QUOTE_REQUEST__QUOTE,
  REMOVE_QUOTE_SUCCESS__QUOTE,
  REMOVE_QUOTE_ERROR__QUOTE,
} from './quote.types';
import { QUOTE_LIST } from '../../constants/quote-constants';
import { ReduxStateQuote, ReduxActionQuote } from '../../constants/types';

export const INITIAL_QUOTE_STATE: ReduxStateQuote = {
  quotes: QUOTE_LIST,
};

const reducer = (state = INITIAL_QUOTE_STATE, action: ReduxActionQuote) => {
  switch (action.type) {
    case REMOVE_QUOTE_REQUEST__QUOTE:
      return { ...state };
    case REMOVE_QUOTE_SUCCESS__QUOTE:
      return {
        ...state,
        quotes: state.quotes.filter((q) => q.id !== action.payload),
      };
    case REMOVE_QUOTE_ERROR__QUOTE:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
