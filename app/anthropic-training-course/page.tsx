import { Metadata } from 'next';
import AnthropicTrainingClient from './AnthropicTrainingClient';

export const metadata: Metadata = {
  title: 'Anthropic AI & Claude Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Anthropic AI Training Course in Bangalore. Master Claude 3.5 Sonnet, Computer Use API, Tool Use, Prompt Caching & AWS Bedrock with 100% Placement Assistance.',
  keywords: [
    'Anthropic AI Course',
    'Claude Training Bangalore',
    'Anthropic Computer Use Training',
    'Claude API Course',
    'LearnMore Technologies Anthropic'
  ],
  openGraph: {
    title: 'Anthropic AI & Claude Course in Bangalore | LearnMore Technologies',
    description: 'Master Claude 3.5 Sonnet, Computer Use API, Tool Use & Prompt Caching with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/anthropic-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function AnthropicPage() {
  return <AnthropicTrainingClient location={{ name: 'Bangalore', slug: 'bangalore' }} />;
}
