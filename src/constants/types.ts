import {
  REMOVE_QUOTE_REQUEST__QUOTE,
  REMOVE_QUOTE_ERROR__QUOTE,
  REMOVE_QUOTE_SUCCESS__QUOTE,
} from '../store/Quote/quote.types';

export interface Person {
  imageURL?: string;
  name: string;
  occupation: string;
}

export interface Quote {
  id: number;
  date?: Date;
  message: string;
  person: Person;
}

// Redux

// Quote
export interface ReduxStateQuote {
  quotes: Quote[];
}

interface ReduxActionRemoveQuoteRequestQuote {
  type: typeof REMOVE_QUOTE_REQUEST__QUOTE;
  payload: number;
}

interface ReduxActionRemoveQuoteSuccessQuote {
  type: typeof REMOVE_QUOTE_SUCCESS__QUOTE;
  payload: number;
}

interface ReduxActionRemoveQuoteErrorQuote {
  type: typeof REMOVE_QUOTE_ERROR__QUOTE;
  payload?: number;
}

export type ReduxActionQuote =
  | ReduxActionRemoveQuoteRequestQuote
  | ReduxActionRemoveQuoteSuccessQuote
  | ReduxActionRemoveQuoteErrorQuote;

export interface ReduxState {
  quote: ReduxStateQuote;
}

export type ReduxAction = ReduxActionQuote;

export interface ReduxReducers {
  quote: (
    state: ReduxStateQuote | undefined,
    action: ReduxActionQuote,
  ) => ReduxStateQuote;
}
