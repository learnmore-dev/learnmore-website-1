'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StickyMobileCTA from '@/components/common/StickyMobileCTA';
import BatchUrgencyBanner from '@/components/common/BatchUrgencyBanner';
import UpcomingBatchSchedule from '@/components/common/UpcomingBatchSchedule';
import RecentPlacementsSection from '@/components/common/RecentPlacementsSection';
import { useEnroll } from '@/context/EnrollContext';

interface PythonTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function PythonTrainingClient({ location }: PythonTrainingClientProps = {}) {
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
          program: 'Python Master Program',
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

  const pythonTools = [
    { name: 'Core Python 3.12', icon: 'fab fa-python', desc: 'Object-Oriented Programming' },
    { name: 'PyCharm / VS Code', icon: 'fas fa-code', desc: 'Professional IDE Setup' },
    { name: 'MySQL Connector', icon: 'fas fa-database', desc: 'Relational Database Integration' },
    { name: 'BeautifulSoup', icon: 'fas fa-spider', desc: 'Web Scraping & Extraction' },
    { name: 'Pandas & NumPy', icon: 'fas fa-chart-pie', desc: 'Data Analytics Foundations' },
    { name: 'Git & GitHub', icon: 'fab fa-github', desc: 'Code Versioning & Repositories' },
    { name: 'REST APIs & JSON', icon: 'fas fa-network-wired', desc: 'Web Request Consumption' },
    { name: 'PyTest Framework', icon: 'fas fa-check-double', desc: 'Unit Testing & Debugging' }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Python Fundamentals & Data Types',
      topics: [
        'Python Architecture, Installation & IDE Setup (PyCharm, VS Code, Jupyter)',
        'Variables, Primitive Data Types (int, float, str, bool) & Typecasting',
        'Python Operators: Arithmetic, Logical, Comparison & Bitwise',
        'Control Flow: Conditional Statements (if/elif/else) & Switch Patterns',
        'Loops: for, while, break, continue & pass statements',
        'Live Project: Console-Based Interactive CLI Application'
      ]
    },
    {
      title: 'Module 2: Advanced Data Structures & String Engineering',
      topics: [
        'Lists & List Methods, Indexing, Slicing & Nested Lists',
        'Tuples, Sets, Frozensets & Dictionary Operations',
        'List, Dictionary & Set Comprehensions for Optimized Code',
        'String Manipulation, Formatting (f-strings) & Regular Expressions (RegEx)',
        'Built-in Functions (map, filter, reduce, zip, enumerate)',
        'Live Lab: Building a High-Performance Data Parser in Python'
      ]
    },
    {
      title: 'Module 3: Functional Programming & Exception Handling',
      topics: [
        'Function Definitions, Positional & Keyword Arguments (*args, **kwargs)',
        'Lambda Functions, Scope (Local vs Global), & Recursion',
        'Decorators, Generators, Iterators & Yield Statements',
        'Exception Handling: try, except, else, finally & Custom Exceptions',
        'File I/O: Reading/Writing TXT, CSV, JSON & Binary Files',
        'Live Lab: File Processing & Automated Logging Utility'
      ]
    },
    {
      title: 'Module 4: Object-Oriented Programming (OOPs) in Python',
      topics: [
        'Classes, Objects, __init__ Constructor & self Keyword',
        'Inheritance: Single, Multiple, Multilevel & Method Overriding',
        'Encapsulation, Private Members & Getter/Setter Properties',
        'Polymorphism, Duck Typing & Magic/Dunder Methods',
        'Abstract Base Classes (ABC) & Design Patterns in Python',
        'Live Project: Enterprise Payroll & Management System'
      ]
    },
    {
      title: 'Module 5: Database Integration & Web Scraping / APIs',
      topics: [
        'Relational Database Basics & SQL Queries (SELECT, INSERT, UPDATE, DELETE)',
        'Python Database Connectivity: MySQL Connector & SQLite3 Integration',
        'HTTP Requests with Requests Module & JSON Data Parsing',
        'Web Scraping Automation with BeautifulSoup & Selenium',
        'Multithreading & Multiprocessing Basics in Python',
        'Live Project: Automated Web Scraper & SQL Database Pipeline'
      ]
    },
    {
      title: 'Module 6: Capstone Project, Code Review & Placement Prep',
      topics: [
        'Best Practices: PEP 8 Styling, Docstrings & Unit Testing (pytest)',
        'Git & GitHub Version Control Workflows for Python Developers',
        'Python Developer Resume Building & GitHub Portfolio Enhancement',
        'Mock Technical Interviews, Coding Assessment Practice & Algorithms',
        '100% Placement Drives with 300+ Partner Companies',
        'Capstone Project: Full-Fledged Automated Python Application'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'Automated E-Commerce Price Monitor & Scraping Pipeline',
      desc: 'Wrote python BeautifulSoup and Selenium scripts to scrape live prices and store cleaned data into MySQL DB with SMS alerts.',
      tags: ['Python', 'BeautifulSoup', 'MySQL', 'Automation']
    },
    {
      title: 'Enterprise Banking & Account Management CLI App',
      desc: 'Built an object-oriented Python application incorporating encapsulation, inheritance, file logging, and JSON persistence.',
      tags: ['OOPs', 'File I/O', 'JSON', 'Exception Handling']
    },
    {
      title: 'RESTful Weather Data Aggregator & Analytics Engine',
      desc: 'Fetched real-time JSON payloads from external REST APIs using Requests module, generating pandas statistical reports.',
      tags: ['REST APIs', 'Pandas', 'Requests', 'Data Analysis']
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
      q: 'Why enroll at LearnMore Technologies for Python Training?',
      a: 'LearnMore Technologies is recognized as the top Python Training Institute in Bangalore. Our trainers are senior Python developers with 12+ years of industry experience. We focus 100% on hands-on practical coding, real projects, and 100% placement support.'
    },
    {
      q: 'What is the average salary of a Python Developer fresher in India?',
      a: 'The average starting salary for a fresher Python Developer ranges from ₹4.5 LPA to ₹7.5 LPA. Experienced Python engineers with 2-4 years experience earn between ₹9 LPA to ₹18+ LPA.'
    }
  ];

  const testimonials = [
    {
      name: 'Aditya Rao',
      role: 'Python Developer at Infosys',
      package: '6.2 LPA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'The Python course at LearnMore Technologies made OOPs concepts and Data Structures so easy to understand! The hands-on project work helped me crack my technical interview at Infosys.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/course" className="hover:text-amber-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">Python Training Course {location ? `in ${location.name}` : ''}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-5">
                <i className="fab fa-python"></i> Ranked #1 Python Training Institute in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                Advanced Certification in <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent">Python Programming</span> {location ? <span className="text-white block mt-1 text-2xl md:text-3xl font-extrabold">in {location.name}</span> : null}
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-4 leading-relaxed">
                Master Core & Advanced Python, Object-Oriented Programming (OOPs), Data Structures, File I/O, SQL Integration, and Web Scraping in {locName} with 100% Placement Assistance.
              </p>

              {/* Urgency & Limited Seats Timer */}
              <BatchUrgencyBanner batchDate="Upcoming Monday" seatsRemaining={5} />

              {/* Badges / Rating & EMI */}
              <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700/80 px-3.5 py-2 rounded-xl text-amber-400 font-bold shadow-sm">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(2,900+ Reviews on Google)</span>
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

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal('Python Master Program')}
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 text-sm tracking-wide"
                >
                  <i className="fas fa-paper-plane"></i> Enroll Now & Get 30% OFF
                </button>
                <button
                  onClick={() => openEnrollModal('Python Master Program - Syllabus')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2 text-sm"
                >
                  <i className="fas fa-file-download"></i> Download Detailed Syllabus (PDF)
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-800 border-2 border-amber-100 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-100">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900">Book Free Python Counselling</h3>
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
              <p className="text-3xl md:text-4xl font-black text-amber-600 mb-1">15,800+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Python Students Trained</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-yellow-600 mb-1">8,900+</p>
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

      {/* Python Tools & Tech */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              PYTHON TECH STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Python Tools & Libraries You Will Master
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {pythonTools.map((tool, idx) => (
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
              Comprehensive Python Curriculum
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              PRACTICAL PYTHON PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Live Capstone Projects You Will Build
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
                Earn ISO 9001:2015 Certified Python Professional Certification
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Receive an official, lifetime-valid LearnMore Technologies Python Professional Certificate accredited by international quality standards.
              </p>
              <button
                onClick={() => openEnrollModal('Python Certification Sample Request')}
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
                <p className="text-xs text-amber-300 font-extrabold uppercase tracking-widest mb-4">Python Professional Certified</p>
                <div className="pt-4 border-t border-slate-700 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-PY-2026
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-800 font-extrabold text-xs uppercase tracking-wider mb-3 border border-amber-200">
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
                  <th className="py-5 px-6 bg-amber-50 text-amber-900 font-extrabold border-t-2 border-l border-r border-amber-300 w-1/3 text-base">
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
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Senior Python Architects with 12+ Yrs Software Engineering Background
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers or freshers with theoretical knowledge only
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Practical & Lab Sessions</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Practical Python Coding, Scrapers & Scripting Labs
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Heavy PowerPoint slides with minimal lab practice time
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Placement Call Guarantee & 300+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Only basic resume forwarding without interview guarantee
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 3 Real-World Projects (Automation Scraper, REST APIs, OOPs App)
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Basic dummy sample projects or no live deployment
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Batch Flexibility & Session Access</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Classroom (Bangalore), Online, Weekend + Lifetime Recording Access
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Rigid batch timings with limited/no class recordings
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Certification Accreditation</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
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
      <UpcomingBatchSchedule courseName="Python Training Program" />

      {/* Recent Student Placements Section */}
      <RecentPlacementsSection courseName="Python Training Program" />

      {/* Sticky Mobile CTA Bar for Google Ads Conversions */}
      <StickyMobileCTA courseName="Python Training Program" />

      <Footer />
    </div>
  );
}
