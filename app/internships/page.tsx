import InternshipsPageClient from './InternshipsPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Internship Programs in Bangalore | Learnmore Technologies',
  description: 'Apply for hands-on IT internships in Bangalore. Get real-world project experience, mentor support, and certification in Python, Java, DevOps, and Data Science.',
  alternates: {
    canonical: 'https://learnmore.com/internships',
  },
};

export default function Page() {
  return <InternshipsPageClient />;
}
