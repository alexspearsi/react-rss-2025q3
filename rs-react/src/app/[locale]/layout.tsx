import "./index.css";
import { hasLocale } from 'next-intl';
import { notFound } from "next/navigation";
import { routing } from '../../i18n/routing';
import { Providers } from '../../providers/Providers';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

   const messages = await import(`../../../messages/${locale}.json`).then((m) => m.default);

  return (
    <html lang={locale}>
      <body>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  )
}