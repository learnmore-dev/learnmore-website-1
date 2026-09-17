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

interface SapTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function SapTrainingClient({ location }: SapTrainingClientProps = {}) {
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
          program: `SAP Training in ${locName}`,
          trainingMode: inlineForm.trainingMode,
          city: inlineForm.city,
          source: 'hero-lead-form'
        })
      });
      if (res.ok) {
        window.location.href = '/thank-you';
      } else {
        openEnrollModal(`SAP Training in ${locName}`);
      }
    } catch (err) {
      console.error(err);
      openEnrollModal(`SAP Training in ${locName}`);
    } finally {
      setIsInlineSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const sapTools = [
    { name: 'SAP S/4HANA ERP Engine', icon: 'fas fa-server', desc: 'Next-Gen In-Memory Enterprise Platform in SAP Training in ' + locName },
    { name: 'SAP FICO Module', icon: 'fas fa-calculator', desc: 'Financial Accounting & Controlling in SAP Training in ' + locName },
    { name: 'SAP MM (Materials Management)', icon: 'fas fa-boxes', desc: 'Procure-to-Pay (P2P) & Inventory in SAP Training in ' + locName },
    { name: 'SAP SD (Sales & Distribution)', icon: 'fas fa-shopping-cart', desc: 'Order-to-Cash (O2C) & Billing in SAP Training in ' + locName },
    { name: 'SAP ABAP Workbench', icon: 'fas fa-code', desc: 'ALV Reports, BAPIs & Custom Exits in SAP Training in ' + locName },
    { name: 'SAP Fiori / UI5 UX', icon: 'fas fa-desktop', desc: 'Modern Role-Based Launchpad Apps in SAP Training in ' + locName },
    { name: '24/7 Dedicated Server Access', icon: 'fas fa-cloud', desc: 'Live SAP GUI & Sandboxed Cloud IDES in SAP Training in ' + locName },
    { name: 'SAP LTMC & Data Migration', icon: 'fas fa-exchange-alt', desc: 'Legacy Migration & Activate Lifecycle in SAP Training in ' + locName }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: SAP S/4HANA ERP Architecture, Navigation & Enterprise Structure',
      topics: [
        `Evolution of SAP: R/3, ECC to S/4HANA In-Memory Database Architecture in SAP Training in ${locName}`,
        'Navigating SAP GUI 8.0 & Modern SAP Fiori Launchpad User Interface',
        'Defining Enterprise Organizational Hierarchy: Company Code, Plant, Storage Location & Purchase Org',
        'Master Data Management: Unified Business Partner (BP) Architecture in S/4HANA',
        `Live Lab: Executing SAP Transaction Codes (T-Codes) & SPRO Customization in SAP Training in ${locName}`
      ]
    },
    {
      title: 'Module 2: SAP FICO (Financial Accounting & Managerial Controlling)',
      topics: [
        `General Ledger (G/L) Accounting & Document Postings in SAP Training in ${locName}`,
        'Accounts Payable (AP): Vendor Master, Invoice Verification & Automatic Payment Program (F110)',
        'Accounts Receivable (AR): Customer Master, Invoicing, Incoming Payments & Dunning (F150)',
        'Asset Accounting: Asset Classes, Depreciation Keys, Depreciation Run (AFAB) & Scrapping',
        `Live Project: Cost Center Accounting & Profit Center Controlling in SAP Training in ${locName}`
      ]
    },
    {
      title: 'Module 3: SAP MM (Materials Management & Procure-to-Pay Cycle)',
      topics: [
        `End-to-End Procure-to-Pay (P2P) Business Process Flow in SAP Training in ${locName}`,
        'Material Master Data Configuration: Material Types, Valuation Classes & Purchasing Views',
        'Purchasing Documents: Purchase Requisition (ME51N), RFQ (ME41) & Purchase Order (ME21N)',
        'Inventory Management: Goods Receipt (MIGO), Stock Transfers, Goods Issue & Physical Inventory',
        `Live Lab: Logistics Invoice Verification (MIRO) & OBYC Account Determination in SAP Training in ${locName}`
      ]
    },
    {
      title: 'Module 4: SAP SD (Sales & Distribution & Order-to-Cash Cycle)',
      topics: [
        `End-to-End Order-to-Cash (O2C) Business Process Architecture in SAP Training in ${locName}`,
        'Customer Master & Material Determination in S/4HANA',
        'Sales Document Types: Inquiry (VA11), Quotation (VA21), Standard Sales Order (VA01)',
        'Pricing Procedure Determination: Condition Technique, Access Sequences & Pricing Records (VK11)',
        `Live Project: Outbound Delivery (VL01N), Goods Issue & Billing Invoicing in SAP Training in ${locName}`
      ]
    },
    {
      title: 'Module 5: SAP ABAP Fundamentals, Reporting & Custom Developments',
      topics: [
        `ABAP Workbench Overview: ABAP Dictionary (SE11), Tables & Views in SAP Training in ${locName}`,
        'Developing Classical & Interactive Reports with ALV (ABAP List Viewer) Grid Controls',
        'Modularization: Subroutines, Function Modules (SE37), BAPIs & Remote Function Calls (RFC)',
        'Form Development: SmartForms & Adobe Document Services (ADS)',
        `Live Lab: User Exits, Customer Exits & BAdI Enhancements in SAP Training in ${locName}`
      ]
    },
    {
      title: 'Module 6: SAP Implementation Methodology, Data Migration & Placement Prep',
      topics: [
        `SAP Activate Methodology: Discover, Prepare, Explore, Realize, Deploy in SAP Training in ${locName}`,
        'Data Migration using LTMC (Legacy Transfer Migration Cockpit) & LSMW',
        'SAP Functional / Technical Consultant Resume Engineering & GitHub Showcase',
        'Mock Technical & Scenario-Based Business Process Interviews',
        `100% Dedicated Placement Assistance for SAP Training in ${locName}`
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: `Full-Scale Enterprise SAP S/4HANA ERP Rollout in SAP Training in ${locName}`,
      desc: `Architect and configure the complete enterprise structure for a global manufacturing conglomerate in our SAP Training in ${locName}. Set up multi-company financial ledgers, purchasing organizations, distribution channels, and unified Business Partner master databases.`,
      tags: ['S/4HANA', 'Enterprise Structure', 'Business Partners', 'SPRO', 'Fiori'],
      color: 'from-blue-500/20 to-sky-500/20',
      border: 'border-blue-500/30'
    },
    {
      title: `End-to-End Procure-to-Pay (P2P) & Financial Integration in ${locName}`,
      desc: `Implement complete P2P automation covering PR approval workflows, PO issuance, automated Goods Receipt (MIGO), three-way matching invoice verification (MIRO), and OBYC automatic account determination in our SAP Training in ${locName}.`,
      tags: ['SAP MM', 'SAP FICO', 'P2P Cycle', 'OBYC', 'Invoice Verification'],
      color: 'from-sky-500/20 to-indigo-500/20',
      border: 'border-sky-500/30'
    },
    {
      title: `Order-to-Cash (O2C) with Dynamic Pricing & Tax Engine in ${locName}`,
      desc: `Design and configure an end-to-end sales distribution system featuring multi-tiered discount pricing condition techniques, automatic shipping point determination, GST/tax calculations, and billing generation in our SAP Training in ${locName}.`,
      tags: ['SAP SD', 'Condition Technique', 'O2C Cycle', 'Pricing Engine', 'Billing'],
      color: 'from-indigo-500/20 to-blue-500/20',
      border: 'border-indigo-500/30'
    }
  ];

  const faqs = [
    {
      q: `What is covered in the SAP Training in ${locName}?`,
      a: `Our SAP Training in ${locName} is a comprehensive, hands-on master program covering SAP S/4HANA ERP, SAP FICO (Finance), SAP MM (Materials Management), SAP SD (Sales & Distribution), and SAP ABAP programming. Students get 24/7 dedicated server access and practical business process implementation experience.`
    },
    {
      q: `Do I get 24/7 SAP Server Access in SAP Training in ${locName}?`,
      a: `Yes! Every enrolled student in our SAP Training in ${locName} receives dedicated 24/7 cloud SAP S/4HANA server access loaded with IDES configuration tables, pre-configured master data, and developer keys to practice SPRO customization, ABAP development, and business transactions anytime.`
    },
    {
      q: `Which SAP module should I choose in SAP Training in ${locName}?`,
      a: `Our SAP Training in ${locName} covers foundational cross-module integration across S/4HANA, allowing you to specialize in your preferred stream: Finance & Accounting backgrounds excel in FICO, Supply Chain & Operations in MM/SD, and Software Developers in ABAP technical consulting.`
    },
    {
      q: `How does SAP Training in ${locName} provide 100% placement support?`,
      a: `LearnMore Technologies offers 100% placement support for SAP Training in ${locName} with resume re-engineering for SAP consultant roles, scenario-based business case interview preparation, and direct interview drives with 300+ enterprise SAP implementation partners across Bangalore.`
    },
    {
      q: `Are weekend and fast-track batches available for SAP Training in ${locName}?`,
      a: `Yes, we provide flexible weekday morning/evening batches and weekend intensive batches for SAP Training in ${locName}, with both in-person classroom training in Marathahalli, Bangalore, and live interactive instructor-led online sessions.`
    },
    {
      q: `Will I receive certification after completing SAP Training in ${locName}?`,
      a: `Yes, upon completing the SAP Training in ${locName}, you receive an ISO 9001:2015 verified Certificate of Excellence recognized across global Fortune 500 enterprises.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-blue-500 selection:text-white" style={{ backgroundColor: '#020617', color: '#f8fafc' }}>
      <Header />
      <BatchUrgencyBanner courseName={`SAP Training in ${locName}`} />

      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" style={{ backgroundColor: '#020617' }}>
        {/* Glow Accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <Link href="/courses" className="hover:text-blue-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <span className="text-slate-200">SAP Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider shadow-inner">
                <i className="fas fa-server" /> Ranked #1 Institute for SAP Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                SAP Training in <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                LearnMore Technologies provides the premier <strong className="text-white">SAP Training in {locName}</strong> with 100% placement support. Master SAP S/4HANA, SAP FICO (Finance), SAP MM (Procurement), SAP SD (Sales), and SAP ABAP programming with 24/7 dedicated server access in our practical <strong className="text-white">SAP Training in {locName}</strong>.
              </p>

              {/* Social Proof & Rating */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-700 px-3.5 py-2 rounded-xl text-amber-400 font-bold">
                  <i className="fas fa-star text-amber-400" />
                  <span>4.95 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(2,150+ Reviews for SAP Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3.5 py-2 rounded-xl text-emerald-400 font-bold">
                  <i className="fas fa-user-check" />
                  <span>100% Placement Assistance</span>
                </div>
              </div>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { icon: 'fas fa-server', label: 'SAP S/4HANA & Fiori UX' },
                  { icon: 'fas fa-calculator', label: 'SAP FICO Configuration' },
                  { icon: 'fas fa-boxes', label: 'SAP MM & P2P Cycle' },
                  { icon: 'fas fa-shopping-cart', label: 'SAP SD & O2C Cycle' },
                  { icon: 'fas fa-cloud', label: '24/7 Live Server Access' },
                  { icon: 'fas fa-user-graduate', label: '100% Placement Support' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-medium">
                    <i className={`${item.icon} text-blue-400 text-sm`} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Lead Capture Form */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-slate-900 border border-blue-500/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl" style={{ backgroundColor: '#0f172a' }}>
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-blue-500 to-sky-500 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Free Demo Class
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Book Your Free Live Demo</h3>
                <p className="text-xs text-slate-300 mb-6">
                  Get curriculum roadmap, 24/7 server access details & live demo for SAP Training in {locName}.
                </p>

                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-200 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={inlineForm.name}
                      onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-200 mb-1">Phone Number (with WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      value={inlineForm.phone}
                      onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-200 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={inlineForm.email}
                      onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-200 mb-1">Training Mode</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Classroom Training">Classroom Training ({locName})</option>
                      <option value="Online Live Training">Live Online Interactive</option>
                      <option value="Weekend Fast-Track">Weekend Fast-Track Batch</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500 hover:from-blue-400 hover:to-sky-400 text-white font-bold text-sm tracking-wide uppercase transition-all shadow-lg hover:shadow-blue-500/25 disabled:opacity-50"
                  >
                    {isInlineSubmitting ? 'Booking Demo...' : 'Book Free Demo & Syllabus'}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    🔒 100% Privacy Guaranteed. No Spam Calls.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Quick Stats Bar */}
      <section className="py-8 bg-slate-900 border-b border-slate-800" style={{ backgroundColor: '#0f172a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">24/7</div>
              <div className="text-xs text-slate-300 mt-1">Dedicated Cloud Server in SAP Training in {locName}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">3 Real-World</div>
              <div className="text-xs text-slate-300 mt-1">Enterprise Implementation Projects</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">100%</div>
              <div className="text-xs text-slate-300 mt-1">Placement Support in {locName}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">1:1</div>
              <div className="text-xs text-slate-300 mt-1">Principal Consultant Mentorship</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Tech Stack */}
      <section className="py-16 bg-slate-950" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Technology Ecosystem</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              SAP S/4HANA Modules You Will Master in SAP Training in {locName}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sapTools.map((tool, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all group" style={{ backgroundColor: '#0f172a' }}>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <i className={`${tool.icon} text-lg`} />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{tool.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum & Syllabus */}
      <section className="py-16 bg-slate-900 border-y border-slate-800" style={{ backgroundColor: '#0f172a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Comprehensive Curriculum</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">
                SAP Training in {locName} Course Syllabus
              </p>
            </div>
            <button
              onClick={() => openEnrollModal(`SAP Syllabus Download (${locName})`)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <i className="fas fa-file-pdf text-blue-400" />
              Download Full Syllabus PDF
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {syllabusModules.map((mod, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col justify-between" style={{ backgroundColor: '#020617' }}>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 mb-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-[11px] text-blue-300">
                      {idx + 1}
                    </span>
                    <span>Module {idx + 1} - SAP Training in {locName}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-4 leading-snug">{mod.title}</h3>
                  <ul className="space-y-2.5">
                    {mod.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <i className="fas fa-check text-blue-400 text-[10px] mt-1 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Capstone Projects */}
      <section className="py-16 bg-slate-950" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Hands-On Experience</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Enterprise Projects in SAP Training in {locName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capstoneProjects.map((proj, idx) => (
              <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-b ${proj.color} border ${proj.border} flex flex-col justify-between`} style={{ backgroundColor: '#0f172a' }}>
                <div>
                  <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-blue-400 text-xs font-bold mb-4">
                    P0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">{proj.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{proj.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] text-blue-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements & Hiring Partners */}
      <RecentPlacementsSection />

      {/* Comparison: Why Choose LearnMore */}
      <section className="py-16 bg-slate-900 border-t border-slate-800" style={{ backgroundColor: '#0f172a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">The LearnMore Advantage</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Why LearnMore for SAP Training in {locName}?
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-800 text-xs text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Feature</th>
                  <th className="py-4 px-6 text-blue-400 bg-blue-500/10 rounded-t-lg">SAP Training in {locName} (LearnMore)</th>
                  <th className="py-4 px-6 text-slate-500">Other Training Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                <tr>
                  <td className="py-4 px-6 font-medium text-white">24/7 Cloud S/4HANA Server Access</td>
                  <td className="py-4 px-6 text-blue-300 bg-blue-500/5 font-semibold">✅ Yes, Unlimited Cloud Server Access</td>
                  <td className="py-4 px-5 text-slate-500">❌ Limited Lab Hours</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Cross-Module Integration (FICO+MM+SD)</td>
                  <td className="py-4 px-6 text-blue-300 bg-blue-500/5 font-semibold">✅ Yes, End-to-End P2P & O2C Cycles</td>
                  <td className="py-4 px-5 text-slate-500">❌ Isolated Modules Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">ABAP Workbench & Modern Fiori UX</td>
                  <td className="py-4 px-6 text-blue-300 bg-blue-500/5 font-semibold">✅ Yes, Developer Keys & Fiori Apps</td>
                  <td className="py-4 px-5 text-slate-500">❌ Old ECC GUI Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">SAP Activate Implementation Projects</td>
                  <td className="py-4 px-6 text-blue-300 bg-blue-500/5 font-semibold">✅ Yes, 3 Enterprise Rollout Projects</td>
                  <td className="py-4 px-5 text-slate-500">❌ Basic Theory Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Dedicated Placement Cell & Mock Interviews</td>
                  <td className="py-4 px-6 text-blue-300 bg-blue-500/5 font-semibold">✅ 100% Dedicated with 300+ Partners</td>
                  <td className="py-4 px-5 text-slate-500">❌ Generic Job Leads</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Batch Schedule Section */}
      <UpcomingBatchSchedule courseName={`SAP Training in ${locName}`} />

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-slate-950" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Got Questions?</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions on SAP Training in {locName}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden transition-all" style={{ backgroundColor: '#0f172a' }}>
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs text-blue-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Campus & SEO Info */}
      <section className="py-12 bg-slate-900 border-t border-slate-800" style={{ backgroundColor: '#0f172a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-lg font-bold text-white">
            Best SAP Training in {locName}, Bangalore
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed max-w-3xl mx-auto">
            LearnMore Technologies offers premier SAP Training in {locName}. Join our specialized SAP Training in {locName} to master SAP S/4HANA, SAP FICO, SAP MM, SAP SD, and ABAP programming with 24/7 dedicated server access and 100% placement support in Bangalore. Accessible from Outer Ring Road, Whitefield, Bellandur, Electronic City, and HSR Layout.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openEnrollModal(`SAP Training in ${locName}`)}
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500 hover:from-blue-400 hover:to-sky-400 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-500/25"
            >
              Enroll Now for SAP Training in {locName}
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA courseName={`SAP Training in ${locName}`} />
    </div>
  );
}
