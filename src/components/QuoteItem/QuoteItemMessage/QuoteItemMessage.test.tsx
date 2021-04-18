import React from 'react';
import { render } from '@testing-library/react';
import QuoteItemMessage, { QuoteItemMessageProps } from './QuoteItemMessage';

describe('QuoteItemMessage Test', () => {
  const props: QuoteItemMessageProps = {
    message: 'The quick brown fox jumps over the lazy dog.',
  };

  it('renders without crashing', () => {
    const { getByText } = render(<QuoteItemMessage {...props} />);
    const regex = new RegExp(props.message, 'i');

    expect(getByText(regex)).toBeInTheDocument();
  });
});
