import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

import Container from '@/components/Layout/Container';
// import Sidebar from '@/components/Layout/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className='h-full'>
      <body className='h-full bg-slate-900'>
        <div class='min-h-screen flex flex-col'>
          <Container>{children}</Container>
          {/* <Sidebar>{children}</Sidebar> */}
        </div>
      </body>
    </html>
  );
}
