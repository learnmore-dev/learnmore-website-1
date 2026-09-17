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

interface GenerativeAITrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function GenerativeAITrainingClient({ location }: GenerativeAITrainingClientProps = {}) {
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
          program: `Generative AI Training in ${locName}`,
          trainingMode: inlineForm.trainingMode,
          city: inlineForm.city,
          source: 'hero-lead-form'
        })
      });
      if (res.ok) {
        window.location.href = '/thank-you';
      } else {
        openEnrollModal(`Generative AI Training in ${locName}`);
      }
    } catch (err) {
      console.error(err);
      openEnrollModal(`Generative AI Training in ${locName}`);
    } finally {
      setIsInlineSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const genAiTools = [
    { name: 'GPT-4o & Claude 3.5', icon: 'fas fa-brain', desc: 'Cutting-Edge Frontier LLMs' },
    { name: 'LangChain', icon: 'fas fa-link', desc: 'LLM Orchestration & Chains' },
    { name: 'LlamaIndex', icon: 'fas fa-database', desc: 'Advanced RAG & Data Indexing' },
    { name: 'Pinecone / Qdrant', icon: 'fas fa-layer-group', desc: 'Vector Memory & Hybrid Search' },
    { name: 'Hugging Face', icon: 'fas fa-cubes', desc: 'Open-Source Transformers & Datasets' },
    { name: 'PEFT / LoRA / QLoRA', icon: 'fas fa-sliders-h', desc: 'Parameter-Efficient Fine-Tuning' },
    { name: 'Stable Diffusion', icon: 'fas fa-image', desc: 'Multimodal Diffusion Models' },
    { name: 'vLLM & Ollama', icon: 'fas fa-microchip', desc: 'High-Throughput Local LLM Serving' },
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Foundations of Generative AI & Transformer Architecture',
      topics: [
        'Evolution of AI: Discriminative vs Generative Models & Foundation LLMs',
        'Transformer Architecture Deep-Dive: Self-Attention, Multi-Head Attention & KV Cache',
        'LLM Tokenization (BPE, WordPiece), Embeddings & High-Dimensional Vector Space',
        'Advanced Prompt Engineering: Chain-of-Thought (CoT), Tree-of-Thoughts & Structured Output'
      ]
    },
    {
      title: 'Module 2: Building Enterprise LLM Apps with LangChain & LlamaIndex',
      topics: [
        'LangChain Core: Prompts, Output Parsers, Chains, Memory Modules & LCEL',
        'LlamaIndex Architecture: Document Loaders, Node Parsers, Vector Indexes & Query Engines',
        'Building Custom Tool Callers, Function Calling & Dynamic API Integrations',
        'Conversational AI with Persistent Multi-Turn Memory & Streaming SSE Responses'
      ]
    },
    {
      title: 'Module 3: Advanced Retrieval-Augmented Generation (RAG) Systems',
      topics: [
        'RAG Architecture: Recursive Chunking, Semantic Chunking & Dense/Sparse Embeddings',
        'Vector Databases: Pinecone, ChromaDB, Weaviate, Milvus & Hybrid Search Operations',
        'Advanced RAG: Sentence Window Retrieval, Parent Document Retriever & Hypothetical Questions (HyDE)',
        'Re-ranking Techniques with Cohere ReRank & Cross-Encoder Precision Optimization'
      ]
    },
    {
      title: 'Module 4: Open-Source LLMs & PEFT / LoRA Fine-Tuning',
      topics: [
        'Hugging Face Transformers, Datasets, Accelerate & Quantization (GGUF, AWQ, GPTQ)',
        'Open LLMs: Llama 3, Mistral, DeepSeek & Gemma Local Setup & Evaluation',
        'Fine-Tuning Architectures: Full Weight Fine-Tuning vs PEFT (LoRA & QLoRA)',
        'Dataset Formatting (ChatML, Alpaca), Loss Curves & Weights & Biases Logging'
      ]
    },
    {
      title: 'Module 5: Multimodal GenAI, Diffusion Models & AI Guardrails',
      topics: [
        'Multimodal LLMs: GPT-4 Vision, Claude 3.5 Sonnet Vision & LLaVA Analysis',
        'Image Generation Models: Stable Diffusion XL, ControlNet & ComfyUI Automation',
        'AI Alignment, Safety Guardrails (NeMo Guardrails, Llama Guard) & RLHF Concepts',
        'Semantic Caching (GPTCache) & Production Token Cost Reduction Strategies'
      ]
    },
    {
      title: 'Module 6: Production LLMOps, Cloud Deployment & Capstone Projects',
      topics: [
        'Deploying LLM APIs with vLLM, TensorRT-LLM, Ollama & FastAPI',
        'Containerization & Production Deployment on AWS SageMaker / GCP Vertex AI',
        'Generative AI Portfolio Review, GitHub Showcase & Mock Technical Interviews',
        '100% Dedicated Placement Assistance with 300+ AI Partner Companies'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'Enterprise Financial Document Intelligence Copilot (Advanced RAG)',
      desc: 'Engineered an enterprise RAG copilot parsing complex SEC 10-K PDFs, indexing vectors into Pinecone, and utilizing LlamaIndex + Cohere ReRank for high-accuracy financial QA.',
      tags: ['LangChain', 'LlamaIndex', 'Pinecone', 'Advanced RAG']
    },
    {
      title: 'Domain-Fine-Tuned Llama 3 Enterprise Code Assistant',
      desc: 'Fine-tuned Llama 3 8B using QLoRA on a custom dataset of internal software libraries, converting natural language business requirements into tested API endpoints.',
      tags: ['Llama 3', 'QLoRA', 'Hugging Face', 'Fine-Tuning']
    },
    {
      title: 'Multimodal E-Commerce Product & Marketing Generator',
      desc: 'Built a full-stack AI web app combining GPT-4 Vision and Stable Diffusion to generate SEO product descriptions and lifestyle marketing images from raw product photos.',
      tags: ['Stable Diffusion', 'GPT-4 Vision', 'FastAPI', 'React']
    }
  ];

  const faqs = [
    {
      q: `Why enroll at LearnMore Technologies for Generative AI Training in ${locName}?`,
      a: `LearnMore Technologies is recognized as the #1 institute for Generative AI Training in ${locName}. Our trainers are Lead AI Architects with 14+ years of industry experience. We provide hands-on coding with LangChain, LlamaIndex, Advanced RAG, PEFT/LoRA Fine-Tuning, GPU lab environments, 100% placement support, and enterprise capstone projects.`
    },
    {
      q: `What prerequisites are required for Generative AI Training in ${locName}?`,
      a: `Basic knowledge of Python programming is recommended for Generative AI Training in ${locName}. Prior knowledge of machine learning is helpful but not mandatory, as we cover fundamental GenAI, transformers, and API architectures from the ground up.`
    },
    {
      q: `Which LLM tools and frameworks are covered in Generative AI Training in ${locName}?`,
      a: `Our Generative AI Training in ${locName} covers OpenAI GPT-4o, Claude 3.5 Sonnet, Llama 3, LangChain, LlamaIndex, Hugging Face Transformers, Pinecone, ChromaDB, LoRA/QLoRA fine-tuning, Stable Diffusion, and vLLM production deployment.`
    },
    {
      q: `What is the average salary after completing Generative AI Training in ${locName}?`,
      a: `Graduates of Generative AI Training in ${locName} target top-tier roles including Generative AI Engineer, LLM Developer, AI Prompt Architect, and RAG Specialist, with salary packages ranging from ₹10 LPA to ₹35+ LPA across top tech MNCs.`
    },
    {
      q: `Does Generative AI Training in ${locName} include real-time fine-tuning and GPU labs?`,
      a: `Yes! You will fine-tune open-source models like Llama 3 and Mistral using LoRA/QLoRA on GPU-accelerated cloud instances and build end-to-end RAG systems during Generative AI Training in ${locName}.`
    },
    {
      q: `Does Generative AI Training in ${locName} provide 100% Placement Assistance?`,
      a: `Yes, enrolling in Generative AI Training in ${locName} includes 100% placement assistance with AI-specialized resume building, portfolio curation on GitHub, technical mock interviews, and direct interview referrals to 300+ hiring partners.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-purple-500 selection:text-white">
      <Header />
      <BatchUrgencyBanner />

      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-purple-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/courses" className="hover:text-purple-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">Generative AI Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-5">
                <i className="fas fa-brain"></i> Ranked #1 Institute for Generative AI Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-white">
                Generative AI Training in <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">
                LearnMore Technologies offers the best <strong>Generative AI Training in {locName}</strong> with 100% placement assistance. Master LLMs, LangChain, LlamaIndex, Advanced RAG Systems, PEFT/LoRA Fine-Tuning, Vector Databases, and Multimodal GenAI in our hands-on <strong>Generative AI Training in {locName}</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-amber-400 font-bold">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.95 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(3,400+ Reviews for Generative AI Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-emerald-400 font-bold">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
              </div>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-brain text-purple-400 text-sm" />
                  <span>LLMs & Transformers</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-link text-indigo-400 text-sm" />
                  <span>LangChain & LlamaIndex</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-database text-pink-400 text-sm" />
                  <span>Advanced RAG & Vector DBs</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-sliders-h text-cyan-400 text-sm" />
                  <span>LoRA / QLoRA Fine-Tuning</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-briefcase text-emerald-400 text-sm" />
                  <span>100% Placement Support</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                  <i className="fas fa-image text-amber-400 text-sm" />
                  <span>Diffusion & Multimodal AI</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal(`Generative AI Training in ${locName}`)}
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-purple-500/20 transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-paper-plane"></i> Enroll for Generative AI Training in {locName}
                </button>
                <button
                  onClick={() => openEnrollModal(`Generative AI Training Syllabus - ${locName}`)}
                  className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-file-download text-purple-400"></i> Download Generative AI Training in {locName} Syllabus
                </button>
              </div>
            </div>

            {/* Lead Capture Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-100 border border-purple-500/30 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-800">
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full mb-2 tracking-wider">
                    Limited Seats Batch
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white">Book Free GenAI Counselling</h3>
                  <p className="text-xs text-slate-400 mt-1">Get 1-on-1 guidance for Generative AI Training in {locName}</p>
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
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
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
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
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
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase mb-1">Training Mode</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-purple-500"
                    >
                      <option value="Classroom Training">{`Classroom Training (${locName})`}</option>
                      <option value="Live Online Training">Live Online Interactive</option>
                      <option value="Weekend Batch">Weekend Batch for Working Pros</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-600 hover:from-purple-600 hover:to-indigo-700 text-white font-black py-3.5 rounded-xl transition text-sm shadow-lg shadow-purple-500/20"
                  >
                    {isInlineSubmitting ? 'SUBMITTING...' : `JOIN GENERATIVE AI TRAINING IN ${locName.toUpperCase()}`}
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
              <p className="text-3xl md:text-4xl font-black text-purple-400 mb-1">9,200+</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">GenAI Engineers Trained</p>
            </div>
            <div className="p-4 border-r border-slate-800 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-indigo-400 mb-1">98.6%</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">Placement Record</p>
            </div>
            <div className="p-4 border-r border-slate-800 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">300+</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">AI Hiring Partners</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-black text-cyan-400 mb-1">₹19.2 LPA</p>
              <p className="text-xs md:text-sm text-slate-400 font-semibold uppercase tracking-wide">Average Package</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-purple-500/20">
              CUTTING-EDGE GENAI TECH STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Tools & Frameworks You Will Master in Generative AI Training in {locName}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {genAiTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center hover:shadow-xl hover:border-purple-500/40 transition duration-300">
                <div className="w-14 h-14 mx-auto bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center text-2xl mb-4">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-purple-500/20">
              INDUSTRY-ALIGNED SYLLABUS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Comprehensive Curriculum for Generative AI Training in {locName}
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Master everything from basic prompt engineering to advanced RAG, LoRA/PEFT fine-tuning, diffusion models, and production LLMOps in our Generative AI Training in {locName}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-md hover:border-slate-700 transition">
                <h3 className="text-xl font-bold text-purple-400 mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((t, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                      <i className="fas fa-check-circle text-purple-500"></i> {t}
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-purple-500/20">
              PRODUCTION CAPSTONES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Live Projects You Will Build in Generative AI Training in {locName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-md flex flex-col justify-between hover:border-purple-500/40 transition">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[11px] font-bold px-2.5 py-1 rounded-md">
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
              Best Generative AI Training in {locName} – LearnMore Technologies
            </h2>
            <p>
              Looking for the premier <strong>Generative AI Training in {locName}</strong>? LearnMore Technologies offers an industry-leading <strong>Generative AI Training in {locName}</strong> designed for software developers, data scientists, machine learning engineers, and tech professionals aiming to build cutting-edge LLM-powered applications.
            </p>
            <p>
              Our comprehensive <strong>Generative AI Training in {locName}</strong> gives you real-world practical mastery over Prompt Engineering, LangChain, LlamaIndex, Advanced RAG architectures, open-source LLM fine-tuning using LoRA/QLoRA on Hugging Face, vector databases, and production deployment with vLLM and FastAPI.
            </p>
            <h3 className="text-xl font-bold text-white pt-4">
              Why Join Our Generative AI Training in {locName}?
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-purple-500"></i> 100% Practical AI Engineering Labs in <strong>Generative AI Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-purple-500"></i> Mentorship from Senior AI Solutions Architects in <strong>Generative AI Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-purple-500"></i> 100% Placement Support with 300+ Partner Companies for <strong>Generative AI Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-purple-500"></i> Real-World Production RAG & LoRA Fine-Tuning Capstones in <strong>Generative AI Training in {locName}</strong></li>
              <li className="flex items-center gap-2"><i className="fas fa-check-circle text-purple-500"></i> ISO 9001:2015 Globally Recognized Certification in <strong>Generative AI Training in {locName}</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ISO Certification Preview */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-purple-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certified Generative AI Engineer Certification in {locName}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Receive an official, lifetime-valid LearnMore Technologies Generative AI Engineer Certificate accredited by international quality standards upon completing Generative AI Training in {locName}.
              </p>
              <button
                onClick={() => openEnrollModal(`Generative AI Certification Sample - ${locName}`)}
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-900 border-2 border-purple-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="w-20 h-20 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-purple-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-purple-300 font-extrabold uppercase tracking-widest mb-4">Certified Generative AI Engineer</p>
                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-GENAI-2026
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-purple-500/30">
              WHY WE ARE #1
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              LearnMore Technologies vs Other Institutes for Generative AI Training in {locName}
            </h2>
            <p className="text-slate-400 mt-2 text-base">
              See why thousands of developers choose LearnMore Technologies for genuine Generative AI engineering.
            </p>
          </div>

          <div className="overflow-x-auto shadow-2xl rounded-3xl border border-slate-800">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 text-sm uppercase tracking-wider bg-slate-900/80">
                  <th className="py-5 px-6 text-slate-400 font-bold w-1/3">Feature / Comparison</th>
                  <th className="py-5 px-6 bg-gradient-to-r from-purple-600/40 to-indigo-600/40 text-purple-400 font-extrabold border-t-2 border-l border-r border-purple-500 w-1/3 text-base">
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
                  <td className="py-5 px-6 bg-purple-950/20 border-l border-r border-purple-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Lead AI Architects with 14+ Yrs MNC Experience
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers with basic ChatGPT prompt wrappers only
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">RAG & Fine-Tuning Labs</td>
                  <td className="py-5 px-6 bg-purple-950/20 border-l border-r border-purple-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Hands-on Advanced RAG + LoRA/QLoRA Fine-Tuning
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Basic API calls without deep fine-tuning or vector databases
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-purple-950/20 border-l border-r border-purple-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 100% Placement Support & 300+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> No dedicated AI placements or referrals
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-purple-950/20 border-l border-r border-purple-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 3 End-to-End Enterprise GenAI & RAG Applications
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Simple Jupyter notebook toy demos
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Certification Accreditation</td>
                  <td className="py-5 px-6 bg-purple-950/20 border-l border-r border-purple-500/30 text-emerald-400 font-semibold">
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
      <UpcomingBatchSchedule courseName={`Generative AI Training in ${locName}`} />

      {/* Recent Placements Component */}
      <RecentPlacementsSection />

      {/* FAQs */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-purple-500/20">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Generative AI Training in {locName} - FAQs
            </h2>
            <p className="text-slate-400 text-sm">
              Everything you need to know about our comprehensive Generative AI Training in {locName}.
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
                  className="w-full text-left p-5 flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-purple-400 transition"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs transition-transform ${openFaq === idx ? 'rotate-180 text-purple-400' : 'text-slate-500'}`} />
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
      <section className="py-16 bg-gradient-to-r from-purple-950/80 via-slate-900 to-purple-950/80 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Transform Your Career with the Best Generative AI Training in {locName}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Join the most comprehensive Generative AI Training in {locName}. Master LLMs, RAG, Fine-Tuning, and launch your high-paying AI engineering career today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => openEnrollModal(`Generative AI Training in ${locName}`)}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-purple-500/20 transition-all transform active:scale-[0.98]"
            >
              ENROLL NOW - CLAIM FREE DEMO
            </button>
            <a
              href="tel:+919036524555"
              className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
            >
              <i className="fas fa-phone-alt text-purple-400" />
              Speak to Senior AI Mentor
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA
        courseName={`Generative AI Training in ${locName}`}
        phoneNumber="+919036524555"
      />
    </div>
  );
}
