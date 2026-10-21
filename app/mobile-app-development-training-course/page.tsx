import { Metadata } from 'next';
import MobileAppDevTrainingClient from './MobileAppDevTrainingClient';

export const metadata: Metadata = {
  title: 'Mobile App Development Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Mobile App Development Course in Bangalore. Master React Native, Flutter, Dart, Firebase & App Store Deployment with 100% Placement Assistance.',
  keywords: [
    'Mobile App Development Course',
    'React Native Course Bangalore',
    'Flutter Training Bangalore',
    'Android iOS Development Course',
    'LearnMore Technologies Mobile App Dev'
  ],
  openGraph: {
    title: 'Mobile App Development Course in Bangalore | LearnMore Technologies',
    description: 'Master React Native, Flutter, Dart, Firebase & App Store Publishing with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/mobile-app-development-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function MobileAppDevPage() {
  return <MobileAppDevTrainingClient location={{ name: 'Bangalore', slug: 'bangalore' }} />;
}
