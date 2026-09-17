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

interface AimlEngineeringTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function AimlEngineeringTrainingClient({ location }: AimlEngineeringTrainingClientProps = {}) {
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
          program: `AI/ML Engineering Training in ${locName}`,
          trainingMode: inlineForm.trainingMode,
          city: inlineForm.city,
          source: 'hero-lead-form'
        })
      });
      if (res.ok) {
        window.location.href = '/thank-you';
      } else {
        openEnrollModal(`AI/ML Engineering Training in ${locName}`);
      }
    } catch (err) {
      console.error(err);
      openEnrollModal(`AI/ML Engineering Training in ${locName}`);
    } finally {
      setIsInlineSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const aimlTools = [
    { name: 'Python & NumPy / Pandas', icon: 'fab fa-python', desc: 'Vectorized Data Computing in AI/ML Engineering Training in ' + locName },
    { name: 'Scikit-Learn Framework', icon: 'fas fa-cogs', desc: 'Supervised & Unsupervised ML in AI/ML Engineering Training in ' + locName },
    { name: 'PyTorch & TensorFlow', icon: 'fas fa-brain', desc: 'Deep Neural Networks in AI/ML Engineering Training in ' + locName },
    { name: 'MLflow & Kubeflow MLOps', icon: 'fas fa-project-diagram', desc: 'Experiment Tracking in AI/ML Engineering Training in ' + locName },
    { name: 'Computer Vision & YOLO', icon: 'fas fa-eye', desc: 'Object Detection in AI/ML Engineering Training in ' + locName },
    { name: 'Hugging Face Transformers', icon: 'fas fa-language', desc: 'NLP & LLM Fine-Tuning in AI/ML Engineering Training in ' + locName },
    { name: 'FastAPI & Docker Deployment', icon: 'fab fa-docker', desc: 'Low-Latency Inference APIs in AI/ML Engineering Training in ' + locName },
    { name: 'Cloud MLOps (AWS / GCP)', icon: 'fab fa-aws', desc: 'SageMaker & Vertex AI in AI/ML Engineering Training in ' + locName }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Advanced Python, Mathematics & Exploratory Data Analysis',
      topics: [
        `Object-Oriented Python for Production Pipelines in AI/ML Engineering Training in ${locName}`,
        'Mathematics for AI: Linear Algebra, Vector Calculus, Probability & Hypothesis Testing',
        'NumPy Multi-Dimensional Tensor Operations, Broadcasting & Vectorization Performance',
        'Pandas Data Wrangling, Feature Scaling, Outlier Imputation & Categorical Encoding',
        `Live Lab: Exploratory Data Analysis (EDA) & Feature Engineering in AI/ML Engineering Training in ${locName}`
      ]
    },
    {
      title: 'Module 2: Supervised & Unsupervised Machine Learning Mastery',
      topics: [
        `Regression & Classification Algorithms in AI/ML Engineering Training in ${locName}`,
        'Ensemble Methods: Gradient Boosting, XGBoost, LightGBM & CatBoost Optimization',
        'Unsupervised Learning: K-Means Clustering, Hierarchical, DBSCAN & Dimensionality Reduction (PCA)',
        'Model Evaluation: Precision-Recall, F1-Score, ROC-AUC Curves, Confusion Matrix & Cross-Validation',
        `Live Project: Predictive Customer Churn & Lifetime Value Engine in AI/ML Engineering Training in ${locName}`
      ]
    },
    {
      title: 'Module 3: Deep Learning, Neural Networks & Computer Vision with PyTorch',
      topics: [
        `Deep Learning Foundations: ANN, Backpropagation & PyTorch Autograd in AI/ML Engineering Training in ${locName}`,
        'Convolutional Neural Networks (CNN): Feature Maps, Max-Pooling, ResNet & Transfer Learning',
        'Computer Vision Mastery: Real-Time Object Detection with YOLOv8 & OpenCV Image Processing',
        'Sequence Models: Recurrent Neural Networks (RNN) & Long Short-Term Memory (LSTM) Networks',
        `Live Lab: Real-Time Defect Detection System with PyTorch in AI/ML Engineering Training in ${locName}`
      ]
    },
    {
      title: 'Module 4: NLP, Hugging Face Transformers & LLM Architectures',
      topics: [
        `Natural Language Processing & Word Embeddings in AI/ML Engineering Training in ${locName}`,
        'Transformer Architecture: Self-Attention Mechanisms, Multi-Head Attention & Positional Encoding',
        'Hugging Face Transformers: Fine-Tuning BERT, RoBERTa & DeBERTa for Classification',
        'Generative AI Foundations: Prompt Engineering, LoRA / QLoRA Parameter-Efficient Fine-Tuning',
        `Live Project: Retrieval-Augmented Generation (RAG) System in AI/ML Engineering Training in ${locName}`
      ]
    },
    {
      title: 'Module 5: MLOps, Experiment Tracking & Production Model Serving',
      topics: [
        `MLOps Lifecycle: Data Version Control & Experiment Tracking with MLflow in AI/ML Engineering Training in ${locName}`,
        'Model Packaging: Building Low-Latency REST APIs with FastAPI, Pydantic & Docker Containers',
        'Model Monitoring: Detecting Data Drift, Concept Drift & Performance Degradation with Evidently AI',
        'Container Orchestration: Kubernetes, Triton Inference Server & GPU Acceleration',
        `Live Lab: Cloud MLOps Pipelines on AWS SageMaker in AI/ML Engineering Training in ${locName}`
      ]
    },
    {
      title: 'Module 6: Capstone AI Systems, System Design & 100% Placements',
      topics: [
        `AI/ML System Design: Scalable Recommendations & Vision Pipelines in AI/ML Engineering Training in ${locName}`,
        'AI/ML Engineer Resume Engineering & Production GitHub Portfolio Development',
        'Mock Technical Coding Interviews & ML System Architecture Case Studies',
        `100% Dedicated Placement Assistance for AI/ML Engineering Training in ${locName}`
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: `Real-Time Fraud Detection & Scoring Engine in AI/ML Engineering Training in ${locName}`,
      desc: `Engineered an enterprise fraud scoring pipeline processing high-throughput transactions in under 20ms in our AI/ML Engineering Training in ${locName}. Features automated MLflow tracking, Dockerized FastAPI microservices, and Evidently AI drift monitoring.`,
      tags: ['XGBoost', 'MLflow', 'FastAPI', 'Docker', 'AWS SageMaker'],
      color: 'from-teal-500/20 to-cyan-500/20',
      border: 'border-teal-500/30'
    },
    {
      title: `Autonomous Defect Detection & Quality Inspection with YOLOv8 in ${locName}`,
      desc: `Built an industrial computer vision system using PyTorch and YOLOv8 in our AI/ML Engineering Training in ${locName} to identify surface defects on manufacturing assembly lines with 98.4% mAP accuracy and sub-50ms inference latency.`,
      tags: ['PyTorch', 'YOLOv8', 'Computer Vision', 'OpenCV', 'Transfer Learning'],
      color: 'from-cyan-500/20 to-indigo-500/20',
      border: 'border-cyan-500/30'
    },
    {
      title: `Enterprise Multi-Modal Document RAG & Transformer Classifier in ${locName}`,
      desc: `Designed an intelligent enterprise knowledge assistant in our AI/ML Engineering Training in ${locName} integrating Hugging Face RoBERTa classification, ChromaDB vector indexing, and Claude / OpenAI LLM synthesis for instant document review.`,
      tags: ['Hugging Face', 'Transformers', 'RAG', 'Vector DB', 'LLM Fine-Tuning'],
      color: 'from-indigo-500/20 to-teal-500/20',
      border: 'border-indigo-500/30'
    }
  ];

  const faqs = [
    {
      q: `What is covered in the AI/ML Engineering Training in ${locName}?`,
      a: `Our AI/ML Engineering Training in ${locName} is an intensive, industry-aligned master program covering Python, Mathematics, Scikit-Learn, Deep Learning with PyTorch, Computer Vision (YOLO), Hugging Face Transformers (NLP), and end-to-end MLOps deployment on AWS SageMaker and Docker.`
    },
    {
      q: `Who should enroll in AI/ML Engineering Training in ${locName}?`,
      a: `The AI/ML Engineering Training in ${locName} is designed for software developers, data analysts, engineers, and freshers looking to build and deploy intelligent deep learning models, LLMs, and computer vision systems.`
    },
    {
      q: `What hands-on labs are included in AI/ML Engineering Training in ${locName}?`,
      a: `In our AI/ML Engineering Training in ${locName}, students complete 50+ hours of live coding labs including PyTorch deep neural networks, YOLOv8 object detection, Hugging Face transformers fine-tuning, and MLflow CI/CD pipelines.`
    },
    {
      q: `How does AI/ML Engineering Training in ${locName} provide 100% placement support?`,
      a: `Enrolling in AI/ML Engineering Training in ${locName} at LearnMore Technologies gives you 100% dedicated placement support, resume optimization for Machine Learning Engineers, mock interviews with Principal AI Architects, and direct interview scheduling with 300+ hiring partners across Bangalore.`
    },
    {
      q: `Are weekday and weekend batches available for AI/ML Engineering Training in ${locName}?`,
      a: `Yes, we provide flexible weekday morning/evening batches and weekend intensive batches for AI/ML Engineering Training in ${locName}, with both in-person classroom training in Marathahalli, Bangalore, and live interactive online training.`
    },
    {
      q: `Will I receive certification after completing AI/ML Engineering Training in ${locName}?`,
      a: `Yes, upon completing the AI/ML Engineering Training in ${locName}, you receive an ISO 9001:2015 verified AI/ML Engineer Certificate of Excellence recognized across global tech companies.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-teal-500 selection:text-slate-950" style={{ backgroundColor: '#020617', color: '#f8fafc' }}>
      <Header />
      <BatchUrgencyBanner courseName={`AI/ML Engineering Training in ${locName}`} />

      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" style={{ backgroundColor: '#020617' }}>
        {/* Glow Accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-600/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <Link href="/courses" className="hover:text-teal-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <span className="text-slate-200">AI/ML Engineering Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider shadow-inner">
                <i className="fas fa-brain" /> Ranked #1 Institute for AI/ML Engineering Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                AI/ML Engineering Training in <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                LearnMore Technologies provides the most practical <strong className="text-white">AI/ML Engineering Training in {locName}</strong> with 100% placement support. Master Machine Learning, PyTorch Deep Learning, Transformers (NLP), Computer Vision (YOLO), and MLOps on AWS SageMaker in our comprehensive <strong className="text-white">AI/ML Engineering Training in {locName}</strong>.
              </p>

              {/* Social Proof & Rating */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-700 px-3.5 py-2 rounded-xl text-amber-400 font-bold">
                  <i className="fas fa-star text-amber-400" />
                  <span>4.95 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(2,450+ Reviews for AI/ML Engineering Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3.5 py-2 rounded-xl text-emerald-400 font-bold">
                  <i className="fas fa-user-check" />
                  <span>100% Placement Assistance</span>
                </div>
              </div>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { icon: 'fas fa-brain', label: 'PyTorch & TensorFlow' },
                  { icon: 'fas fa-cogs', label: 'Scikit-Learn & XGBoost' },
                  { icon: 'fas fa-language', label: 'Transformers & NLP' },
                  { icon: 'fas fa-eye', label: 'Computer Vision & YOLO' },
                  { icon: 'fas fa-project-diagram', label: 'MLflow & Docker MLOps' },
                  { icon: 'fas fa-user-graduate', label: '100% Placement Support' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-medium">
                    <i className={`${item.icon} text-teal-400 text-sm`} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Lead Capture Form */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-slate-900 border border-teal-500/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl" style={{ backgroundColor: '#0f172a' }}>
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Free Demo Class
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Book Your Free Live Demo</h3>
                <p className="text-xs text-slate-300 mb-6">
                  Get curriculum roadmap, fee discounts & live demo for AI/ML Engineering Training in {locName}.
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-200 mb-1">Training Mode</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    >
                      <option value="Classroom Training">Classroom Training ({locName})</option>
                      <option value="Online Live Training">Live Online Interactive</option>
                      <option value="Weekend Fast-Track">Weekend Fast-Track Batch</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg hover:shadow-teal-500/25 disabled:opacity-50"
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
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-400">50+ Hrs</div>
              <div className="text-xs text-slate-300 mt-1">Live Labs in AI/ML Engineering Training in {locName}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">3 Real-World</div>
              <div className="text-xs text-slate-300 mt-1">Capstone AI Projects</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-400">100%</div>
              <div className="text-xs text-slate-300 mt-1">Placement Support in {locName}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">1:1</div>
              <div className="text-xs text-slate-300 mt-1">AI Architect Mentorship</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Tech Stack */}
      <section className="py-16 bg-slate-950" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2">Technology Ecosystem</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Tools You Will Master in AI/ML Engineering Training in {locName}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aimlTools.map((tool, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 transition-all group" style={{ backgroundColor: '#0f172a' }}>
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4 group-hover:bg-teal-500/20 transition-colors">
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
              <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2">Comprehensive Curriculum</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">
                AI/ML Engineering Training in {locName} Course Syllabus
              </p>
            </div>
            <button
              onClick={() => openEnrollModal(`AI/ML Syllabus Download (${locName})`)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500/20 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <i className="fas fa-file-pdf text-teal-400" />
              Download Full Syllabus PDF
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {syllabusModules.map((mod, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-teal-500/30 transition-all flex flex-col justify-between" style={{ backgroundColor: '#020617' }}>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-400 mb-3">
                    <span className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center text-[11px] text-teal-300">
                      {idx + 1}
                    </span>
                    <span>Module {idx + 1} - AI/ML Engineering Training in {locName}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-4 leading-snug">{mod.title}</h3>
                  <ul className="space-y-2.5">
                    {mod.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <i className="fas fa-check text-teal-400 text-[10px] mt-1 shrink-0" />
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
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2">Hands-On Experience</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Projects in AI/ML Engineering Training in {locName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capstoneProjects.map((proj, idx) => (
              <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-b ${proj.color} border ${proj.border} flex flex-col justify-between`} style={{ backgroundColor: '#0f172a' }}>
                <div>
                  <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-teal-400 text-xs font-bold mb-4">
                    P0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">{proj.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{proj.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] text-teal-300">
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
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2">The LearnMore Advantage</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Why LearnMore for AI/ML Engineering Training in {locName}?
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-800 text-xs text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Feature</th>
                  <th className="py-4 px-6 text-teal-400 bg-teal-500/10 rounded-t-lg">AI/ML Engineering Training in {locName} (LearnMore)</th>
                  <th className="py-4 px-6 text-slate-500">Other Training Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Deep Learning & PyTorch from Scratch</td>
                  <td className="py-4 px-6 text-teal-300 bg-teal-500/5 font-semibold">✅ Yes, CNN, ResNet, YOLO & Transformers</td>
                  <td className="py-4 px-6 text-slate-500">❌ Basic Scikit-Learn Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Production MLOps (MLflow + Docker)</td>
                  <td className="py-4 px-6 text-teal-300 bg-teal-500/5 font-semibold">✅ Yes, End-to-End CI/CD & Drift Monitoring</td>
                  <td className="py-4 px-6 text-slate-500">❌ Jupyter Notebooks Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Hugging Face & LLM Fine-Tuning</td>
                  <td className="py-4 px-6 text-teal-300 bg-teal-500/5 font-semibold">✅ Yes, BERT, LoRA/QLoRA & RAG Vector DBs</td>
                  <td className="py-4 px-6 text-slate-500">❌ Outdated NLTK Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Cloud Deployment (AWS SageMaker / Vertex)</td>
                  <td className="py-4 px-6 text-teal-300 bg-teal-500/5 font-semibold">✅ Yes, Enterprise Low-Latency Serving</td>
                  <td className="py-4 px-6 text-slate-500">❌ Localhost Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Placement Support & Mock Interviews</td>
                  <td className="py-4 px-6 text-teal-300 bg-teal-500/5 font-semibold">✅ 100% Dedicated with 300+ Partners</td>
                  <td className="py-4 px-6 text-slate-500">❌ Generic Job Leads</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Batch Schedule Section */}
      <UpcomingBatchSchedule courseName={`AI/ML Engineering Training in ${locName}`} />

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-slate-950" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2">Got Questions?</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions on AI/ML Engineering Training in {locName}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden transition-all" style={{ backgroundColor: '#0f172a' }}>
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-teal-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs text-teal-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
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
            Best AI/ML Engineering Training in {locName}, Bangalore
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed max-w-3xl mx-auto">
            LearnMore Technologies offers premier AI/ML Engineering Training in {locName}. Join our specialized AI/ML Engineering Training in {locName} to master PyTorch, Computer Vision, Transformers, and MLOps deployment with 100% placement support in Bangalore. Accessible from Outer Ring Road, Whitefield, Bellandur, Electronic City, and HSR Layout.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openEnrollModal(`AI/ML Engineering Training in ${locName}`)}
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-teal-500/25"
            >
              Enroll Now for AI/ML Engineering Training in {locName}
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA courseName={`AI/ML Engineering Training in ${locName}`} />
    </div>
  );
}
