import type { Metadata } from 'next';
import DigitalMarketingTrainingClient from './DigitalMarketingTrainingClient';

export const metadata: Metadata = {
  title: 'Digital Marketing Training Course in Bangalore | SEO, SEM, SMM Certification - LearnMore Technologies',
  description: 'Master Digital Marketing with SEO, Google Ads, Meta Ads, Content Marketing, Analytics & AI Tools. 100% Placement Support, Live Projects & Certifications.',
  keywords: [
    'Digital Marketing Training in Bangalore',
    'Digital Marketing Course Marathahalli',
    'SEO Training Institute Bangalore',
    'Google Ads Course',
    'Social Media Marketing Training',
    'Digital Marketing Certification Bangalore',
  ],
  alternates: {
    canonical: 'https://learnmoretechnologies.in/digital-marketing-training-course',
  },
  openGraph: {
    title: 'Digital Marketing Training Course in Bangalore | LearnMore Technologies',
    description: 'Practical Digital Marketing Course with Real Ad Spend, SEO Projects, Meta Ads & 100% Placement Assistance.',
    url: 'https://learnmoretechnologies.in/digital-marketing-training-course',
    type: 'website',
  },
};

export default function DigitalMarketingTrainingPage() {
  return <DigitalMarketingTrainingClient location="Bangalore" />;
}
