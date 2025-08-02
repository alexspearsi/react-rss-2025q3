import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from './About';

describe('About component', () => {
  it('renders About component correctly', () => {
    render(<About />);

    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/role/i)).toBeInTheDocument();
    expect(screen.getByText(/experience/i)).toBeInTheDocument();
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
    expect(screen.getByText(/RS School React course/i)).toBeInTheDocument();

    const link = screen.getByRole('link', { name: 'Rolling Scope School' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://rs.school/');
    expect(link).toHaveAttribute('target', '_blank');
  });
});