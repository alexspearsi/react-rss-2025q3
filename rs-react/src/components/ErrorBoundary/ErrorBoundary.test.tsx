import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { ErrorBoundary } from './ErrorBoundary';
import { App } from '../../App';

describe('Test ErrorBoundary component', () => {
  const ERROR_MESSAGE = 'In this reality something went wrong';

  it('invokes error by clicking the button and shows fallback UI', async () => {
    render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );

    const button = screen.getByText('Invoke Error');
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    const fallback = screen.getByText(ERROR_MESSAGE);
    expect(fallback).toBeInTheDocument();
  });
});
