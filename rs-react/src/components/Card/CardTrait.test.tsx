import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardTrait } from './CardTrait';

describe('Test CardTrait component', () => {
  it('renders CardTrait component correctly', () => {
    render(<CardTrait type='gender' value='male' />);

    const element = screen.getByText('male');
    expect(element).toBeInTheDocument();
  });
});
