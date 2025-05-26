import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Lakshmi Rai | Software Engineer',
  description: 'Personal portfolio of Lakshmi Rai, a passionate software engineer specializing in building exceptional digital experiences.',
  keywords: 'Lakshmi Rai, Software Engineer, Web Developer, Portfolio, React, Next.js, JavaScript, TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 