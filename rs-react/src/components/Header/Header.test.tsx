import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi, beforeEach } from 'vitest';
import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';

export function renderWithRouter(element: React.ReactElement) {
  return render(<MemoryRouter>{element}</MemoryRouter>)
}

describe('Header component (Search functionality)', () => {
  const SEARCH_QUERY_1 = 'Rick';
  const SEARCH_QUERY_2 = 'Morty';
  const SEARCH_QUERY_3 = 'Beth';

  beforeEach(() => {
    cleanup();
    localStorage.clear();
  });

  test('gets input value from localStorage', () => {
    localStorage.setItem('query', SEARCH_QUERY_1);

    renderWithRouter(<Header onSearchSubmit={vi.fn()} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Rick');
  });

  test('updates input value on user typing', async () => {
    renderWithRouter(<Header onSearchSubmit={vi.fn()} />);

    const input = screen.getByRole('textbox');

    await userEvent.type(input, SEARCH_QUERY_2);

    expect(input).toHaveValue(SEARCH_QUERY_2);
  });

  test('calls onSearchSubmit with query', async () => {
    const mockFunction = vi.fn();

    renderWithRouter(<Header onSearchSubmit={mockFunction} />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Search' });

    await userEvent.clear(input);
    await userEvent.type(input, SEARCH_QUERY_3);
    await userEvent.click(button);

    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith(SEARCH_QUERY_3);
  });
});
