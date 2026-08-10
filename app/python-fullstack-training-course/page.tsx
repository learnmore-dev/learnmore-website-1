import { Metadata } from 'next';
import PythonFullStackTrainingClient from './PythonFullStackTrainingClient';

export const metadata: Metadata = {
  title: 'Python Full Stack Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Python Full Stack Development Course in Bangalore with 100% Placement Assistance. Master Python, Django, React.js, REST APIs, PostgreSQL & AWS.',
  keywords: [
    'Python Full Stack Training Course',
    'Python Fullstack Course Bangalore',
    'Django React Full Stack Developer',
    'Best Python Full Stack Institute',
    'LearnMore Technologies Python Full Stack'
  ],
  openGraph: {
    title: 'Python Full Stack Training Course in Bangalore | LearnMore Technologies',
    description: 'Master Python, Django Framework, React.js, REST APIs & Cloud Deployment with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/python-fullstack-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function PythonFullStackPage() {
  return <PythonFullStackTrainingClient />;
}
