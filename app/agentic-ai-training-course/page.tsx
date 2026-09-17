import type { Metadata } from 'next';
import AgenticAiTrainingClient from './AgenticAiTrainingClient';

export const metadata: Metadata = {
  title: 'Agentic AI Training Course in Bangalore | LangGraph, CrewAI, AutoGen - LearnMore Technologies',
  description: 'Master Autonomous AI Agents with LangGraph, CrewAI, Microsoft AutoGen, Agentic RAG & LLMOps. 100% Placement Support & Live Real-World Capstone Projects.',
  keywords: [
    'Agentic AI Training Course Bangalore',
    'LangGraph Training Bangalore',
    'CrewAI Course',
    'AutoGen Training',
    'Autonomous AI Agents Course',
    'Generative AI Course Bangalore',
  ],
  alternates: {
    canonical: 'https://learnmoretechnologies.in/agentic-ai-training-course',
  },
  openGraph: {
    title: 'Agentic AI Training Course in Bangalore | LearnMore Technologies',
    description: 'Master Autonomous AI Agents, LangGraph, CrewAI, Agentic RAG, and LLMOps with 100% Placement Support.',
    url: 'https://learnmoretechnologies.in/agentic-ai-training-course',
    type: 'website',
  },
};

export default function AgenticAiTrainingPage() {
  return <AgenticAiTrainingClient location={{ name: 'Bangalore', slug: 'bangalore' }} />;
}
