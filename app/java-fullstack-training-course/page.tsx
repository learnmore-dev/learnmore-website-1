import { Metadata } from 'next';
import JavaFullStackTrainingClient from './JavaFullStackTrainingClient';

export const metadata: Metadata = {
  title: 'Java Full Stack Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Java Full Stack Development Course in Bangalore with 100% Placement Assistance. Master Core Java, Spring Boot, Microservices, Hibernate, React.js, MySQL & AWS.',
  keywords: [
    'Java Full Stack Training Course',
    'Java Fullstack Course Bangalore',
    'Spring Boot Microservices Course',
    'React Java Full Stack Institute',
    'LearnMore Technologies Java Full Stack'
  ],
  openGraph: {
    title: 'Java Full Stack Training Course in Bangalore | LearnMore Technologies',
    description: 'Master Core Java, Spring Boot, Microservices & React.js with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/java-fullstack-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function JavaFullStackPage() {
  return <JavaFullStackTrainingClient />;
}
