import React from 'react';
import styled from 'styled-components';
import QuoteItem from '../QuoteItem';
import { Quote } from '../../constants/types';
import { deviceBreakpoints } from '../../constants/breakpoints';

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  margin: 10px 0;

  @media ${deviceBreakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }

  @media ${deviceBreakpoints.xl} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

interface QuoteListProps {
  // variables
  quotes: Quote[];
  // functions
  handleQuoteItemRemoveClick: (quoteId: number) => void;
}

const QuoteList: React.FC<QuoteListProps> = ({
  quotes,
  handleQuoteItemRemoveClick,
}) => {
  return (
    <Wrapper>
      {quotes.map((q) => (
        <QuoteItem
          key={q.person.name}
          quote={q}
          handleQuoteItemRemoveClick={handleQuoteItemRemoveClick}
        />
      ))}
    </Wrapper>
  );
};

export default QuoteList;
