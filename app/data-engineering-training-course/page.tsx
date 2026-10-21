import { Metadata } from 'next';
import DataEngineeringTrainingClient from './DataEngineeringTrainingClient';

export const metadata: Metadata = {
  title: 'Data Engineering Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Data Engineering Training Course in Bangalore with 100% Placement Assistance. Master SQL, PySpark, Apache Kafka, Airflow, Snowflake & Cloud Pipelines.',
  keywords: [
    'Data Engineering Course',
    'Data Engineering Training Bangalore',
    'PySpark Course',
    'Apache Airflow Training',
    'Snowflake Training Bangalore',
    'LearnMore Technologies Data Engineering'
  ],
  openGraph: {
    title: 'Data Engineering Training Course in Bangalore | LearnMore Technologies',
    description: 'Master PySpark, Kafka, Airflow, Snowflake & Data Lakehouses with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/data-engineering-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function DataEngineeringPage() {
  return <DataEngineeringTrainingClient />;
}
