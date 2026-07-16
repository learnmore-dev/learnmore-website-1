'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useEnroll } from '@/context/EnrollContext';
import offersData from '@/data/offers.json';

export default function OffersPage() {
  const { openEnrollModal } = useEnroll();
  const { offers } = offersData;
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Exclusive <span className="text-red-500">Offers & Discounts</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Grab the best deals on our training programs. Limited time offers available!
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className={`bg-gradient-to-r ${offer.bgColor} rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-white`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                      <i className={`${offer.icon} text-3xl`}></i>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold">{offer.discount}</span>
                      <span className="text-sm block">OFF</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{offer.description}</p>
                  
                  <div className="bg-white/20 rounded-lg p-3 mb-4 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Coupon Code:</span>
                      <div className="flex items-center gap-2">
                        <code className="bg-black/30 px-3 py-1 rounded text-sm font-mono">{offer.code}</code>
                        <button
                          onClick={() => copyToClipboard(offer.code)}
                          className="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs transition"
                        >
                          {copiedCode === offer.code ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <i className="far fa-calendar-alt"></i>
                      Valid till: {offer.validTill}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => openEnrollModal()}
                    className="w-full bg-white text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* How to Apply Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-center mb-8">How to Apply Offers?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-500 font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Choose Your Course</h3>
                <p className="text-gray-500 text-sm">Select the course you want to enroll in</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-500 font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Copy Coupon Code</h3>
                <p className="text-gray-500 text-sm">Copy the coupon code from any offer</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-500 font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Apply at Enrollment</h3>
                <p className="text-gray-500 text-sm">Use the code while enrolling to get discount</p>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="mt-8 text-center text-gray-400 text-xs">
            <p>* Terms and conditions apply. Offers cannot be combined with other discounts.</p>
            <p>* Valid only for new enrollments.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}