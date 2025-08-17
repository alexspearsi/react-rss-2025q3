'use client';

import { NextIntlClientProvider } from 'next-intl';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import React from 'react';

type Props = {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, string>;
}

export function Providers({ children, locale, messages }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Provider store={store}>{children}</Provider>
    </NextIntlClientProvider>
  )
}