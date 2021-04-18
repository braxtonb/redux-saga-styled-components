import React from 'react'
import styled from 'styled-components';
import { Person } from '../../../constants/types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

const PersonName = styled.p`
  font-size: 1em;
  font-weight: 500;
  margin: 5px 0;
  text-align: center;
  text-transform: uppercase;
  `;

  const PersonOccupation = styled.p`
  color: #777;
  font-size: .7em;
  font-weight: 500;
  margin: 5px 0;
  text-align: center;
  text-transform: uppercase;
`;

interface QuoteItemPersonProps {
  person: Person;
}

const QuoteItemPerson: React.FC<QuoteItemPersonProps> = ({ person }) => {
  return (
    <Wrapper>
      <PersonName>
        {person.name}
      </PersonName>

      <PersonOccupation>
        {person.occupation}
      </PersonOccupation>
    </Wrapper>
  )
}

export default QuoteItemPerson
