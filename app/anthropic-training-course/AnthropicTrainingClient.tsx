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

interface AnthropicTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function AnthropicTrainingClient({ location }: AnthropicTrainingClientProps = {}) {
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
          program: `Anthropic AI Training in ${locName}`,
          trainingMode: inlineForm.trainingMode,
          city: inlineForm.city,
          source: 'hero-lead-form'
        })
      });
      if (res.ok) {
        window.location.href = '/thank-you';
      } else {
        openEnrollModal(`Anthropic AI Training in ${locName}`);
      }
    } catch (err) {
      console.error(err);
      openEnrollModal(`Anthropic AI Training in ${locName}`);
    } finally {
      setIsInlineSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const anthropicTools = [
    { name: 'Claude 3.5 Sonnet & Haiku', icon: 'fas fa-brain', desc: 'SOTA Reasoning & Coding Language Models in Anthropic AI Training in ' + locName },
    { name: 'Anthropic Computer Use API', icon: 'fas fa-desktop', desc: 'OS & GUI Automated Control Agent in Anthropic AI Training in ' + locName },
    { name: 'Anthropic Python & JS SDKs', icon: 'fab fa-python', desc: 'Official API Client Integration in Anthropic AI Training in ' + locName },
    { name: 'Tool Use & Function Calling', icon: 'fas fa-tools', desc: 'Structured JSON & External API Triggers in Anthropic AI Training in ' + locName },
    { name: '200K Context Window Mastery', icon: 'fas fa-file-alt', desc: 'Long-Context Analysis & Retrieval in Anthropic AI Training in ' + locName },
    { name: 'Claude Prompt Caching', icon: 'fas fa-bolt', desc: '90% Cost Reduction & Low-Latency API in Anthropic AI Training in ' + locName },
    { name: 'AWS Bedrock & Vertex AI', icon: 'fab fa-aws', desc: 'Enterprise Cloud Deployment Models in Anthropic AI Training in ' + locName },
    { name: 'LangGraph + Claude Agents', icon: 'fas fa-project-diagram', desc: 'Stateful Multi-Agent Workflows in Anthropic AI Training in ' + locName }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Anthropic AI Architecture, Constitutional AI & Claude 3 Family',
      topics: [
        `Anthropic Foundation & Alignment Philosophy: Constitutional AI & Safety Guardrails in Anthropic AI Training in ${locName}`,
        'Exploring the Claude 3 Model Family: Claude 3.5 Sonnet, Claude 3 Opus & Claude 3 Haiku',
        'API Key Management, Rate Limits, Billing & Setting Up Anthropic Python / TypeScript SDKs',
        'Anthropic Workbench: Designing, Testing, Benchmarking & Evaluating System Prompts',
        '200K Context Window Architecture & Long-Context Needle-In-A-Haystack Analysis',
        `Live Lab: Building a High-Accuracy Claude 3.5 Code Review Scanner in Anthropic AI Training in ${locName}`
      ]
    },
    {
      title: 'Module 2: Advanced Prompt Engineering & Claude Prompt Caching API',
      topics: [
        'System Prompts Architecture: Prefills, Persona Injections & Structured JSON Schema Outputs',
        'XML Tags Usage in Claude Prompts for Clean Context Isolation & Dynamic Token Parsing',
        'Chain-of-Thought (CoT) Prompting, Few-Shot Injections & Structured Reasoning Controls',
        `Anthropic Prompt Caching API: Reducing API Costs by 90% in Anthropic AI Training in ${locName}`,
        'Multimodal Vision Analysis: Processing UI Screenshots, Financial Charts, PDFs & Schematics',
        `Live Project: Implementing High-Speed Cached 100K-Token Financial Analyzer in Anthropic AI Training in ${locName}`
      ]
    },
    {
      title: 'Module 3: Anthropic Tool Use & Function Calling Architecture',
      topics: [
        'Defining Tool Use Schemas with Standard JSON Schema (Types, Properties, Required)',
        'Controlling Tool Selection: auto, any, and specific tool forcing (tool_choice parameter)',
        'Handling Tool Call Returns, Validation & Re-Injecting Execution Results back to Claude',
        'Chaining Multi-Step Complex Tools (SQL Database Queries, Live Web Search, Calculators, APIs)',
        'Error Handling, Schema Mismatch Retries & Sandboxed Tool Execution Environments',
        `Live Lab: Building an Autonomous SQL Database Query Assistant in Anthropic AI Training in ${locName}`
      ]
    },
    {
      title: 'Module 4: Anthropic Computer Use API & Autonomous GUI Automation',
      topics: [
        `Deep-Dive into Anthropic Computer Use Beta API in Anthropic AI Training in ${locName}`,
        'Screen Action Automation: Mouse Coordinate Tracking, Left/Right Clicks, Keypresses & Scrolling',
        'Executing Computer Use in Secure Docker Containers & Virtual X11 Desktops',
        'Building Autonomous Web Browser Navigation, Data Entry & Desktop Software Automation Agents',
        'Security Best Practices: Sandboxing, Human-in-the-Loop Approval Checkpoints & Safety Filters',
        `Live Project: Multi-Step Web Scraping & Form Submission Desktop Agent in Anthropic AI Training in ${locName}`
      ]
    },
    {
      title: 'Module 5: Agentic Systems, Advanced RAG & LangGraph Workflows with Claude',
      topics: [
        `Orchestrating Claude 3.5 Sonnet with LangGraph in Anthropic AI Training in ${locName}`,
        'Advanced RAG Pipelines: Combining Claude with Vector DBs (Pinecone, ChromaDB, Qdrant)',
        'Building Supervisor Multi-Agent Crews & Human-in-the-Loop (HITL) Workflow Review Nodes',
        'Benchmarking Claude Reasoning Performance, Hallucination Audits & Output Evaluation Frameworks',
        'Streaming Responses & Building Production Web Interfaces with Next.js, FastAPI & WebSockets',
        `Live Lab: Enterprise Customer Support & Ticket Resolution Copilot in Anthropic AI Training in ${locName}`
      ]
    },
    {
      title: 'Module 6: Cloud Deployment (AWS Bedrock / GCP Vertex AI) & Placements',
      topics: [
        `Deploying Anthropic Claude Models on AWS Bedrock in Anthropic AI Training in ${locName}`,
        'Production API Architecture: Rate Limiting, Exponential Backoff Retries & Token Cost Monitoring',
        'Building Full-Stack Anthropic Applications with Next.js 14, FastAPI & Server-Sent Events',
        `Anthropic AI Developer Portfolio & Production GitHub Showcase in Anthropic AI Training in ${locName}`,
        'Mock Technical Interviews, System Design for Generative AI Applications',
        `100% Dedicated Placement Assistance for Anthropic AI Training in ${locName}`
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: `Autonomous GUI Computer Use Automation Agent in Anthropic AI Training in ${locName}`,
      desc: `Build an autonomous agent in our Anthropic AI Training in ${locName} using Anthropic Computer Use API running in a sandboxed Docker container that opens desktop browsers, logs into enterprise portals, extracts tabular reports, and performs data entry without manual human intervention.`,
      tags: ['Anthropic Computer Use', 'Docker X11', 'Python SDK', 'OS Automation', 'Claude 3.5 Sonnet'],
      color: 'from-amber-500/20 to-orange-500/20',
      border: 'border-amber-500/30'
    },
    {
      title: `Enterprise Claude 3.5 RAG with 90% Cost-Optimized Prompt Caching in ${locName}`,
      desc: `Design an enterprise document analysis engine in our Anthropic AI Training in ${locName} processing 100,000+ token PDF contracts, medical reports, and legal filings. Implement Anthropic Prompt Caching API to achieve 90% token cost reduction and 500ms sub-second response times.`,
      tags: ['Prompt Caching', '200K Context Window', 'Vector Search', 'FastAPI', 'AWS Bedrock'],
      color: 'from-orange-500/20 to-rose-500/20',
      border: 'border-orange-500/30'
    },
    {
      title: `Multi-Agent AI Software Engineering Team with LangGraph & Claude in ${locName}`,
      desc: `Develop a team of autonomous Claude agents in our Anthropic AI Training in ${locName} that collaborate to write software: a Product Manager agent breaks down user stories, an Architect agent designs system schemas, a Coder agent writes code via Tool Use, and a Tester agent executes test suites.`,
      tags: ['LangGraph', 'Multi-Agent Systems', 'Tool Use', 'Code Generation', 'CI/CD Automation'],
      color: 'from-yellow-500/20 to-amber-500/20',
      border: 'border-yellow-500/30'
    }
  ];

  const faqs = [
    {
      q: `What is covered in the Anthropic AI Training in ${locName}?`,
      a: `Our Anthropic AI Training in ${locName} is an industry-leading, hands-on master program covering Claude 3.5 Sonnet, Anthropic Computer Use API, Tool Use & Function Calling, Prompt Caching, LangGraph integration, and cloud deployment on AWS Bedrock. You gain practical experience building autonomous agents and enterprise generative AI solutions.`
    },
    {
      q: `Who should enroll in the Anthropic AI Training in ${locName}?`,
      a: `The Anthropic AI Training in ${locName} is designed for software developers, data scientists, AI engineers, and tech professionals looking to master Claude 3.5 Sonnet, autonomous agents, and Anthropic APIs with 100% placement support.`
    },
    {
      q: `What hands-on labs are included in the Anthropic AI Training in ${locName}?`,
      a: `In our Anthropic AI Training in ${locName}, students complete 40+ hours of live coding labs including Dockerized Computer Use GUI automation, 100K-token cached document retrieval, SQL tool chaining, and LangGraph multi-agent teams.`
    },
    {
      q: `How does Anthropic AI Training in ${locName} provide 100% placement assistance?`,
      a: `Enrolling in Anthropic AI Training in ${locName} at LearnMore Technologies gives you 100% dedicated placement support, resume engineering, Claude AI project portfolio building, mock interviews with Senior AI Architects, and direct interview scheduling with 300+ hiring partners across Bangalore.`
    },
    {
      q: `Are weekday and weekend batches available for Anthropic AI Training in ${locName}?`,
      a: `Yes, we offer both weekday morning/evening batches and weekend fast-track batches for Anthropic AI Training in ${locName}, available via in-person classroom sessions at Marathahalli, Bangalore, as well as live instructor-led online training.`
    },
    {
      q: `Will I receive certification after completing Anthropic AI Training in ${locName}?`,
      a: `Yes, upon completing the Anthropic AI Training in ${locName}, you receive an ISO 9001:2015 verified Anthropic AI & Claude Developer Certificate with QR verification, recognized by top tech companies globally.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-amber-500 selection:text-slate-950" style={{ backgroundColor: '#020617', color: '#f8fafc' }}>
      <Header />
      <BatchUrgencyBanner courseName={`Anthropic AI Training in ${locName}`} />

      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" style={{ backgroundColor: '#020617' }}>
        {/* Glow Accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <Link href="/courses" className="hover:text-amber-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <span className="text-slate-200">Anthropic AI Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider shadow-inner">
                <i className="fas fa-brain" /> Ranked #1 Institute for Anthropic AI Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Anthropic AI Training in <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                LearnMore Technologies provides the most advanced <strong className="text-white">Anthropic AI Training in {locName}</strong> with 100% placement support. Master Claude 3.5 Sonnet, Anthropic Computer Use API, Tool Use, Prompt Caching, LangGraph multi-agent systems, and AWS Bedrock cloud deployments in our hands-on <strong className="text-white">Anthropic AI Training in {locName}</strong>.
              </p>

              {/* Social Proof & Rating */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-700 px-3.5 py-2 rounded-xl text-amber-400 font-bold">
                  <i className="fas fa-star text-amber-400" />
                  <span>4.95 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(1,850+ Reviews for Anthropic AI Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3.5 py-2 rounded-xl text-emerald-400 font-bold">
                  <i className="fas fa-user-check" />
                  <span>100% Placement Assistance</span>
                </div>
              </div>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { icon: 'fas fa-brain', label: 'Claude 3.5 Sonnet & Haiku' },
                  { icon: 'fas fa-desktop', label: 'Computer Use Beta API' },
                  { icon: 'fas fa-bolt', label: 'Claude Prompt Caching' },
                  { icon: 'fas fa-tools', label: 'Tool Use & Function Calling' },
                  { icon: 'fab fa-aws', label: 'AWS Bedrock Deployment' },
                  { icon: 'fas fa-user-graduate', label: '100% Placement Support' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-medium">
                    <i className={`${item.icon} text-amber-400 text-sm`} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Lead Capture Form */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-slate-900 border border-amber-500/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl" style={{ backgroundColor: '#0f172a' }}>
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Free Demo Class
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Book Your Free Live Demo</h3>
                <p className="text-xs text-slate-300 mb-6">
                  Get curriculum roadmap, fee discounts & live demo for Anthropic AI Training in {locName}.
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-200 mb-1">Training Mode</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="Classroom Training">Classroom Training ({locName})</option>
                      <option value="Online Live Training">Live Online Interactive</option>
                      <option value="Weekend Fast-Track">Weekend Fast-Track Batch</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg hover:shadow-amber-500/25 disabled:opacity-50"
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
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">40+ Hrs</div>
              <div className="text-xs text-slate-300 mt-1">Live Labs in Anthropic AI Training in {locName}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-400">3 Real-World</div>
              <div className="text-xs text-slate-300 mt-1">Capstone Agent Projects</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">100%</div>
              <div className="text-xs text-slate-300 mt-1">Placement Support in {locName}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-400">1:1</div>
              <div className="text-xs text-slate-300 mt-1">AI Architect Mentorship</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Tech Stack */}
      <section className="py-16 bg-slate-950" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">Technology Ecosystem</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Tools You Will Master in Anthropic AI Training in {locName}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {anthropicTools.map((tool, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all group" style={{ backgroundColor: '#0f172a' }}>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500/20 transition-colors">
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
              <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">Comprehensive Curriculum</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">
                Anthropic AI Training in {locName} Course Syllabus
              </p>
            </div>
            <button
              onClick={() => openEnrollModal(`Anthropic Syllabus Download (${locName})`)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <i className="fas fa-file-pdf text-amber-400" />
              Download Full Syllabus PDF
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {syllabusModules.map((mod, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between" style={{ backgroundColor: '#020617' }}>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 mb-3">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-[11px] text-amber-300">
                      {idx + 1}
                    </span>
                    <span>Module {idx + 1} - Anthropic AI Training in {locName}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-4 leading-snug">{mod.title}</h3>
                  <ul className="space-y-2.5">
                    {mod.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <i className="fas fa-check text-amber-400 text-[10px] mt-1 shrink-0" />
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
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">Hands-On Experience</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Projects in Anthropic AI Training in {locName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capstoneProjects.map((proj, idx) => (
              <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-b ${proj.color} border ${proj.border} flex flex-col justify-between`} style={{ backgroundColor: '#0f172a' }}>
                <div>
                  <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-400 text-xs font-bold mb-4">
                    P0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">{proj.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{proj.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] text-amber-300">
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
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">The LearnMore Advantage</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Why LearnMore for Anthropic AI Training in {locName}?
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-800 text-xs text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Feature</th>
                  <th className="py-4 px-6 text-amber-400 bg-amber-500/10 rounded-t-lg">Anthropic AI Training in {locName} (LearnMore)</th>
                  <th className="py-4 px-6 text-slate-500">Other Training Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Hands-on Anthropic Computer Use</td>
                  <td className="py-4 px-6 text-amber-300 bg-amber-500/5 font-semibold">✅ Yes, Live Docker X11 GUI Agents</td>
                  <td className="py-4 px-6 text-slate-500">❌ Basic Text Prompts Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Prompt Caching & Cost Optimization</td>
                  <td className="py-4 px-6 text-amber-300 bg-amber-500/5 font-semibold">✅ Yes, 90% Cost Reduction Architecture</td>
                  <td className="py-4 px-6 text-slate-500">❌ Not Covered</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Multi-Agent LangGraph Orchestration</td>
                  <td className="py-4 px-6 text-amber-300 bg-amber-500/5 font-semibold">✅ Yes, Stateful Autonomous Crews</td>
                  <td className="py-4 px-6 text-slate-500">❌ Basic Single API Calls</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Cloud Deployment (AWS Bedrock / Vertex)</td>
                  <td className="py-4 px-6 text-amber-300 bg-amber-500/5 font-semibold">✅ Yes, Enterprise Production Setup</td>
                  <td className="py-4 px-6 text-slate-500">❌ Localhost Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Placement Support & Mock Interviews</td>
                  <td className="py-4 px-6 text-amber-300 bg-amber-500/5 font-semibold">✅ 100% Dedicated with 300+ Partners</td>
                  <td className="py-4 px-6 text-slate-500">❌ Generic Job Forwarding</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Batch Schedule Section */}
      <UpcomingBatchSchedule courseName={`Anthropic AI Training in ${locName}`} />

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-slate-950" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">Got Questions?</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions on Anthropic AI Training in {locName}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden transition-all" style={{ backgroundColor: '#0f172a' }}>
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs text-amber-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
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
            Best Anthropic AI Training in {locName}, Bangalore
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed max-w-3xl mx-auto">
            LearnMore Technologies offers premier Anthropic AI Training in {locName}. Join our specialized Anthropic AI Training in {locName} to master Claude 3.5 Sonnet, Anthropic Computer Use API, prompt caching, and multi-agent systems with 100% placement support in Bangalore. Accessible from Outer Ring Road, Whitefield, Bellandur, Electronic City, and HSR Layout.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openEnrollModal(`Anthropic AI Training in ${locName}`)}
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-amber-500/25"
            >
              Enroll Now for Anthropic AI Training in {locName}
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA courseName={`Anthropic AI Training in ${locName}`} />
    </div>
  );
}
