import OffersPageClient from './OffersPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Special Course Offers & Fees Discounts in Bangalore | Learnmore',
  description: 'Save on your learning journey with our limited-time training course offers, group discounts, and scholarship schemes. Check pricing details here.',
  alternates: {
    canonical: 'https://learnmoretech.in/offer',
  },
};

export default function Page() {
  return <OffersPageClient />;
}
