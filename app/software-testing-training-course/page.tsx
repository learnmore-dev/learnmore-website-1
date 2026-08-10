import { Metadata } from 'next';
import SoftwareTestingTrainingClient from './SoftwareTestingTrainingClient';

export const metadata: Metadata = {
  title: 'Software Testing Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Software Testing Course in Bangalore with 100% Placement Assistance. Learn Manual Testing, Selenium WebDriver, Java/Python Automation, TestNG & API Testing from industry experts.',
  keywords: [
    'Software Testing Training Course',
    'Software Testing Course Bangalore',
    'Selenium Automation Testing Institute',
    'Manual & Automation Testing Course',
    'API Testing Postman Course with Placement',
    'LearnMore Technologies Software Testing'
  ],
  openGraph: {
    title: 'Software Testing Training Course in Bangalore | LearnMore Technologies',
    description: 'Master Manual & Automation Testing with Selenium, TestNG & API Testing. 100% Placement Assistance.',
    url: 'https://learnmoretech.in/software-testing-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function SoftwareTestingTrainingPage() {
  return <SoftwareTestingTrainingClient />;
}
