import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from '@/components/ui/sonner';

// // Load Poppins font
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Choose font weights you need
});

export const metadata: Metadata = {
  title: 'Next App OAuth',
  description: 'Example of Next App OAuth implementation',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang='en'>
      <SessionProvider session={session}>
        <body className='font-sans' data-turbo-suppress-warning>
          <Toaster />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
