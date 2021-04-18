import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuoteList from './QuoteList';
import { quoteQuotesSelecor } from '../../store/Quote/quote.selectors';
import { REMOVE_QUOTE_REQUEST__QUOTE } from '../../store/Quote/quote.types';
import { ReduxActionQuote } from '../../constants/types';

const QuoteListContainer = () => {
  const quotes = useSelector(quoteQuotesSelecor);
  const dispatch = useDispatch();

  /**
   * Handlers
   */
  const _handleQuoteItemRemoveClick = (quoteId: number) => {
    const action: ReduxActionQuote = {
      type: REMOVE_QUOTE_REQUEST__QUOTE,
      payload: quoteId,
    };

    dispatch(action);
  };

  return (
    <QuoteList
      quotes={quotes}
      handleQuoteItemRemoveClick={_handleQuoteItemRemoveClick}
    />
  );
};

export default QuoteListContainer;
