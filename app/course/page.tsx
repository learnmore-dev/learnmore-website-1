import CoursesPageClient from './CoursesPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Training & Software Certification Courses in Bangalore | Learnmore',
  description: 'Explore job-oriented software training courses at Learnmore Technologies. Hand-on training in Python Fullstack, Data Analytics, Cloud DevOps, Software Testing, and AI.',
  alternates: {
    canonical: 'https://learnmoretech.in/course',
  },
};

export default function Page() {
  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "IT Course List - Learnmore Technologies",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Python Fullstack Master Program"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Data Analytics Master Program"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cloud DevOps Master Program"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Software Testing Master Program"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Data Engineering Master Program"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Data Science with AI Master Program"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />
      <CoursesPageClient />
    </>
  );
}
