import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardImage } from './CardImage';

const EXAMPLE_CHARACTER = 'Morty';

describe('Test CardImage component', () => {
  it('renders CardImage component correctly', () => {
    render(<CardImage image={EXAMPLE_CHARACTER} name={EXAMPLE_CHARACTER} />);

    const element = screen.getByRole('img', {
      name: `Picture of ${EXAMPLE_CHARACTER}`,
    });

    expect(element).toBeInTheDocument();
  });
});
