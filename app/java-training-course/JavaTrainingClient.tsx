'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useEnroll } from '@/context/EnrollContext';

interface JavaTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function JavaTrainingClient({ location }: JavaTrainingClientProps = {}) {
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
          program: 'Java Master Program',
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

  const javaTools = [
    { name: 'JDK 21 LTS', icon: 'fab fa-java', desc: 'Modern Java Platform' },
    { name: 'Eclipse / IntelliJ', icon: 'fas fa-code', desc: 'Enterprise Java IDEs' },
    { name: 'MySQL Database', icon: 'fas fa-database', desc: 'RDBMS Integration' },
    { name: 'JDBC Driver', icon: 'fas fa-plug', desc: 'Database Connectivity' },
    { name: 'Apache Maven', icon: 'fas fa-box', desc: 'Dependency Management' },
    { name: 'Git & GitHub', icon: 'fab fa-github', desc: 'Version Control Workflows' },
    { name: 'JUnit 5', icon: 'fas fa-vial', desc: 'Unit Testing Framework' },
    { name: 'Data Structures', icon: 'fas fa-[#f97316]', desc: 'Algorithms & Problem Solving' }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Java Language Fundamentals & JVM Architecture',
      topics: [
        'Java History, JVM, JRE, JDK Architecture & Execution Lifecycle',
        'Variables, Primitive Data Types, Typecasting & Memory Allocation',
        'Operators: Arithmetic, Relational, Logical, Assignment & Bitwise',
        'Control Statements: if/else, switch-case, for, while, do-while loops'
      ]
    },
    {
      title: 'Module 2: Object-Oriented Programming (OOPs) in Java',
      topics: [
        'Classes, Objects, Methods, Constructors & Memory Heap/Stack',
        'Inheritance (Single, Multilevel, Hierarchical) & Method Overriding',
        'Polymorphism (Method Overloading vs Overriding) & Dynamic Binding',
        'Encapsulation, Access Modifiers (private, public, protected, default)',
        'Abstraction using Abstract Classes & Interfaces'
      ]
    },
    {
      title: 'Module 3: Packages, String Handling & Exception Handling',
      topics: [
        'Java Packages, Imports, String Class, StringBuilder & StringBuffer',
        'Exception Handling Architecture: try, catch, finally, throw, throws',
        'Custom Exception Creation & Best Logging Practices'
      ]
    },
    {
      title: 'Module 4: Java Collections Framework & Generics',
      topics: [
        'List Interface: ArrayList, LinkedList, Vector & Stack',
        'Set Interface: HashSet, LinkedHashSet & TreeSet',
        'Map Interface: HashMap, LinkedHashMap & TreeMap',
        'Iterator, ListIterator, Comparable vs Comparator Interfaces'
      ]
    },
    {
      title: 'Module 5: Multithreading, File I/O & JDBC Database Connectivity',
      topics: [
        'Multithreading: Thread Class, Runnable Interface & Thread Lifecycle',
        'Thread Synchronization, Inter-Thread Communication & Locks',
        'File Handling: Streams, Reader/Writer & File I/O Operations',
        'JDBC Architecture: Driver Manager, Connection, Statement, PreparedStatement & ResultSets'
      ]
    },
    {
      title: 'Module 6: Enterprise Case Study & Placement Preparation',
      topics: [
        'Writing Production-Ready Clean Code & Design Patterns (Singleton, Factory)',
        'Git Version Control & Maven Project Building',
        'Java Technical Mock Interviews, Data Structures Practice & Coding Rounds',
        '100% Placement Call Guarantee with 300+ Partner IT Companies'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'Enterprise Banking Management System (Java & JDBC)',
      desc: 'Built an object-oriented Java banking system with multi-threading, custom exception handling, and MySQL database connection.',
      tags: ['Java Core', 'JDBC', 'MySQL', 'OOPs']
    },
    {
      title: 'Multi-Threaded Server & Client Chat Application',
      desc: 'Created a real-time socket programming multi-threaded application handling concurrent user connections.',
      tags: ['Multithreading', 'Sockets', 'Networking', 'IO']
    },
    {
      title: 'Hospital Management & Patient Records Console App',
      desc: 'Developed a robust Java console app utilizing collections, file stream logging, and Maven build automation.',
      tags: ['Collections', 'Maven', 'File I/O', 'JUnit']
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
            <Link href="/" className="hover:text-orange-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/course" className="hover:text-orange-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">Java Training Course {location ? `in ${location.name}` : ''}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-5">
                <i className="fab fa-java"></i> Ranked #1 Java Training Institute in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                Advanced Certification in <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">Core Java Programming</span> {location ? <span className="text-white block mt-1 text-2xl md:text-3xl font-extrabold">in {location.name}</span> : null}
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">
                Master Core Java, Object-Oriented Programming (OOPs), Multithreading, Collections Framework, JDBC, and Data Structures in {locName} with 100% Placement Assistance.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-amber-400 font-bold">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(3,000+ Reviews)</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-emerald-400 font-bold">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal('Java Master Program')}
                  className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-paper-plane"></i> Enroll Now & Get 30% OFF
                </button>
                <button
                  onClick={() => openEnrollModal('Java Master Program - Syllabus')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-file-download"></i> Download Full Syllabus
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-800 border-2 border-orange-100 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-100">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900">Book Free Java Counselling</h3>
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-orange-600"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-orange-600"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-orange-600"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-3.5 rounded-xl transition text-sm"
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
              <p className="text-3xl md:text-4xl font-black text-orange-600 mb-1">15,400+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Java Students Trained</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-amber-600 mb-1">8,700+</p>
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

      {/* Java Tools */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              JAVA TECH STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Java Development Tools You Will Master
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {javaTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-orange-400 transition duration-300">
                <div className="w-14 h-14 mx-auto bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center text-2xl mb-4">
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
              Comprehensive Java Curriculum
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((t, i) => (
                    <li key={i} className="text-slate-700 text-sm flex items-center gap-2">
                      <i className="fas fa-check-circle text-orange-500"></i> {t}
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              PRACTICAL JAVA PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Live Capstone Java Projects You Will Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-orange-100 text-orange-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
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
              <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 text-orange-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-orange-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certified Java Professional Certification
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Receive an official, lifetime-valid LearnMore Technologies Java Professional Certificate accredited by international quality standards.
              </p>
              <button
                onClick={() => openEnrollModal('Java Certification Sample Request')}
                className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-800 border-2 border-orange-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="w-20 h-20 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-orange-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-orange-300 font-extrabold uppercase tracking-widest mb-4">Java Professional Certified</p>
                <div className="pt-4 border-t border-slate-700 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-JAVA-2026
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-orange-500/30">
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
                  <th className="py-5 px-6 bg-gradient-to-r from-orange-600/40 to-amber-600/40 text-orange-400 font-extrabold border-t-2 border-l border-r border-orange-500 w-1/3 text-base">
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
                  <td className="py-5 px-6 bg-orange-950/20 border-l border-r border-orange-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Senior Java Architects with 14+ Yrs Enterprise Experience
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers or freshers with theoretical knowledge only
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Practical & Lab Sessions</td>
                  <td className="py-5 px-6 bg-orange-950/20 border-l border-r border-orange-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 100% Practical Java Core, OOPs, Collections & JDBC Labs
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Heavy PowerPoint slides with minimal lab practice time
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-orange-950/20 border-l border-r border-orange-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 100% Placement Call Guarantee & 300+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Only basic resume forwarding without interview guarantee
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-orange-950/20 border-l border-r border-orange-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 3 End-to-End Enterprise Java & Banking System Projects
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Basic dummy sample projects or no live deployment
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Batch Flexibility & Session Access</td>
                  <td className="py-5 px-6 bg-orange-950/20 border-l border-r border-orange-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Classroom (Bangalore), Online, Weekend + Lifetime Recording Access
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Rigid batch timings with limited/no class recordings
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Certification Accreditation</td>
                  <td className="py-5 px-6 bg-orange-950/20 border-l border-r border-orange-500/30 text-emerald-400 font-semibold">
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
