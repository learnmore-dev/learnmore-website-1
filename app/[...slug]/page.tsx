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
  
  return {
    title: `Best ${foundCourse.name} in ${location.name}, Bangalore | Learnmore Technologies`,
    description: `Looking for top ${foundCourse.name} in ${location.name}, Bangalore? Learnmore Technologies offers practical training, live projects, and 100% placement assistance. Enroll today!`,
    alternates: {
      canonical: `/${fullSlug}`,
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

  return <CatchAllPageClient params={params} />;
}