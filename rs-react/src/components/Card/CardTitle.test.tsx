import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardTitle } from './CardTitle';

describe('Test CardTitle component', () => {
  const EXAMPLE_TEXT = 'Inner text';

  it('renders CardTitle component correctly', () => {
    render(<CardTitle>{EXAMPLE_TEXT}</CardTitle>);

    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(EXAMPLE_TEXT);
    expect(heading).toHaveClass('card__title');
  });
});
