'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnrollModal from '@/components/common/EnrollModal';
import internshipsData from '@/data/internships.json';
import siteConfig from '@/data/siteConfig.json';

export default function InternshipsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { internships } = internshipsData;
  const { contact } = siteConfig;
  const whatsappNumber = contact.phoneNumbers[0]?.fullNumber || "919514203013";
  const phoneNumber = contact.phoneNumbers[0]?.fullNumber || "919036524555";

  const benefits = [
    { icon: "fas fa-user-tie", title: "Industry Mentors", desc: "Learn directly from professionals working at top tech companies." },
    { icon: "fas fa-project-diagram", title: "Live Projects", desc: "Work on real client projects to build a professional portfolio." },
    { icon: "fas fa-certificate", title: "Internship Certificate", desc: "Receive industry-recognized certification upon completion." },
    { icon: "fas fa-briefcase", title: "Placement Assistance", desc: "Get direct referrals and interview opportunities." },
    { icon: "fas fa-hands-helping", title: "Practical Learning", desc: "Hands-on training with tools used in the industry." },
    { icon: "fas fa-calendar-alt", title: "Flexible Schedule", desc: "Choose part-time or full-time internship options." }
  ];

  const durations = [
    { badge: "Short-Term", time: "2–4 Weeks", description: "Ideal for basic exposure and a focused project.", features: ["1 Major Project", "Basic Skill Development", "Completion Certificate"], popular: false },
    { badge: "Most Popular", time: "4–8 Weeks", description: "Perfect balance of learning and practical experience.", features: ["2-3 Projects", "Intermediate Skill Level", "Industry Certificate", "Basic Placement Support"], popular: true },
    { badge: "In-Depth", time: "2–3 Months", description: "Comprehensive training with extensive project work.", features: ["4+ Projects", "Advanced Skill Level", "Premium Certificate", "Priority Placement", "Mentorship Sessions"], popular: false }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Launch Your Career with <span className="text-yellow-300">Industry-Ready</span> Internships</h1>
                <p className="text-xl mb-6 text-red-100">Real-time projects, expert mentorship, certification and placement support.</p>
                <div className="flex gap-6 mb-6">
                  <div><span className="text-3xl font-bold">95%</span><p className="text-sm">Placement Support</p></div>
                  <div><span className="text-3xl font-bold">500+</span><p className="text-sm">Live Projects</p></div>
                  <div><span className="text-3xl font-bold">50+</span><p className="text-sm">Industry Mentors</p></div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 text-gray-800 shadow-xl">
                <h3 className="text-2xl font-bold text-red-600 mb-2">Quick Enquiry</h3>
                <p className="text-gray-600 mb-4">Start your internship journey today</p>
                <form>
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:border-red-500" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:border-red-500" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:border-red-500" />
                  <select className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:border-red-500">
                    <option>Select Internship</option>
                    {internships.map((inv: any) => (<option key={inv.id}>{inv.title}</option>))}
                  </select>
                  <button onClick={() => setIsModalOpen(true)} className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition">
                    Apply Now <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                  <p className="text-center text-gray-500 text-sm mt-3">Our team will contact you within 24 hours</p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Internship Programs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Internship Programs Offered</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose from our industry-focused internship programs designed to give you real-world experience
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {internships.map((inv: any) => (
                <div key={inv.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition border border-gray-100">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 text-white text-center">
                    <i className={`${inv.icon} text-3xl`}></i>
                    <span className="block text-sm mt-1">{inv.category}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2">{inv.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{inv.description}</p>
                    <ul className="space-y-1 mb-3">
                      {inv.features.slice(0, 3).map((feature: string, fIdx: number) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-600">
                          <i className="fas fa-check-circle text-green-500 text-xs"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {inv.features.length > 3 && (
                        <li className="text-red-500 text-xs">+{inv.features.length - 3} more</li>
                      )}
                    </ul>
                    <div className="flex justify-between text-xs text-gray-500 mb-3 pt-2 border-t">
                      <span><i className="far fa-clock mr-1"></i>{inv.duration}</span>
                      <span><i className="fas fa-laptop mr-1"></i>{inv.mode}</span>
                    </div>
                    <button onClick={() => setIsModalOpen(true)} className="w-full bg-red-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Why Choose LearnMore Technologies?</h2>
            <p className="text-center text-gray-600 mb-12">We provide everything you need to launch a successful career in tech</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
                  <i className={`${benefit.icon} text-red-500 text-4xl mb-3`}></i>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Duration Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Internship Duration</h2>
            <p className="text-center text-gray-600 mb-12">Choose a duration that fits your schedule and learning goals</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {durations.map((duration, idx) => (
                <div key={idx} className={`bg-white rounded-xl shadow-lg overflow-hidden ${duration.popular ? 'border-2 border-red-500 relative' : 'border border-gray-100'}`}>
                  {duration.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6 text-center">
                    <span className="text-sm text-red-500 font-semibold">{duration.badge}</span>
                    <h3 className="text-3xl font-bold my-3">{duration.time}</h3>
                    <p className="text-gray-600 text-sm mb-4">{duration.description}</p>
                    <ul className="space-y-2 mb-6 text-left">
                      {duration.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm">
                          <i className="fas fa-check-circle text-green-500"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => setIsModalOpen(true)} className={`w-full py-2 rounded-lg font-semibold transition ${duration.popular ? 'bg-red-500 text-white hover:bg-red-600' : 'border border-red-500 text-red-500 hover:bg-red-50'}`}>
                      Choose This
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
            <p className="text-center text-gray-600 mb-12">Simple 4-step process from application to certification</p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, icon: "fas fa-file-alt", title: "Apply Online", desc: "Fill out our application form and select your preferred internship program." },
                { step: 2, icon: "fas fa-envelope-open-text", title: "Receive Offer Letter", desc: "Get your internship offer letter within 48 hours of application." },
                { step: 3, icon: "fas fa-laptop-code", title: "Start Internship", desc: "Begin your training with orientation and access to learning materials." },
                { step: 4, icon: "fas fa-award", title: "Get Certified", desc: "Complete your projects and receive industry-recognized certification." }
              ].map((step, idx) => (
                <div key={idx} className="text-center bg-white p-6 rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-sm flex items-center justify-center">{step.step}</span>
                    <i className={`${step.icon} text-red-500 text-2xl`}></i>
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Who can apply for these internships?", a: "Our internships are open to college students (any year), recent graduates, career switchers, and anyone passionate about building a career in technology." },
                { q: "Is the internship online or offline?", a: "We offer both online and offline modes. Online internships allow you to participate from anywhere, while offline internships are available at our Bangalore training center." },
                { q: "Will I receive an internship certificate?", a: "Yes, upon successful completion, you'll receive an industry-recognized certificate." },
                { q: "Are live projects included?", a: "Absolutely! Each internship program includes multiple live projects you'll work on throughout the duration." },
                { q: "Is placement assistance provided?", a: "Yes, based on your performance, we provide placement assistance including resume building, interview preparation, and referrals." }
              ].map((faq, idx) => (
                <details key={idx} className="bg-gray-50 rounded-lg shadow-md p-4 border border-gray-100">
                  <summary className="font-semibold cursor-pointer hover:text-red-500">{faq.q}</summary>
                  <p className="text-gray-600 mt-2 text-sm pt-2 border-t mt-2">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Tech Career?</h2>
            <p className="text-xl mb-8">Join 2000+ students who have transformed their careers through our internship programs</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => setIsModalOpen(true)} className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
                Apply for Internship
              </button>
              <button onClick={() => setIsModalOpen(true)} className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition">
                Talk to a Counselor
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}