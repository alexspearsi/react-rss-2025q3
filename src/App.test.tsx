import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';
import { store } from './state/store';
import { Provider } from 'react-redux';

describe('App entry point', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
