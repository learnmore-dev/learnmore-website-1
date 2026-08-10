import { Metadata } from 'next';
import AwsTrainingClient from './AwsTrainingClient';

export const metadata: Metadata = {
  title: 'AWS Cloud Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 AWS Cloud Computing & DevOps Training Course in Bangalore with 100% Placement Assistance. Learn EC2, S3, VPC, IAM, Lambda, CloudFormation & Docker from certified AWS solution architects.',
  keywords: [
    'AWS Training Course',
    'AWS Course Bangalore',
    'AWS Cloud Computing Institute',
    'AWS Solution Architect Training',
    'AWS DevOps Course with Placement',
    'Best AWS Institute Bangalore',
    'LearnMore Technologies AWS'
  ],
  openGraph: {
    title: 'AWS Cloud Training Course in Bangalore | LearnMore Technologies',
    description: 'Master AWS Cloud & Infrastructure with 100% Placement Assistance. Flexible 4-Month Training in AWS EC2, S3, VPC, Lambda, IAM & Cloud Security.',
    url: 'https://learnmoretech.in/aws-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function AwsTrainingPage() {
  return <AwsTrainingClient />;
}
