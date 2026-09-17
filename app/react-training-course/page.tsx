import { Metadata } from 'next';
import ReactTrainingClient from './ReactTrainingClient';

export const metadata: Metadata = {
  title: 'React JS Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 React JS Training Course in Bangalore with 100% Placement Assistance. Master React 18/19, Modern JavaScript, TypeScript, Redux Toolkit, Next.js & Tailwind CSS from senior frontend architects.',
  keywords: [
    'React JS Training Course',
    'React JS Course Bangalore',
    'React Training in Marathahalli',
    'Frontend Developer Course Bangalore',
    'Redux Toolkit Training',
    'Next.js Course Bangalore',
    'Best React Institute Bangalore',
    'LearnMore Technologies React'
  ],
  openGraph: {
    title: 'React JS Training Course in Bangalore | LearnMore Technologies',
    description: 'Master React.js, TypeScript, Redux Toolkit & Next.js with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/react-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function ReactTrainingPage() {
  return <ReactTrainingClient />;
}
