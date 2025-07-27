import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardDescription } from './CardDescription';

const EXAMPLE_TEXT = 'Inner text';

describe('Test CardDescription component', () => {

  it('renders CardDescription component correctly', () => {
    render(<CardDescription>{EXAMPLE_TEXT}</CardDescription>);

    const element = screen.getByText(EXAMPLE_TEXT);
    expect(element).toBeVisible();
  });
});
