import { Metadata } from 'next';
import SapTrainingClient from './SapTrainingClient';

export const metadata: Metadata = {
  title: 'SAP Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 SAP Training Course in Bangalore. Master SAP S/4HANA, SAP FICO, SAP MM, SAP SD & SAP ABAP with 24/7 Server Access & 100% Placement Assistance.',
  keywords: [
    'SAP Training Course',
    'SAP Course Bangalore',
    'SAP FICO Training',
    'SAP MM Course Bangalore',
    'SAP ABAP Certification',
    'LearnMore Technologies SAP'
  ],
  openGraph: {
    title: 'SAP Training Course in Bangalore | LearnMore Technologies',
    description: 'Master SAP S/4HANA ERP, FICO, MM, SD & ABAP Programming with 100% Placement Assistance.',
    url: 'https://learnmoretech.in/sap-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function SapPage() {
  return <SapTrainingClient location={{ name: 'Bangalore', slug: 'bangalore' }} />;
}
