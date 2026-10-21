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

interface DataScienceTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function DataScienceTrainingClient({ location }: DataScienceTrainingClientProps = {}) {
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
          program: 'Data Science & AI Master Program',
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

  const dataScienceTools = [
    { name: 'Python & Pandas', icon: 'fab fa-python', desc: 'Data Manipulation & Analysis' },
    { name: 'Scikit-Learn', icon: 'fas fa-robot', desc: 'Machine Learning Algorithms' },
    { name: 'TensorFlow & Keras', icon: 'fas fa-network-wired', desc: 'Deep Learning & Neural Nets' },
    { name: 'PyTorch', icon: 'fas fa-fire', desc: 'AI Research & Deep Models' },
    { name: 'NLP & Transformers', icon: 'fas fa-language', desc: 'Text Processing & HuggingFace' },
    { name: 'Generative AI & LLMs', icon: 'fas fa-wand-magic-sparkles', desc: 'LangChain, Vector DBs & RAG' },
    { name: 'SQL & Data Warehousing', icon: 'fas fa-database', desc: 'Complex Queries & Aggregations' },
    { name: 'Power BI & Tableau', icon: 'fas fa-chart-line', desc: 'Business Dashboards & Visuals' }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Python for Data Science & Scientific Computing',
      topics: [
        'Python Basics, OOP, Functional Programming & File Handling',
        'NumPy: Multi-Dimensional Arrays, Vectorized Operations & Linear Algebra',
        'Pandas: DataFrames, Series, Data Cleaning, Wrangling & Missing Value Handling',
        'Data Visualization with Matplotlib & Seaborn for Exploratory Analysis',
        'Working with Structured, Semi-Structured (JSON/XML) & Web Scraped Data',
        'Live Lab: Comprehensive Exploratory Data Analysis (EDA) on Real-World Financial Dataset'
      ]
    },
    {
      title: 'Module 2: Applied Statistics, Probability & Hypothesis Testing',
      topics: [
        'Descriptive Statistics: Mean, Median, Mode, Variance & Standard Deviation',
        'Probability Distributions: Normal, Binomial, Poisson & Central Limit Theorem (CLT)',
        'Inferential Statistics: Confidence Intervals, Hypothesis Testing & P-Values',
        'Statistical Tests: Z-Test, T-Test, ANOVA & Chi-Square Tests',
        'Correlation, Covariance & Feature Collinearity Detection',
        'Live Project: Statistical A/B Testing & User Behavioral Analysis'
      ]
    },
    {
      title: 'Module 3: Machine Learning Algorithms (Supervised & Unsupervised)',
      topics: [
        'Supervised Learning: Linear Regression, Ridge, Lasso & Polynomial Regression',
        'Classification: Logistic Regression, Decision Trees, Random Forests & Support Vector Machines (SVM)',
        'Gradient Boosting Algorithms: XGBoost, LightGBM & CatBoost',
        'Unsupervised Learning: K-Means Clustering, Hierarchical Clustering & PCA',
        'Model Evaluation: Confusion Matrix, Precision, Recall, F1-Score & ROC-AUC Curve',
        'Hyperparameter Tuning (GridSearchCV, RandomizedSearchCV) & Cross-Validation'
      ]
    },
    {
      title: 'Module 4: Deep Learning, Neural Networks & Computer Vision',
      topics: [
        'Introduction to Deep Learning & Perceptrons: Activation Functions & Backpropagation',
        'Artificial Neural Networks (ANN) Architecture using TensorFlow & Keras',
        'Convolutional Neural Networks (CNN) for Image Processing & Feature Extraction',
        'Pretrained Architectures: ResNet, VGG16, Inception & Transfer Learning',
        'Object Detection Fundamentals with YOLOv8 & OpenCV',
        'Live Project: Medical Image Classification & Disease Detection System'
      ]
    },
    {
      title: 'Module 5: Natural Language Processing (NLP), Generative AI & LLMs',
      topics: [
        'NLP Fundamentals: Tokenization, Stemming, Lemmatization, TF-IDF & Word2Vec',
        'Recurrent Neural Networks (RNN), LSTMs & GRUs for Sequence Data',
        'Transformer Architecture, Self-Attention Mechanism, BERT & GPT Models',
        'Generative AI Fundamentals: Large Language Models (LLMs) & Prompt Engineering',
        'LangChain Framework, Retrieval-Augmented Generation (RAG) & Vector Databases (ChromaDB, Pinecone)',
        'Live Project: Enterprise AI Knowledge Chatbot with Custom Documents & RAG'
      ]
    },
    {
      title: 'Module 6: MLOps, Model Deployment & Industry Capstone Projects',
      topics: [
        'Building REST APIs for ML Models using FastAPI & Flask',
        'Containerization of ML Pipelines using Docker & Cloud Deployment (AWS/Azure/GCP)',
        'Building Interactive Web Applications with Streamlit & Gradio',
        'Model Monitoring, Drift Detection & CI/CD for Machine Learning Pipelines',
        'Technical Interview Preparation, Resume Mentorship & GitHub Portfolio Building',
        'Capstone Project: Complete End-to-End Enterprise AI & Machine Learning System'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'End-to-End Predictive Analytics & Customer Churn Prediction System',
      desc: 'Built a production-ready customer churn prediction engine utilizing XGBoost, feature engineering pipelines, automated retraining, and FastAPI microservice containerized with Docker.',
      tags: ['XGBoost', 'Feature Engineering', 'FastAPI', 'Docker']
    },
    {
      title: 'Enterprise Generative AI Assistant with LangChain & RAG Pipeline',
      desc: 'Architected an internal company document intelligence bot using OpenAI GPT-4, LangChain, ChromaDB vector store, and semantic search for instant answers with exact citations.',
      tags: ['LangChain', 'OpenAI LLMs', 'RAG Pipeline', 'ChromaDB']
    },
    {
      title: 'Real-Time Computer Vision & Defect Detection System',
      desc: 'Developed an automated visual inspection and defect classification pipeline using CNN Transfer Learning (ResNet50), OpenCV, and live Streamlit analytics dashboard.',
      tags: ['Computer Vision', 'PyTorch/CNN', 'OpenCV', 'Streamlit']
    }
  ];

  const hiringCompanies = [
    { name: 'Amazon', logo: '/images/companies/amazon.webp' },
    { name: 'Microsoft', logo: '/images/companies/microsoft.webp' },
    { name: 'Accenture', logo: '/images/companies/accenture.webp' },
    { name: 'IBM', logo: '/images/companies/ibm.webp' },
    { name: 'TCS', logo: '/images/companies/tcs.webp' },
    { name: 'Infosys', logo: '/images/companies/infosys.webp' },
    { name: 'Cognizant', logo: '/images/companies/cognizant.webp' },
    { name: 'Wipro', logo: '/images/companies/wipro.webp' }
  ];

  const faqs = [
    {
      q: `Why enroll at LearnMore Technologies for Data Science Training in ${locName}?`,
      a: `LearnMore Technologies is rated the #1 institute for Data Science Training in ${locName}. Our mentors are Principal Data Scientists and AI Engineers with 15+ years of practical industry experience. We provide 100% practical lab-oriented training, live capstone projects on Generative AI & ML, 100% placement support, and mock technical interviews.`
    },
    {
      q: `What is the average salary after completing Data Science Training in ${locName}?`,
      a: `Freshers starting as Data Scientists or Machine Learning Engineers in Bangalore typically secure packages ranging from ₹6.0 LPA to ₹11.5 LPA. Candidates with 2-4 years relevant experience or transition backgrounds regularly achieve ₹14 LPA to ₹30+ LPA in top MNCs and AI product firms.`
    },
    {
      q: `Do I need a strong coding or mathematics background to learn Data Science in ${locName}?`,
      a: `No prior programming expertise is required. Our Data Science Training in ${locName} starts from the very basics of Python syntax, foundational math, and descriptive statistics before progressing systematically to Machine Learning, Deep Learning, and Generative AI.`
    },
    {
      q: `Does Data Science Training in ${locName} cover Generative AI and LLMs?`,
      a: `Yes! Our curriculum includes modern Generative AI modules covering Large Language Models (LLMs), Prompt Engineering, LangChain, Retrieval-Augmented Generation (RAG), Vector Databases, and OpenAI API integration.`
    },
    {
      q: `What batch modes are available for Data Science Training in ${locName}?`,
      a: `We provide weekday classroom sessions at our Bangalore campus, instructor-led live interactive online batches, and dedicated weekend batches tailored for working IT professionals.`
    },
    {
      q: `Does Data Science Training in ${locName} offer 100% Placement Support?`,
      a: `Yes! Enrolling in Data Science Training in ${locName} comes with complete 100% placement assistance, including Kaggle/GitHub portfolio building, resume polishing, 1-on-1 mock interviews, and direct recruitment drives across 350+ hiring partner companies.`
    }
  ];

  const testimonials = [
    {
      name: 'Varun Swaminathan',
      role: 'Data Scientist at Accenture AI',
      package: '9.8 LPA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'The Machine Learning algorithms and Generative AI RAG projects taught at LearnMore Technologies gave me a massive edge in interviews. The mentors explain mathematical concepts with crystal-clear practical examples!'
    },
    {
      name: 'Sneha Kulkarni',
      role: 'ML Engineer at IBM',
      package: '11.2 LPA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'Transitioning from non-IT to Data Science felt intimidating until I joined LearnMore Technologies. The live Capstone project on Predictive Modeling and Docker deployment helped me land multiple job offers!'
    },
    {
      name: 'Pradeep Gowda',
      role: 'Lead AI Analyst at Cognizant',
      package: '13.5 LPA',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      text: 'Superb institute! Deep dive sessions into Deep Learning with TensorFlow, NLP, and LLM orchestration prepared me thoroughly for senior-level AI interview questions.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/courses/datascience-hero.webp"
            alt="Data Science Training Background"
            className="w-full h-full object-cover opacity-60 md:opacity-75 scale-100 transform transition duration-500"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-purple-950/80 to-slate-950/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-purple-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/course" className="hover:text-purple-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">Data Science Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-5">
                <i className="fas fa-brain"></i> Ranked #1 Institute for Data Science & AI Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-white">
                Data Science Training in <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-4 leading-relaxed">
                LearnMore Technologies offers the best <strong>Data Science Training in {locName}</strong> with 100% placement assistance. Master Python, Applied Statistics, Machine Learning, Deep Learning, NLP, Generative AI & Large Language Models (LLMs), and Power BI with industry mentors in our <strong>Data Science Training in {locName}</strong> program.
              </p>

              {/* Urgency & Limited Seats Timer */}
              <BatchUrgencyBanner batchDate="Upcoming Monday" seatsRemaining={5} />

              {/* Badges / Rating & EMI */}
              <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-750 px-3.5 py-2 rounded-xl text-amber-400 font-bold shadow-sm">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(3,800+ Reviews for Data Science Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-750 px-3.5 py-2 rounded-xl text-emerald-400 font-bold shadow-sm">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-purple-500/30 px-3.5 py-2 rounded-xl text-purple-300 font-bold shadow-sm">
                  <i className="fas fa-credit-card text-purple-400"></i>
                  <span>No-Cost EMI @ ₹3,999/mo</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8 text-slate-200 text-sm">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Complete Python, ML, Deep Learning & Generative AI in <strong>Data Science Training in {locName}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Senior Data Scientist & AI Architect Mentors for <strong>Data Science Training in {locName}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Real-World Capstones on RAG, LLMs & Predictive ML included in <strong>Data Science Training in {locName}</strong></span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal(`Data Science Training in ${locName}`)}
                  className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-purple-500/25 transition transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 text-sm tracking-wide cursor-pointer"
                >
                  <i className="fas fa-paper-plane"></i> Enroll for Data Science in {locName}
                </button>
                <button
                  onClick={() => openEnrollModal(`Data Science Training Syllabus - ${locName}`)}
                  className="bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <i className="fas fa-file-download"></i> Download Data Science Syllabus
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-800 border-2 border-purple-100 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-purple-200/60 shadow-2xs">
                    🔥 Limited Seats • 100% Placement Support
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    Book Free Data Science Counselling
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Speak 1-on-1 with Principal Data Scientists & claim 30% scholarship
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-purple-500 transition"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-purple-500 transition"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-purple-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Preferred Training Mode *</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-purple-500 transition"
                    >
                      <option value="Yes, am Interested in Online Training">Instructor-Led Live Online Training</option>
                      <option value="Classroom Training - Bangalore Campus">Classroom Training (Bangalore Campus)</option>
                      <option value="Weekend Batch for Working Professionals">Weekend Batch (For Professionals)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition text-sm text-center cursor-pointer"
                  >
                    Book Free Data Science Session
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
              <p className="text-3xl md:text-4xl font-black text-purple-600 mb-1">18,000+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Data Science Students</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-fuchsia-600 mb-1">11,500+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Placed Alumni</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-indigo-600 mb-1">350+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Hiring Partners</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-black text-emerald-600 mb-1">15+ Years</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section for Data Science Training */}
      <section className="py-16 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 border-b pb-4">
              Best Data Science Training in {locName} – LearnMore Technologies
            </h2>
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Are you looking for the best <strong>Data Science Training in {locName}</strong>? LearnMore Technologies provides comprehensive, industry-aligned <strong>Data Science Training in {locName}</strong> crafted for freshers, software engineers, data analysts, and non-programmers seeking to build careers in AI and Machine Learning. Our <strong>Data Science Training in {locName}</strong> program encompasses the complete data science pipeline from exploratory data analysis and predictive modeling to deep neural networks, NLP, and Generative AI application engineering.
              </p>
              <p>
                Enrolling in our <strong>Data Science Training in {locName}</strong> gives you real-world exposure through hands-on labs guided by Principal Data Scientists from leading tech enterprises. Our <strong>Data Science Training in {locName}</strong> curriculum emphasizes practical algorithmic mastery, live Kaggle competitions, portfolio construction on GitHub, and guaranteed 100% placement support across top tier companies in Bangalore.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
                Why Choose Our Data Science Training in {locName}?
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 font-semibold text-slate-800">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-purple-500"></i> 100% Hands-on Coding Labs in <strong>Data Science Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-purple-500"></i> Experienced Principal Data Scientist Mentors for <strong>Data Science in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-purple-500"></i> 100% Placement Support with <strong>Data Science Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-purple-500"></i> Capstone Projects on LLMs & Deep Learning in <strong>Data Science in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-purple-500"></i> ISO 9001:2015 Certification in <strong>Data Science Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-purple-500"></i> Flexible Batches for <strong>Data Science Training in {locName}</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Science Tools & Libraries Mastered Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              HANDS-ON AI & DATA SCIENCE STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Data Science Tools & Frameworks You Will Master
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Gain practical proficiency in industry-standard Python data science, machine learning, and Generative AI libraries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {dataScienceTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-purple-400 transition duration-300">
                <div className="w-14 h-14 mx-auto bg-purple-500/10 text-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-4">
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
      <section className="py-20 bg-gradient-to-br from-purple-100/80 via-slate-100 to-fuchsia-100/80 border-t border-b border-purple-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-600 text-white font-extrabold text-xs uppercase tracking-wider mb-3.5 shadow-sm">
              COMPREHENSIVE DATA SCIENCE CURRICULUM
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Master Data Science & AI with <span className="text-purple-600">Industry-Focused Modules</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-purple-500 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 font-bold text-xs">
                      <i className="fas fa-clock text-[11px]"></i> {idx === 0 ? '3 Weeks Duration' : idx === 1 ? '3 Weeks Duration' : idx === 2 ? '4 Weeks Duration' : idx === 3 ? '4 Weeks Duration' : idx === 4 ? '4 Weeks Duration' : '3 Weeks Duration'}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-purple-600 transition leading-snug">
                    {module.title.replace(/^Module \d+: /, '')}
                  </h3>

                  <ul className="space-y-3 mb-6 border-t border-slate-100 pt-4">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-3 text-slate-700 text-sm">
                        <i className="fas fa-check-circle text-purple-500 text-base mt-0.5 flex-shrink-0"></i>
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
              Live Capstone Data Science & AI Projects You Will Build
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Add production-grade Machine Learning and Generative AI projects to your GitHub portfolio to impress top tech recruiters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-purple-100 text-purple-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
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
      <section className="py-20 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-purple-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certified Data Scientist & AI Specialist Credential
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Upon successful completion of the course curriculum and live capstone projects, graduates receive the prestigious LearnMore Technologies Certified Data Science & AI Specialist credential.
              </p>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Lifetime valid credential recognized across 350+ global IT employers
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Official prep support for TensorFlow Developer & Cloud ML Certifications
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Verifiable digital badge for LinkedIn & Resume integration
                </li>
              </ul>
              <button
                onClick={() => openEnrollModal('Data Science Certification Sample Request')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-900 border-2 border-purple-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-purple-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  ISO 9001:2015
                </div>
                <div className="w-20 h-20 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-purple-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-purple-300 font-extrabold uppercase tracking-widest mb-4">Certified Data Science & AI Specialist</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  This certifies that candidate has successfully mastered Python, Statistical Analysis, Machine Learning, Deep Learning, NLP & Generative AI Applications.
                </p>
                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-DS-2026
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
            Our Data Science Alumni Work at Global AI Giants & Tier-1 IT MNCs
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
              Real Data Science Placement Success Stories
            </h2>
            <p className="text-slate-600 text-base">
              See how our alumni successfully transitioned their careers into high-paying Data Science & AI roles through LearnMore Technologies.
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
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-purple-500 shadow-sm" />
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                    <span className="inline-block mt-1 bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
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
            <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full mb-4"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  openFaq === idx ? 'border-purple-500 bg-purple-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-purple-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-slate-900 text-base md:text-lg transition cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === idx ? 'up text-purple-600' : 'down text-slate-400'} text-sm flex-shrink-0`}></i>
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-purple-100">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-800 font-extrabold text-xs uppercase tracking-wider mb-3 border border-purple-200">
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
                  <th className="py-5 px-6 bg-purple-50 text-purple-900 font-extrabold border-t-2 border-l border-r border-purple-300 w-1/3 text-base">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-crown text-purple-600 text-lg"></i>
                      <span>LearnMore Technologies</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-slate-500 font-bold w-1/3">Other Local Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm bg-white">
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Trainer Expertise & Background</td>
                  <td className="py-5 px-6 bg-purple-50/50 border-l border-r border-purple-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Principal Data Scientists with 15+ Yrs Industry Experience
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers or freshers with theoretical knowledge only
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Practical & Lab Sessions</td>
                  <td className="py-5 px-6 bg-purple-50/50 border-l border-r border-purple-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Practical Jupyter / Colab Live Coding & Real Datasets
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Heavy PowerPoint slides with minimal hands-on coding
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-purple-50/50 border-l border-r border-purple-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Placement Support & 350+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Only basic resume forwarding without placement support
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-purple-50/50 border-l border-r border-purple-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 3 Real-World Projects on Generative AI, RAG & Predictive ML
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Basic toy datasets (like Iris or Titanic) without deployment
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Batch Flexibility & Session Access</td>
                  <td className="py-5 px-6 bg-purple-50/50 border-l border-r border-purple-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Classroom (Bangalore), Online, Weekend + Lifetime Recording Access
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Rigid batch timings with limited/no class recordings
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Certification Accreditation</td>
                  <td className="py-5 px-6 bg-purple-50/50 border-l border-r border-purple-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> ISO 9001:2015 Certification + Global Industry Recognition
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
      <UpcomingBatchSchedule courseName="Data Science & AI Master Program" />

      {/* Recent Student Placements Section */}
      <RecentPlacementsSection courseName="Data Science & AI Master Program" />

      {/* Sticky Mobile CTA Bar for Google Ads Conversions */}
      <StickyMobileCTA courseName="Data Science & AI Master Program" />

      {/* SEO Location Content Block */}
      <LocationSeoContentBlock courseName="Data Science & AI" locationName={locName} />

      <Footer />
    </div>
  );
}
