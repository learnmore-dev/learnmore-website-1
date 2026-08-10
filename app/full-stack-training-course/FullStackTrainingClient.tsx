'use client';
// Full Stack Training Course Client Component

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StickyMobileCTA from '@/components/common/StickyMobileCTA';
import BatchUrgencyBanner from '@/components/common/BatchUrgencyBanner';
import CourseComparisonTable from '@/components/common/CourseComparisonTable';
import UpcomingBatchSchedule from '@/components/common/UpcomingBatchSchedule';
import RecentPlacementsSection from '@/components/common/RecentPlacementsSection';
import { useEnroll } from '@/context/EnrollContext';

interface FullStackTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function FullStackTrainingClient({ location }: FullStackTrainingClientProps = {}) {
  const { openEnrollModal } = useEnroll();
  const [activeModule, setActiveModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const locName = location?.name || 'Bangalore';

  const [inlineForm, setInlineForm] = useState({
    name: '',
    phone: '',
    email: '',
    trainingMode: 'Yes, am Interested in Online Training',
    city: location?.name || 'Select Your City',
    message: ''
  });
  const [isInlineSubmitting, setIsInlineSubmitting] = useState(false);

  const handleInlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsInlineSubmitting(true);
    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inlineForm.name,
          email: inlineForm.email,
          phone: inlineForm.phone,
          program: 'Full Stack Development Master Program',
          trainingMode: inlineForm.trainingMode,
          city: inlineForm.city,
          message: inlineForm.message
        })
      });
      if (res.ok) {
        window.location.href = '/thank-you';
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsInlineSubmitting(false);
    }
  };

  const toggleModule = (index: number) => {
    setActiveModule(activeModule === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const syllabusModules = [
    {
      title: 'Module 1: Web Foundations & Responsive UI (HTML5, CSS3, Bootstrap)',
      topics: [
        'HTML5 Semantic Elements, Forms & Media Tags',
        'CSS3 Flexbox, Grid, Custom Properties & Animations',
        'Bootstrap 5 Grid System & Modern UI Components',
        'Tailwind CSS Integration & Mobile-First Responsive Design',
        'Cross-Browser Compatibility & Accessibility (a11y)',
        'Live Project: Responsive Portfolio & Corporate Landing Page'
      ]
    },
    {
      title: 'Module 2: Advanced JavaScript (ES6+) & DOM Engineering',
      topics: [
        'JavaScript Fundamentals, Variables, Data Structures & Scope',
        'Functions, Arrow Functions, Closures & Higher-Order Functions',
        'DOM Manipulation, Event Bubbling & Dynamic Web Interactivity',
        'Asynchronous JS: Callbacks, Promises & Async/Await',
        'Fetch API, Axios & RESTful JSON Data Consumption',
        'Object-Oriented Programming (OOP) & ES6 Modules'
      ]
    },
    {
      title: 'Module 3: Frontend Development with React.js & State Management',
      topics: [
        'React Architecture, JSX & Virtual DOM Core Concepts',
        'Functional Components, Props, State & Lifecycle Hooks',
        'React Hooks: useState, useEffect, useMemo, useCallback, useRef',
        'Global State Management: Context API & Redux Toolkit',
        'React Router DOM v6 Navigation & Dynamic Routing',
        'Live Project: Full-Featured E-Commerce Frontend Application'
      ]
    },
    {
      title: 'Module 4: Backend API Engineering (Python / Django or Node.js & Express)',
      topics: [
        'Backend Fundamentals: Client-Server Architecture & HTTP Protocol',
        'Python Programming: Core Data Types, OOP & Package Management',
        'Django Web Framework: MVT Pattern, ORM & Admin Console',
        'Django REST Framework (DRF): Serializers, ViewSets & JWT Auth',
        'Node.js & Express.js Alternative: Middleware, Routing & Controllers',
        'RESTful API Security, Input Validation & Error Handling'
      ]
    },
    {
      title: 'Module 5: Database Architecture & Management (SQL, PostgreSQL & MongoDB)',
      topics: [
        'Relational Database Concepts (RDBMS) & Normalization (1NF - 3NF)',
        'SQL Queries: SELECT, JOINs, Group By, Subqueries & Indexes',
        'PostgreSQL & MySQL Database Administration & ORM Integration',
        'NoSQL Databases: MongoDB Schema Design, Collections & Aggregations',
        'Database Migrations, Seeding & Data Persistence Strategies',
        'Database Optimization, Query Performance Tuning & Security'
      ]
    },
    {
      title: 'Module 6: Version Control, Cloud Deployment & DevOps (Git, GitHub, AWS)',
      topics: [
        'Git Version Control: Branching, Merging, Rebase & Pull Requests',
        'GitHub Collaboration, Issue Tracking & Agile Workflows',
        'Containerization Basics: Dockerfile & Docker Compose Overview',
        'Cloud Hosting & Deployment on AWS EC2, Vercel & Render',
        'Continuous Integration & Continuous Deployment (CI/CD) Pipelines',
        'Capstone Capstone Project: End-to-End Full Stack Web Application Deployment'
      ]
    }
  ];

  const hiringCompanies = [
    { name: 'Accenture', logo: '/images/companies/accenture.webp' },
    { name: 'TCS', logo: '/images/companies/tcs.webp' },
    { name: 'Infosys', logo: '/images/companies/infosys.webp' },
    { name: 'Wipro', logo: '/images/companies/wipro.webp' },
    { name: 'Cognizant', logo: '/images/companies/cognizant.webp' },
    { name: 'IBM', logo: '/images/companies/ibm.webp' },
    { name: 'Amazon', logo: '/images/companies/amazon.webp' },
    { name: 'Microsoft', logo: '/images/companies/microsoft.webp' }
  ];

  const faqs = [
    {
      q: 'Why enroll at LearnMore Technologies for Full Stack Developer Training?',
      a: 'LearnMore Technologies is recognized as the Top Full Stack Training Institute. Each trainer at our institute is an active industry expert with more than ten years of experience. The Full Stack Developer course schedule is flexible, with interactive live projects, hands-on lab sessions, 100% placement assistance, and lifetime access to course materials.'
    },
    {
      q: 'What is the average salary of a fresher Full Stack Developer?',
      a: 'The average salary for a fresher Full Stack Developer in India ranges from ₹4.5 LPA to ₹8.5 LPA, depending on technical proficiency, problem-solving skills, and capstone project portfolio. Experienced Full Stack Engineers frequently earn between ₹12 LPA to ₹25+ LPA.'
    },
    {
      q: 'Is Full Stack Development easy for beginners and non-IT background students?',
      a: 'Yes, Full Stack Web Development is structured to be beginner-friendly. We begin with core fundamentals like HTML5, CSS3, and JavaScript before advancing to React.js, Node.js, Python, and SQL/NoSQL databases. Over 40% of our successful alumni started from non-technical backgrounds.'
    },
    {
      q: 'Is it easy to get a job after learning Full Stack Web Development?',
      a: 'With modern IT companies increasingly preferring versatile engineers over single-stack developers, Full Stack Developers are in extremely high demand. Our dedicated placement team provides resume building, mock technical interviews, GitHub portfolio reviews, and direct interview scheduling with top MNC hiring partners.'
    },
    {
      q: 'What are the modes of training for Full Stack Developer Training Course in LearnMore Technologies?',
      a: 'We offer three flexible learning modes: 1) On-site Interactive Classroom Training at our state-of-the-art Bangalore centers (Marathahalli & BTM Layout), 2) Instructor-Led Live Online Interactive Batches with real-time doubt clearing, and 3) Weekend Batches tailored for working professionals.'
    },
    {
      q: 'Does LearnMore Technologies offer 100% Placement Assistance?',
      a: 'Yes, LearnMore Technologies offers 100% Placement Assistance. We maintain active hiring tie-ups with 300+ leading IT MNCs, product companies, and fast-growing tech startups.'
    },
    {
      q: 'What are the job roles available after Full Stack Training?',
      a: 'After completing our certification, candidates are eligible for diverse job profiles including Full Stack Engineer, Frontend Developer, React Specialist, Backend Developer, Python/Django Developer, Node.js Architect, REST API Engineer, and Software Development Engineer (SDE).'
    },
    {
      q: 'How long is the certification valid in India?',
      a: 'The ISO 9001:2015 Certified Full Stack Professional Certification issued by LearnMore Technologies is valid for life across India and internationally.'
    }
  ];

  const testimonials = [
    {
      name: 'Rohan Verma',
      role: 'Full Stack Engineer at Accenture',
      package: '6.5 LPA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'The Full Stack Training at LearnMore Technologies gave me hands-on project exposure in Python, React, and MySQL. The placement team arranged 5 interviews within 3 weeks of completion!'
    },
    {
      name: 'Priya Sharma',
      role: 'Software Developer at Capgemini',
      package: '5.8 LPA',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      text: 'Coming from a non-CS background, I was nervous about coding. The mentors explained everything from scratch and guided me through 3 live capstone projects.'
    },
    {
      name: 'Anmol P',
      role: 'Data & Fullstack Analyst at Accenture',
      package: '5.2 LPA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'The faculty is top notch! The curriculum covers modern frameworks like React, Node, and SQL. Highly recommended for anyone wanting a career in IT.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-black">
        {/* Natural Clear Hero Background Image (No Blue Tint) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.webp"
            alt="Full Stack Developer Background"
            className="w-full h-full object-cover opacity-75 md:opacity-85 scale-100 transform transition duration-500"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&auto=format&fit=crop&q=80";
            }}
          />
          {/* Neutral Black Contrast Overlay (No Blue Color) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/course" className="hover:text-blue-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">Full Stack Development Course {location ? `in ${location.name}` : ''}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-5">
                <i className="fas fa-award"></i> Ranked #1 Full Stack Institute in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                Advanced Certification in <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">Full Stack Development</span> {location ? <span className="text-white block mt-1 text-2xl md:text-3xl font-extrabold">in {location.name}</span> : null}
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-4 leading-relaxed">
                Master Frontend, Backend API Engineering, Relational & NoSQL Databases, Cloud DevOps, and Git. Become a job-ready Full Stack Web Developer in {locName} with 100% Placement Assistance.
              </p>

              {/* Urgency & Limited Seats Timer */}
              <BatchUrgencyBanner batchDate="Upcoming Monday" seatsRemaining={5} />

              {/* Badges / Rating & EMI */}
              <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700/80 px-3.5 py-2 rounded-xl text-amber-400 font-bold shadow-sm">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(2,400+ Reviews on Google)</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/90 border border-slate-700/80 px-3.5 py-2 rounded-xl text-emerald-400 font-bold shadow-sm">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/90 border border-amber-500/30 px-3.5 py-2 rounded-xl text-amber-300 font-bold shadow-sm">
                  <i className="fas fa-credit-card text-amber-400"></i>
                  <span>No-Cost EMI @ ₹3,499/mo</span>
                </div>
              </div>

              {/* Feature Points */}
              <ul className="space-y-2.5 mb-8 text-slate-200 text-sm">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Learn Python, React.js, Node.js, Django, MySQL, MongoDB & AWS</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>15+ Years Experienced Senior Industry Mentors & Code Reviewers</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>3 Live Capstone Real-World Projects & 6-Month Internship Letter</span>
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal('Full Stack Development Master Program')}
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 text-sm tracking-wide"
                >
                  <i className="fas fa-paper-plane"></i> Enroll Now & Get 30% OFF
                </button>
                <button
                  onClick={() => openEnrollModal('Full Stack Development Master Program - Syllabus')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2 text-sm"
                >
                  <i className="fas fa-file-download"></i> Download Detailed Syllabus (PDF)
                </button>
              </div>
            </div>

            {/* Right Form Card - Unique LearnMore Premium Brand Design */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-800 border-2 border-blue-100/80 overflow-hidden">
                {/* Form Header */}
                <div className="text-center pb-5 mb-5 border-b border-slate-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-blue-200/60 shadow-2xs">
                    🔥 Limited Seats • 100% Placement Call Guarantee
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    Book Free Career Counselling
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Speak 1-on-1 with senior mentors & claim 30% scholarship
                  </p>
                </div>

                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Full Name *</label>
                    <div className="relative flex items-center">
                      <i className="fas fa-user text-slate-400 text-xs absolute left-3.5 pointer-events-none"></i>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={inlineForm.name}
                        onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition"
                      />
                    </div>
                  </div>

                  {/* Mobile No */}
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">10 Digit Mobile No *</label>
                    <div className="relative flex items-center">
                      <i className="fas fa-phone text-slate-400 text-xs absolute left-3.5 pointer-events-none"></i>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="Enter your 10 digit mobile number"
                        value={inlineForm.phone}
                        onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Email Address *</label>
                    <div className="relative flex items-center">
                      <i className="fas fa-envelope text-slate-400 text-xs absolute left-3.5 pointer-events-none"></i>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={inlineForm.email}
                        onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition"
                      />
                    </div>
                  </div>

                  {/* Preferred Training Mode */}
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Preferred Training Mode *</label>
                    <div className="relative flex items-center">
                      <i className="fas fa-laptop-code text-slate-400 text-xs absolute left-3.5 pointer-events-none"></i>
                      <select
                        value={inlineForm.trainingMode}
                        onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                        className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition cursor-pointer appearance-none"
                      >
                        <option value="Yes, am Interested in Online Training">Instructor-Led Live Online Training</option>
                        <option value="Classroom Training - Bangalore Campus">Classroom Training (Bangalore Campus)</option>
                        <option value="Weekend Batch for Working Professionals">Weekend Batch (For Professionals)</option>
                      </select>
                      <i className="fas fa-chevron-down text-slate-400 text-[10px] absolute right-3.5 pointer-events-none"></i>
                    </div>
                  </div>

                  {/* Preferred City */}
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Your Current City *</label>
                    <div className="relative flex items-center">
                      <i className="fas fa-map-marker-alt text-slate-400 text-xs absolute left-3.5 pointer-events-none"></i>
                      <select
                        value={inlineForm.city}
                        onChange={(e) => setInlineForm({ ...inlineForm, city: e.target.value })}
                        className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition cursor-pointer appearance-none"
                      >
                        <option value="Select Your City">Select Your City</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Online / Remote">Online / Remote</option>
                      </select>
                      <i className="fas fa-chevron-down text-slate-400 text-[10px] absolute right-3.5 pointer-events-none"></i>
                    </div>
                  </div>

                  {/* Free Demo Class Checkbox */}
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-2.5 flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      id="demoClassCheck"
                      defaultChecked={true}
                      className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 accent-blue-600"
                    />
                    <label htmlFor="demoClassCheck" className="text-xs text-slate-800 font-semibold cursor-pointer">
                      🎁 <span className="text-amber-800 font-bold">Book a FREE Live Demo Class</span> (Attend online or offline before enrolling)
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-blue-500/25 transition transform hover:-translate-y-0.5 active:translate-y-0 text-sm text-center tracking-wide flex items-center justify-center gap-2 mt-4"
                  >
                    {isInlineSubmitting ? (
                      <span><i className="fas fa-spinner fa-spin mr-1"></i> Submitting...</span>
                    ) : (
                      <>
                        <span>Book Free Counselling Session</span>
                        <i className="fas fa-arrow-right text-xs"></i>
                      </>
                    )}
                  </button>

                  <p className="text-center text-slate-400 text-[11px] pt-1 flex items-center justify-center gap-1">
                    <i className="fas fa-shield-alt text-emerald-500"></i> ISO 9001:2015 Institute • 100% Data Privacy
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-white border-b border-slate-200 py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-blue-600 mb-1">16,000+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Students Trained</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-indigo-600 mb-1">9,000+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Placed Alumni</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-emerald-600 mb-1">300+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Hiring Partners</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-black text-amber-500 mb-1">15+ Years</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Training Modes Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              We Offer <span className="text-blue-600">3 Flexible Training Modes</span>
            </h2>
            <p className="text-slate-600 text-base">
              Choose the learning format that fits your schedule, location preference, and learning pace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mode 1 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Classroom Training (Bangalore)</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  In-person classroom sessions at Marathahalli & BTM Layout, Bangalore. Face-to-face interaction with mentors, lab assistance, and peer networking.
                </p>
              </div>
              <button
                onClick={() => openEnrollModal('Full Stack Classroom Training')}
                className="w-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 font-bold py-3 rounded-xl transition text-sm text-center"
              >
                Enroll for Classroom
              </button>
            </div>

            {/* Mode 2 */}
            <div className="bg-white border-2 border-blue-600 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between">
              <span className="absolute -top-3.5 right-6 bg-blue-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                Most Popular
              </span>
              <div>
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner">
                  <i className="fas fa-laptop-house"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Live Interactive Online Training</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Attend live interactive online classes from anywhere. Includes real-time screen sharing, instant doubt clearing, session recordings, and online lab support.
                </p>
              </div>
              <button
                onClick={() => openEnrollModal('Full Stack Live Online Training')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md transition text-sm text-center"
              >
                Enroll for Live Online
              </button>
            </div>

            {/* Mode 3 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Weekend & Corporate Batches</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Specially customized weekend batches for working professionals. Learn on Saturdays and Sundays without impacting your current weekday work schedule.
                </p>
              </div>
              <button
                onClick={() => openEnrollModal('Full Stack Weekend Batch')}
                className="w-full bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-800 font-bold py-3 rounded-xl transition text-sm text-center"
              >
                Enroll for Weekend Batch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Syllabus Grid Section (Each Module in its own Box) */}
      <section className="py-20 bg-gradient-to-br from-blue-100/80 via-slate-100 to-indigo-100/80 border-t border-b border-blue-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider mb-3.5 shadow-sm">
              COMPREHENSIVE FULL STACK CURRICULUM
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Master Full Stack Development with <span className="text-blue-600">Industry-Focused Modules</span>
            </h2>
            <p className="text-slate-700 font-medium text-base leading-relaxed">
              Our Full Stack Development course is designed by industry experts to help you master frontend, backend, databases, and DevOps through hands-on practical projects.
            </p>
          </div>

          {/* Grid of 6 Distinct Module Box Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-blue-500 group"
              >
                <div>
                  {/* Duration Header Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs">
                      <i className="fas fa-clock text-[11px]"></i> {idx === 0 ? '4 Weeks Duration' : idx === 1 ? '4 Weeks Duration' : idx === 2 ? '5 Weeks Duration' : idx === 3 ? '5 Weeks Duration' : idx === 4 ? '3 Weeks Duration' : '3 Weeks Duration'}
                    </span>
                  </div>

                  {/* Module Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition leading-snug">
                    {module.title.replace(/^Module \d+: /, '')}
                  </h3>

                  {/* Topic Checklist inside Box */}
                  <ul className="space-y-3 mb-6 border-t border-slate-100 pt-4">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-3 text-slate-700 text-sm">
                        <i className="fas fa-check-circle text-blue-500 text-base mt-0.5 flex-shrink-0"></i>
                        <span className="leading-snug">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span><i className="fas fa-code mr-1"></i> Includes Hands-on Labs & Projects</span>
                  <button
                    onClick={() => openEnrollModal(`Full Stack Module ${idx + 1}`)}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 transition"
                  >
                    Learn More <i className="fas fa-arrow-right text-[10px]"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Download Syllabus Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => openEnrollModal('Full Stack Complete Syllabus Download')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-9 py-4 rounded-xl shadow-lg shadow-blue-500/20 transition transform hover:-translate-y-0.5 inline-flex items-center gap-2 text-sm"
            >
              <i className="fas fa-file-pdf text-base"></i> Download Complete PDF Syllabus
            </button>
          </div>
        </div>
      </section>

      {/* Program Highlights Section (Besant Technologies Image Card Design) */}
      <section className="py-16 bg-[#dce8f8]/80 border-t border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Program Highlights
            </h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto mt-2.5 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* Highlight Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=80"
                  alt="Convenient learning format"
                  className="w-full h-full object-cover transition transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-4 pt-6 relative flex-1 flex flex-col justify-start">
                <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center text-xs shadow-md">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-2 leading-snug">
                  Convenient learning format
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Online & classroom format with mentorship from top industry experts.
                </p>
              </div>
            </div>

            {/* Highlight Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80"
                  alt="Dedicated career services"
                  className="w-full h-full object-cover transition transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-4 pt-6 relative flex-1 flex flex-col justify-start">
                <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs shadow-md">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-2 leading-snug">
                  Dedicated career services
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Resume & interview preps with industry experts & exclusive job portal.
                </p>
              </div>
            </div>

            {/* Highlight Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=80"
                  alt="Learn from the Best"
                  className="w-full h-full object-cover transition transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-4 pt-6 relative flex-1 flex flex-col justify-start">
                <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs shadow-md">
                  <i className="fas fa-user-check"></i>
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-2 leading-snug">
                  Learn from the Best
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Award winning faculties in Full Stack domain from top IT background.
                </p>
              </div>
            </div>

            {/* Highlight Card 4 */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=80"
                  alt="Structured program with dedicated support"
                  className="w-full h-full object-cover transition transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-4 pt-6 relative flex-1 flex flex-col justify-start">
                <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs shadow-md">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-2 leading-snug">
                  Structured program & support
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Dedicated program manager to ensure students make steady learning progress.
                </p>
              </div>
            </div>

            {/* Highlight Card 5 */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=80"
                  alt="Hands-on learning"
                  className="w-full h-full object-cover transition transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-4 pt-6 relative flex-1 flex flex-col justify-start">
                <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs shadow-md">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm mb-2 leading-snug">
                  Hands-on learning
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Become job-ready by applying what you learn to build real-world live projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Hiring Companies - Infinite Smooth Scrolling Marquee Slider */}
      <section className="py-14 bg-white border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <h3 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold">
            Our Alumni Work at Leading IT MNCs & Tech Startups
          </h3>
        </div>

        <div className="relative w-full overflow-hidden flex items-center py-4">
          {/* Gradient Blur Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Continuous Moving Track */}
          <div className="flex w-max items-center gap-12 md:gap-16 animate-marquee">
            {[...hiringCompanies, ...hiringCompanies, ...hiringCompanies].map((comp, i) => (
              <div key={i} className="h-12 px-3 flex items-center justify-center flex-shrink-0">
                <img
                  src={comp.logo}
                  alt={comp.name}
                  className="h-8 md:h-10 w-auto object-contain max-w-[140px] transition duration-300 transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Clean White / Light Theme */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Real Placement Success Stories
            </h2>
            <p className="text-slate-600 text-base">
              See how our students transformed their careers through LearnMore Technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4 text-sm">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-sm" />
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                    <span className="inline-block mt-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      Package: {t.package}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 text-base">
              Got questions about our Full Stack Developer Training Course? Find clear answers below.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  openFaq === idx ? 'border-blue-500 bg-blue-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-blue-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-slate-900 text-base md:text-lg transition"
                >
                  <span className="pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === idx ? 'up text-blue-600' : 'down text-slate-400'} text-sm flex-shrink-0`}></i>
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-blue-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Rich Educational Content Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 text-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
            
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                What is Full Stack Development?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                Full Stack Development refers to the end-to-end engineering of web applications and software platforms, encompassing both the <strong>Frontend (client-side user interface)</strong> and the <strong>Backend (server-side logic, APIs, and databases)</strong>. A certified Full Stack Developer possesses comprehensive technical expertise to architect, code, test, deploy, and maintain robust web systems independently.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                With Full Stack Developer Training at LearnMore Technologies, students master modern frameworks like HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Python, Django, MySQL, MongoDB, and Cloud DevOps, enabling them to build production-grade web applications from scratch.
              </p>
            </div>

            <hr className="border-slate-100" />

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                Why Choose a Full Stack Developer Career in 2026?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                Modern IT MNCs, enterprise product organizations, and fast-growing tech startups aggressively prioritize hiring Full Stack Developers over single-layer coders. Having proficiency in both frontend UX design and complex backend database architecture allows engineers to understand the complete application lifecycle, solve integration bottlenecks efficiently, and drive innovation rapidly.
              </p>
              <ul className="space-y-2 text-slate-700 text-sm md:text-base">
                <li className="flex items-start gap-2.5">
                  <i className="fas fa-check-circle text-blue-600 mt-1 flex-shrink-0"></i>
                  <span><strong>High Job Demand:</strong> Full Stack Engineering consistently ranks among the top 3 tech careers with over 50,000+ active job openings across India.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fas fa-check-circle text-blue-600 mt-1 flex-shrink-0"></i>
                  <span><strong>Lucrative Salary Packages:</strong> Entry-level Full Stack Developers command starting packages from ₹4.5 LPA to ₹8.5 LPA, with rapid salary growth up to ₹25+ LPA for senior architects.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fas fa-check-circle text-blue-600 mt-1 flex-shrink-0"></i>
                  <span><strong>Career Versatility:</strong> Graduates can seamlessly transition between Frontend Developer, Backend Engineer, API Specialist, or Technical Lead roles.</span>
                </li>
              </ul>
            </div>

            <hr className="border-slate-100" />

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                What are the Core Objectives of Full Stack Training at LearnMore Technologies?
              </h2>
              <ul className="space-y-3 text-slate-700 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <i className="fas fa-caret-right text-blue-600 mt-1 flex-shrink-0"></i>
                  <span>Building responsive, pixel-perfect, mobile-first web user interfaces using HTML5, CSS3, Flexbox, Grid, Bootstrap 5, and Tailwind CSS.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-caret-right text-blue-600 mt-1 flex-shrink-0"></i>
                  <span>Mastering asynchronous JavaScript (Promises, Async/Await, DOM manipulation, ES6+ modules, and REST API consumption).</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-caret-right text-blue-600 mt-1 flex-shrink-0"></i>
                  <span>Developing scalable Single-Page Applications (SPAs) with React.js, functional components, custom hooks, and state management.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-caret-right text-blue-600 mt-1 flex-shrink-0"></i>
                  <span>Designing high-performance backend microservices and RESTful Web APIs using Python Django & Node.js Express framework.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-caret-right text-blue-600 mt-1 flex-shrink-0"></i>
                  <span>Architecting relational (MySQL) and NoSQL (MongoDB) databases with indexing, schema optimization, and query tuning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-caret-right text-blue-600 mt-1 flex-shrink-0"></i>
                  <span>Implementing Git version control workflows, automated CI/CD pipelines, and cloud hosting on AWS & Vercel.</span>
                </li>
              </ul>
            </div>

            <hr className="border-slate-100" />

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                What are the Prerequisites for Enrolling in Full Stack Course?
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                There are no strict technical prerequisites! Our curriculum is systematically structured from foundational building blocks to advanced industry practices. Candidates from B.E / B.Tech, B.Sc, BCA, MCA, M.Tech, as well as non-technical graduates (B.Com, BBA, BA) with a passion for software coding can successfully complete this program and secure top IT jobs.
              </p>
            </div>

            <hr className="border-slate-100" />

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                Career Opportunities & Job Roles After Full Stack Certification
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-semibold text-slate-800">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
                  <i className="fas fa-laptop-code text-blue-600 text-xl"></i>
                  <span>Full Stack Developer</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
                  <i className="fas fa-code text-blue-600 text-xl"></i>
                  <span>Frontend React Developer</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
                  <i className="fas fa-server text-blue-600 text-xl"></i>
                  <span>Backend Node/Python Developer</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
                  <i className="fas fa-database text-blue-600 text-xl"></i>
                  <span>Database & API Engineer</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
                  <i className="fas fa-cloud text-blue-600 text-xl"></i>
                  <span>Cloud & DevOps Specialist</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
                  <i className="fas fa-user-gear text-blue-600 text-xl"></i>
                  <span>Software Development Engineer (SDE)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LearnMore Technologies vs Other Institutes Comparison Section */}
      <section className="py-16 bg-white text-slate-900 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-extrabold text-xs uppercase tracking-wider mb-3 border border-blue-200">
              WHY WE ARE #1
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              LearnMore Technologies vs Other Training Institutes
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              See why thousands of students and working professionals choose LearnMore Technologies for genuine career transformation.
            </p>
          </div>

          <div className="overflow-x-auto shadow-xl rounded-3xl border border-slate-200 bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 text-sm uppercase tracking-wider bg-slate-100">
                  <th className="py-5 px-6 text-slate-700 font-bold w-1/3">Feature / Comparison</th>
                  <th className="py-5 px-6 bg-blue-50 text-blue-800 font-extrabold border-t-2 border-l border-r border-blue-300 w-1/3 text-base">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-crown text-amber-500 text-lg"></i>
                      <span>LearnMore Technologies</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-slate-500 font-bold w-1/3">Other Local Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm bg-white">
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Trainer Expertise & Background</td>
                  <td className="py-5 px-6 bg-blue-50/50 border-l border-r border-blue-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 12+ to 15+ Yrs Senior Industry Leads & Active Architects
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers or freshers with theoretical knowledge only
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Practical & Lab Sessions</td>
                  <td className="py-5 px-6 bg-blue-50/50 border-l border-r border-blue-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Practical Hands-on Coding & Live Lab Guidance
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Heavy PowerPoint slides with minimal lab practice time
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-blue-50/50 border-l border-r border-blue-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Placement Call Guarantee & 300+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Only basic resume forwarding without interview guarantee
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-blue-50/50 border-l border-r border-blue-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 3 to 4 Real-World End-to-End Projects with GitHub Code Review
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Basic dummy sample projects or no live deployment
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Batch Flexibility & Session Access</td>
                  <td className="py-5 px-6 bg-blue-50/50 border-l border-r border-blue-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Classroom (Bangalore), Online, Weekend + Lifetime Recording Access
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Rigid batch timings with limited/no class recordings
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Certification Accreditation</td>
                  <td className="py-5 px-6 bg-blue-50/50 border-l border-r border-blue-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> ISO 9001:2015 Globally Recognized Industry Certification
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Unrecognized local certificate with low industry value
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>



      {/* Upcoming Batch Schedule Section */}
      <UpcomingBatchSchedule courseName="Full Stack Development Master Program" />

      {/* Recent Student Placements Section */}
      <RecentPlacementsSection courseName="Full Stack Development Master Program" />

      {/* Sticky Mobile CTA Bar for Google Ads Conversions */}
      <StickyMobileCTA courseName="Full Stack Development Master Program" />

      <Footer />
    </div>
  );
}
