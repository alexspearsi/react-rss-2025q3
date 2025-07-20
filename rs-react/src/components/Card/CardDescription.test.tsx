import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardDescription } from './CardDescription';

describe('Test CardDescription component', () => {
  const EXAMPLE_TEXT = 'Inner text';

  it('renders CardDescription component correctly', () => {
    render(<CardDescription>{EXAMPLE_TEXT}</CardDescription>);

    const element = screen.getByText(EXAMPLE_TEXT);
    expect(element).toBeInTheDocument();
  });
});
