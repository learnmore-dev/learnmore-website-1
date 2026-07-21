import FullstackCourseClient from './FullstackCourseClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Python Full Stack Developer Course in Bangalore | Learnmore',
  description: 'Master front-end and back-end development with our Python Full Stack Developer course. Real-time projects, certifications, and placement assistance.',
  alternates: {
    canonical: 'https://learnmoretech.in/fullstack-training-in-course',
  },
};

export default function Page() {
  return <FullstackCourseClient />;
}
