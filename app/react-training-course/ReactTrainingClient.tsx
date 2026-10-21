'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StickyMobileCTA from '@/components/common/StickyMobileCTA';
import BatchUrgencyBanner from '@/components/common/BatchUrgencyBanner';
import UpcomingBatchSchedule from '@/components/common/UpcomingBatchSchedule';
import RecentPlacementsSection from '@/components/common/RecentPlacementsSection';
import PlacementStudentCard from '@/components/common/PlacementStudentCard';
import LocationSeoContentBlock from '@/components/common/LocationSeoContentBlock';
import { useEnroll } from '@/context/EnrollContext';

interface ReactTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function ReactTrainingClient({ location }: ReactTrainingClientProps = {}) {
  const { openEnrollModal } = useEnroll();
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
          program: 'React JS & Modern Frontend Master Program',
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reactTools = [
    { name: 'React.js (v18/19)', icon: 'fab fa-react', desc: 'Component Architecture & Virtual DOM' },
    { name: 'ES6+ & TypeScript', icon: 'fab fa-js', desc: 'Modern JS Syntax & Strong Typing' },
    { name: 'React Hooks', icon: 'fas fa-anchor', desc: 'useState, useEffect & Custom Hooks' },
    { name: 'Redux Toolkit', icon: 'fas fa-layer-group', desc: 'Predictable Global State Mgmt' },
    { name: 'Next.js App Router', icon: 'fas fa-bolt', desc: 'SSR, SSG & Server Components' },
    { name: 'Tailwind CSS', icon: 'fas fa-paint-brush', desc: 'Modern Utility-First Styling' },
    { name: 'TanStack Query / Axios', icon: 'fas fa-network-wired', desc: 'REST API & Cache Management' },
    { name: 'Jest & RTL', icon: 'fas fa-vial', desc: 'Unit Testing & Vercel Deployment' }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Modern JavaScript (ES6+) & TypeScript Foundations',
      topics: [
        'JavaScript Refresh: Let/Const, Arrow Functions, Template Literals & Destructuring',
        'Rest & Spread Operators, Array Methods (Map, Filter, Reduce, Find, Some, Every)',
        'Asynchronous JavaScript: Promises, Async/Await, Event Loop & Fetch API',
        'TypeScript Basics: Types, Interfaces, Generics, Union Types & Type Narrowing',
        'NPM, Node.js Environment, Vite & Modern Webpack / Babel Tooling',
        'Live Lab: Building Interactive Modular JavaScript Applications with TypeScript'
      ]
    },
    {
      title: 'Module 2: React Core Fundamentals, JSX & Component Architecture',
      topics: [
        'Introduction to React: Virtual DOM, Reconciliation Algorithm & Single Page Apps (SPA)',
        'JSX Syntax, Rendering Elements & Component-Driven Architecture',
        'Functional Components, Props, Children Props & Default Values',
        'State Management in React with useState Hook & Immutable Updates',
        'Handling User Events, Forms, Controlled vs Uncontrolled Inputs',
        'Conditional Rendering, Lists & Keys in React Rendering Pipeline',
        'Live Project: Building an Interactive Multi-Step Form & Task Management Application'
      ]
    },
    {
      title: 'Module 3: Deep Dive into React Hooks & Lifecycle Management',
      topics: [
        'Mastering useEffect: Dependency Arrays, Cleanup Functions & API Fetching',
        'useRef for DOM Manipulation, Mutable Variables & Persisting Values',
        'Performance Optimization with useMemo, useCallback & React.memo',
        'useReducer for Complex Local State Logic & Finite State Machines',
        'Creating Reusable Custom Hooks (useFetch, useLocalStorage, useDebounce, useWindowSize)',
        'Context API & useContext for Prop-Drilling Elimination',
        'Live Lab: Building Custom Hooks Library for Real-World Micro-Frontends'
      ]
    },
    {
      title: 'Module 4: Global State Management with Redux Toolkit & Zustand',
      topics: [
        'Why Global State? Redux Architecture (Store, Actions, Reducers & Dispatch)',
        'Redux Toolkit (RTK): createSlice, configureStore, useSelector & useDispatch',
        'Async Operations in Redux with createAsyncThunk & ExtraReducers',
        'RTK Query for Automated Caching, Polling & Optimistic UI Updates',
        'Introduction to Zustand for Lightweight, Boilerplate-Free State Management',
        'Live Project: Building a Complete E-Commerce Cart, Checkout & User Auth Flow'
      ]
    },
    {
      title: 'Module 5: React Router, Next.js & Full-Stack Capabilities',
      topics: [
        'React Router DOM v6: Dynamic Routing, Nested Routes, Outlet & Protected Routes',
        'Form Actions, Loaders & Navigation Hooks (useNavigate, useParams, useLocation)',
        'Introduction to Next.js: App Router, Server Components vs Client Components',
        'Server-Side Rendering (SSR), Static Site Generation (SSG) & Incremental Static Regeneration (ISR)',
        'Styling with Tailwind CSS, Framer Motion for Smooth UI Animations & Shadcn UI',
        'Live Project: Production-Ready SaaS Dashboard with Authentication & Dark Mode'
      ]
    },
    {
      title: 'Module 6: Testing, CI/CD, Deployment & Interview Prep',
      topics: [
        'Unit & Integration Testing with Jest and React Testing Library (RTL)',
        'Mocking APIs with MSW (Mock Service Worker) & Component Snapshot Tests',
        'Code Splitting, Lazy Loading (React.lazy & Suspense) & Web Vitals Optimization',
        'Continuous Integration & Deployment on Vercel, Netlify & AWS S3/CloudFront',
        'Frontend System Design, Machine Coding Rounds & Top 100 React Interview Questions',
        'Capstone Project: Full-Scale Production E-Commerce Platform with Stripe & Next.js'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'Full-Scale Enterprise E-Commerce Platform (Next.js & Redux Toolkit)',
      desc: 'Built a high-performance e-commerce store with product search, filters, category trees, cart state in Redux Toolkit, Stripe payment gateway integration, and SEO optimization.',
      tags: ['Next.js App Router', 'Redux Toolkit', 'Stripe API', 'Tailwind CSS']
    },
    {
      title: 'Real-Time Collaborative Project Management Workspace',
      desc: 'Architected a Trello-like kanban and project tracker featuring drag-and-drop interactions, real-time multi-user syncing via WebSockets, and role-based permissions.',
      tags: ['React 18', 'TypeScript', 'WebSockets', 'Framer Motion']
    },
    {
      title: 'AI-Powered Content & Video Streaming Platform',
      desc: 'Developed an interactive media platform with dynamic infinite scrolling, custom video player controls, TanStack Query data caching, and user authentication.',
      tags: ['TanStack Query', 'Custom Hooks', 'REST APIs', 'Vercel']
    }
  ];

  const hiringCompanies = [
    { name: 'Amazon', logo: '/images/companies/amazon.webp' },
    { name: 'Microsoft', logo: '/images/companies/microsoft.webp' },
    { name: 'Accenture', logo: '/images/companies/accenture.webp' },
    { name: 'TCS', logo: '/images/companies/tcs.webp' },
    { name: 'Infosys', logo: '/images/companies/infosys.webp' },
    { name: 'Wipro', logo: '/images/companies/wipro.webp' },
    { name: 'Cognizant', logo: '/images/companies/cognizant.webp' },
    { name: 'IBM', logo: '/images/companies/ibm.webp' }
  ];

  const faqs = [
    {
      q: `Why enroll at LearnMore Technologies for React JS Training in ${locName}?`,
      a: `LearnMore Technologies is rated the #1 institute for React JS Training in ${locName}. Our mentors are Principal Frontend Architects with 12+ years of enterprise UI engineering experience. We provide 100% practical live coding labs, industry capstone projects in Next.js & Redux Toolkit, machine coding interview prep, and 100% placement support.`
    },
    {
      q: `What is the average salary after completing React JS Training in ${locName}?`,
      a: `Freshers completing React JS Training in ${locName} start at ₹4.8 LPA to ₹9.0 LPA. Experienced Frontend Engineers with 2-4 years experience regularly achieve ₹11 LPA to ₹24+ LPA across top Bangalore tech MNCs and high-growth product startups.`
    },
    {
      q: `Do I need prior JavaScript knowledge before joining React JS Training in ${locName}?`,
      a: `Basic knowledge of HTML & CSS is helpful, but our React JS Training in ${locName} includes a comprehensive foundation in Modern JavaScript (ES6+), Asynchronous programming, and TypeScript from scratch before diving into React.`
    },
    {
      q: `Does React JS Training in ${locName} cover Next.js and Redux Toolkit?`,
      a: `Yes! Our curriculum covers the modern React ecosystem including React 18/19, Redux Toolkit, RTK Query, Zustand, React Router v6, Next.js App Router, Tailwind CSS, and TypeScript.`
    },
    {
      q: `What batch options are available for React JS Training in ${locName}?`,
      a: `We provide weekday classroom sessions at our Bangalore campus, instructor-led live interactive online batches, and dedicated weekend batches for working professionals.`
    },
    {
      q: `Does React JS Training in ${locName} offer 100% Placement Assistance?`,
      a: `Yes! Enrolling in React JS Training in ${locName} includes 100% placement support with GitHub portfolio reviews, machine coding mock rounds, resume mentoring, and direct recruitment interviews across 350+ partner companies.`
    }
  ];

  const testimonials = [
    {
      name: 'Rajat Verma',
      role: 'React Frontend Developer at Accenture',
      package: '8.5 LPA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'The deep dive into React Hooks, Custom Hooks, and Redux Toolkit at LearnMore Technologies was game-changing. The mentors explained complex concepts with clean production-ready code examples!'
    },
    {
      name: 'Ananya Deshmukh',
      role: 'Frontend Software Engineer at Wipro',
      package: '7.8 LPA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'Transitioning into frontend development was smooth thanks to LearnMore Technologies. The live Next.js E-Commerce capstone project helped me crack multiple technical machine coding rounds.'
    },
    {
      name: 'Siddharth Rao',
      role: 'Senior React Developer at Cognizant',
      package: '11.0 LPA',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      text: 'Exceptional training! Practical labs on TypeScript, State Management, and TanStack Query gave me the exact confidence needed for senior-level frontend developer interviews.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&auto=format&fit=crop&q=80"
            alt="React JS Training Background"
            className="w-full h-full object-cover opacity-60 md:opacity-75 scale-100 transform transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-cyan-950/80 to-slate-950/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/course" className="hover:text-cyan-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">React JS Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-5">
                <i className="fab fa-react"></i> Ranked #1 Institute for React JS Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-white">
                React JS Training in <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-4 leading-relaxed">
                LearnMore Technologies offers the best <strong>React JS Training in {locName}</strong> with 100% placement assistance. Master React 18/19, Modern JavaScript (ES6+), TypeScript, Hooks, Redux Toolkit, Next.js, and Tailwind CSS with certified mentors in our <strong>React JS Training in {locName}</strong> program.
              </p>

              {/* Urgency & Limited Seats Timer */}
              <BatchUrgencyBanner batchDate="Upcoming Monday" seatsRemaining={5} />

              {/* Badges / Rating & EMI */}
              <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-750 px-3.5 py-2 rounded-xl text-amber-400 font-bold shadow-sm">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(3,500+ Reviews for React Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-750 px-3.5 py-2 rounded-xl text-emerald-400 font-bold shadow-sm">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-cyan-500/30 px-3.5 py-2 rounded-xl text-cyan-300 font-bold shadow-sm">
                  <i className="fas fa-credit-card text-cyan-400"></i>
                  <span>No-Cost EMI @ ₹2,999/mo</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8 text-slate-200 text-sm">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Comprehensive React, Hooks, Redux & Next.js in <strong>React JS Training in {locName}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Principal Frontend Architect Mentors for <strong>React JS Training in {locName}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Production-Grade Capstone Projects included with <strong>React JS Training in {locName}</strong></span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal(`React JS Training in ${locName}`)}
                  className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 text-sm tracking-wide cursor-pointer"
                >
                  <i className="fas fa-paper-plane"></i> Enroll for React in {locName}
                </button>
                <button
                  onClick={() => openEnrollModal(`React JS Training Syllabus - ${locName}`)}
                  className="bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <i className="fas fa-file-download"></i> Download React Syllabus
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-800 border-2 border-cyan-100 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-cyan-200/60 shadow-2xs">
                    🔥 Limited Seats • 100% Placement Support
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    Book Free React Counselling
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Speak 1-on-1 with Principal Frontend Mentors & claim 30% scholarship
                  </p>
                </div>

                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={inlineForm.name}
                      onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">10 Digit Mobile No *</label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="Enter your 10 digit mobile number"
                      value={inlineForm.phone}
                      onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={inlineForm.email}
                      onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Preferred Training Mode *</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-cyan-500 transition"
                    >
                      <option value="Yes, am Interested in Online Training">Instructor-Led Live Online Training</option>
                      <option value="Classroom Training - Bangalore Campus">Classroom Training (Bangalore Campus)</option>
                      <option value="Weekend Batch for Working Professionals">Weekend Batch (For Professionals)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition text-sm text-center cursor-pointer"
                  >
                    Book Free React Session
                  </button>
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
              <p className="text-3xl md:text-4xl font-black text-cyan-600 mb-1">17,000+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">React Developers Trained</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-sky-600 mb-1">10,800+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Placed Alumni</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-blue-600 mb-1">350+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Hiring Partners</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-black text-emerald-600 mb-1">15+ Years</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section for React JS Training */}
      <section className="py-16 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 border-b pb-4">
              Best React JS Training in {locName} – LearnMore Technologies
            </h2>
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Are you looking for the best <strong>React JS Training in {locName}</strong>? LearnMore Technologies provides Bangalore's most practical, job-oriented <strong>React JS Training in {locName}</strong> designed for freshers, JavaScript developers, and full-stack aspirants. Our <strong>React JS Training in {locName}</strong> program covers modern React 18/19, ES6+, TypeScript, custom Hooks, Redux Toolkit, Next.js, and Tailwind CSS.
              </p>
              <p>
                Enrolling in our <strong>React JS Training in {locName}</strong> gives you 100% hands-on coding experience guided by Principal Frontend Engineers from leading product startups and IT MNCs. Our <strong>React JS Training in {locName}</strong> curriculum prepares candidates thoroughly for machine coding rounds, frontend system design, and guaranteed 100% placement support.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
                Why Join Our React JS Training in {locName}?
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 font-semibold text-slate-800">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-cyan-500"></i> 100% Practical Live Coding Labs in <strong>React JS Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-cyan-500"></i> Principal Frontend Architect Mentors for <strong>React JS in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-cyan-500"></i> 100% Placement Support with <strong>React JS Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-cyan-500"></i> Real-World Next.js & Redux Capstones in <strong>React in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-cyan-500"></i> ISO 9001:2015 Certification in <strong>React JS Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-cyan-500"></i> Flexible Batches for <strong>React JS Training in {locName}</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* React Tools & Ecosystem Mastered Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              MODERN FRONTEND ECOSYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              React Tools & Frameworks You Will Master
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Gain complete hands-on mastery over the modern React, TypeScript, Redux, and Next.js frontend stack.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {reactTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-cyan-400 transition duration-300">
                <div className="w-14 h-14 mx-auto bg-cyan-500/10 text-cyan-600 rounded-2xl flex items-center justify-center text-2xl mb-4">
                  <i className={tool.icon}></i>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1">{tool.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Syllabus Grid Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-100/80 via-slate-100 to-sky-100/80 border-t border-b border-cyan-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-600 text-white font-extrabold text-xs uppercase tracking-wider mb-3.5 shadow-sm">
              COMPREHENSIVE REACT JS CURRICULUM
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Master Frontend Engineering with <span className="text-cyan-600">Industry-Focused Modules</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-cyan-500 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 font-bold text-xs">
                      <i className="fas fa-clock text-[11px]"></i> {idx === 0 ? '2 Weeks Duration' : idx === 1 ? '3 Weeks Duration' : idx === 2 ? '3 Weeks Duration' : idx === 3 ? '4 Weeks Duration' : idx === 4 ? '3 Weeks Duration' : '3 Weeks Duration'}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-cyan-600 transition leading-snug">
                    {module.title.replace(/^Module \d+: /, '')}
                  </h3>

                  <ul className="space-y-3 mb-6 border-t border-slate-100 pt-4">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-3 text-slate-700 text-sm">
                        <i className="fas fa-check-circle text-cyan-500 text-base mt-0.5 flex-shrink-0"></i>
                        <span className="leading-snug">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Capstone Live Projects */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              PRACTICAL INDUSTRY PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Live Capstone React Projects You Will Build
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Add production-grade React, TypeScript, and Next.js applications to your GitHub portfolio to impress recruiters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-cyan-600 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-cyan-100 text-cyan-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Certification Preview */}
      <section className="py-20 bg-gradient-to-r from-slate-950 via-cyan-950 to-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-cyan-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certified React Frontend Specialist Credential
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Upon successful completion of the course curriculum and live capstone projects, graduates receive the prestigious LearnMore Technologies Certified React Frontend Specialist credential.
              </p>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Lifetime valid credential recognized by 350+ hiring partner MNCs & tech startups
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Machine coding test guidance & frontend system design mentorship
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Shareable digital badge for LinkedIn & Resume integration
                </li>
              </ul>
              <button
                onClick={() => openEnrollModal('React Certification Sample Request')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-900 border-2 border-cyan-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-cyan-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  ISO 9001:2015
                </div>
                <div className="w-20 h-20 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-cyan-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-cyan-300 font-extrabold uppercase tracking-widest mb-4">Certified React Frontend Specialist</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  This certifies that candidate has successfully mastered React.js, TypeScript, Redux Toolkit, Next.js, and Modern Web Architecture.
                </p>
                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-REACT-2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Hiring Companies */}
      <section className="py-14 bg-white border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <h3 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold">
            Our React Alumni Work at Top Product Startups & Global IT MNCs
          </h3>
        </div>

        <div className="relative w-full overflow-hidden flex items-center py-4">
          <div className="flex w-max items-center gap-12 md:gap-16 animate-marquee">
            {[...hiringCompanies, ...hiringCompanies, ...hiringCompanies].map((comp, i) => (
              <div key={i} className="h-12 px-3 flex items-center justify-center flex-shrink-0">
                <img
                  src={comp.logo}
                  alt={comp.name}
                  className="h-8 md:h-10 w-auto object-contain max-w-[140px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Real React Placement Success Stories
            </h2>
            <p className="text-slate-600 text-base">
              See how our students transformed their careers into high-paying Frontend Engineers through LearnMore Technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <PlacementStudentCard
                key={idx}
                student={{
                  name: t.name,
                  role: t.role,
                  company: t.role.includes('at') ? t.role.split('at')[1].trim() : 'Tech Mahindra',
                  course: 'React JS Development',
                  package: t.package,
                  image: t.image
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full mb-4"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  openFaq === idx ? 'border-cyan-500 bg-cyan-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-cyan-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-slate-900 text-base md:text-lg transition cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === idx ? 'up text-cyan-600' : 'down text-slate-400'} text-sm flex-shrink-0`}></i>
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-cyan-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LearnMore Technologies vs Other Institutes Comparison Section */}
      <section className="py-16 bg-white text-slate-900 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-800 font-extrabold text-xs uppercase tracking-wider mb-3 border border-cyan-200">
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
                  <th className="py-5 px-6 bg-cyan-50 text-cyan-900 font-extrabold border-t-2 border-l border-r border-cyan-300 w-1/3 text-base">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-crown text-cyan-600 text-lg"></i>
                      <span>LearnMore Technologies</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-slate-500 font-bold w-1/3">Other Local Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm bg-white">
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Trainer Expertise & Background</td>
                  <td className="py-5 px-6 bg-cyan-50/50 border-l border-r border-cyan-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Principal Frontend Architects with 12+ Yrs Experience
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers or freshers with theoretical knowledge only
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Practical & Lab Sessions</td>
                  <td className="py-5 px-6 bg-cyan-50/50 border-l border-r border-cyan-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Practical Live Coding, Debugging & TypeScript Labs
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Heavy PowerPoint slides with minimal hands-on coding
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-cyan-50/50 border-l border-r border-cyan-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Placement Support & 350+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Only basic resume forwarding without placement support
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-cyan-50/50 border-l border-r border-cyan-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 3 Real-World Projects on Next.js, Redux & WebSockets
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Basic counter / todo app examples only
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Batch Flexibility & Session Access</td>
                  <td className="py-5 px-6 bg-cyan-50/50 border-l border-r border-cyan-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Classroom (Bangalore), Online, Weekend + Lifetime Recording Access
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Rigid batch timings with limited/no class recordings
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Certification Accreditation</td>
                  <td className="py-5 px-6 bg-cyan-50/50 border-l border-r border-cyan-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> ISO 9001:2015 Certification + Global Industry Recognition
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
      <UpcomingBatchSchedule courseName="React JS & Modern Frontend Master Program" />

      {/* Recent Student Placements Section */}
      <RecentPlacementsSection courseName="React JS & Modern Frontend Master Program" />

      {/* Sticky Mobile CTA Bar for Google Ads Conversions */}
      <StickyMobileCTA courseName="React JS & Modern Frontend Master Program" />

      {/* SEO Location Content Block */}
      <LocationSeoContentBlock courseName="React JS" locationName={locName} />

      <Footer />
    </div>
  );
}
