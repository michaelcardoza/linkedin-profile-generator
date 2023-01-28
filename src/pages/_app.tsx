import type { AppProps } from 'next/app';
import { Raleway } from '@next/font/google';

import '@app/styles/globals.css';
import { DefaultLayout } from '@app/features/ui/layouts';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  style: ['normal'],
  variable: '--font-raleway',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${raleway.variable} container mx-auto px-4 font-sans`}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </main>
  );
}
