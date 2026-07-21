import BlogPageClient from './BlogPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Careers, Technology Trends & Tutorials Blog | Learnmore',
  description: 'Stay ahead in the tech industry with the Learnmore Technologies blog. Articles, tutorials, and career guidance on Python, Cloud Computing, DevOps, and AI.',
  alternates: {
    canonical: 'https://learnmoretech.in/blog',
  },
};

export default function Page() {
  return <BlogPageClient />;
}
