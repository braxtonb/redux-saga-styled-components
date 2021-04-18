import React from 'react';
import styled from 'styled-components';
import { deviceBreakpoints } from '../../../constants/breakpoints';

const Message = styled.p`
  font-size: 1.1em;
  text-align: center;

  @media ${deviceBreakpoints.lg} {
    font-size: 1.5em;
  }
`;

export interface QuoteItemMessageProps {
  message: string;
}

const QuoteItemMessage: React.FC<QuoteItemMessageProps> = ({ message }) => {
  return <Message>"{message}"</Message>;
};

export default QuoteItemMessage;
