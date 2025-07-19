import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardDescription } from './CardDescription';

describe('Test CardDescription component', () => {
  const exampleText = 'Inner text';

  it ('renders inner elements correctly', () => {
    render(
      <CardDescription>
        {exampleText}
      </CardDescription>
    )

    const element = screen.getByText(exampleText);
    expect(element).toBeInTheDocument();
  })
})