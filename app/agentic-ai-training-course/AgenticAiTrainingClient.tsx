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

interface AgenticAiTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function AgenticAiTrainingClient({ location }: AgenticAiTrainingClientProps = {}) {
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
          program: `Agentic AI Training in ${locName}`,
          trainingMode: inlineForm.trainingMode,
          city: inlineForm.city,
          source: 'hero-lead-form'
        })
      });
      if (res.ok) {
        window.location.href = '/thank-you';
      } else {
        openEnrollModal(`Agentic AI Training in ${locName}`);
      }
    } catch (err) {
      console.error(err);
      openEnrollModal(`Agentic AI Training in ${locName}`);
    } finally {
      setIsInlineSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const agenticTools = [
    { name: 'LangGraph', icon: 'fas fa-project-diagram', desc: 'Cyclic & Stateful AI Agents' },
    { name: 'CrewAI', icon: 'fas fa-users-cog', desc: 'Role-Playing Multi-Agent Crews' },
    { name: 'Microsoft AutoGen', icon: 'fas fa-robot', desc: 'Conversational Agent Framework' },
    { name: 'OpenAI Swarm', icon: 'fas fa-brain', desc: 'Lightweight Agent Routines' },
    { name: 'LlamaIndex', icon: 'fas fa-database', desc: 'Agentic RAG & Query Routing' },
    { name: 'Pinecone / Qdrant', icon: 'fas fa-layer-group', desc: 'Vector Memory & Hybrid Search' },
    { name: 'Ollama & vLLM', icon: 'fas fa-microchip', desc: 'Local Open LLM Orchestration' },
    { name: 'LangSmith', icon: 'fas fa-chart-line', desc: 'Agent Tracing & Observability' },
  ];

  const syllabusModules = [
    {
      title: 'Module 1: GenAI Foundations & LLM Architecture',
      topics: [
        'Transformers Deep-Dive: Self-Attention, KV Cache, Context Windows & Tokens',
        'GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro & DeepSeek R1 Model Mechanics',
        'Advanced Prompt Engineering: Chain-of-Thought (CoT), Tree-of-Thought & ReAct',
        'Structured Output Generation with Pydantic, Instructor & JSON Schema Validation'
      ]
    },
    {
      title: 'Module 2: Autonomous Agent Fundamentals & Tool Calling',
      topics: [
        'Anatomy of an AI Agent: Planning, Short/Long-Term Memory & Tool Execution',
        'Function Calling with OpenAI, Anthropic Claude & Open-Source LLMs',
        'Building Web Search, SQL Querying, Python Code Sandbox & API Execution Agents',
        'Self-Reflection, Error Self-Correction Loops & Plan-and-Solve Strategies'
      ]
    },
    {
      title: 'Module 3: Multi-Agent Orchestration with CrewAI & AutoGen',
      topics: [
        'CrewAI Architecture: Agents, Tasks, Custom Tools & Hierarchical Processes',
        'Role-Playing Agents, Memory Systems (Short-term, Long-term, Entity) & Custom Tools',
        'Microsoft AutoGen: Conversable Agents, GroupChatManager & Human-in-the-Loop',
        'Collaborative Problem-Solving Workflows & Inter-Agent Task Delegation'
      ]
    },
    {
      title: 'Module 4: Graph-Based Stateful Agents with LangGraph',
      topics: [
        'LangGraph Core: StateGraph, Nodes, Edges, Conditional Routing & Cycles',
        'Persistent Memory & Checkpointing (PostgreSQL / SQLite State Storage)',
        'Human-in-the-Loop (HITL) Approval Workflows, Time Travel & Breakpoints',
        'Building Complex Multi-Turn Conversational & Hierarchical Supervisor Agents'
      ]
    },
    {
      title: 'Module 5: Agentic RAG, Vector Search & Memory Architectures',
      topics: [
        'Traditional RAG vs Agentic RAG: Query Routing, Fallbacks, HyDE & Self-RAG',
        'Vector Databases (Pinecone, Qdrant, ChromaDB) & Hybrid Dense/Sparse Search',
        'Long-Term Memory Management: Semantic Caching, Ephemeral vs Permanent Storage',
        'Multi-Modal Agentic RAG: PDF Chart Extraction, Vision Models & Audio Inputs'
      ]
    },
    {
      title: 'Module 6: Production Agent LLMOps, Evaluation & Deployment',
      topics: [
        'LLM Observability, Prompt Tracing & Cost Monitoring with LangSmith & Phoenix',
        'Agent Evaluation Benchmarks (ROUGE, BLEU, G-Eval, Custom Assertions)',
        'Containerization & Production Deployment using Docker, FastAPI & AWS/GCP',
        'Enterprise Portfolio Review, GitHub Optimization & AI Engineering Mock Interviews'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'Autonomous Multi-Agent Software Engineering Studio',
      desc: 'Architected an end-to-end multi-agent crew (Product Owner, Architect, Python Coder, Reviewer & QA) that takes user requirements, writes code, runs sandbox unit tests, and outputs verified pull requests.',
      tags: ['CrewAI', 'LangGraph', 'GPT-4o', 'Docker Sandbox']
    },
    {
      title: 'Enterprise Financial Investment Research Agent',
      desc: 'Built an autonomous financial analyst agent that reads SEC 10-K filings, fetches live stock quotes from Yahoo Finance API, computes financial ratios, and synthesizes investment reports.',
      tags: ['LangGraph', 'LlamaIndex', 'Pinecone', 'Claude 3.5 Sonnet']
    },
    {
      title: 'Multi-Turn Customer Support Agent with Human-in-the-Loop',
      desc: 'Engineered a conversational support agent capable of checking order status, issuing refund requests within policy, updating databases, and escalating edge cases to human supervisors.',
      tags: ['LangGraph HITL', 'PostgreSQL', 'FastAPI', 'LangSmith']
    }
  ];

  const faqs = [
    {
      q: `Why enroll at LearnMore Technologies for Agentic AI Training in ${locName}?`,
      a: `LearnMore Technologies is recognized as the #1 institute for Agentic AI Training in ${locName}. Our trainers are Senior AI Solutions Architects with 12+ years of industry experience. We provide hands-on coding with LangGraph, CrewAI, AutoGen, Agentic RAG, sandbox GPU environments, 100% placement support, and real-world capstone projects.`
    },
    {
      q: `What prerequisites are required for Agentic AI Training in ${locName}?`,
      a: `Basic knowledge of Python programming is recommended for Agentic AI Training in ${locName}. Prior experience with machine learning is helpful but not mandatory, as we cover fundamental GenAI, LLM APIs, and prompt architectures in the initial module.`
    },
    {
      q: `How does Agentic AI Training in ${locName} differ from standard Generative AI courses?`,
      a: `Standard Generative AI typically focuses on one-shot text generation and simple prompts. In our Agentic AI Training in ${locName}, you build autonomous software entities that can reason, plan multi-step workflows, execute code in sandboxes, call external APIs and databases, self-correct errors, and collaborate in multi-agent teams.`
    },
    {
      q: `Which agent frameworks are covered extensively in Agentic AI Training in ${locName}?`,
      a: `Our Agentic AI Training in ${locName} covers LangGraph (stateful graph-based agents), CrewAI (role-playing multi-agent systems), Microsoft AutoGen (conversational multi-agent workflows), OpenAI Swarm, LlamaIndex (Agentic RAG), and LangSmith (observability & evaluation).`
    },
    {
      q: `What is the average salary after completing Agentic AI Training in ${locName}?`,
      a: `Graduates of Agentic AI Training in ${locName} target top-tier roles including Agentic AI Engineer, Generative AI Specialist, LLM Application Developer, and AI Solutions Architect, with salary packages ranging from ₹10 LPA to ₹35+ LPA across top tech firms.`
    },
    {
      q: `Does Agentic AI Training in ${locName} provide 100% Placement Assistance?`,
      a: `Yes, enrolling in Agentic AI Training in ${locName} includes 100% placement assistance with AI-specialized resume building, portfolio curation on GitHub, technical mock interviews, and direct interview referrals to 300+ hiring partners.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <Header />
      <BatchUrgencyBanner />

      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/15 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/courses" className="hover:text-amber-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">Agentic AI Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-5">
                <i className="fas fa-robot"></i> Ranked #1 Institute for Agentic AI Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-white">
                Agentic AI Training in <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">
                LearnMore Technologies offers the best <strong>Agentic AI Training in {locName}</strong> with 100% placement assistance. Master Autonomous AI Agents, LangGraph, CrewAI, AutoGen, Agentic RAG, tool calling, self-healing code sandboxes & production LLMOps in our practical <strong>Agentic AI Training in {locName}</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-amber-400 font-bold">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.95 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(2,800+ Reviews for Agentic AI Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-emerald-400 font-bold">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
              </div>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-project-diagram text-emerald-400 text-sm" />
                  <span>LangGraph & Cyclic State</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-users-cog text-amber-400 text-sm" />
                  <span>CrewAI & AutoGen Crews</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-database text-pink-400 text-sm" />
                  <span>Agentic RAG & Memory</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-briefcase text-cyan-400 text-sm" />
                  <span>100% Placement Support</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-money-bill-wave text-yellow-400 text-sm" />
                  <span>Zero-Cost EMI Available</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-user-shield text-red-400 text-sm" />
                  <span>Human-in-the-Loop AI</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal(`Agentic AI Training in ${locName}`)}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/20 transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-paper-plane"></i> Enroll for Agentic AI Training in {locName}
                </button>
                <button
                  onClick={() => openEnrollModal(`Agentic AI Training Syllabus - ${locName}`)}
                  className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-file-download text-amber-400"></i> Download Agentic AI Training in {locName} Syllabus
                </button>
              </div>
            </div>

            {/* Lead Capture Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-100 border border-amber-500/30 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-800">
                  <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full mb-2 tracking-wider">
                    Limited Seats Batch
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white">Book Free AI Counselling</h3>
                  <p className="text-xs text-slate-400 mt-1">Get 1-on-1 guidance for Agentic AI Training in {locName}</p>
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
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
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
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
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
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase mb-1">Training Mode</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option value="Classroom Training">{`Classroom Training (${locName})`}</option>
                      <option value="Live Online Training">Live Online Interactive</option>
                      <option value="Weekend Batch">Weekend Batch for Working Pros</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black py-3.5 rounded-xl transition text-sm shadow-lg shadow-amber-500/20"
                  >
                    {isInlineSubmitting ? 'SUBMITTING...' : `JOIN AGENTIC AI TRAINING IN ${locName.toUpperCase()}`}
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
              <p className="text-3xl md:text-4xl font-black text-amber-400 mb-1">8,500+</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">AI Students Trained</p>
            </div>
            <div className="p-4 border-r border-slate-800 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-orange-400 mb-1">98.4%</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">Placement Record</p>
            </div>
            <div className="p-4 border-r border-slate-800 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">300+</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">AI Hiring Partners</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-black text-cyan-400 mb-1">₹18.5 LPA</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">Average Package</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agentic AI Tools Grid */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-amber-500/20">
              CUTTING-EDGE AI STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Agent Frameworks & Tools You Will Master in Agentic AI Training in {locName}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {agenticTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center hover:shadow-xl hover:border-amber-500/40 transition duration-300">
                <div className="w-14 h-14 mx-auto bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center text-2xl mb-4">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-amber-500/20">
              INDUSTRY-ALIGNED SYLLABUS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Comprehensive Curriculum for Agentic AI Training in {locName}
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              From foundational LLM token mechanics to multi-agent production orchestration with LangGraph and CrewAI in our Agentic AI Training in {locName}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-md hover:border-slate-700 transition">
                <h3 className="text-xl font-bold text-amber-400 mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((t, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
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
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-amber-500/20">
              PRODUCTION CAPSTONES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Live Projects You Will Build in Agentic AI Training in {locName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-md flex flex-col justify-between hover:border-amber-500/40 transition">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-2xl flex items-center justify-center text-xl font-black mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold px-2.5 py-1 rounded-md">
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
              Best Agentic AI Training in {locName} – LearnMore Technologies
            </h2>
            <p>
              Are you looking for the top-rated <strong>Agentic AI Training in {locName}</strong>? LearnMore Technologies offers an industry-leading <strong>Agentic AI Training in {locName}</strong> tailored for software engineers, data scientists, Python developers, and AI enthusiasts wanting to lead the next revolution in autonomous software systems.
            </p>
            <p>
              Our practical <strong>Agentic AI Training in {locName}</strong> goes far beyond traditional Generative AI text prompts. We teach you how to engineer stateful, cyclic AI agents using <strong>LangGraph</strong>, multi-agent collaborative crews using <strong>CrewAI</strong> and <strong>Microsoft AutoGen</strong>, as well as robust <strong>Agentic RAG</strong> pipelines with long-term memory architectures.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              Why Join Our Agentic AI Training in {locName}?
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-amber-500"></i> 100% Practical AI Engineering Labs in <strong>Agentic AI Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-amber-500"></i> Mentorship from Senior AI Architects in <strong>Agentic AI Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-amber-500"></i> 100% Placement Support & Referral Tie-ups with <strong>Agentic AI Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-amber-500"></i> Real-time Enterprise Multi-Agent Capstone Projects in <strong>Agentic AI Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-amber-500"></i> Globally Recognized ISO 9001:2015 Certification in <strong>Agentic AI Training in {locName}</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ISO Certification Preview */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-amber-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certified Agentic AI Engineer Certification in {locName}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Receive an official, lifetime-valid LearnMore Technologies Agentic AI Engineer Certificate accredited by international quality standards upon completing Agentic AI Training in {locName}.
              </p>
              <button
                onClick={() => openEnrollModal(`Agentic AI Certification Sample - ${locName}`)}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-900 border-2 border-amber-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="w-20 h-20 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-amber-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-amber-300 font-extrabold uppercase tracking-widest mb-4">Certified Agentic AI Engineer</p>
                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-AGENTIC-AI-2026
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-amber-500/30">
              WHY WE ARE #1
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              LearnMore Technologies vs Other Institutes for Agentic AI Training in {locName}
            </h2>
            <p className="text-slate-400 mt-2 text-base">
              See why thousands of developers choose LearnMore Technologies for genuine Agentic AI mastery.
            </p>
          </div>

          <div className="overflow-x-auto shadow-2xl rounded-3xl border border-slate-800">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 text-sm uppercase tracking-wider bg-slate-900/80">
                  <th className="py-5 px-6 text-slate-400 font-bold w-1/3">Feature / Comparison</th>
                  <th className="py-5 px-6 bg-gradient-to-r from-amber-600/40 to-orange-600/40 text-amber-400 font-extrabold border-t-2 border-l border-r border-amber-500 w-1/3 text-base">
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
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Lead AI Architects with 12+ Yrs MNC Experience
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers with basic ChatGPT prompt wrappers only
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Frameworks Covered</td>
                  <td className="py-5 px-6 bg-amber-950/20 border-l border-r border-amber-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> LangGraph, CrewAI, AutoGen, LlamaIndex & LangSmith
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Basic OpenAI API calls without stateful loops
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-amber-950/20 border-l border-r border-amber-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 100% Placement Support & 300+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> No dedicated AI placements or referrals
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-amber-950/20 border-l border-r border-amber-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 3 End-to-End Autonomous Multi-Agent Systems
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Simple Jupyter notebook toy demos
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Certification Accreditation</td>
                  <td className="py-5 px-6 bg-amber-950/20 border-l border-r border-amber-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> ISO 9001:2015 Globally Recognized Industry Certification
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Unrecognized certificate
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Upcoming Batch Schedule Component */}
      <UpcomingBatchSchedule courseName={`Agentic AI Training in ${locName}`} />

      {/* Recent Placements Component */}
      <RecentPlacementsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-amber-500/20">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Agentic AI Training in {locName} - FAQs
            </h2>
            <p className="text-slate-400 text-sm">
              Everything you need to know about our comprehensive Agentic AI Training in {locName}.
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
                  className="w-full text-left p-5 flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-amber-400 transition"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs transition-transform ${openFaq === idx ? 'rotate-180 text-amber-400' : 'text-slate-500'}`} />
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
      <section className="py-16 bg-gradient-to-r from-amber-950/80 via-slate-900 to-amber-950/80 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Lead the Future of AI with the Best Agentic AI Training in {locName}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Join the most comprehensive Agentic AI Training in {locName}. Build real-world multi-agent systems and launch your high-paying AI engineering career today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => openEnrollModal(`Agentic AI Training in ${locName}`)}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 transition-all transform active:scale-[0.98]"
            >
              ENROLL NOW - CLAIM FREE DEMO
            </button>
            <a
              href="tel:+919036524555"
              className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
            >
              <i className="fas fa-phone-alt text-amber-400" />
              Speak to Senior AI Mentor
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA
        courseName={`Agentic AI Training in ${locName}`}
        phoneNumber="+919036524555"
      />
    </div>
  );
}
