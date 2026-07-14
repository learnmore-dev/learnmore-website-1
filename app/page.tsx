import HomeClient from './HomeClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learnmore Technologies - Best Software Training Institute in Bangalore',
  description: 'Join Learnmore Technologies for premium IT courses in Bangalore. 100% placement support, industry-expert mentors, and live projects in DevOps, Python, Data Science, and Testing.',
  alternates: {
    canonical: 'https://learnmore.com',
  },
};

export default function Page() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Learnmore Technologies",
    "url": "https://learnmore.com",
    "logo": "https://learnmore.com/logo.png",
    "sameAs": [
      "https://www.youtube.com/@learnnmore",
      "https://www.instagram.com/learnmore_technologies/",
      "https://www.linkedin.com/company/learnmoretechnologiesbangalore/"
    ],
    "description": "Learnmore Technologies is a leading software training institute in Bangalore offering industry-focused IT courses with 100% placement support."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Learnmore Technologies",
    "url": "https://learnmore.com"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeClient />
    </>
  );
}
