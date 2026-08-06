'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function ThankYouPage() {
  useEffect(() => {
    // Fire Google Ads Conversion Event when user lands on Thank You page
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-18254186493/QB5FCM3rrdYcEP2Po4BE',
        value: 1.0,
        currency: 'INR',
      });
      
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'thank_you_page_conversion',
        conversion_type: 'lead_enquiry',
      });
    }
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-8 md:p-12 text-center shadow-[0_20px_50px_rgba(79,70,229,0.2)]">
          {/* Animated Success Badge */}
          <div className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-500/50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-bounce">
            <i className="fas fa-check text-emerald-400 text-3xl"></i>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Thank You for <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Enquiring!</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            Your request has been received successfully. Our expert career counselor will get in touch with you within <strong className="text-white font-semibold">24 hours</strong>.
          </p>

          {/* Highlights Box */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 mb-8 text-left space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-200">
              <i className="fas fa-check-circle text-emerald-400 text-lg flex-shrink-0"></i>
              <span>Free 1-on-1 Personalized Career Counseling Session</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-200">
              <i className="fas fa-check-circle text-emerald-400 text-lg flex-shrink-0"></i>
              <span>Detailed Course Curriculum & Live Project Syllabus</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-200">
              <i className="fas fa-check-circle text-emerald-400 text-lg flex-shrink-0"></i>
              <span>100% Dedicated Placement Assistance & Interview Guidance</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-center text-sm"
            >
              <i className="fas fa-home mr-2"></i> Go to Homepage
            </Link>

            <Link
              href="/course"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-gray-200 font-semibold px-8 py-3.5 rounded-xl border border-slate-700 transition-all duration-300 text-center text-sm"
            >
              <i className="fas fa-book-open mr-2"></i> Explore All Courses
            </Link>
          </div>

          {/* Immediate Contact Options */}
          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span>Need urgent assistance?</span>
            <a href="tel:+919036524555" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1">
              <i className="fas fa-phone-alt"></i> Call +91 90365 24555
            </a>
            <a href="https://wa.me/919036524555" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
