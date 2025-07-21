import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardDetail } from './CardDetail';

describe('Test CardDetail component', () => {
  const EXAMPLE_ICON = 'creation';
  const EXAMPLE_TEXT = 'Inner text';

  it('renders CardDetail component correctly', () => {
    render(<CardDetail icon={EXAMPLE_ICON} text={EXAMPLE_TEXT} />);

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();

    const p = screen.getByRole('paragraph');
    expect(p).toContainHTML(EXAMPLE_TEXT);
  });
});
