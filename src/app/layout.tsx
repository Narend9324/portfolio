import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Portfolio - Your Name',
  description: 'A modern portfolio showcasing my projects and experience',
  keywords: ['portfolio', 'developer', 'web development', 'projects', 'software engineer', 'full stack'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'Your Name - Portfolio',
    title: 'Portfolio - Your Name',
    description: 'A modern portfolio showcasing my projects and experience',
    images: [
      {
        url: '/Profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name - Portfolio Preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@yourusername',
    creator: '@yourusername',
    title: 'Portfolio - Your Name',
    description: 'A modern portfolio showcasing my projects and experience',
    images: ['/Profile.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://yourwebsite.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
