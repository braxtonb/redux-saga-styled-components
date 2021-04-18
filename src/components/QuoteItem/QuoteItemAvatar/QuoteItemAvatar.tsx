import React from 'react';
import styled from 'styled-components';
import { deviceBreakpoints } from '../../../constants/breakpoints';

const AvatarWrapper = styled.div`
  background-color: #262c46;
  border-radius: 50%;
  border: 8px solid #262c46;
  display: flex;
  height: 75px;
  justify-content: center;
  margin-top: -37.5px;
  overflow: hidden;
  width: 75px;

  @media ${deviceBreakpoints.lg} {
    height: 150px;
    margin-top: -75px;
    width: 150px;
  }
`;

const Avatar = styled.img`
  height: 100%;
`;

interface QuoteItemAvatarProps {
  alt?: string;
  imageURL: string;
}

const QuoteItemAvatar: React.FC<QuoteItemAvatarProps> = ({ alt, imageURL }) => {
  return (
    <AvatarWrapper>
      <Avatar src={imageURL} alt={alt} />
    </AvatarWrapper>
  );
};

QuoteItemAvatar.defaultProps = {
  alt: 'Image',
};

export default QuoteItemAvatar;
