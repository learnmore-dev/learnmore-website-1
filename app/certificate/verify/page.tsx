import CertificateVerifyClient from './CertificateVerifyClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verify Student Certification Online | Learnmore Technologies',
  description: 'Validate and verify course completion certificates issued by Learnmore Technologies. Secure credential authentication lookup portal.',
  alternates: {
    canonical: 'https://learnmoretech.in/certificate/verify',
  },
};

export default function Page() {
  return <CertificateVerifyClient />;
}
