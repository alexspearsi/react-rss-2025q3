import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardDetail } from './CardDetail';

describe('Test CardRow component', () => {
  const icon = 'creation';
  const text = 'Inner text';

  it('renders img and p tags correctly', () => {

    render (
      <CardDetail icon={icon} text={text} />
    )

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();

    const p = screen.getByRole('paragraph')
    expect(p).toContainHTML(text)
  })
})