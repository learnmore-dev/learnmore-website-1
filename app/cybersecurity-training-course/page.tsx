import type { Metadata } from 'next';
import CybersecurityTrainingClient from './CybersecurityTrainingClient';

export const metadata: Metadata = {
  title: 'Cybersecurity & Ethical Hacking Training in Bangalore | CEH, SOC, SIEM - LearnMore Technologies',
  description: 'Master Cybersecurity, Ethical Hacking, Web App Pentesting, SOC Defense & Splunk SIEM. Hands-on Virtual Cyber Range Labs & 100% Placement Assistance.',
  keywords: [
    'Cybersecurity Training in Bangalore',
    'Cybersecurity Course Marathahalli',
    'Ethical Hacking Course Bangalore',
    'SOC Analyst Training Bangalore',
    'CEH Certification Training',
    'CompTIA Security+ Course',
  ],
  alternates: {
    canonical: 'https://learnmoretechnologies.in/cybersecurity-training-course',
  },
  openGraph: {
    title: 'Cybersecurity & Ethical Hacking Course in Bangalore | LearnMore Technologies',
    description: 'Practical Cybersecurity & Ethical Hacking Course with 24/7 Virtual Cyber Range Labs, SOC Splunk Training & 100% Placement Support.',
    url: 'https://learnmoretechnologies.in/cybersecurity-training-course',
    type: 'website',
  },
};

export default function CybersecurityTrainingPage() {
  return <CybersecurityTrainingClient location={{ name: 'Bangalore', slug: 'bangalore' }} />;
}
