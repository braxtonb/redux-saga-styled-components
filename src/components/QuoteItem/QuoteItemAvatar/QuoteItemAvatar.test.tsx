import React from 'react';
import { render } from '@testing-library/react';
import QuoteItemAvatar, { QuoteItemAvatarProps } from './QuoteItemAvatar';

describe('QuoteItemAvatar Test', () => {
  const props: QuoteItemAvatarProps = {
    alt: 'Avatar alt',
    imageURL: 'imgSrc.jpg',
  };

  it('renders without crashing', () => {
    const { getByRole } = render(<QuoteItemAvatar {...props} />);
    const img = getByRole('img', { name: props.alt });

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', props.imageURL);
  });
});
