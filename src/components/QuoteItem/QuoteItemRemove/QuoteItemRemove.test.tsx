import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuoteItemRemove, { QuoteItemRemoveProps } from './QuoteItemRemove';

describe('QuoteItemRemove Test', () => {
  const props: QuoteItemRemoveProps = {
    handleQuoteItemRemoveClick: jest.fn(),
  };

  it('renders without crashing', () => {
    const { getByRole } = render(<QuoteItemRemove {...props} />);
    const button = getByRole('button', { name: '×' });

    expect(button).toBeInTheDocument();
  });

  // https://testing-library.com/docs/dom-testing-library/api-events/#using-jest-function-mocks
  it('calls onClick prop when clicked', () => {
    const { getByRole } = render(<QuoteItemRemove {...props} />);
    const button = getByRole('button', { name: '×' });

    fireEvent.click(button);

    expect(props.handleQuoteItemRemoveClick).toHaveBeenCalledTimes(1);
  });
});
