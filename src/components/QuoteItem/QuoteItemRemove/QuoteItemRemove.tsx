import React from 'react';
import styled from 'styled-components';

const RemoveIcon = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 8px;
  color: red;
  cursor: pointer;
  font-size: 2em;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;

  &:focus {
    outline: none;
  }
`;

export interface QuoteItemRemoveProps {
  // functions
  handleQuoteItemRemoveClick: () => void;
}

const QuoteItemRemove: React.FC<QuoteItemRemoveProps> = ({
  handleQuoteItemRemoveClick,
}) => {
  return <RemoveIcon onClick={handleQuoteItemRemoveClick}>&times;</RemoveIcon>;
};

export default QuoteItemRemove;
