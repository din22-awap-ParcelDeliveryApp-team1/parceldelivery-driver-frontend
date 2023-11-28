import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import DataContextProvider from './context/dataContext';
import LockerContextProvider from './context/lockerContext';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Parcel Delivery Driver App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LockerContextProvider>
      <DataContextProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
     </DataContextProvider>
    </LockerContextProvider> 
  )
}