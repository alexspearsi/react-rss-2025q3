import { render, screen, cleanup } from '@testing-library/react';
import { describe, expect, it, afterEach } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import UserProfile from './UserProfile';
import userFormReducer, { type UserState } from '../../state/form/formSlice';
import type { UserForm } from '../../validation/userFormSchema';

afterEach(() => {
  cleanup();
});

describe('Test UserProfile component', () => {
  const renderWithStore = (userState?: UserState) => {
    const store = configureStore({
      reducer: {
        userForm: userFormReducer,
      },
      preloadedState: {
        userForm: userState ?? { formData: null },
      },
    });

    return render(
      <Provider store={store}>
        <UserProfile />
      </Provider>,
    );
  };

  it('checks all the labels', () => {
    renderWithStore();

    const img = screen.getByAltText('default avatar') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('avatar.jpg');

    expect(screen.getByText(/Name:/)).toBeInTheDocument();
    expect(screen.getByText(/Gender:/)).toBeInTheDocument();
    expect(screen.getByText(/Age:/)).toBeInTheDocument();
    expect(screen.getByText(/Country:/)).toBeInTheDocument();
    expect(screen.getByText(/Email:/)).toBeInTheDocument();
    expect(screen.getByText(/Phone number:/)).toBeInTheDocument();
  });

  it('renders my data correctly', () => {
    const userData: UserForm = {
      avatar: 'my_avatar.png',
      name: 'Aliaksandr',
      gender: 'male',
      age: 26,
      country: 'Israel',
      email: 'alex@strelch.ru',
      tel: '34342234444334',
      password: 'aA1!',
      passwordRepeat: 'aA1!',
      terms: true,
    };

    renderWithStore({ formData: userData });

    const img = screen.getByAltText('user avatar') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'my_avatar.png');

    expect(screen.getByText('Aliaksandr')).toBeInTheDocument();
    expect(screen.getByText('male')).toBeInTheDocument();
    expect(screen.getByText('26')).toBeInTheDocument();
    expect(screen.getByText('Israel')).toBeInTheDocument();
    expect(screen.getByText('alex@strelch.ru')).toBeInTheDocument();
    expect(screen.getByText('34342234444334')).toBeInTheDocument();
  });
});
