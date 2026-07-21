import { notFound } from 'next/navigation';
import locationsData from '@/data/locations.json';
import CatchAllPageClient from './CatchAllPageClient';
import { courseMapping } from './courseData';
import type { Metadata } from 'next';

interface CatchAllPageProps {
  params: {
    slug: string[];
  };
}

export async function generateMetadata({ params }: CatchAllPageProps): Promise<Metadata> {
  const fullSlug = params.slug.join('-');
  
  let foundCourse = null;
  let courseKey = null;
  
  for (const key of Object.keys(courseMapping)) {
    if (fullSlug.startsWith(`${key}-training-in-`)) {
      courseKey = key;
      foundCourse = courseMapping[key as keyof typeof courseMapping];
      break;
    }
  }
  
  if (!foundCourse) {
    return {};
  }
  
  const locationPart = fullSlug.replace(`${courseKey}-training-in-`, '');
  const location = locationsData.locations.find(l => 
    l.slug === locationPart || 
    l.name.toLowerCase().replace(/\s+/g, '-') === locationPart
  );
  
  if (!location) {
    return {};
  }
  
  const title = `Best ${foundCourse.name} in ${location.name}, Bangalore | Learnmore Technologies`;
  const description = `Looking for top ${foundCourse.name} in ${location.name}, Bangalore? Learnmore Technologies offers practical training, live projects, and 100% placement assistance. Enroll today!`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${fullSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://learnmoretech.in/${fullSlug}`,
      type: 'website',
      images: [
        {
          url: 'https://learnmoretech.in/logo-square.webp',
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
      images: ['https://learnmoretech.in/logo-square.webp'],
    }
  };
}

export default function CatchAllPage({ params }: CatchAllPageProps) {
  const fullSlug = params.slug.join('-');
  
  // Quick pre-check to trigger 404 on server if course/location doesn't exist
  let foundCourse = null;
  let courseKey = null;
  
  for (const key of Object.keys(courseMapping)) {
    if (fullSlug.startsWith(`${key}-training-in-`)) {
      courseKey = key;
      foundCourse = courseMapping[key as keyof typeof courseMapping];
      break;
    }
  }
  
  if (!foundCourse) {
    notFound();
  }
  
  const locationPart = fullSlug.replace(`${courseKey}-training-in-`, '');
  const location = locationsData.locations.find(l => 
    l.slug === locationPart || 
    l.name.toLowerCase().replace(/\s+/g, '-') === locationPart
  );
  
  if (!location) {
    notFound();
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": foundCourse.name,
    "description": foundCourse.shortDesc || `Professional ${foundCourse.name} training course.`,
    "provider": {
      "@type": "Organization",
      "name": "Learnmore Technologies",
      "sameAs": "https://learnmoretech.in"
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Learnmore Technologies - ${location.name}`,
    "image": "https://learnmoretech.in/logo-square.webp",
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
    "url": `https://learnmoretech.in/location/${location.slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <CatchAllPageClient params={params} />
    </>
  );
}