import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import { Inter, M_PLUS_2 } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const mplus2 = M_PLUS_2({
  subsets: ['latin'],
  variable: '--font-mplus2',
});

const APP_NAME = 'さいきょうPWA開発環境';
const APP_DESCRIPTION =
  'ぼくのかんがえたさいきょうのPWA開発環境です';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/icons/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
    <html
      className={clsx(inter.variable, mplus2.variable)}
      lang="ja"
    >
      <head />
      <body className="w-dvw h-dvh flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}
