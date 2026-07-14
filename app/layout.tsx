import type { Metadata } from 'next';
import './globals.css';
import { EnrollProvider } from '@/context/EnrollContext';
import GlobalEnrollModal from '@/components/common/GlobalEnrollModal';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Learnmore Technologies - Best Software Training Institute in Bangalore',
  description: 'Learnmore Technologies offers industry-focused IT courses with hands-on practical learning, real-time projects, and dedicated placement support.',
  icons: {
    icon: '/favicon.webp?v=1',
  },
  verification: {
    google: 'googled04a108ca94ce35c',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EFTJL2XXQC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EFTJL2XXQC');
          `}
        </Script>
      </head>
      <body>
        <EnrollProvider>
          {children}
          <GlobalEnrollModal />
        </EnrollProvider>
      </body>
    </html>
  );
}