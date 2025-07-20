import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi, beforeEach } from 'vitest';
import { Header } from './Header';

describe('Header component (Search functionality)', () => {
  const SEARCH_QUERY_1 = 'Rick';
  const SEARCH_QUERY_2 = 'Morty'; 
  const SEARCH_QUERY_3 = 'Beth'; 

  beforeEach(() => {
    cleanup();
    localStorage.clear();
  })

  test('initializes input value from localStorage', () => {
    localStorage.setItem('query', SEARCH_QUERY_1);

    render (
      <Header onSearchSubmit={vi.fn()} />
    )

    const input = screen.getByPlaceholderText('Search by name...');
    expect(input).toHaveValue('Rick')
  })

  test('updates input value on user typing', async () => {
    render(
    <Header onSearchSubmit={vi.fn()} />
    );

    const input = screen.getByPlaceholderText('Search by name...');

    await userEvent.type(input, SEARCH_QUERY_2);

    expect(input).toHaveValue(SEARCH_QUERY_2);
  })

  test('calls onSearchSubmit with query', async () => {
    const mockFunction = vi.fn();

    render(<Header onSearchSubmit={mockFunction} />);
    const input = screen.getByPlaceholderText('Search by name...');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.clear(input);
    await userEvent.type(input, SEARCH_QUERY_3);
    await userEvent.click(button);

    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith(SEARCH_QUERY_3)
  })
})