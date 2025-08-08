import { describe, test, expect } from 'vitest';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { CardTitle } from './components/Card/CardTitle';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

describe('Test App component', () => {
  test('renders a message', () => {
    const EXAMPLE_TEXT = 'Hello, World!';

    const { getByText } = render(<CardTitle>{EXAMPLE_TEXT}</CardTitle>);

    const title = getByText(EXAMPLE_TEXT);

    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H2');
  });

  test('removes the loading spinner after fetching data', async () => {
        render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

    const cards = await screen.findAllByTestId('card');
    expect(cards.length).toBeGreaterThan(0);
  });
});
