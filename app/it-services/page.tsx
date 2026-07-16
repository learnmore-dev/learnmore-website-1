import ITServicesClient from './ITServicesClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Consultancy & Technical Solutions in Bangalore | Learnmore',
  description: 'Professional IT development, custom training workshops, and corporate cloud consultancy services provided by Learnmore Technologies team.',
  alternates: {
    canonical: 'https://learnmore.com/it-services',
  },
};

export default function Page() {
  return <ITServicesClient />;
}
