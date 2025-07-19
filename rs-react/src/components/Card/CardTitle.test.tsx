import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardTitle } from './CardTitle';

describe('Test CardTitle component', () => {
  const exampleText = 'Inner text';

  it('renders inner elements correctly', () => {
    render(
      <CardTitle>
        {exampleText}
      </CardTitle>
    )

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(exampleText);
    expect(heading).toHaveClass('card__title')
  })
})
