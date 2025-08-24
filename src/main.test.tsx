import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { store } from './state/store';
import { Provider } from 'react-redux';

describe('App entry point', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(
      getByText(/1st button/i) || getByText(/2nd button/i),
    ).toBeInTheDocument();
  });
});
