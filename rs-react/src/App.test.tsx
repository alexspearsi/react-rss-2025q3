import { describe, test, expect } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { CardTitle } from './components/Card/CardTitle';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: '/about',
    element: <About />
  }
]);


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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    );

    await waitForElementToBeRemoved(() => screen.queryByTestId('spinner'));

    const cards = await screen.findAllByTestId('card');
    expect(cards.length).toBeGreaterThan(0);
  });
});
