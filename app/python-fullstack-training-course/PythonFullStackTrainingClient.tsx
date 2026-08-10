'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useEnroll } from '@/context/EnrollContext';

interface PythonFullStackTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function PythonFullStackTrainingClient({ location }: PythonFullStackTrainingClientProps = {}) {
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
          program: 'Python Full Stack Master Program',
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

  const pythonFullstackTools = [
    { name: 'Python 3.12', icon: 'fab fa-python', desc: 'Core & Advanced Language' },
    { name: 'Django Framework', icon: 'fas fa-server', desc: 'MVT Web Architecture' },
    { name: 'React.js', icon: 'fab fa-react', desc: 'Single-Page Application UX' },
    { name: 'Django REST (DRF)', icon: 'fas fa-network-wired', desc: 'RESTful API Engineering' },
    { name: 'PostgreSQL / MySQL', icon: 'fas fa-database', desc: 'Relational Database Engine' },
    { name: 'Docker & Git', icon: 'fab fa-docker', desc: 'Containerization & Repos' },
    { name: 'Tailwind CSS', icon: 'fas fa-paint-brush', desc: 'Modern Responsive UI' },
    { name: 'AWS & Vercel', icon: 'fab fa-aws', desc: 'Production Cloud Deployment' }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Web UI Foundations (HTML5, CSS3, JavaScript ES6+)',
      topics: [
        'HTML5 Semantic Structure, Forms & Web Accessibility',
        'CSS3 Flexbox, Grid, Custom Properties & Responsive Web Design',
        'Modern JavaScript ES6+: Promises, Async/Await, Fetch API & DOM',
        'Bootstrap 5 & Tailwind CSS Integration for Fast Prototyping',
        'Live Project: Responsive Corporate Web Landing Page'
      ]
    },
    {
      title: 'Module 2: Frontend Development with React.js Framework',
      topics: [
        'React Architecture, JSX, Components & Virtual DOM Core',
        'Props, State Management, Controlled Forms & Lifecycle',
        'React Hooks: useState, useEffect, useMemo, useCallback, useRef',
        'Global State Management with Context API & Redux Toolkit',
        'Live Project: E-Commerce Frontend Application with React'
      ]
    },
    {
      title: 'Module 3: Core & Advanced Python Programming',
      topics: [
        'Python Basics, Data Types, Control Structures & Functions',
        'Object-Oriented Programming (OOPs): Inheritance, Polymorphism & Encapsulation',
        'File Handling, Modules, Packages & Error Handling',
        'Regular Expressions (RegEx), Lambda & Higher-Order Functions'
      ]
    },
    {
      title: 'Module 4: Django Web Framework & RESTful APIs (DRF)',
      topics: [
        'Django Architecture (MVT), Project & App Structure',
        'Django Models, ORM Queries, Migrations & Admin Panel',
        'Django REST Framework (DRF): Serializers, ViewSets & Routers',
        'Authentication & Authorization: JWT Tokens & OAuth2 Integration',
        'Live Project: RESTful Web API Microservice for Enterprise'
      ]
    },
    {
      title: 'Module 5: Relational & NoSQL Database Architecture (SQL & MongoDB)',
      topics: [
        'Relational Database Management System (RDBMS) Concepts & Normalization',
        'PostgreSQL & MySQL Database Administration & ORM Integration',
        'Complex SQL Queries, JOINs, Indexes & Query Optimization',
        'MongoDB NoSQL Collections, Documents & Aggregation Framework'
      ]
    },
    {
      title: 'Module 6: Cloud Deployment, DevOps & Capstone Project',
      topics: [
        'Git & GitHub Collaboration Workflows and Pull Requests',
        'Containerization with Docker & Docker Compose Setup',
        'Deploying Python Django & React Apps on AWS EC2, S3 & Vercel',
        'Capstone Project: Full-Stack SaaS Web Application with 100% Placement Call Guarantee'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'SaaS Multi-Tenant Project Management Platform',
      desc: 'Built a full-stack Django REST Framework + React SPA application with JWT auth, PostgreSQL database, and Vercel hosting.',
      tags: ['Django REST', 'React', 'PostgreSQL', 'JWT']
    },
    {
      title: 'Real-Time E-Commerce & Payment Gateway Portal',
      desc: 'Engineered a Python Django web store featuring dynamic cart management, Stripe payment gateway, and admin analytics dashboard.',
      tags: ['Django MVT', 'Stripe API', 'React', 'Tailwind']
    },
    {
      title: 'Social Media Content Platform Dockerized on AWS',
      desc: 'Containerized Django backend and React frontend into Docker Compose, deploying to AWS EC2 with Amazon S3 image hosting.',
      tags: ['Docker', 'AWS EC2', 'S3 Storage', 'DevOps']
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

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/course" className="hover:text-amber-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">Python Full Stack Training {location ? `in ${location.name}` : ''}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-5">
                <i className="fab fa-python"></i> Ranked #1 Python Full Stack Institute in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                Advanced Certification in <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent">Python Full Stack Development</span> {location ? <span className="text-white block mt-1 text-2xl md:text-3xl font-extrabold">in {location.name}</span> : null}
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">
                Master Python, Django Framework, React.js, REST APIs, Databases, and AWS Cloud Deployment in {locName} with 100% Placement Assistance.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-amber-400 font-bold">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(3,400+ Reviews)</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-emerald-400 font-bold">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal('Python Full Stack Master Program')}
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-paper-plane"></i> Enroll Now & Get 30% OFF
                </button>
                <button
                  onClick={() => openEnrollModal('Python Full Stack Master Program - Syllabus')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-file-download"></i> Download Full Syllabus
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-800 border-2 border-amber-100 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-100">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900">Book Free Counselling</h3>
                </div>

                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={inlineForm.name}
                      onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase mb-1">Mobile No *</label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="Enter mobile number"
                      value={inlineForm.phone}
                      onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter email address"
                      value={inlineForm.email}
                      onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-extrabold py-3.5 rounded-xl transition text-sm"
                  >
                    Book Free Counselling Session
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
              <p className="text-3xl md:text-4xl font-black text-amber-600 mb-1">16,800+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Python Fullstack Students</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-yellow-600 mb-1">9,500+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Placed Alumni</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-blue-600 mb-1">300+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Hiring Partners</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-black text-emerald-600 mb-1">15+ Years</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              FULL STACK TECH STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Python Full Stack Tools You Will Master
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {pythonFullstackTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-amber-400 transition duration-300">
                <div className="w-14 h-14 mx-auto bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center text-2xl mb-4">
                  <i className={tool.icon}></i>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1">{tool.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Grid */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Comprehensive Python Full Stack Curriculum
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((t, i) => (
                    <li key={i} className="text-slate-700 text-sm flex items-center gap-2">
                      <i className="fas fa-check-circle text-amber-500"></i> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capstone Projects Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              PRACTICAL FULL STACK PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Live Capstone Python Projects You Will Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-amber-100 text-amber-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
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
      <section className="py-20 bg-gradient-to-r from-slate-900 via-black to-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-amber-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certified Python Full Stack Developer Certification
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Receive an official, lifetime-valid LearnMore Technologies Python Full Stack Developer Certificate accredited by international quality standards.
              </p>
              <button
                onClick={() => openEnrollModal('Python Full Stack Sample Request')}
                className="bg-amber-500 hover:bg-amber-600 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-800 border-2 border-amber-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="w-20 h-20 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-amber-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-amber-300 font-extrabold uppercase tracking-widest mb-4">Python Full Stack Developer Certified</p>
                <div className="pt-4 border-t border-slate-700 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-PY-FS-2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LearnMore Technologies vs Other Institutes Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-amber-500/30">
              WHY WE ARE #1
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              LearnMore Technologies vs Other Training Institutes
            </h2>
            <p className="text-slate-400 mt-2 text-base">
              See why thousands of students and working professionals choose LearnMore Technologies for genuine career transformation.
            </p>
          </div>

          <div className="overflow-x-auto shadow-2xl rounded-3xl border border-slate-800">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 text-sm uppercase tracking-wider bg-slate-900/80">
                  <th className="py-5 px-6 text-slate-400 font-bold w-1/3">Feature / Comparison</th>
                  <th className="py-5 px-6 bg-gradient-to-r from-amber-600/40 to-yellow-600/40 text-amber-400 font-extrabold border-t-2 border-l border-r border-amber-500 w-1/3 text-base">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-crown text-amber-400 text-lg"></i>
                      <span>LearnMore Technologies</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-slate-500 font-bold w-1/3">Other Local Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-sm bg-slate-950/60">
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Trainer Expertise & Background</td>
                  <td className="py-5 px-6 bg-amber-950/20 border-l border-r border-amber-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Lead Python Full Stack Architects with 14+ Yrs MNC Background
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers or freshers with theoretical knowledge only
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Practical & Lab Sessions</td>
                  <td className="py-5 px-6 bg-amber-950/20 border-l border-r border-amber-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 100% Practical React, Django REST Framework & SQL Labs
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Heavy PowerPoint slides with minimal lab practice time
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-amber-950/20 border-l border-r border-amber-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 100% Placement Call Guarantee & 300+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Only basic resume forwarding without interview guarantee
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-amber-950/20 border-l border-r border-amber-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 3 End-to-End Enterprise Full Stack Web Applications
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Basic dummy sample projects or no live deployment
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Batch Flexibility & Session Access</td>
                  <td className="py-5 px-6 bg-amber-950/20 border-l border-r border-amber-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Classroom (Bangalore), Online, Weekend + Lifetime Recording Access
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Rigid batch timings with limited/no class recordings
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Certification Accreditation</td>
                  <td className="py-5 px-6 bg-amber-950/20 border-l border-r border-amber-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> ISO 9001:2015 Globally Recognized Industry Certification
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Unrecognized local certificate with low industry value
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
