'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StickyMobileCTA from '@/components/common/StickyMobileCTA';
import BatchUrgencyBanner from '@/components/common/BatchUrgencyBanner';
import UpcomingBatchSchedule from '@/components/common/UpcomingBatchSchedule';
import RecentPlacementsSection from '@/components/common/RecentPlacementsSection';
import LocationSeoContentBlock from '@/components/common/LocationSeoContentBlock';
import { useEnroll } from '@/context/EnrollContext';

interface PowerBiTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function PowerBiTrainingClient({ location }: PowerBiTrainingClientProps = {}) {
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
          program: 'Power BI & Business Intelligence Master Program',
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

  const biTools = [
    { name: 'Power BI Desktop', icon: 'fas fa-desktop', desc: 'Interactive Visual Authoring' },
    { name: 'Power Query & M', icon: 'fas fa-filter', desc: 'Data Ingestion, Cleansing & ETL' },
    { name: 'DAX Expressions', icon: 'fas fa-calculator', desc: 'Calculated Measures & Intelligence' },
    { name: 'Data Modeling', icon: 'fas fa-project-diagram', desc: 'Star Schema & Relationships' },
    { name: 'Power BI Service', icon: 'fas fa-cloud', desc: 'Cloud Workspaces & Apps' },
    { name: 'Advanced SQL for BI', icon: 'fas fa-database', desc: 'Queries, Views & Aggregations' },
    { name: 'Row-Level Security', icon: 'fas fa-shield-alt', desc: 'Role-Based Data Governance' },
    { name: 'AI Visuals & Copilot', icon: 'fas fa-robot', desc: 'Smart Narratives & AI Insights' }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Introduction to Business Intelligence & Power BI Architecture',
      topics: [
        'Overview of Business Intelligence & Analytics Lifecycle',
        'Power BI Ecosystem: Power BI Desktop, Power BI Service & Mobile Apps',
        'Installation, Interface Walkthrough & Connecting to Various Data Sources',
        'Connecting to Excel, CSV, SQL Databases, Web APIs & Cloud Repositories',
        'Building Your First Quick Interactive Dashboard',
        'Live Lab: Connecting Multiple Disparate Data Sources into Power BI'
      ]
    },
    {
      title: 'Module 2: Data Extraction, Cleansing & Transformation (Power Query)',
      topics: [
        'Power Query Editor: Applied Steps, Query Dependencies & Performance',
        'Data Types, Handling Missing Data, Nulls, Duplicates & Outliers',
        'Splitting, Merging, Pivoting & Unpivoting Columns',
        'Conditional Columns, Custom Columns & Group By Aggregations',
        'Introduction to M Language: Syntax, Functions & Query Optimization',
        'Live Project: Cleaning & Transforming Messy Multi-Year Sales Raw Data'
      ]
    },
    {
      title: 'Module 3: Data Modeling & Schema Design (Star & Snowflake Schema)',
      topics: [
        'Data Modeling Principles: Normalization vs Denormalization in BI',
        'Fact Tables, Dimension Tables & Cardinality (1:1, 1:Many, Many:Many)',
        'Active vs Inactive Relationships & Cross-Filter Direction Management',
        'Creating Date Tables (Calendar Dimensions) & Sorting by Columns',
        'Managing Model Complexity & Best Practices for Fast Query Execution',
        'Live Project: Designing an Enterprise Retail Dimensional Data Model'
      ]
    },
    {
      title: 'Module 4: DAX Mastery (Data Analysis Expressions)',
      topics: [
        'DAX Fundamentals: Calculated Columns vs Measures & Evaluation Context',
        'Aggregation Functions: SUM, SUMX, AVERAGE, COUNTROWS, DISTINCTCOUNT',
        'Logical & Filter Functions: IF, SWITCH, FILTER, ALL, ALLEXCEPT & CALCULATE',
        'Time Intelligence Functions: YTD, QTD, MTD, SAMEPERIODLASTYEAR & DATEADD',
        'Advanced DAX: Variables (VAR/RETURN), Ranking (RANKX) & Semi-Additive Measures',
        'Live Lab: Writing 50+ Real-World Business KPIs using Advanced DAX'
      ]
    },
    {
      title: 'Module 5: Advanced Visualizations, Storytelling & Dashboards',
      topics: [
        'Core Visuals: Bar, Line, Area, Waterfall, Scatter & Gauge Charts',
        'Decomposition Tree, Key Influencers, Q&A AI Visuals & Anomaly Detection',
        'Bookmarks, Selection Panes, Page Navigation & Custom Tooltips',
        'Drill-Through Actions, Slicers, Sync Slicers & Conditional Formatting Rules',
        'Designing Mobile Responsive Layouts & Executive Summary Storyboards',
        'Live Project: Interactive Executive C-Level Financial Performance Dashboard'
      ]
    },
    {
      title: 'Module 6: Power BI Service, Security, Gateways & PL-300 Certification',
      topics: [
        'Publishing Reports to Power BI Service Workspaces & Creating Dashboards',
        'On-Premises Data Gateway Setup, Scheduled Refresh & Incremental Refresh',
        'Row-Level Security (RLS): Static & Dynamic RLS with USERPRINCIPALNAME()',
        'Sharing, Collaboration, Power BI Apps, Subscriptions & Export Options',
        'Microsoft PL-300 (Power BI Data Analyst) Official Certification Exam Prep & Mock Tests',
        'Capstone Project: Complete Enterprise End-to-End Business Intelligence Suite'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'Executive Sales & Profitability Analytics Dashboard',
      desc: 'Architected an end-to-end interactive dashboard analyzing revenue trends, profit margins, sales reps KPIs, and variance analysis using DAX Time Intelligence and dynamic bookmarks.',
      tags: ['Power BI Desktop', 'DAX Time Intelligence', 'Power Query', 'KPIs']
    },
    {
      title: 'Global Supply Chain & Inventory Optimization Suite',
      desc: 'Built a real-time logistics and inventory tracking dashboard connected to SQL Server with automated incremental refresh, stockout alerts, and vendor performance scoring.',
      tags: ['SQL Server', 'Data Gateways', 'Supply Chain BI', 'Alerts']
    },
    {
      title: 'Banking & Financial Risk Analysis with Dynamic Row-Level Security',
      desc: 'Developed a high-security banking dashboard with dynamic RLS ensuring branch managers only access their territory data, with automated scheduled PDF reports.',
      tags: ['Dynamic RLS', 'Power BI Service', 'Financial Modeling', 'PL-300']
    }
  ];

  const hiringCompanies = [
    { name: 'Deloitte', logo: '/images/companies/deloitte.webp' },
    { name: 'EY', logo: '/images/companies/ey.webp' },
    { name: 'PwC', logo: '/images/companies/pwc.webp' },
    { name: 'KPMG', logo: '/images/companies/kpmg.webp' },
    { name: 'Accenture', logo: '/images/companies/accenture.webp' },
    { name: 'TCS', logo: '/images/companies/tcs.webp' },
    { name: 'Infosys', logo: '/images/companies/infosys.webp' },
    { name: 'Wipro', logo: '/images/companies/wipro.webp' }
  ];

  const faqs = [
    {
      q: `Why enroll at LearnMore Technologies for Power BI Training in ${locName}?`,
      a: `LearnMore Technologies is recognized as the #1 institute for Power BI Training in ${locName}. Our trainers are Microsoft Certified Data Analysts with 12+ years of enterprise business intelligence experience. We offer hands-on project-driven training, 100% placement support, and official Microsoft PL-300 certification guidance.`
    },
    {
      q: `What is the average salary after completing Power BI Training in ${locName}?`,
      a: `Freshers completing Power BI Training in ${locName} start at ₹4.8 LPA to ₹8.5 LPA. Experienced Power BI Developers and BI Consultants with 2-4 years experience regularly secure ₹10 LPA to ₹22+ LPA across top Bangalore MNCs and Big 4 consulting firms.`
    },
    {
      q: `Do I need coding knowledge to learn Power BI in ${locName}?`,
      a: `No prior programming knowledge is required! Power BI is a low-code/no-code business intelligence tool. We teach you everything from Excel/SQL fundamentals to Power Query ETL, DAX formulas, and dashboard design step-by-step.`
    },
    {
      q: `Does Power BI Training in ${locName} include Microsoft PL-300 Certification prep?`,
      a: `Yes! Our Power BI Training in ${locName} provides complete preparation for the official Microsoft Certified: Power BI Data Analyst Associate (PL-300) exam, including mock test papers and real-world scenario questions.`
    },
    {
      q: `What batch schedules are available for Power BI Training in ${locName}?`,
      a: `We provide weekday classroom sessions at our Bangalore center, interactive live online classes, and flexible weekend batches for working professionals.`
    },
    {
      q: `Does Power BI Training in ${locName} provide 100% Placement Assistance?`,
      a: `Yes, enrolling in Power BI Training in ${locName} includes 100% placement support with resume optimization, mock technical interview rounds, LinkedIn branding, and direct interview calls across 300+ hiring partner companies.`
    }
  ];

  const testimonials = [
    {
      name: 'Priyanka Sharma',
      role: 'Power BI Developer at Deloitte',
      package: '8.2 LPA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'The DAX formulas and Power Query transformations taught at LearnMore Technologies were incredible! I cleared my Microsoft PL-300 exam and got placed at Deloitte within a month of completing the course.'
    },
    {
      name: 'Ramesh Patel',
      role: 'Business Intelligence Analyst at PwC',
      package: '7.5 LPA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'Coming from a non-technical background, I was worried about transitioning into BI. LearnMore mentors made DAX and Data Modeling so easy to understand with hands-on live retail datasets!'
    },
    {
      name: 'Aditya Hegde',
      role: 'Senior BI Consultant at Accenture',
      package: '10.5 LPA',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      text: 'Exceptional training! Practical labs on Row-Level Security, On-Premises Gateways, and Executive Storyboarding gave me total confidence during client interviews.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/courses/analytics-hero.webp"
            alt="Power BI Training Background"
            className="w-full h-full object-cover opacity-60 md:opacity-75 scale-100 transform transition duration-500"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-amber-950/80 to-slate-950/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/course" className="hover:text-amber-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">Power BI Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-5">
                <i className="fas fa-chart-bar"></i> Ranked #1 Institute for Power BI Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-white">
                Power BI Training in <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-4 leading-relaxed">
                LearnMore Technologies offers the best <strong>Power BI Training in {locName}</strong> with 100% placement assistance. Master Power Query ETL, DAX Formulas, Data Modeling, Interactive Dashboards, Power BI Service, and PL-300 Certification with certified mentors in our <strong>Power BI Training in {locName}</strong> program.
              </p>

              {/* Urgency & Limited Seats Timer */}
              <BatchUrgencyBanner batchDate="Upcoming Monday" seatsRemaining={5} />

              {/* Badges / Rating & EMI */}
              <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-750 px-3.5 py-2 rounded-xl text-amber-400 font-bold shadow-sm">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(3,600+ Reviews for Power BI Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-750 px-3.5 py-2 rounded-xl text-emerald-400 font-bold shadow-sm">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-amber-500/30 px-3.5 py-2 rounded-xl text-amber-300 font-bold shadow-sm">
                  <i className="fas fa-credit-card text-amber-400"></i>
                  <span>No-Cost EMI @ ₹2,999/mo</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8 text-slate-200 text-sm">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Comprehensive Power Query, DAX, Modeling & Service in <strong>Power BI Training in {locName}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Microsoft Certified Data Analyst Mentors for <strong>Power BI Training in {locName}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Official Microsoft PL-300 Certification Exam Prep in <strong>Power BI Training in {locName}</strong></span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal(`Power BI Training in ${locName}`)}
                  className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 text-sm tracking-wide cursor-pointer"
                >
                  <i className="fas fa-paper-plane"></i> Enroll for Power BI in {locName}
                </button>
                <button
                  onClick={() => openEnrollModal(`Power BI Training Syllabus - ${locName}`)}
                  className="bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <i className="fas fa-file-download"></i> Download Power BI Syllabus
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-800 border-2 border-amber-100 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-amber-200/60 shadow-2xs">
                    🔥 Limited Seats • 100% Placement Support
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    Book Free Power BI Counselling
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Speak 1-on-1 with Microsoft Certified Mentors & claim 30% scholarship
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-amber-500 transition"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-amber-500 transition"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Preferred Training Mode *</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-amber-500 transition"
                    >
                      <option value="Yes, am Interested in Online Training">Instructor-Led Live Online Training</option>
                      <option value="Classroom Training - Bangalore Campus">Classroom Training (Bangalore Campus)</option>
                      <option value="Weekend Batch for Working Professionals">Weekend Batch (For Professionals)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition text-sm text-center cursor-pointer"
                  >
                    Book Free Power BI Session
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
              <p className="text-3xl md:text-4xl font-black text-amber-600 mb-1">14,000+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Power BI Students Trained</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-orange-600 mb-1">8,900+</p>
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

      {/* SEO Content Section for Power BI Training */}
      <section className="py-16 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 border-b pb-4">
              Best Power BI Training in {locName} – LearnMore Technologies
            </h2>
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Are you looking for the best <strong>Power BI Training in {locName}</strong>? LearnMore Technologies offers the industry's highest rated <strong>Power BI Training in {locName}</strong> tailored for freshers, business analysts, data analysts, Excel professionals, and managers. Our <strong>Power BI Training in {locName}</strong> delivers end-to-end hands-on training in Microsoft Power BI Desktop, Power Query data transformation, DAX calculated measures, Data Modeling (Star Schema), Power BI Service cloud publishing, Gateways, and Row-Level Security.
              </p>
              <p>
                Enrolling in our <strong>Power BI Training in {locName}</strong> provides 100% practical lab-driven learning guided by Microsoft Certified Data Analysts with 12+ years experience. Our <strong>Power BI Training in {locName}</strong> program is specifically structured to help candidates clear the official Microsoft Certified: Power BI Data Analyst Associate (PL-300) exam and secure rewarding BI Analyst and Power BI Developer positions in top Bangalore MNCs.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
                Why Join Our Power BI Training in {locName}?
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 font-semibold text-slate-800">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-amber-500"></i> 100% Practical Dashboard & DAX Labs in <strong>Power BI Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-amber-500"></i> Certified Microsoft Data Analyst Mentors for <strong>Power BI in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-amber-500"></i> 100% Placement Support with <strong>Power BI Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-amber-500"></i> Real-World Executive Capstone Projects in <strong>Power BI in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-amber-500"></i> ISO 9001:2015 Certification in <strong>Power BI Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-amber-500"></i> Flexible Batches for <strong>Power BI Training in {locName}</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Power BI Tools & Services Mastered Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              BUSINESS INTELLIGENCE STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Power BI Tools & Concepts You Will Master
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Gain complete hands-on mastery over the Microsoft Power BI suite, DAX calculations, and cloud reporting.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {biTools.map((tool, idx) => (
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

      {/* Program Syllabus Grid Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100/80 via-slate-100 to-yellow-100/80 border-t border-b border-amber-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider mb-3.5 shadow-sm">
              COMPREHENSIVE POWER BI CURRICULUM
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Master Business Analytics with <span className="text-amber-600">Industry-Focused Modules</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-amber-500 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-bold text-xs">
                      <i className="fas fa-clock text-[11px]"></i> {idx === 0 ? '2 Weeks Duration' : idx === 1 ? '3 Weeks Duration' : idx === 2 ? '3 Weeks Duration' : idx === 3 ? '4 Weeks Duration' : idx === 4 ? '3 Weeks Duration' : '3 Weeks Duration'}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-amber-600 transition leading-snug">
                    {module.title.replace(/^Module \d+: /, '')}
                  </h3>

                  <ul className="space-y-3 mb-6 border-t border-slate-100 pt-4">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-3 text-slate-700 text-sm">
                        <i className="fas fa-check-circle text-amber-500 text-base mt-0.5 flex-shrink-0"></i>
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
              Live Capstone Power BI Projects You Will Build
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Add interactive, published Power BI dashboards to your portfolio to impress interview recruiters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between">
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
      <section className="py-20 bg-gradient-to-r from-slate-950 via-amber-950 to-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-amber-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certified Power BI Data Analyst Professional Credential
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Upon successful completion of the training program and live capstone projects, candidates receive the official LearnMore Technologies Certified Power BI Data Analyst Professional Certification.
              </p>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Lifetime valid credential recognized across 300+ hiring partner MNCs & Big 4 firms
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Official prep & exam assistance for Microsoft PL-300 Certification
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Shareable digital badge for LinkedIn & Resume integration
                </li>
              </ul>
              <button
                onClick={() => openEnrollModal('Power BI Certification Sample Request')}
                className="bg-amber-500 hover:bg-amber-600 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-900 border-2 border-amber-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  ISO 9001:2015
                </div>
                <div className="w-20 h-20 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-amber-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-amber-300 font-extrabold uppercase tracking-widest mb-4">Certified Power BI Data Analyst</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  This certifies that candidate has successfully mastered Power BI Desktop, Power Query, DAX Calculations, Data Modeling & Cloud Reporting.
                </p>
                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-PBI-2026
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
            Our Power BI Alumni Work at Big-4 Consulting & Global IT Leaders
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
              Real Power BI Placement Success Stories
            </h2>
            <p className="text-slate-600 text-base">
              See how our students transformed their careers into Business Intelligence Analysts through LearnMore Technologies.
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
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-amber-500 shadow-sm" />
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                    <span className="inline-block mt-1 bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      Package: {t.package}
                    </span>
                  </div>
                </div>
              </div>
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
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  openFaq === idx ? 'border-amber-500 bg-amber-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-amber-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-slate-900 text-base md:text-lg transition cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === idx ? 'up text-amber-600' : 'down text-slate-400'} text-sm flex-shrink-0`}></i>
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-amber-100">
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
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Microsoft Certified Data Analysts with 12+ Yrs Experience
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers or freshers with theoretical knowledge only
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Practical & Lab Sessions</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Practical Power BI Desktop, DAX & Service Live Labs
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Heavy PowerPoint slides with minimal hands-on dashboard work
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Placement Support & 300+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Only basic resume forwarding without placement support
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 3 Real-World Projects on Sales, Supply Chain & Financial Risk RLS
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Simple basic sample charts without real business logic
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
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> ISO 9001:2015 Certification + Microsoft PL-300 Exam Prep
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
      <UpcomingBatchSchedule courseName="Power BI & Business Intelligence Master Program" />

      {/* Recent Student Placements Section */}
      <RecentPlacementsSection courseName="Power BI & Business Intelligence Master Program" />

      {/* Sticky Mobile CTA Bar for Google Ads Conversions */}
      <StickyMobileCTA courseName="Power BI & Business Intelligence Master Program" />

      {/* SEO Location Content Block */}
      <LocationSeoContentBlock courseName="Power BI" locationName={locName} />

      <Footer />
    </div>
  );
}
