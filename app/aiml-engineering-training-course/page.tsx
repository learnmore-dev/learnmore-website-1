import { Metadata } from 'next';
import AimlEngineeringTrainingClient from './AimlEngineeringTrainingClient';

export const metadata: Metadata = {
  title: 'AI/ML Engineering Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 AI/ML Engineering & MLOps Course in Bangalore. Master Machine Learning, Deep Learning, PyTorch, TensorFlow, Transformers & MLOps with 100% Placement.',
  keywords: [
    'AI ML Engineering Course',
    'Machine Learning Course Bangalore',
    'Deep Learning Training',
    'PyTorch Course Bangalore',
    'MLOps Certification Training',
    'LearnMore Technologies AI ML'
  ],
  openGraph: {
    title: 'AI/ML Engineering Course in Bangalore | LearnMore Technologies',
    description: 'Master Machine Learning, Deep Learning, PyTorch, Transformers & MLOps Cloud Deployments with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/aiml-engineering-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function AimlEngineeringPage() {
  return <AimlEngineeringTrainingClient location={{ name: 'Bangalore', slug: 'bangalore' }} />;
}
