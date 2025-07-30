import './index.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About/About';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: '/about',
    element: <About />
  }
]);


ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
)