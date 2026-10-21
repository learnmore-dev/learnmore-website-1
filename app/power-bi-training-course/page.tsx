import { Metadata } from 'next';
import PowerBiTrainingClient from './PowerBiTrainingClient';

export const metadata: Metadata = {
  title: 'Power BI Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Power BI & Business Intelligence Training Course in Bangalore with 100% Placement Assistance. Master Power Query, DAX, Data Modeling, Dashboards & PL-300 Exam from certified BI experts.',
  keywords: [
    'Power BI Training Course',
    'Power BI Course Bangalore',
    'Power BI Institute in Marathahalli',
    'Business Intelligence Training',
    'PL-300 Certification Training',
    'DAX Course Bangalore',
    'Best Power BI Institute Bangalore',
    'LearnMore Technologies Power BI'
  ],
  openGraph: {
    title: 'Power BI Training Course in Bangalore | LearnMore Technologies',
    description: 'Master Power BI, DAX, Power Query & Business Intelligence with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/power-bi-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function PowerBiTrainingPage() {
  return <PowerBiTrainingClient />;
}
