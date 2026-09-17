'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StickyMobileCTA from '@/components/common/StickyMobileCTA';
import UpcomingBatchSchedule from '@/components/common/UpcomingBatchSchedule';
import RecentPlacementsSection from '@/components/common/RecentPlacementsSection';
import BatchUrgencyBanner from '@/components/common/BatchUrgencyBanner';
import { useEnroll } from '@/context/EnrollContext';

interface SnowflakeTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function SnowflakeTrainingClient({ location }: SnowflakeTrainingClientProps = {}) {
  const { openEnrollModal } = useEnroll();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const locName = location?.name || 'Bangalore';

  // Lead capture form state
  const [inlineForm, setInlineForm] = useState({
    name: '',
    phone: '',
    email: '',
    trainingMode: 'Classroom Training',
    city: locName,
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
          program: `Snowflake Training in ${locName}`,
          trainingMode: inlineForm.trainingMode,
          city: inlineForm.city,
          source: 'hero-lead-form'
        })
      });
      if (res.ok) {
        window.location.href = '/thank-you';
      } else {
        openEnrollModal(`Snowflake Training in ${locName}`);
      }
    } catch (err) {
      console.error(err);
      openEnrollModal(`Snowflake Training in ${locName}`);
    } finally {
      setIsInlineSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const snowflakeTools = [
    { name: 'Virtual Warehouses', icon: 'fas fa-snowflake', desc: 'Compute Scaling & Multi-Cluster Setup' },
    { name: 'SnowSQL CLI & Snowsight', icon: 'fas fa-terminal', desc: 'Enterprise Command Line Execution' },
    { name: 'Snowpipe Streaming', icon: 'fas fa-stream', desc: 'Continuous Event-Driven Data Loading' },
    { name: 'Snowpark Python', icon: 'fab fa-python', desc: 'Programmatic DataFrame Operations' },
    { name: 'Time Travel & Zero-Copy', icon: 'fas fa-history', desc: 'Instant Cloning without Storage Cost' },
    { name: 'Streams & Tasks (CDC)', icon: 'fas fa-tasks', desc: 'Automated Change Data Capture' },
    { name: 'Data Sharing & Marketplace', icon: 'fas fa-share-alt', desc: 'Secure Real-Time Data Exchange' },
    { name: 'dbt + Snowflake', icon: 'fas fa-cubes', desc: 'Modern Analytics Engineering' },
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Snowflake Architecture & Cloud Fundamentals',
      topics: [
        'Snowflake Tri-Layer Architecture: Storage, Virtual Warehouse Compute & Cloud Services',
        'Snowsight Modern Web Interface & SnowSQL CLI Configuration',
        'Virtual Warehouses: Sizing, Scaling Policies, Multi-Cluster Warehouses & Resource Monitors',
        'Databases, Schemas, Internal/External/Temporary/Transient Tables',
        'Semi-Structured Data Handling: VARIANT, OBJECT, ARRAY & JSON Path Queries'
      ]
    },
    {
      title: 'Module 2: Bulk & Continuous Data Loading (Snowpipe)',
      topics: [
        'Staging: Internal (User, Table, Named) & External Stages (AWS S3, Azure Blob, GCP GCS)',
        'Bulk Loading with COPY INTO Command, File Formats & Error Validation Options',
        'JSON/Parquet/Avro Ingestion & FLATTEN Functions for Semi-Structured Parsing',
        'Continuous Ingestion with Snowpipe & Cloud Storage Event Notifications (SQS/SNS)',
        'Data Unloading: Exporting Structured Datasets to Cloud Object Storage'
      ]
    },
    {
      title: 'Module 3: Continuous Data Protection, Security & Governance',
      topics: [
        'Continuous Data Protection (CDP): Time Travel & Fail-safe Architecture',
        'Zero-Copy Cloning: Cloning Databases, Schemas & Tables with Zero Added Storage Cost',
        'Access Control: Role-Based Access Control (RBAC), Custom Roles & Hierarchy',
        'Data Governance: Column-Level Dynamic Data Masking & Row Access Policies',
        'Secure Data Sharing: Direct Shares, Reader Accounts & Snowflake Marketplace'
      ]
    },
    {
      title: 'Module 4: Change Data Capture (CDC) with Streams & Tasks',
      topics: [
        'Snowflake Streams: Standard, Append-only Streams & CDC Metadata Tracking',
        'Snowflake Tasks: Scheduling SQL Operations, CRON Scheduling & Task DAGs',
        'Building Automated Serverless ELT Pipelines with Streams + Tasks',
        'Stored Procedures (JavaScript, Python, SQL) & User-Defined Functions (UDFs)',
        'Task Error Notifications, Alerts & Pipeline Monitoring Best Practices'
      ]
    },
    {
      title: 'Module 5: Snowpark Python & High-Performance Optimization',
      topics: [
        'Introduction to Snowpark: Snowpark Python API & DataFrame Operations',
        'Pushdown Compute: Executing Python Analytics natively on Snowflake Warehouses',
        'Writing Vectorized UDFs & Snowpark Stored Procedures for Data Engineering',
        'Micro-partitions, Data Clustering Keys & Avoiding Partition Skew',
        'Query Profile Deep-Dive, Result/Metadata Caching & Warehouse Cost Optimization'
      ]
    },
    {
      title: 'Module 6: Capstone Project, SnowPro Core Certification & Placements',
      topics: [
        'SnowPro Core (COF-C02) Certification Practice Exams & Question Breakdown',
        'Integrating Snowflake with dbt (Dataform), Power BI, Tableau & Python',
        'Enterprise Cloud Data Warehouse Architecture Design Review',
        'Resume Optimization, GitHub Data Engineering Portfolio & Mock Interviews',
        '100% Dedicated Placement Assistance with 300+ Partner Companies'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'Real-Time E-Commerce Streaming Pipeline with Snowpipe & S3',
      desc: 'Built an end-to-end continuous ingestion pipeline connecting AWS S3 event notifications to Snowpipe, ingesting multi-gigabyte JSON clickstream events into Snowflake.',
      tags: ['Snowpipe', 'AWS S3', 'JSON VARIANT', 'Streams & Tasks']
    },
    {
      title: 'Automated CDC Data Mart with Snowflake Streams & Tasks',
      desc: 'Engineered an automated serverless Change Data Capture (CDC) pipeline parsing append-only and standard streams to update dimensional Star-Schema data marts.',
      tags: ['Streams', 'Tasks', 'CDC', 'Data Mart']
    },
    {
      title: 'PySpark to Snowpark Python Data Transformation Migration',
      desc: 'Migrated heavy legacy PySpark batch jobs to Snowpark Python DataFrames, executing pushdown compute directly inside Snowflake compute clusters with 60% cost reduction.',
      tags: ['Snowpark', 'Python UDFs', 'Performance Tuning', 'dbt']
    }
  ];

  const faqs = [
    {
      q: `Why choose LearnMore Technologies for Snowflake Training in ${locName}?`,
      a: `LearnMore Technologies is recognized as the #1 institute for Snowflake Training in ${locName}. Our trainers are Certified Snowflake Architects with 12+ years of enterprise data warehouse experience. We provide 100% practical lab-driven learning, Snowpipe streaming projects, Snowpark Python, SnowPro Core certification preparation, and 100% placement support.`
    },
    {
      q: `What prerequisites are required for Snowflake Training in ${locName}?`,
      a: `Basic knowledge of SQL queries and fundamental database concepts is sufficient for Snowflake Training in ${locName}. Prior experience with cloud platforms (AWS, Azure, GCP) or Python is helpful but not mandatory, as we cover cloud storage staging and SnowSQL from the basics.`
    },
    {
      q: `Does Snowflake Training in ${locName} prepare for the SnowPro Core Certification?`,
      a: `Yes! Our Snowflake Training in ${locName} includes comprehensive preparation for the official SnowPro Core (COF-C02) Certification exam, with topic-wise practice tests, architecture dumps, and mock question walkthroughs.`
    },
    {
      q: `What is the average salary after completing Snowflake Training in ${locName}?`,
      a: `Snowflake certified professionals and data engineers in Bangalore command high salaries. Freshers typically start between ₹6.5 LPA to ₹11 LPA, while professionals with 3+ years experience in Snowflake and Snowpark earn ₹16 LPA to ₹30+ LPA.`
    },
    {
      q: `What batch options are available for Snowflake Training in ${locName}?`,
      a: `We offer weekday classroom sessions for Snowflake Training in ${locName}, live online interactive batches, and weekend batches specifically structured for working data engineers and software professionals.`
    },
    {
      q: `Does Snowflake Training in ${locName} provide 100% Placement Assistance?`,
      a: `Yes, enrolling in Snowflake Training in ${locName} includes 100% placement assistance with data engineering resume building, GitHub portfolio review, technical mock interviews, and direct interview referrals to 300+ hiring partner companies.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Header />
      <BatchUrgencyBanner />

      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600/15 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/courses" className="hover:text-cyan-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">Snowflake Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-5">
                <i className="fas fa-snowflake"></i> Ranked #1 Institute for Snowflake Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-white">
                Snowflake Training in <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">
                LearnMore Technologies offers the best <strong>Snowflake Training in {locName}</strong> with 100% placement assistance. Master Snowflake Architecture, SnowSQL, Continuous Snowpipe Ingestion, Snowpark Python, Zero-Copy Cloning, Streams & Tasks, and SnowPro Core Certification in our practical <strong>Snowflake Training in {locName}</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-amber-400 font-bold">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(3,100+ Reviews for Snowflake Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-emerald-400 font-bold">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
              </div>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-snowflake text-cyan-400 text-sm" />
                  <span>Virtual Warehouses & Scaling</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-stream text-sky-400 text-sm" />
                  <span>Continuous Snowpipe Ingestion</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fab fa-python text-yellow-400 text-sm" />
                  <span>Snowpark Python & DataFrames</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-history text-purple-400 text-sm" />
                  <span>Time Travel & Zero-Copy</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-tasks text-emerald-400 text-sm" />
                  <span>Streams & Tasks (CDC)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-certificate text-pink-400 text-sm" />
                  <span>SnowPro Core Exam Prep</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal(`Snowflake Training in ${locName}`)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-paper-plane"></i> Enroll for Snowflake Training in {locName}
                </button>
                <button
                  onClick={() => openEnrollModal(`Snowflake Training Syllabus - ${locName}`)}
                  className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-file-download text-cyan-400"></i> Download Snowflake Training in {locName} Syllabus
                </button>
              </div>
            </div>

            {/* Lead Capture Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-100 border border-cyan-500/30 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-800">
                  <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full mb-2 tracking-wider">
                    Limited Seats Batch
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white">Book Free Snowflake Counselling</h3>
                  <p className="text-xs text-slate-400 mt-1">Get 1-on-1 guidance for Snowflake Training in {locName}</p>
                </div>

                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={inlineForm.name}
                      onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase mb-1">Mobile No *</label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="e.g. 9876543210"
                      value={inlineForm.phone}
                      onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@gmail.com"
                      value={inlineForm.email}
                      onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase mb-1">Training Mode</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Classroom Training">{`Classroom Training (${locName})`}</option>
                      <option value="Live Online Training">Live Online Interactive</option>
                      <option value="Weekend Batch">Weekend Batch for Working Pros</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-950 font-black py-3.5 rounded-xl transition text-sm shadow-lg shadow-cyan-500/20"
                  >
                    {isInlineSubmitting ? 'SUBMITTING...' : `JOIN SNOWFLAKE TRAINING IN ${locName.toUpperCase()}`}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-slate-900 border-b border-slate-800 py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 border-r border-slate-800 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-cyan-400 mb-1">7,800+</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">Snowflake Engineers Trained</p>
            </div>
            <div className="p-4 border-r border-slate-800 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-sky-400 mb-1">98.2%</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">Placement Record</p>
            </div>
            <div className="p-4 border-r border-slate-800 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">300+</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">Data Hiring Partners</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-black text-amber-400 mb-1">₹16.8 LPA</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">Average Package</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-cyan-500/20">
              MODERN DATA STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Tools & Features You Will Master in Snowflake Training in {locName}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {snowflakeTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center hover:shadow-xl hover:border-cyan-500/40 transition duration-300">
                <div className="w-14 h-14 mx-auto bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center text-2xl mb-4">
                  <i className={tool.icon}></i>
                </div>
                <h3 className="font-extrabold text-white text-base mb-1">{tool.name}</h3>
                <p className="text-xs text-slate-400 font-medium">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Grid */}
      <section className="py-20 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-cyan-500/20">
              INDUSTRY-ALIGNED SYLLABUS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Comprehensive Curriculum for Snowflake Training in {locName}
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              From Snowflake tri-layer architecture to Snowpipe, Snowpark Python, Time Travel, Streams & Tasks, and SnowPro Core preparation in our Snowflake Training in {locName}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-md hover:border-slate-700 transition">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((t, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                      <i className="fas fa-check-circle text-cyan-500"></i> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capstone Projects Section */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-cyan-500/20">
              ENTERPRISE CAPSTONES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Live Projects You Will Build in Snowflake Training in {locName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-md flex flex-col justify-between hover:border-cyan-500/40 transition">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 rounded-2xl flex items-center justify-center text-xl font-black mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Deep Content Section */}
      <section className="py-20 bg-slate-900/70 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Best Snowflake Training in {locName} – LearnMore Technologies
            </h2>
            <p>
              Looking for the premier <strong>Snowflake Training in {locName}</strong>? LearnMore Technologies offers an industry-leading <strong>Snowflake Training in {locName}</strong> designed for data engineers, ETL developers, SQL professionals, and cloud data warehouse aspirants.
            </p>
            <p>
              Our practical <strong>Snowflake Training in {locName}</strong> delivers comprehensive hands-on exposure to Snowflake Cloud Data Warehousing, including Virtual Warehouse sizing, multi-cluster compute, Snowpipe continuous streaming ingestion, Snowpark Python DataFrames, Zero-Copy Cloning, and Change Data Capture (CDC) with Streams & Tasks.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              Why Join Our Snowflake Training in {locName}?
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-cyan-500"></i> 100% Practical Cloud Warehouse Labs in <strong>Snowflake Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-cyan-500"></i> Certified Snowflake Architects as Mentors in <strong>Snowflake Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-cyan-500"></i> 100% Placement Support & Referral Tie-ups with <strong>Snowflake Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-cyan-500"></i> Real-time Snowpipe & Snowpark Capstone Projects in <strong>Snowflake Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-cyan-500"></i> Official SnowPro Core (COF-C02) Exam Prep with <strong>Snowflake Training in {locName}</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ISO Certification Preview */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-cyan-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certified Snowflake Data Engineer Certification in {locName}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Receive an official, lifetime-valid LearnMore Technologies Snowflake Engineer Certificate accredited by international quality standards upon completing Snowflake Training in {locName}.
              </p>
              <button
                onClick={() => openEnrollModal(`Snowflake Certification Sample - ${locName}`)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-900 border-2 border-cyan-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="w-20 h-20 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-cyan-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-cyan-300 font-extrabold uppercase tracking-widest mb-4">Certified Snowflake Data Engineer</p>
                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-SNOWFLAKE-2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-cyan-500/30">
              WHY WE ARE #1
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              LearnMore Technologies vs Other Institutes for Snowflake Training in {locName}
            </h2>
            <p className="text-slate-400 mt-2 text-base">
              See why thousands of data engineers choose LearnMore Technologies for genuine Snowflake mastery.
            </p>
          </div>

          <div className="overflow-x-auto shadow-2xl rounded-3xl border border-slate-800">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 text-sm uppercase tracking-wider bg-slate-900/80">
                  <th className="py-5 px-6 text-slate-400 font-bold w-1/3">Feature / Comparison</th>
                  <th className="py-5 px-6 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 text-cyan-400 font-extrabold border-t-2 border-l border-r border-cyan-500 w-1/3 text-base">
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
                  <td className="py-5 px-6 bg-cyan-950/20 border-l border-r border-cyan-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Certified Snowflake Architects with 12+ Yrs MNC Experience
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers with basic SQL knowledge only
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Snowpipe & Snowpark Labs</td>
                  <td className="py-5 px-6 bg-cyan-950/20 border-l border-r border-cyan-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Hands-on Snowpipe Streaming + Snowpark Python DataFrames
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Basic web UI queries without programmatic automation
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-cyan-950/20 border-l border-r border-cyan-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 100% Placement Support & 300+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> No dedicated Snowflake placement calls
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-cyan-950/20 border-l border-r border-cyan-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 3 End-to-End Enterprise Data Warehouse & CDC Pipelines
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Simple toy sample tables without cloud stage ingestion
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">SnowPro Core Certification Prep</td>
                  <td className="py-5 px-6 bg-cyan-950/20 border-l border-r border-cyan-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Complete COF-C02 Exam Practice Tests & Question Walkthroughs
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> No certification guidance provided
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Upcoming Batch Schedule Component */}
      <UpcomingBatchSchedule courseName={`Snowflake Training in ${locName}`} />

      {/* Recent Placements Component */}
      <RecentPlacementsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-cyan-500/20">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Snowflake Training in {locName} - FAQs
            </h2>
            <p className="text-slate-400 text-sm">
              Everything you need to know about our comprehensive Snowflake Training in {locName}.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-cyan-400 transition"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs transition-transform ${openFaq === idx ? 'rotate-180 text-cyan-400' : 'text-slate-500'}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Strip */}
      <section className="py-16 bg-gradient-to-r from-cyan-950/80 via-slate-900 to-cyan-950/80 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Transform Your Data Career with the Best Snowflake Training in {locName}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Join the most comprehensive Snowflake Training in {locName}. Master Cloud Data Warehousing, Snowpipe, Snowpark, and become a Certified Snowflake Engineer.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => openEnrollModal(`Snowflake Training in ${locName}`)}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/20 transition-all transform active:scale-[0.98]"
            >
              ENROLL NOW - CLAIM FREE DEMO
            </button>
            <a
              href="tel:+919036524555"
              className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
            >
              <i className="fas fa-phone-alt text-cyan-400" />
              Speak to Senior Data Mentor
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA
        courseName={`Snowflake Training in ${locName}`}
        phoneNumber="+919036524555"
      />
    </div>
  );
}
