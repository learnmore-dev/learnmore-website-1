import { Metadata } from 'next';
import AzureTrainingClient from './AzureTrainingClient';

export const metadata: Metadata = {
  title: 'Microsoft Azure Cloud Training Course in Bangalore | 100% Placement | LearnMore Technologies',
  description: 'Join the #1 Microsoft Azure Cloud Computing & DevOps Training Course in Bangalore with 100% Placement Assistance. Learn Azure VMs, Blob Storage, VNet, Entra ID, Azure Functions, Azure DevOps & ARM/Bicep from certified Azure Solutions Architects.',
  keywords: [
    'Microsoft Azure Training Course',
    'Azure Training Course Bangalore',
    'Azure Cloud Computing Institute',
    'Azure Solutions Architect Training',
    'AZ-104 Training Course',
    'AZ-305 Training Course',
    'Azure DevOps Course with Placement',
    'Best Azure Institute Bangalore',
    'LearnMore Technologies Azure'
  ],
  openGraph: {
    title: 'Microsoft Azure Cloud Training Course in Bangalore | LearnMore Technologies',
    description: 'Master Microsoft Azure Cloud & Infrastructure with 100% Placement Assistance. Flexible Training in Azure VMs, Blob Storage, VNet, Entra ID, Azure DevOps & Security.',
    url: 'https://learnmoretech.in/azure-training-course',
    siteName: 'LearnMore Technologies',
    type: 'website',
  },
};

export default function AzureTrainingPage() {
  return <AzureTrainingClient />;
}
