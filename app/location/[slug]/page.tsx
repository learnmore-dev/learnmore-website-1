import { notFound } from 'next/navigation';
import locationsData from '@/data/locations.json';
import LocationPageClient from './LocationPageClient';
import type { Metadata } from 'next';

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = locationsData.locations.find(l => l.slug === params.slug);
  if (!location) {
    return {};
  }
  
  const formattedCourses = location.courses && location.courses.length > 0
    ? location.courses.slice(0, 4).join(', ')
    : '';

  const title = `Best IT Training Institute in ${location.name}, Bangalore | Learnmore Technologies`;
  const description = `Looking for top software courses in ${location.name}, Bangalore? Learnmore Technologies offers practical training in ${formattedCourses} with 100% placement assistance.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/location/${location.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://learnmore.com/location/${location.slug}`,
      type: 'website',
      images: [
        {
          url: 'https://learnmore.com/logo-square.png',
          width: 500,
          height: 500,
          alt: 'Learnmore Technologies Logo',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://learnmore.com/logo-square.png'],
    }
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = locationsData.locations.find(l => l.slug === params.slug);
  
  if (!location) {
    notFound();
  }
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Learnmore Technologies - ${location.name}`,
    "image": "https://learnmore.com/logo-square.png",
    "telephone": location.phone || "+91 90365 24555",
    "email": location.email || "info@learnmore.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address || `Learnmore Technologies, ${location.name}`,
      "addressLocality": location.name,
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "url": `https://learnmore.com/location/${location.slug}`,
    "openingHours": "Mo-Sa 09:00-21:00, Su 10:00-18:00"
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocationPageClient location={location} />
    </>
  );
}