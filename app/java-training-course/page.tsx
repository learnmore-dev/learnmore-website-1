import { Metadata } from 'next';
import JavaTrainingClient from './JavaTrainingClient';

export const metadata: Metadata = {
  title: 'Java Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Core Java Programming Training Course in Bangalore with 100% Placement Assistance. Master Core Java, OOPs, Multithreading, Collections Framework, JDBC & MySQL.',
  keywords: [
    'Java Training Course',
    'Java Course Bangalore',
    'Core Java Training Institute',
    'Best Java Institute Bangalore',
    'LearnMore Technologies Java'
  ],
  openGraph: {
    title: 'Java Training Course in Bangalore | LearnMore Technologies',
    description: 'Master Core Java, OOPs, Collections & JDBC with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/java-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function JavaTrainingPage() {
  return <JavaTrainingClient />;
}
