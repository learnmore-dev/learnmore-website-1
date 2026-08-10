import { Metadata } from 'next';
import DevOpsTrainingClient from './DevOpsTrainingClient';

export const metadata: Metadata = {
  title: 'DevOps Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 DevOps Training Course in Bangalore with 100% Placement Assistance. Master Linux, AWS, Docker, Kubernetes, Jenkins CI/CD, Terraform & Ansible from industry experts.',
  keywords: [
    'DevOps Training Course',
    'DevOps Course Bangalore',
    'Docker Kubernetes Training',
    'Jenkins CI CD Pipeline Course',
    'Terraform Ansible DevOps Institute',
    'LearnMore Technologies DevOps'
  ],
  openGraph: {
    title: 'DevOps Training Course in Bangalore | LearnMore Technologies',
    description: 'Master Cloud DevOps, Docker, Kubernetes, Jenkins CI/CD & Terraform with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/devops-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function DevOpsTrainingPage() {
  return <DevOpsTrainingClient />;
}
