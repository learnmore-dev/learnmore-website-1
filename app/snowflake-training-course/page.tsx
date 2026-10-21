import { Metadata } from 'next';
import SnowflakeTrainingClient from './SnowflakeTrainingClient';

export const metadata: Metadata = {
  title: 'Snowflake Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Snowflake Training Course in Bangalore with 100% Placement. Master Snowflake Architecture, Snowpipe, Snowpark, Streams & Tasks, and SnowPro Certification.',
  keywords: [
    'Snowflake Training Course',
    'Snowflake Course Bangalore',
    'SnowPro Certification Training',
    'Snowpark Training',
    'Snowpipe Course Bangalore',
    'LearnMore Technologies Snowflake'
  ],
  openGraph: {
    title: 'Snowflake Training Course in Bangalore | LearnMore Technologies',
    description: 'Master Snowflake Architecture, SnowSQL, Snowpipe, Snowpark & SnowPro Certification with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/snowflake-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function SnowflakePage() {
  return <SnowflakeTrainingClient location={{ name: 'Bangalore', slug: 'bangalore' }} />;
}
