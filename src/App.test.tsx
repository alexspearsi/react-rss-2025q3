import { render, screen } from '@testing-library/react';
import App from './App';
import { test, expect } from 'vitest';
import { Provider } from 'react-redux';
import { store } from './state/store';

test('render hello world', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(screen.getByText(/user's registration/i)).toBeInTheDocument();
});
