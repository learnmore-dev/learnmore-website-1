import { Metadata } from 'next';
import DataScienceTrainingClient from './DataScienceTrainingClient';

export const metadata: Metadata = {
  title: 'Data Science & AI Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Data Science with Machine Learning & Generative AI Training Course in Bangalore with 100% Placement Assistance. Learn Python, Statistics, Scikit-Learn, Deep Learning, NLP, LangChain & LLMs from principal data scientists.',
  keywords: [
    'Data Science Training Course',
    'Data Science Course Bangalore',
    'Data Science Institute in Marathahalli',
    'Machine Learning Course Bangalore',
    'AI and Data Science Training',
    'Generative AI Course Bangalore',
    'Best Data Science Institute Bangalore',
    'LearnMore Technologies Data Science'
  ],
  openGraph: {
    title: 'Data Science & AI Training Course in Bangalore | LearnMore Technologies',
    description: 'Master Data Science, Machine Learning, Deep Learning, NLP & Generative AI with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/data-science-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function DataScienceTrainingPage() {
  return <DataScienceTrainingClient />;
}
