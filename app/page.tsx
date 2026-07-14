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
    "logo": "https://learnmore.com/logo.webp",
    "sameAs": [
      "https://www.youtube.com/@learnnmore",
      "https://www.instagram.com/learnmore_technologies/",
      "https://www.linkedin.com/company/learnmoretechnologiesbangalore/"
    ],
    "description": "Learnmore Technologies is a leading software training institute in Bangalore offering industry-focused IT courses with 100% placement support.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1480",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Learnmore Technologies",
    "url": "https://learnmore.com"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What software training courses does Learnmore Technologies offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer job-oriented professional courses including Python Fullstack Development, Data Analytics, Cloud DevOps, Software Testing, and Data Science with AI."
        }
      },
      {
        "@type": "Question",
        "name": "Does Learnmore Technologies provide 100% placement support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide dedicated placement support with regular resume building sessions, mock interviews, and direct placement drives with our hiring partners."
        }
      },
      {
        "@type": "Question",
        "name": "What is the duration of the training programs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most certification courses run between 2 to 4 months, featuring extensive hands-on laboratory sessions and live project training."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Learnmore Technologies located in Bangalore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our premium training centers are located in Marathahalli and BTM Layout, Bangalore, fully equipped with lab infrastructure."
        }
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
