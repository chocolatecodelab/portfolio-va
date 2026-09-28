import type { Metadata } from 'next';
import { fraunces, plexSans, plexMono } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nazar Gunawan — Tech-Savvy Virtual Assistant',
  description:
    'A remote assistant who builds the systems that make your work easier. Specializing in research, operations, Google Sheets data modeling, and process automation.',
  keywords: [
    'Virtual Assistant',
    'Tech-Savvy VA',
    'Operations',
    'Google Sheets Automation',
    'Google Apps Script',
    'Process Automation',
    'Remote Assistant',
    'Nazar Gunawan',
  ],
  authors: [{ name: 'Muhammad Nazar Gunawan' }],
  metadataBase: new URL('https://nazargunawan.vercel.app'),
  openGraph: {
    title: 'Nazar Gunawan — Tech-Savvy Virtual Assistant',
    description:
      'A remote assistant who builds the systems that make your work easier. Research · Operations · Data · Automation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Nazar Gunawan — Tech-Savvy Virtual Assistant',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nazar Gunawan — Tech-Savvy Virtual Assistant',
    description:
      'A remote assistant who builds the systems that make your work easier. Research · Operations · Data · Automation.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink font-body antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
