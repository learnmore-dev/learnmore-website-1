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

interface DbtTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function DbtTrainingClient({ location }: DbtTrainingClientProps = {}) {
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
          program: `dbt Training in ${locName}`,
          trainingMode: inlineForm.trainingMode,
          city: inlineForm.city,
          source: 'hero-lead-form'
        })
      });
      if (res.ok) {
        window.location.href = '/thank-you';
      } else {
        openEnrollModal(`dbt Training in ${locName}`);
      }
    } catch (err) {
      console.error(err);
      openEnrollModal(`dbt Training in ${locName}`);
    } finally {
      setIsInlineSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const dbtTools = [
    { name: 'dbt Core & dbt Cloud', icon: 'fas fa-cubes', desc: 'Analytics Engineering Transformation Engine' },
    { name: 'Jinja Templating & Macros', icon: 'fas fa-code', desc: 'Dynamic Modular SQL Generation' },
    { name: 'Snowflake / BigQuery / Redshift', icon: 'fas fa-database', desc: 'Modern Cloud Warehouse Integration' },
    { name: 'dbt Tests & Assertions', icon: 'fas fa-check-double', desc: 'Schema, Generic & Singular Tests' },
    { name: 'dbt Docs & Lineage Graphs', icon: 'fas fa-sitemap', desc: 'Interactive DAGs & Documentation' },
    { name: 'dbt Packages (dbt_utils)', icon: 'fas fa-box-open', desc: 'Reusable Modules & Code Generation' },
    { name: 'GitHub Actions CI/CD', icon: 'fab fa-github', desc: 'Slim CI & Automated PR Builds' },
    { name: 'Semantic Layer & Metrics', icon: 'fas fa-chart-pie', desc: 'Centralized Business Metric Layer' },
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Modern Data Stack & dbt Core / Cloud Setup',
      topics: [
        'Evolution of Data Engineering: Traditional ETL vs Modern ELT Paradigm',
        'Role of Analytics Engineer & the dbt (Data Build Tool) Ecosystem',
        'Installing dbt Core, CLI Setup, Virtual Environments & profiles.yml Configuration',
        'dbt Cloud Architecture: Web IDE, Environments, Credentials & Webhook Schedules',
        'Connecting dbt with Snowflake, Google BigQuery, Databricks & PostgreSQL'
      ]
    },
    {
      title: 'Module 2: Modular Data Modeling & Medallion Layers',
      topics: [
        'dbt Project Structure: Models, Sources, Seeds, Snapshots & Analysis Folders',
        'Modular SQL Modeling: Staging, Intermediate & Mart Layers (Medallion Architecture)',
        'dbt Materializations: View, Table, Incremental & Ephemeral Models',
        'Advanced Incremental Strategies: unique_key, merge, append & delete+insert',
        'dbt Seeds: Loading Reference Lookup Data into Cloud Data Warehouses'
      ]
    },
    {
      title: 'Module 3: Jinja Templating, Macros & Dynamic SQL Mastery',
      topics: [
        'Jinja Control Structures: Variables, Control Loops (if/for), Filters & Whitespace Control',
        'dbt Ref & Source Functions for Automated Dynamic DAG Lineage Graphs',
        'Writing Custom dbt Macros for DRY (Don\'t Repeat Yourself) Modular SQL',
        'Using Standard Community Packages: dbt-utils, dbt-codegen & dbt-expectations',
        'Automating Staging Model Generation & Column Metadata Extraction'
      ]
    },
    {
      title: 'Module 4: Automated Data Testing, Quality & Documentation',
      topics: [
        'dbt Out-of-the-Box Tests: unique, not_null, accepted_values & relationships',
        'Writing Singular Tests (Custom SQL queries identifying bad rows)',
        'dbt Expectations Package for Enterprise Data Quality Audits & Assertions',
        'Documenting Models, Columns & Business Descriptions in schema.yml Files',
        'Generating & Hosting Interactive dbt Lineage Graphs (DAG) & Data Catalogs'
      ]
    },
    {
      title: 'Module 5: Snapshots (SCD Type 2), Hooks & Semantic Layer',
      topics: [
        'dbt Snapshots: Implementing Slowly Changing Dimensions (SCD Type 2) with check & timestamp strategies',
        'dbt Hooks: pre-hook, post-hook, on-run-start & warehouse grant configurations',
        'dbt Semantic Layer: Defining Standardized Metrics, Dimensions & Entities',
        'State & Slim CI: Running only modified upstream/downstream models with state:modified',
        'Orchestrating dbt Runs with Apache Airflow, Astronomer, Dagster & Prefect'
      ]
    },
    {
      title: 'Module 6: CI/CD Workflows, dbt Certification Prep & Placements',
      topics: [
        'Production CI/CD Pipelines: GitHub Actions Automated Testing on Pull Requests',
        'dbt Cloud Production Jobs: Triggers, Artifacts, Slim CI & Slack Notifications',
        'dbt Certified Developer Exam Practice Questions & Scenario Walkthroughs',
        'Analytics Engineering Resume Optimization, GitHub Portfolio & Mock Interviews',
        '100% Dedicated Placement Assistance with 300+ Data Partner Companies'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'E-Commerce Medallion Architecture dbt Transformation Pipeline',
      desc: 'Engineered an enterprise ELT pipeline transforming raw Stripe and Shopify data in Snowflake into bronze, silver, and gold dimensional marts with automated incremental builds.',
      tags: ['dbt Cloud', 'Snowflake', 'Incremental Models', 'Jinja']
    },
    {
      title: 'Automated Financial Data Quality & Lineage Catalog with Slim CI',
      desc: 'Implemented 150+ dbt-expectations data quality tests, automated snapshot tables for SCD Type 2 tracking, and configured GitHub Actions Slim CI for rapid PR deployments.',
      tags: ['dbt Tests', 'Slim CI', 'GitHub Actions', 'Snapshots']
    },
    {
      title: 'Healthcare Analytics Metric Layer with dbt Semantic Layer & Airflow',
      desc: 'Built a centralized semantic metric layer defining revenue and patient admission KPIs, orchestrated on a daily schedule using Apache Airflow and dbt Cloud APIs.',
      tags: ['Semantic Layer', 'Airflow', 'BigQuery', 'dbt-utils']
    }
  ];

  const faqs = [
    {
      q: `Why choose LearnMore Technologies for dbt Training in ${locName}?`,
      a: `LearnMore Technologies is recognized as the #1 institute for dbt Training in ${locName}. Our trainers are Lead Analytics Engineers with 12+ years of enterprise data experience. We provide 100% hands-on modular SQL modeling, Jinja macros, Slim CI/CD with GitHub Actions, dbt Cloud certification prep, and 100% placement support.`
    },
    {
      q: `What prerequisites are required for dbt Training in ${locName}?`,
      a: `Strong knowledge of SQL queries (JOINs, aggregations, CTEs) is the primary prerequisite for dbt Training in ${locName}. Basic knowledge of Git or data warehousing (Snowflake, BigQuery) is helpful, but we cover modular data engineering architectures from the ground up.`
    },
    {
      q: `What is the role of an Analytics Engineer and how does dbt fit in?`,
      a: `Analytics Engineering bridges the gap between Data Engineering and Data Analytics. In our dbt Training in ${locName}, you learn how to apply software engineering best practices (version control, testing, modular code, CI/CD, and documentation) directly to SQL data transformations in modern cloud data warehouses.`
    },
    {
      q: `What is the average salary after completing dbt Training in ${locName}?`,
      a: `Analytics Engineers with dbt expertise are among the most in-demand data professionals in Bangalore. Freshers and transitioning data analysts command salaries between ₹7.0 LPA to ₹13 LPA, while experienced Analytics Engineers earn ₹16 LPA to ₹32+ LPA.`
    },
    {
      q: `Does dbt Training in ${locName} prepare for the dbt Certified Developer Exam?`,
      a: `Yes! Our dbt Training in ${locName} includes complete preparation for the official dbt Certified Developer Exam, with practice tests, scenario-based architecture challenges, and mock question breakdowns.`
    },
    {
      q: `Does dbt Training in ${locName} provide 100% Placement Assistance?`,
      a: `Yes, enrolling in dbt Training in ${locName} includes 100% placement assistance with analytics engineering resume building, GitHub project portfolio curation, technical mock interviews, and direct interview referrals to 300+ hiring partners.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-orange-500 selection:text-slate-950">
      <Header />
      <BatchUrgencyBanner />

      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-600/15 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/courses" className="hover:text-orange-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">dbt Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-5">
                <i className="fas fa-cubes"></i> Ranked #1 Institute for dbt & Analytics Engineering in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-white">
                dbt Training in <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">
                LearnMore Technologies offers the best <strong>dbt Training in {locName}</strong> with 100% placement assistance. Master Analytics Engineering, dbt Core & dbt Cloud, Jinja Templating, Incremental Models, Data Quality Testing, Slim CI/CD, and dbt Certification in our practical <strong>dbt Training in {locName}</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-amber-400 font-bold">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(2,900+ Reviews for dbt Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-emerald-400 font-bold">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
              </div>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-cubes text-orange-400 text-sm" />
                  <span>dbt Core & dbt Cloud</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-code text-amber-400 text-sm" />
                  <span>Jinja Macros & Dynamic SQL</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-check-double text-emerald-400 text-sm" />
                  <span>Automated Testing & Docs</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-layer-group text-cyan-400 text-sm" />
                  <span>Incremental & Medallion Marts</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fab fa-github text-yellow-400 text-sm" />
                  <span>GitHub Actions Slim CI/CD</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-certificate text-pink-400 text-sm" />
                  <span>dbt Developer Exam Prep</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal(`dbt Training in ${locName}`)}
                  className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-orange-500/20 transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-paper-plane"></i> Enroll for dbt Training in {locName}
                </button>
                <button
                  onClick={() => openEnrollModal(`dbt Training Syllabus - ${locName}`)}
                  className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-file-download text-orange-400"></i> Download dbt Training in {locName} Syllabus
                </button>
              </div>
            </div>

            {/* Lead Capture Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-100 border border-orange-500/30 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-800">
                  <span className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full mb-2 tracking-wider">
                    Limited Seats Batch
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white">Book Free dbt Counselling</h3>
                  <p className="text-xs text-slate-400 mt-1">Get 1-on-1 guidance for dbt Training in {locName}</p>
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
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
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
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
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
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase mb-1">Training Mode</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500"
                    >
                      <option value="Classroom Training">{`Classroom Training (${locName})`}</option>
                      <option value="Live Online Training">Live Online Interactive</option>
                      <option value="Weekend Batch">Weekend Batch for Working Pros</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black py-3.5 rounded-xl transition text-sm shadow-lg shadow-orange-500/20"
                  >
                    {isInlineSubmitting ? 'SUBMITTING...' : `JOIN DBT TRAINING IN ${locName.toUpperCase()}`}
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
              <p className="text-3xl md:text-4xl font-black text-orange-400 mb-1">6,500+</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">Analytics Engineers Trained</p>
            </div>
            <div className="p-4 border-r border-slate-800 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-amber-400 mb-1">98.4%</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">Placement Record</p>
            </div>
            <div className="p-4 border-r border-slate-800 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">300+</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">Data Hiring Partners</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-black text-cyan-400 mb-1">₹15.5 LPA</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">Average Package</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-orange-500/20">
              MODERN ANALYTICS ENGINEERING STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Tools & Ecosystem You Will Master in dbt Training in {locName}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {dbtTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center hover:shadow-xl hover:border-orange-500/40 transition duration-300">
                <div className="w-14 h-14 mx-auto bg-orange-500/10 text-orange-400 rounded-2xl flex items-center justify-center text-2xl mb-4">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-orange-500/20">
              INDUSTRY-ALIGNED SYLLABUS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Comprehensive Curriculum for dbt Training in {locName}
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              From modular SQL modeling to Jinja macros, automated testing, Slim CI/CD with GitHub Actions, and dbt developer certification in our dbt Training in {locName}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-md hover:border-slate-700 transition">
                <h3 className="text-xl font-bold text-orange-400 mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((t, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
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
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-orange-500/20">
              PRODUCTION CAPSTONES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Live Projects You Will Build in dbt Training in {locName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-md flex flex-col justify-between hover:border-orange-500/40 transition">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[11px] font-bold px-2.5 py-1 rounded-md">
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
              Best dbt Training in {locName} – LearnMore Technologies
            </h2>
            <p>
              Looking for the premier <strong>dbt Training in {locName}</strong>? LearnMore Technologies offers an industry-leading <strong>dbt Training in {locName}</strong> tailored for data analysts, data engineers, SQL developers, and BI professionals transitioning into modern Analytics Engineering.
            </p>
            <p>
              Our comprehensive <strong>dbt Training in {locName}</strong> covers the full analytics engineering transformation workflow, including modular staging/mart modeling, Jinja macro development, automated testing, documentation generation, continuous integration with GitHub Actions Slim CI, and seamless integrations with Snowflake, Google BigQuery, and Databricks.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              Why Join Our dbt Training in {locName}?
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-orange-500"></i> 100% Practical Analytics Engineering Labs in <strong>dbt Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-orange-500"></i> Lead Analytics Engineers as Mentors for <strong>dbt Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-orange-500"></i> 100% Placement Support with 300+ Partner Companies in <strong>dbt Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-orange-500"></i> Real-world Medallion & Slim CI Capstone Projects in <strong>dbt Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-orange-500"></i> Official dbt Certified Developer Exam Preparation with <strong>dbt Training in {locName}</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ISO Certification Preview */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 text-orange-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-orange-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certified Analytics Engineer Certification in {locName}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Receive an official, lifetime-valid LearnMore Technologies Analytics Engineer Certificate accredited by international quality standards upon completing dbt Training in {locName}.
              </p>
              <button
                onClick={() => openEnrollModal(`dbt Certification Sample - ${locName}`)}
                className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-900 border-2 border-orange-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="w-20 h-20 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-orange-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-orange-300 font-extrabold uppercase tracking-widest mb-4">Certified Analytics Engineer (dbt)</p>
                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-DBT-2026
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-orange-500/30">
              WHY WE ARE #1
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              LearnMore Technologies vs Other Institutes for dbt Training in {locName}
            </h2>
            <p className="text-slate-400 mt-2 text-base">
              See why hundreds of data professionals choose LearnMore Technologies for genuine dbt analytics engineering mastery.
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
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Lead Analytics Engineers with 12+ Yrs MNC Experience
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Generic SQL trainers without dbt Cloud production experience
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Jinja & Slim CI/CD Labs</td>
                  <td className="py-5 px-6 bg-orange-950/20 border-l border-r border-orange-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Hands-on Jinja Macros, dbt Packages & GitHub Actions Slim CI
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Only basic SELECT view definitions without testing or CI/CD
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-orange-950/20 border-l border-r border-orange-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 100% Placement Support & 300+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> No dedicated analytics engineering placement assistance
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-orange-950/20 border-l border-r border-orange-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 3 End-to-End Enterprise Medallion & Semantic Mart Pipelines
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Simple sample CSV seeds without warehouse connection
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">dbt Developer Certification Prep</td>
                  <td className="py-5 px-6 bg-orange-950/20 border-l border-r border-orange-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Complete dbt Certified Developer Exam Mock Practice Tests
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
      <UpcomingBatchSchedule courseName={`dbt Training in ${locName}`} />

      {/* Recent Placements Component */}
      <RecentPlacementsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-orange-500/20">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              dbt Training in {locName} - FAQs
            </h2>
            <p className="text-slate-400 text-sm">
              Everything you need to know about our comprehensive dbt Training in {locName}.
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
                  className="w-full text-left p-5 flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-orange-400 transition"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs transition-transform ${openFaq === idx ? 'rotate-180 text-orange-400' : 'text-slate-500'}`} />
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
      <section className="py-16 bg-gradient-to-r from-orange-950/80 via-slate-900 to-orange-950/80 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Transform Your Career with the Best dbt Training in {locName}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Join the most comprehensive dbt Training in {locName}. Master Analytics Engineering, Jinja Macros, Testing, and become a Certified dbt Developer.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => openEnrollModal(`dbt Training in ${locName}`)}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/20 transition-all transform active:scale-[0.98]"
            >
              ENROLL NOW - CLAIM FREE DEMO
            </button>
            <a
              href="tel:+919036524555"
              className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
            >
              <i className="fas fa-phone-alt text-orange-400" />
              Speak to Senior Analytics Mentor
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA
        courseName={`dbt Training in ${locName}`}
        phoneNumber="+919036524555"
      />
    </div>
  );
}
