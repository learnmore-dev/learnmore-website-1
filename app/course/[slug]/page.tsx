import CoursePageClient from './CoursePageClient';
import coursesData from '@/data/courses.json';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = coursesData.courses.find(c => c.slug === params.slug);
  if (!course) {
    return {};
  }

  const title = `Best ${course.title} Course in Bangalore | Learnmore Technologies`;
  const description = `${course.shortDescription} Master ${course.title} tools like ${course.tools.slice(0, 5).join(', ')} with live projects and job support.`;
  const imageUrl = course.image ? `https://learnmore.com${course.image}` : 'https://learnmore.com/logo-square.webp';

  return {
    title,
    description,
    alternates: {
      canonical: `https://learnmore.com/course/${course.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://learnmore.com/course/${course.slug}`,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: `${course.title} Course Image`,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl]
    }
  };
}

export default function Page({ params }: CoursePageProps) {
  const course = coursesData.courses.find(c => c.slug === params.slug);
  if (!course) {
    notFound();
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.shortDescription,
    "provider": {
      "@type": "Organization",
      "name": "Learnmore Technologies",
      "sameAs": "https://learnmore.com"
    },
    "image": course.image ? `https://learnmore.com${course.image}` : "https://learnmore.com/logo-square.webp",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "248",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <CoursePageClient params={params} />
    </>
  );
}
