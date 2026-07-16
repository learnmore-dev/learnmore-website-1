import ServicesPageClient from './ServicesPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate IT Training & Services in Bangalore | Learnmore',
  description: 'Discover our specialized IT training services, online & offline courses, corporate bootcamps, and certification guidance for students and working professionals.',
  alternates: {
    canonical: 'https://learnmore.com/services',
  },
};

export default function Page() {
  return <ServicesPageClient />;
}
