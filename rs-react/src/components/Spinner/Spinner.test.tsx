import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Spinner } from './Spinner';

describe('Test Spinner component', () => {
  test('renders spinner component correctly', () => {
    render(<Spinner />);

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
