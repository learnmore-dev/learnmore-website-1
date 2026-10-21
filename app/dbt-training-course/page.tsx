import { Metadata } from 'next';
import DbtTrainingClient from './DbtTrainingClient';

export const metadata: Metadata = {
  title: 'DBT Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 DBT (Data Build Tool) Training Course in Bangalore. Master Analytics Engineering, Jinja Macros, Incremental Models, dbt Tests & CI/CD with 100% Placement.',
  keywords: [
    'DBT Training Course',
    'dbt Course Bangalore',
    'Analytics Engineering Course',
    'dbt Certification Training',
    'dbt Cloud Training',
    'LearnMore Technologies dbt'
  ],
  openGraph: {
    title: 'DBT Training Course in Bangalore | LearnMore Technologies',
    description: 'Master dbt Core, dbt Cloud, Jinja Macros, Data Testing & Analytics Engineering with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/dbt-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function DbtPage() {
  return <DbtTrainingClient location={{ name: 'Bangalore', slug: 'bangalore' }} />;
}
