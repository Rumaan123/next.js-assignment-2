import './globals.css'; // Import the global CSS file
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'My Website',
  description: 'Description of my website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        >
        <Header/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}
