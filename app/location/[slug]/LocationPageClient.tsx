'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnrollModal from '@/components/common/EnrollModal';

interface LocationPageClientProps {
  location: {
    id: number;
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
    courses?: string[];
    mapUrl?: string;
    description?: string;
    timings?: string;
    country?: string;
    continent?: string;
    timezone?: string;
    currency?: string;
  };
}

export default function LocationPageClient({ location }: LocationPageClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const coursesList = location.courses || [];

  const faqs = [
    { q: `Which courses are offered at the ${location.name} center?`, a: `We offer all of our major programs at ${location.name}, including Python Fullstack, Data Analytics, Cloud DevOps, Data Science, and Software Testing.` },
    { q: `What are the timings of the ${location.name} center?`, a: `Our center is open from Monday to Saturday, 9:00 AM to 9:00 PM, and on Sundays from 10:00 AM to 6:00 PM. Batch timings are flexible with weekday and weekend slots.` },
    { q: `Is parking available at the ${location.name} center?`, a: `Yes, we have dedicated parking space available for both two-wheelers and four-wheelers for students visiting our ${location.name} center.` },
    { q: `Do you provide placement assistance from this center?`, a: `Yes, Learnmore Technologies provides 100% placement support, recruitment drives, mock interviews, and resume building sessions to all students enrolled at the ${location.name} center.` }
  ];

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setLeadForm({ name: '', email: '', phone: '', course: '', message: '' });
    }, 4000);
  };

  const mapQuery = location.address
    ? `${location.address}`
    : `Learnmore Technologies, ${location.name}, Bangalore, Karnataka`;

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link href="/location" className="inline-flex items-center gap-2 text-red-600 mb-6 font-semibold hover:text-red-700 hover:translate-x-[-4px] transition-all">
            <i className="fas fa-arrow-left"></i> Back to All Locations
          </Link>
          
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-y-12 translate-x-12">
                <i className="fas fa-map-marker-alt text-[200px]"></i>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                  <i className="fas fa-map-marker-alt text-3xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{location.name}</h1>
                  <p className="text-red-100 font-medium tracking-wide">Premium Training Hub</p>
                </div>
              </div>
            </div>
            
            {/* Details */}
            <div className="p-6 md:p-10">
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Center</h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {location.description || `Our ${location.name} center offers world-class IT training with state-of-the-art facilities, expert instructors, and hands-on laboratory sessions.`}
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-[0_5px_15px_rgba(0,0,0,0.01)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.04)] transition-all duration-300">
                  <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                    <i className="fas fa-location-dot text-red-500"></i> Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{location.address || `Coming soon in ${location.name}`}</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-[0_5px_15px_rgba(0,0,0,0.01)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.04)] transition-all duration-300">
                  <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                    <i className="fas fa-clock text-red-500"></i> Timings
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{location.timings || 'Mon-Sat: 9:00 AM - 9:00 PM, Sun: 10:00 AM - 6:00 PM'}</p>
                </div>
              </div>
              
              {/* Contact Info (Quick Link Icons) */}
              <div className="grid md:grid-cols-2 gap-6 mb-8 border-b pb-8 border-gray-100">
                <div className="flex items-center gap-4 bg-gray-50/50 rounded-xl p-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-lg shrink-0">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">Call Our Counselor</h3>
                    <a href={`tel:${location.phone || '+919036524555'}`} className="text-gray-600 hover:text-red-500 transition-colors font-medium">
                      {location.phone || '+91 90365 24555'}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50/50 rounded-xl p-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-lg shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">Support Email</h3>
                    <a href={`mailto:${location.email || 'info@learnmore.com'}`} className="text-gray-600 hover:text-red-500 transition-colors font-medium">
                      {location.email || 'info@learnmore.com'}
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Courses Available */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i className="fas fa-graduation-cap text-red-500"></i> Popular Courses Here
                </h2>
                {coursesList && coursesList.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {coursesList.map((course: string, index: number) => {
                      const slug = course.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
                      return (
                        <Link
                          key={index}
                          href={`/course/${slug}`}
                          className="bg-red-50 text-red-600 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-100 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                        >
                          {course}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-gray-500">Courses details coming soon. Contact us for more information.</p>
                )}
              </div>

              {/* Map Embed Section */}
              <div className="mb-10 border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i className="fas fa-map-marked-alt text-red-500"></i> Interactive Map Direction
                </h2>
                <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-md border border-gray-100">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Learnmore Technologies ${location.name} Map`}
                  ></iframe>
                </div>
              </div>

              {/* Inquiry & Lead generation Form */}
              <div className="mb-10 bg-gray-50/50 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center md:text-left flex items-center gap-2">
                  <i className="fas fa-paper-plane text-red-500"></i> Quick Inquiry Form
                </h2>
                <p className="text-gray-500 text-sm mb-6 text-center md:text-left">
                  Have questions? Submit your details and our training advisor will call you back within 15 minutes.
                </p>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                      <i className="fas fa-check"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-1">Inquiry Submitted Successfully!</h3>
                    <p className="text-green-700">Thank you. Our counselor will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                          placeholder="Your Name"
                          value={leadForm.name}
                          onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                          placeholder="Your Mobile Number"
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                          placeholder="example@mail.com"
                          value={leadForm.email}
                          onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Select Course</label>
                        <select
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                          value={leadForm.course}
                          onChange={(e) => setLeadForm({ ...leadForm, course: e.target.value })}
                        >
                          <option value="">-- Choose Course --</option>
                          {coursesList.map((course: string, idx: number) => (
                            <option key={idx} value={course}>{course}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
                      <textarea
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                        rows={3}
                        placeholder="Any specific questions or batch preference..."
                        value={leadForm.message}
                        onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl hover:shadow-[0_4px_20px_rgba(79,70,229,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-md"
                    >
                      Request Callback
                    </button>
                  </form>
                )}
              </div>

              {/* FAQs Section */}
              <div className="mb-8 border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <i className="fas fa-question-circle text-red-500"></i> Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                      <button
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full px-5 py-4 text-left font-bold text-gray-800 flex justify-between items-center gap-4 hover:bg-gray-50 transition"
                      >
                        <span>{faq.q}</span>
                        <i className={`fas fa-chevron-down text-gray-400 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-red-500' : ''}`}></i>
                      </button>
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === idx ? 'max-h-40 border-t border-gray-50 p-5' : 'max-h-0'}`}>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enroll CTA */}
              <div className="mt-8 bg-gradient-to-r from-indigo-50/50 via-blue-50/30 to-indigo-50/40 rounded-2xl p-8 text-center border border-indigo-100/60">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Want to join us at {location.name}?</h3>
              <p className="text-gray-600 mb-6">Visit our center or contact us to book a free demo class with our subject matter experts.</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-[0_4px_20px_rgba(79,70,229,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
                >
                  Book Free Demo
                </button>
                <a 
                  href={`tel:${location.phone || '+919036524555'}`} 
                  className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition shadow-sm"
                >
                  <i className="fas fa-phone mr-1 text-indigo-600"></i> Call Now
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
