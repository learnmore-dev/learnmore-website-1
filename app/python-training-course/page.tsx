import { Metadata } from 'next';
import PythonTrainingClient from './PythonTrainingClient';

export const metadata: Metadata = {
  title: 'Python Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Python Training Course in Bangalore with 100% Placement Assistance. Master Core & Advanced Python, Data Structures, OOPs, Web Scraping, Automation & MySQL from industry experts.',
  keywords: [
    'Python Training Course',
    'Python Course Bangalore',
    'Best Python Institute Bangalore',
    'Learn Python Programming',
    'Python Certification with Placement',
    'LearnMore Technologies Python'
  ],
  openGraph: {
    title: 'Python Training Course in Bangalore | LearnMore Technologies',
    description: 'Master Python Programming with 100% Placement Assistance. Flexible 3-Month Training in Python Basics, OOPs, Modules, File Handling & Databases.',
    url: 'https://learnmoretech.in/python-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function PythonTrainingPage() {
  return <PythonTrainingClient />;
}
