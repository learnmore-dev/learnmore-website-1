import { Metadata } from 'next';
import DataAnalyticsTrainingClient from './DataAnalyticsTrainingClient';

export const metadata: Metadata = {
  title: 'Data Analytics Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Data Analytics Course in Bangalore with 100% Placement Assistance. Learn Excel, Advanced SQL, Power BI, Tableau, Python, Pandas & Business Intelligence from industry experts.',
  keywords: [
    'Data Analytics Training Course',
    'Data Analytics Course Bangalore',
    'Power BI Training Bangalore',
    'SQL for Data Analytics',
    'Data Analyst Course with Placement',
    'Best Data Analytics Institute Bangalore',
    'LearnMore Technologies Data Analytics'
  ],
  openGraph: {
    title: 'Data Analytics Training Course in Bangalore | LearnMore Technologies',
    description: 'Master Data Analytics with 100% Placement Assistance. 4 Months Flexible Training in Excel, SQL, Power BI, Tableau & Python.',
    url: 'https://learnmoretech.in/data-analytics-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function DataAnalyticsTrainingPage() {
  return <DataAnalyticsTrainingClient />;
}
