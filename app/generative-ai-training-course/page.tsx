import { Metadata } from 'next';
import GenerativeAITrainingClient from './GenerativeAITrainingClient';

export const metadata: Metadata = {
  title: 'Generative AI Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Generative AI & LLM Course in Bangalore. Master Large Language Models, LangChain, LlamaIndex, RAG, PEFT Fine-Tuning & Vector Databases with 100% Placement.',
  keywords: [
    'Generative AI Course',
    'Generative AI Training Bangalore',
    'LLM Engineering Course',
    'RAG Training Bangalore',
    'LangChain Certification',
    'LearnMore Technologies GenAI'
  ],
  openGraph: {
    title: 'Generative AI Training Course in Bangalore | LearnMore Technologies',
    description: 'Master LLMs, Prompt Engineering, RAG Architecture, Fine-Tuning & Vector DBs with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/generative-ai-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function GenerativeAIPage() {
  return <GenerativeAITrainingClient location={{ name: 'Bangalore', slug: 'bangalore' }} />;
}
