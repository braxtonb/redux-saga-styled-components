import React from 'react';
import { render } from '@testing-library/react';
import QuoteItemPerson, { QuoteItemPersonProps } from './QuoteItemPerson';

describe('QuoteItemPerson Test', () => {
  const props: QuoteItemPersonProps = {
    person: {
      name: 'First Last',
      occupation: 'job',
    },
  };

  it('renders without crashing', () => {
    const { getByText } = render(<QuoteItemPerson {...props} />);
    const name = new RegExp(props.person.name, 'i');
    const occupation = new RegExp(props.person.occupation, 'i');

    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(occupation)).toBeInTheDocument();
  });
});
