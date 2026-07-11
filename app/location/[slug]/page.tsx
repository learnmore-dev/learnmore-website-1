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

  return {
    title: `Best IT Training Institute in ${location.name}, Bangalore | Learnmore Technologies`,
    description: `Looking for top software courses in ${location.name}, Bangalore? Learnmore Technologies offers practical training in ${formattedCourses} with 100% placement assistance.`,
    alternates: {
      canonical: `/location/${location.slug}`,
    }
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = locationsData.locations.find(l => l.slug === params.slug);
  
  if (!location) {
    notFound();
  }
  
  return <LocationPageClient location={location} />;
}