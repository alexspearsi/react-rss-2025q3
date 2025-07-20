import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CardTitle } from './components/Card/CardTitle';


describe('Test Cardtitle', () => {
  test('renders a message', () => {
    const hi = 'Hello, World!';
    const { getByText } = render(<CardTitle>{hi}</CardTitle>)

    const title = getByText(hi);
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H2');
    expect(title).toHaveClass('card__title');
  })
})