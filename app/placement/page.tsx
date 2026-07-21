import PlacementPageClient from './PlacementPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '100% Placement Software Training Institute in Bangalore | Learnmore',
  description: 'Check out our latest placement records, alumni reviews, and hiring partners. Learnmore Technologies offers dedicated placement drives, resume building, and mock interviews.',
  alternates: {
    canonical: 'https://learnmoretech.in/placement',
  },
};

export default function Page() {
  return <PlacementPageClient />;
}
