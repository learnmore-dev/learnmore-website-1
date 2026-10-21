'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import UpcomingBatchSchedule from '@/components/common/UpcomingBatchSchedule';
import RecentPlacementsSection from '@/components/common/RecentPlacementsSection';
import { useEnroll } from '@/context/EnrollContext';
import coursesData from '@/data/courses.json';
import placementsData from '@/data/placements.json';
import testimonialsData from '@/data/testimonials.json';

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export default function HomeClient() {
  const { openEnrollModal } = useEnroll();
  const [activeTab, setActiveTab] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const testimonials = testimonialsData?.testimonials || [];

  const heroSlides = [
    '/hero-bg.webp',
    '/slider/slide-1.jpg',
    '/slider/slide-2.jpg',
    '/slider/slide-3.jpg',
    '/slider/slide-4.jpg',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(slideTimer);
  }, [heroSlides.length]);

  const allMasterPrograms = [
    {
      title: 'Agentic AI & Multi-Agent Systems',
      slug: 'agentic-ai-training-course',
      category: 'ai',
      badge: 'Hot & Trending',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      desc: 'Master LangGraph, CrewAI, AutoGen, MCP Protocols, Tool Use & LLM Autonomous Agents with live cloud projects.',
      duration: '8 Weeks',
      salary: '₹8 - ₹24 LPA',
      rating: '4.95',
      reviews: '1,420',
      tools: ['LangGraph', 'CrewAI', 'Claude 3.5', 'Python', 'Vector DB', 'Docker'],
      icon: 'fas fa-robot',
      iconBg: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'Generative AI & LLM Engineering',
      slug: 'generative-ai-training-course',
      category: 'ai',
      badge: 'Most Popular',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      desc: 'Advanced RAG Pipelines, Fine-tuning Llama 3, OpenAI APIs, Prompt Engineering & Production LLMOps.',
      duration: '10 Weeks',
      salary: '₹7.5 - ₹22 LPA',
      rating: '4.92',
      reviews: '2,150',
      tools: ['OpenAI', 'LangChain', 'Llama 3', 'Pinecone', 'FastAPI', 'HuggingFace'],
      icon: 'fas fa-brain',
      iconBg: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Anthropic AI & Claude 3.5 Mastery',
      slug: 'anthropic-training-course',
      category: 'ai',
      badge: 'Exclusive',
      badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
      desc: 'Claude 3.5 Sonnet, Anthropic Computer Use Beta API, Tool Use, 200K Context Retrieval & AWS Bedrock deployment.',
      duration: '6 Weeks',
      salary: '₹8.5 - ₹25 LPA',
      rating: '4.95',
      reviews: '1,850',
      tools: ['Claude 3.5', 'Computer Use', 'AWS Bedrock', 'Prompt Caching', 'Python SDK'],
      icon: 'fas fa-sparkles',
      iconBg: 'bg-orange-50 text-orange-600',
    },
    {
      title: 'Cloud DevOps Master Program',
      slug: 'course/cloud-devops',
      category: 'cloud',
      badge: 'High Placement',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      desc: 'Master AWS, Azure, Docker, Kubernetes, Terraform, Jenkins CI/CD, Ansible & Production Monitoring.',
      duration: '12 Weeks',
      salary: '₹6 - ₹18 LPA',
      rating: '4.90',
      reviews: '3,400',
      tools: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Linux'],
      icon: 'fas fa-cloud',
      iconBg: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Python Fullstack Master Program',
      slug: 'course/python-fullstack',
      category: 'dev',
      badge: 'Top Seller',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      desc: 'Full-stack engineering with Python, Django, FastAPI, React.js, PostgreSQL, Tailwind & Cloud Deployments.',
      duration: '12 Weeks',
      salary: '₹5 - ₹15 LPA',
      rating: '4.88',
      reviews: '4,100',
      tools: ['Python', 'Django', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
      icon: 'fab fa-python',
      iconBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'Data Science with AI Master Program',
      slug: 'course/data-science-ai',
      category: 'data',
      badge: 'Career Accelerator',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      desc: 'Machine Learning, Deep Learning, Statistics, Pandas, Scikit-Learn, PyTorch, Power BI & Predictive Modeling.',
      duration: '14 Weeks',
      salary: '₹6.5 - ₹20 LPA',
      rating: '4.91',
      reviews: '2,800',
      tools: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'Power BI', 'SQL'],
      icon: 'fas fa-chart-pie',
      iconBg: 'bg-indigo-50 text-indigo-600',
    },
    {
      title: 'Snowflake Cloud Data Warehouse',
      slug: 'snowflake-training-course',
      category: 'data',
      badge: 'High Demand',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
      desc: 'Snowflake Architecture, Snowpark Python, Time Travel, Zero Copy Cloning, Tasks, Streams & Data Pipelines.',
      duration: '6 Weeks',
      salary: '₹7 - ₹20 LPA',
      rating: '4.94',
      reviews: '1,650',
      tools: ['Snowflake', 'Snowpark', 'SQL', 'AWS S3', 'Data Sharing', 'Python'],
      icon: 'fas fa-snowflake',
      iconBg: 'bg-cyan-50 text-cyan-600',
    },
    {
      title: 'Cybersecurity & SOC Splunk Defense',
      slug: 'cybersecurity-training-course',
      category: 'security',
      badge: 'Essential',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      desc: 'Ethical Hacking, OWASP Top 10 Web Pentesting, SOC SIEM Threat Hunting with Splunk, CEH v12 & Cyber Range.',
      duration: '10 Weeks',
      salary: '₹5.5 - ₹18 LPA',
      rating: '4.90',
      reviews: '1,950',
      tools: ['Kali Linux', 'Metasploit', 'Splunk', 'Burp Suite', 'Wireshark', 'Nmap'],
      icon: 'fas fa-shield-alt',
      iconBg: 'bg-rose-50 text-rose-600',
    },
    {
      title: 'Mobile App Development (React Native & Flutter)',
      slug: 'mobile-app-development-training-course',
      category: 'dev',
      badge: 'Dual Tech',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
      desc: 'Build cross-platform iOS & Android apps with React Native, Flutter, Dart, Firebase, Maps SDK & App Store publishing.',
      duration: '8 Weeks',
      salary: '₹5.5 - ₹16 LPA',
      rating: '4.90',
      reviews: '2,300',
      tools: ['React Native', 'Flutter', 'Dart', 'Firebase', 'Zustand', 'Expo'],
      icon: 'fas fa-mobile-alt',
      iconBg: 'bg-teal-50 text-teal-600',
    },
  ];

  const filteredPrograms = activeTab === 'all' 
    ? allMasterPrograms 
    : allMasterPrograms.filter(p => p.category === activeTab);

  const stats = [
    { label: 'Live Classes Monthly', value: 700, suffix: '+', icon: 'fas fa-chalkboard-user', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Learning Solutions', value: 550, suffix: '+', icon: 'fas fa-book-open', color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Hands-on Projects', value: 100, suffix: '+', icon: 'fas fa-laptop-code', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Job Assistance', value: 100, suffix: '%', icon: 'fas fa-briefcase', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  const hiringCompanies = [
    'Google', 'Amazon', 'Microsoft', 'Deloitte', 'Capgemini', 'Infosys', 
    'TCS', 'Wipro', 'Accenture', 'Flipkart', 'Walmart', 'Oracle', 'IBM', 'Cognizant'
  ];

  const faqs = [
    {
      q: 'What software training courses does Learnmore Technologies offer?',
      a: 'We offer job-oriented professional courses including Agentic AI, Generative AI, Python Fullstack Development, Data Analytics, Cloud DevOps, Software Testing, Snowflake, and Data Science with AI in Bangalore.',
    },
    {
      q: 'Does Learnmore Technologies provide 100% placement support?',
      a: 'Yes, we provide dedicated placement support with regular resume building sessions, technical mock interviews, and direct placement drives with our 500+ hiring partners.',
    },
    {
      q: 'What is the duration of the training programs?',
      a: 'Most certification courses run between 2 to 4 months, featuring extensive hands-on laboratory sessions and live industry project training.',
    },
    {
      q: 'Where is Learnmore Technologies located in Bangalore?',
      a: 'Our premium training centers are located in Marathahalli and BTM Layout, Bangalore, fully equipped with high-tech lab infrastructure.',
    },
    {
      q: 'Can I choose weekday or weekend batch timings?',
      a: 'Yes! We offer flexible batch options including daily morning/evening sessions and weekend-only classes for working professionals.',
    },
    {
      q: 'Will I receive certification after completing the course?',
      a: 'Yes, upon course completion, you will receive an ISO 9001:2015 verified Certificate of Completion recognized by top IT companies worldwide.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      {/* Hero Section with 5-Image 2s Auto Slider */}
      <section className="relative py-20 text-white overflow-hidden min-h-[85vh] flex items-center">
        {/* Background 5-Slide Crossfade Carousel */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide}
                alt={`LearnMore Technologies Training Campus ${idx + 1}`}
                className="w-full h-full object-cover object-center transform transition-transform duration-[3000ms] scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
          {/* High-Contrast Gradient Overlay for Perfect Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-blue-950/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-red-400 text-xs font-bold uppercase tracking-wider">
                <i className="fas fa-certificate text-red-500"></i>
                <span>#1 Rated Software Training Institute in Bangalore</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Welcome to <span className="text-red-500">Learnmore</span> <span className="text-white">Technologies</span>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-100 leading-snug">
                Top Software Training & IT Skill-Building Institute in Bangalore
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                Unlock your future in tech with 100% job assistance programs, real-time projects, industry expert trainers, and top certification courses.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#courses-grid"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  Explore Courses
                </a>
                <button
                  onClick={() => openEnrollModal('Hero Enroll CTA')}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3.5 rounded-full font-bold text-sm transition-all"
                >
                  Enroll Now
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-slate-300 border-t border-white/15">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star" />
                    ))}
                  </div>
                  <span className="font-bold text-white">4.9/5</span>
                  <span className="text-slate-300">(2,800+ Reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-user-check text-emerald-400"></i>
                  <span className="font-bold text-white">100% Placement Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-building text-blue-300"></i>
                  <span className="font-bold text-white">500+ Hiring Partners</span>
                </div>
              </div>
            </div>

            {/* Right Hero Learners Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center text-white shadow-2xl">
                <div className="text-5xl mb-4">🎓</div>
                <p className="text-3xl sm:text-4xl font-black text-red-500">8 Million+</p>
                <p className="text-blue-100 font-semibold mt-1">Learners Worldwide</p>
                
                <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3">
                  <div className="p-2">
                    <p className="text-xl sm:text-2xl font-black text-white">80%</p>
                    <p className="text-xs text-blue-200 mt-1 font-medium">Graduation Rate</p>
                  </div>
                  <div className="p-2 border-x border-white/20">
                    <p className="text-xl sm:text-2xl font-black text-white">4.9/5</p>
                    <p className="text-xs text-blue-200 mt-1 font-medium">Learner Rating</p>
                  </div>
                  <div className="p-2">
                    <p className="text-xl sm:text-2xl font-black text-white">50%+</p>
                    <p className="text-xs text-blue-200 mt-1 font-medium">Avg Salary Hike</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Progress Indicators */}
          <div className="flex items-center justify-center gap-2.5 pt-10">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-500 rounded-full ${
                  idx === currentSlide
                    ? 'w-8 h-2.5 bg-red-500 shadow-lg shadow-red-500/50'
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section (Our Impact in Numbers) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Our Impact in Numbers</h2>
            <p className="text-slate-500 text-sm">The numbers that speak for our success across Bangalore & beyond</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  <i className={stat.icon} />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-600 text-xs sm:text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Hiring Companies Marquee */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Top Global Tech Companies Recruiting Our Alumni
          </p>
        </div>
        <div className="flex overflow-hidden relative">
          <div className="flex gap-6 items-center animate-marquee whitespace-nowrap py-2">
            {[...hiringCompanies, ...hiringCompanies].map((company, idx) => (
              <div
                key={idx}
                className="px-6 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm shadow-sm"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Programs Showcase Grid */}
      <section id="courses-grid" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              Industry-Aligned Programs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Popular Master Certification Courses
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Co-created with senior tech leads to get you hired in high-paying roles.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: 'all', label: 'All Programs' },
                { id: 'ai', label: 'AI & Generative AI' },
                { id: 'cloud', label: 'Cloud & DevOps' },
                { id: 'data', label: 'Data Science & Snowflake' },
                { id: 'dev', label: 'Full Stack & Mobile' },
                { id: 'security', label: 'Cybersecurity' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((course, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
              >
                <div>
                  {/* Badge & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${course.badgeColor}`}>
                      {course.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      <i className="fas fa-clock text-slate-400 mr-1" /> {course.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-11 h-11 rounded-xl ${course.iconBg} flex items-center justify-center text-lg shrink-0`}>
                      <i className={course.icon} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {course.desc}
                  </p>

                  {/* Tools Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {course.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] text-slate-600 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-4 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase block font-semibold">Salary Package</span>
                      <span className="text-emerald-600 font-bold text-sm">{course.salary}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 text-[10px] uppercase block font-semibold">Rating</span>
                      <span className="text-amber-500 font-bold">★ {course.rating} <span className="text-slate-400 font-normal">({course.reviews})</span></span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/${course.slug}`}
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-center text-xs font-bold transition-all"
                    >
                      View Syllabus
                    </Link>
                    <button
                      onClick={() => openEnrollModal(course.title)}
                      className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-center text-xs font-bold shadow-md hover:shadow-blue-500/20 transition-all"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Why Choose LearnMore</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Our Programs Stand Out in Bangalore
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 text-2xl">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Cutting-Edge Curriculum</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Co-created with Senior Tech Architects & regularly updated.</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-600 text-2xl">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Live Expert Training</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Learn from industry practitioners with 10+ years MNC experience.</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-600 text-2xl">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Hands-On Projects</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Real-world corporate case studies & 24/7 cloud lab practice.</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-600 text-2xl">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">100% Placement Cell</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Resume engineering, mock interviews & direct interview drives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Alumni Placements Section */}
      <RecentPlacementsSection />

      {/* Upcoming Batch Schedule */}
      <UpcomingBatchSchedule courseName="Training Program" />

      {/* Testimonials Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Real Stories</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Hear From Our Successful Alumni
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testi: any) => (
              <div key={testi.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                      {testi.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{testi.name}</h4>
                      <p className="text-slate-500 text-xs">{testi.role} at {testi.company}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed mb-4">
                    "{testi.content.substring(0, 160)}..."
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-xs">
                  <div className="flex text-yellow-400">{'★'.repeat(testi.rating || 5)}</div>
                  <span className="text-emerald-600 font-semibold">Verified Learner</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Got Questions?</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs text-blue-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Converting Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Ready to Unlock Your IT Career in Bangalore?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Book a free 1-on-1 counseling session with our Senior Mentors and explore syllabus, fees, and placement opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openEnrollModal('Homepage Bottom CTA')}
              className="px-8 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-50 font-extrabold text-sm uppercase tracking-wider shadow-2xl transition-all hover:scale-105"
            >
              Book Your Free Live Demo
            </button>
            <a
              href="https://wa.me/+919036354552"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <i className="fab fa-whatsapp text-lg" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}