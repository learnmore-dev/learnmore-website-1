import OfferClient from './OfferClient';
import offersData from '@/data/offers.json';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface OfferPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: OfferPageProps): Promise<Metadata> {
  const offer = offersData.offers.find(o => o.link === `/offer/${params.slug}`);
  if (!offer) {
    return {};
  }

  const title = `${offer.title} - Learnmore Technologies`;
  const description = `Special limited-time offer for ${offer.courseName}. Enroll today to save big and get 100% placement support.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://learnmoretech.in/offer/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://learnmoretech.in/offer/${params.slug}`,
      type: 'website',
    }
  };
}

export default function Page({ params }: OfferPageProps) {
  const offer = offersData.offers.find(o => o.link === `/offer/${params.slug}`);
  if (!offer) {
    notFound();
  }

  return <OfferClient params={params} />;
}
