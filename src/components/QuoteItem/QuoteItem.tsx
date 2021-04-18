import React from 'react';
import styled from 'styled-components';
import { Quote } from '../../constants/types';
import QuoteItemAvatar from './QuoteItemAvatar/QuoteItemAvatar';
import { DEFAULT_IMAGE_URL } from '../../constants/quote-constants';
import QuoteItemMessage from './QuoteItemMessage/QuoteItemMessage';
import QuoteItemPerson from './QuoteItemPerson/QuoteItemPerson';
import { deviceBreakpoints } from '../../constants/breakpoints';
import QuoteItemRemove from './QuoteItemRemove/QuoteItemRemove';

const Wrapper = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  max-width: 700px;
  padding: 0 10px 10px 10px;

  @media ${deviceBreakpoints.lg} {
    margin: 60px 0;
  }
`;

const Header = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  width: 100%;
`;

interface QuoteItemProps {
  // variables
  quote: Quote;
  // functions
  handleQuoteItemRemoveClick: (quoteId: number) => void;
}

const QuoteItem: React.FC<QuoteItemProps> = ({
  quote,
  handleQuoteItemRemoveClick,
}) => {
  /**
   * Handlers
   */
  const _handleQuoteItemRemoveClick = () => {
    handleQuoteItemRemoveClick(quote.id);
  };

  return (
    <Wrapper>
      <Header>
        <QuoteItemAvatar
          imageURL={quote.person.imageURL ?? DEFAULT_IMAGE_URL}
        />

        <QuoteItemRemove
          handleQuoteItemRemoveClick={_handleQuoteItemRemoveClick}
        />
      </Header>

      <QuoteItemMessage message={quote.message} />

      <QuoteItemPerson person={quote.person} />
    </Wrapper>
  );
};

export default QuoteItem;
