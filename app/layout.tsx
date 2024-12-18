import type { Metadata } from 'next';
import { Inter, Fira_Mono } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import { cn } from '@/lib/utils';

// Inter font (default)
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

// Fira Mono font (monoscoped)
const firaMono = Fira_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-fira-mono',
});

export const metadata: Metadata = {
  title: 'Ian Wanjira - Portfolio',
  description: 'A website portfolio for Ian Wanjira.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen font-sans antialiased',
          inter.variable,
          firaMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
