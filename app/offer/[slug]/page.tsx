'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useEnroll } from '@/context/EnrollContext';
import offersData from '@/data/offers.json';
import coursesData from '@/data/courses.json';

interface OfferPageProps {
  params: {
    slug: string;
  };
}

export default function OfferPage({ params }: OfferPageProps) {
  const { openEnrollModal } = useEnroll();
  const { offers } = offersData;
  const { courses } = coursesData;
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Find offer by slug
  const offer = offers.find(o => o.link === `/offer/${params.slug}`);

  if (!offer) {
    notFound();
  }

  // Find course if this is a course-specific offer
  const relatedCourse = offer.courseSlug 
    ? courses.find(c => c.slug === offer.courseSlug)
    : null;

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Calculate savings percentage
  const savingsPercent = offer.discountAmount 
    ? offer.discountAmount 
    : (offer.discount === '25%' ? 25 : (offer.discount === '30%' ? 30 : 20));

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className={`bg-gradient-to-r ${offer.bgColor} text-white py-20`}>
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur">
              <span className="text-sm">Limited Time Offer</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{offer.title}</h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto">{offer.description}</p>
            
            {/* Discount Badge */}
            <div className="inline-block bg-white/20 rounded-2xl px-8 py-4 backdrop-blur mb-8">
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <div className="text-center">
                  <span className="text-4xl font-bold">{offer.discount}</span>
                  <span className="text-sm block">OFF</span>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div>
                  <p className="text-sm opacity-80">Use Coupon Code</p>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="bg-black/30 px-4 py-2 rounded-lg text-lg font-mono">{offer.code}</code>
                    <button
                      onClick={() => copyToClipboard(offer.code)}
                      className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition"
                    >
                      {copiedCode === offer.code ? '✓ Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Comparison (if course-specific offer) */}
            {relatedCourse && offer.originalPrice && (
              <div className="bg-white/10 rounded-2xl p-4 max-w-md mx-auto mb-8 backdrop-blur">
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <p className="text-sm opacity-80 line-through">Original Price</p>
                    <p className="text-xl font-bold">₹{offer.originalPrice.toLocaleString()}</p>
                  </div>
                  <i className="fas fa-arrow-right text-2xl"></i>
                  <div className="text-center">
                    <p className="text-sm opacity-80">Discounted Price</p>
                    <p className="text-2xl font-bold text-yellow-300">₹{offer.discountedPrice?.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-sm mt-2">You Save: <strong>₹{offer.savings?.toLocaleString()}</strong> ({savingsPercent}%)</p>
              </div>
            )}

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => openEnrollModal()}
                className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
              >
                Claim Offer Now
              </button>
              <Link
                href="/course"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition"
              >
                Browse All Courses
              </Link>
            </div>
          </div>
        </section>

        {/* Offer Details Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* What's Included */}
            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-gift text-red-500"></i>
                What's Included in This Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <span><strong>{offer.discount}</strong> discount on course fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>Free access to recorded sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>Free study materials & assignments</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>Certificate of completion included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>Placement assistance guaranteed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                    <span>24/7 mentor support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Course Details (if course-specific) */}
            {relatedCourse && (
              <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-book-open text-blue-500"></i>
                  Course Details: {relatedCourse.title}
                </h2>
                <p className="text-gray-600 mb-4">{relatedCourse.fullDescription?.substring(0, 200)}...</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <i className="fas fa-clock text-blue-500"></i>
                    <p className="text-sm font-semibold mt-1">{relatedCourse.duration}</p>
                    <p className="text-xs text-gray-500">Duration</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <i className="fas fa-chart-line text-blue-500"></i>
                    <p className="text-sm font-semibold mt-1">{relatedCourse.level}</p>
                    <p className="text-xs text-gray-500">Level</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <i className="fas fa-certificate text-blue-500"></i>
                    <p className="text-sm font-semibold mt-1">Certificate</p>
                    <p className="text-xs text-gray-500">Included</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <i className="fas fa-briefcase text-blue-500"></i>
                    <p className="text-sm font-semibold mt-1">100%</p>
                    <p className="text-xs text-gray-500">Placement</p>
                  </div>
                </div>

                <Link 
                  href={`/course/${relatedCourse.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition"
                >
                  View Full Course Details <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            )}

            {/* How to Apply */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">How to Apply This Offer?</h2>
              <div className="grid md:grid-cols-3 gap-6">
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
                  <p className="text-gray-500 text-sm">Copy the coupon code: <strong>{offer.code}</strong></p>
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
            <div className="bg-gray-100 rounded-2xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-file-contract text-gray-600"></i>
                Terms & Conditions
              </h2>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Offer valid only for new enrollments</li>
                <li>• Cannot be combined with any other offer or discount</li>
                <li>• Valid for limited period only till <strong>{offer.validTill}</strong></li>
                <li>• Applicable on {offer.applicableOn || 'selected courses'}</li>
                {offer.minEnrollment && <li>• Minimum {offer.minEnrollment} student(s) required for this offer</li>}
                <li>• Learnmore Technologies reserves the right to modify or cancel the offer</li>
                <li>• For any queries, contact our support team</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={() => openEnrollModal()}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-lg transition text-lg"
              >
                Claim Your Offer Now <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <p className="text-gray-400 text-sm mt-4">Limited seats available. Offer valid till {offer.validTill}</p>
            </div>
          </div>
        </div>

        {/* Related Offers Section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">You May Also Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {offers.filter(o => o.id !== offer.id).slice(0, 3).map((relatedOffer) => (
                <Link
                  key={relatedOffer.id}
                  href={relatedOffer.link}
                  className={`bg-gradient-to-r ${relatedOffer.bgColor} rounded-xl p-5 text-white hover:shadow-lg transition hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <i className={`${relatedOffer.icon} text-2xl`}></i>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">{relatedOffer.discount} OFF</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{relatedOffer.title}</h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">{relatedOffer.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/70">Code: {relatedOffer.code}</span>
                    <span className="text-sm">Learn More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}