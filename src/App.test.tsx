import { render, screen } from '@testing-library/react';
import App from './App';
import { test, expect } from 'vitest';

test('render hello world', () => {
  render(<App />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
