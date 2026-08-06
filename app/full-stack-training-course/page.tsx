import { Metadata } from 'next';
import FullStackTrainingClient from './FullStackTrainingClient';

export const metadata: Metadata = {
  title: 'Full Stack Development Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Full Stack Development Course in Bangalore with 100% Placement Assistance. Learn Python, React, Node.js, Django, MySQL, MongoDB & AWS from industry experts.',
  keywords: [
    'Full Stack Training Course',
    'Full Stack Course Bangalore',
    'Python Full Stack Training',
    'React Node Full Stack Developer',
    'Full Stack Development Course with Placement',
    'Best Full Stack Institute Bangalore',
    'LearnMore Technologies Full Stack'
  ],
  openGraph: {
    title: 'Full Stack Development Training Course in Bangalore | LearnMore Technologies',
    description: 'Master Full Stack Web Development with 100% Placement Assistance. 6 Months Flexible Training in Python, React, Node, SQL & AWS.',
    url: 'https://learnmoretech.in/full-stack-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function FullStackTrainingPage() {
  return <FullStackTrainingClient />;
}
