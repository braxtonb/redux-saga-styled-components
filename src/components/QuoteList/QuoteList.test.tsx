import React from 'react';
import { render } from '@testing-library/react';
import QuoteList, { QuoteListProps } from './QuoteList';
import { QUOTE_LIST } from '../../constants/quote-constants';

describe('QuoteList Test', () => {
  const props: QuoteListProps = {
    quotes: QUOTE_LIST,
    handleQuoteItemRemoveClick: jest.fn(),
  };

  it(`renders ${props.quotes.length} QuoteItem component(s)`, () => {
    const { getAllByRole } = render(<QuoteList {...props} />);
    const quoteItems = getAllByRole('listitem');

    expect(quoteItems).toHaveLength(props.quotes.length);
  });
});
