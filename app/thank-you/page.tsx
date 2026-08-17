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
        send_to: 'AW-18254186493/uXjmCP2z8tocEP2Po4BE',
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
      <main className="min-h-[85vh] bg-slate-50 relative overflow-hidden flex items-center justify-center py-16 px-4">
        {/* Background Decorative Glow Circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-slate-200/60 relative z-10">
          {/* Animated Success Badge */}
          <div className="w-20 h-20 bg-emerald-100 border-4 border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md shadow-emerald-100">
            <i className="fas fa-check text-emerald-600 text-3xl"></i>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Thank You for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Enquiring!</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            Your enquiry has been received successfully. Our expert career counselor will get in touch with you within <strong className="text-slate-900 font-semibold">24 hours</strong>.
          </p>

          {/* Key Value Points */}
          <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-6 mb-8 text-left space-y-3.5 shadow-sm">
            <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
              <i className="fas fa-check-circle text-emerald-500 text-lg flex-shrink-0"></i>
              <span>Free 1-on-1 Personalized Career Counseling Session</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
              <i className="fas fa-check-circle text-emerald-500 text-lg flex-shrink-0"></i>
              <span>Detailed Course Curriculum & Live Project Syllabus</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
              <i className="fas fa-check-circle text-emerald-500 text-lg flex-shrink-0"></i>
              <span>100% Dedicated Placement Assistance & Interview Guidance</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 transform hover:-translate-y-0.5 text-center text-sm"
            >
              <i className="fas fa-home mr-2"></i> Go to Homepage
            </Link>

            <Link
              href="/course"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 font-bold px-8 py-3.5 rounded-xl border border-slate-300 shadow-sm transition-all duration-200 text-center text-sm"
            >
              <i className="fas fa-book-open mr-2"></i> Explore All Courses
            </Link>
          </div>

          {/* Immediate Contact Info */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <span>Need urgent assistance?</span>
            <a href="tel:+919036524555" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1.5 transition">
              <i className="fas fa-phone-alt"></i> Call +91 90365 24555
            </a>
            <a href="https://wa.me/919036524555" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1.5 transition">
              <i className="fab fa-whatsapp text-sm"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
