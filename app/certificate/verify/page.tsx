// app/certificate/verify/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function CertificateVerifyPage() {
  const [certificateId, setCertificateId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  // Get URL parameters - Support 'verify' parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('verify') || params.get('id');
    if (id) {
      setCertificateId(id);
      verifyCertificate(id);
    }
  }, []);

  const verifyCertificate = async (id: string) => {
    setIsLoading(true);
    setError('');
    
    // Demo certificates database - Replace with your API
    const certificates: Record<string, { name: string; course: string }> = {
      'LMTO00075': {
        name: 'John Doe',
        course: 'Python Full Stack Development'
      },
      'LMTO00076': {
        name: 'Jane Smith',
        course: 'Data Science with AI'
      },
      'LMTO00077': {
        name: 'Mike Johnson',
        course: 'AWS Cloud DevOps'
      }
    };
    
    setTimeout(() => {
      if (certificates[id]) {
        setStudentName(certificates[id].name);
        setCourseName(certificates[id].course);
        setIsVerified(true);
      } else if (id) {
        setError('Certificate not found. Please check the certificate ID.');
        setIsVerified(false);
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (certificateId) {
      verifyCertificate(certificateId);
      window.history.pushState({}, '', `/certificate/verify?verify=${certificateId}`);
    } else {
      setError('Please enter a certificate ID');
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
              <i className="fas fa-certificate text-white text-3xl"></i>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Verify Your Certificate
            </h1>
            <p className="text-gray-600 max-w-md mx-auto">
              Enter your certificate ID to verify the authenticity of your certificate
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Search Box */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
              <form onSubmit={handleVerify}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Certificate ID
                    </label>
                    <div className="relative">
                      <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                      <input
                        type="text"
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                        placeholder="e.g., LMTO00075"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition uppercase"
                      />
                    </div>
                  </div>
                  <div className="md:self-end">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      {isLoading ? (
                        <><i className="fas fa-spinner fa-spin mr-2"></i>Verifying...</>
                      ) : (
                        <><i className="fas fa-check-circle mr-2"></i>Verify Certificate</>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700">{error}</p>
                </div>
              )}
            </div>

            {/* Verified Certificate - Only certificate-sample.png */}
            {isVerified && !isLoading && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Certificate Image */}
                <div className="relative">
                  <Image
                    src="/images/courses/certificate-sample.png"
                    alt="Verified Certificate"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  
                  {/* QR Code and Verify Link at bottom */}
                  <div className="absolute bottom-4 left-0 right-0 bg-white/95 backdrop-blur-sm p-3 mx-4 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center gap-2">
                      {/* QR Code */}
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <i className="fas fa-qrcode text-3xl text-gray-600"></i>
                        </div>
                        <div>
                          <p className="text-green-600 font-bold text-sm">✓ VERIFIED</p>
                          <p className="text-xs text-gray-500">Authentic Certificate</p>
                        </div>
                      </div>
                      
                      {/* Verify Link */}
                      <div className="text-center w-full">
                        <p className="text-xs text-gray-500">Verify online at:</p>
                        <a 
                          href={`https://learnmoretechnologies.info/certificate/verify?verify=${certificateId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 text-xs font-mono break-all hover:underline"
                        >
                          https://learnmoretechnologies.info/certificate/verify?verify={certificateId}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-gray-50 p-4 flex justify-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition"
                  >
                    <i className="fas fa-print mr-2"></i> Print
                  </button>
                  <Link
                    href="/"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                  >
                    <i className="fas fa-home mr-2"></i> Home
                  </Link>
                </div>
              </div>
            )}

            {/* Info Box */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-800 mb-2 text-sm">How to verify?</h3>
              <ul className="space-y-1 text-blue-700 text-xs">
                <li>• Enter your certificate ID (e.g., LMTO00075)</li>
                <li>• Click "Verify Certificate" button</li>
                <li>• Your verified certificate will be displayed</li>
                <li>• Scan QR code or use link to verify online</li>
              </ul>
            </div>

            {/* Sample IDs */}
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-xs">
                Test IDs: LMTO00075, LMTO00076, LMTO00077
              </p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @media print {
          button, .bg-blue-50, form, .mt-8 {
            display: none;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}