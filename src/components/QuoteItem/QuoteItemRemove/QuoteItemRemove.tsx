import React from 'react';
import styled from 'styled-components';

const RemoveIcon = styled.div`
  color: red;
  cursor: pointer;
  border-radius: 8px;
  font-size: 2em;
  position: absolute;
  right: 0;
  top: 0;
`;

interface QuoteItemRemoveProps {
  // functions
  handleQuoteItemRemoveClick: () => void;
}

const QuoteItemRemove: React.FC<QuoteItemRemoveProps> = ({
  handleQuoteItemRemoveClick,
}) => {
  return <RemoveIcon onClick={handleQuoteItemRemoveClick}>&times;</RemoveIcon>;
};

export default QuoteItemRemove;
