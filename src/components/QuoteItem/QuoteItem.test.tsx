import React from 'react';
import { render } from '@testing-library/react';
import QuoteItem, { QuoteItemProps } from './QuoteItem';
import { QUOTE_LIST } from '../../constants/quote-constants';

describe('QuoteItem Test', () => {
  const props: QuoteItemProps = {
    quote: QUOTE_LIST[0],
    handleQuoteItemRemoveClick: jest.fn(),
  };

  it('renders without crashing', () => {
    const { getByRole, getByText } = render(<QuoteItem {...props} />);
    // quote item avatar
    const avatar = getByRole('img', { name: props.quote.person.name });
    // quote item remove
    const removeButton = getByRole('button', { name: '×' });
    // quote item message
    const messageRegex = new RegExp(props.quote.message, 'i');
    // quote item person
    const name = new RegExp(props.quote.person.name, 'i');
    const occupation = new RegExp(props.quote.person.occupation, 'i');

    expect(avatar).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
    expect(getByText(messageRegex)).toBeInTheDocument();
    expect(getByText(messageRegex)).toBeInTheDocument();
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(occupation)).toBeInTheDocument();
  });
});
