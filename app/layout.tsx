import type { Metadata } from 'next';
import './globals.css';
import { EnrollProvider } from '@/context/EnrollContext';
import Script from 'next/script';
import dynamic from 'next/dynamic';

const GlobalEnrollModal = dynamic(() => import('@/components/common/GlobalEnrollModal'), {
  ssr: false,
});

const LeadTrackerInitializer = dynamic(() => import('@/components/common/LeadTrackerInitializer'), {
  ssr: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://learnmoretech.in'),
  title: 'Learnmore Technologies - Best Software Training Institute in Bangalore',
  description: 'Learnmore Technologies offers industry-focused IT courses with hands-on practical learning, real-time projects, and dedicated placement support.',
  icons: {
    icon: '/favicon.webp?v=1',
  },
  verification: {
    google: 'googled04a108ca94ce35c',
  },
  openGraph: {
    title: 'Learnmore Technologies - Best Software Training Institute in Bangalore',
    description: 'Learnmore Technologies offers industry-focused IT courses with hands-on practical learning, real-time projects, and dedicated placement support.',
    url: 'https://learnmoretech.in',
    siteName: 'Learnmore Technologies',
    images: [
      {
        url: 'https://learnmoretech.in/logo-square.webp',
        width: 800,
        height: 800,
        alt: 'Learnmore Technologies Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learnmore Technologies - Best Software Training Institute in Bangalore',
    description: 'Learnmore Technologies offers industry-focused IT courses with hands-on practical learning, real-time projects, and dedicated placement support.',
    images: ['https://learnmoretech.in/logo-square.webp'],
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
          src="https://www.googletagmanager.com/gtag/js?id=AW-18254186493"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EFTJL2XXQC');
            gtag('config', 'AW-18254186493');
            gtag('config', 'AW-18254186493/QB5FCM3rrdYcEP2Po4BE', {
              phone_conversion_number: '+919036524555'
            });
          `}
        </Script>
      </head>
      <body>
        <EnrollProvider>
          <LeadTrackerInitializer />
          {children}
          <GlobalEnrollModal />
        </EnrollProvider>
      </body>
    </html>
  );
}