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

interface DigitalMarketingTrainingClientProps {
  location?: string | {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function DigitalMarketingTrainingClient({ location }: DigitalMarketingTrainingClientProps = {}) {
  const { openEnrollModal } = useEnroll();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const locName = typeof location === 'string' ? location : (location?.name || 'Bangalore');

  const [inlineForm, setInlineForm] = useState({
    name: '',
    phone: '',
    email: '',
    trainingMode: 'Yes, am Interested in Online Training',
    city: locName || 'Select Your City',
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
          program: 'Digital Marketing & Growth Hacking Master Program',
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

  const marketingTools = [
    { name: 'Google Ads (PPC)', icon: 'fab fa-google', desc: 'Search, Display & Video Ads' },
    { name: 'SEO & SEMrush / Ahrefs', icon: 'fas fa-search', desc: 'On-Page, Off-Page & Audits' },
    { name: 'Meta Ads Manager', icon: 'fab fa-meta', desc: 'Facebook & Instagram Lead Gen' },
    { name: 'Google Analytics 4 (GA4)', icon: 'fas fa-chart-line', desc: 'Traffic & Funnel Attribution' },
    { name: 'Google Tag Manager (GTM)', icon: 'fas fa-tag', desc: 'Event & Pixel Tracking' },
    { name: 'Email & CRM Automation', icon: 'fas fa-envelope-open-text', desc: 'Mailchimp & HubSpot Nurturing' },
    { name: 'Copywriting & Content AI', icon: 'fas fa-pen-nib', desc: 'High-Converting Ad Copy & Blogs' },
    { name: 'Growth Hacking & CRO', icon: 'fas fa-rocket', desc: 'Landing Page & A/B Testing' }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Digital Marketing Fundamentals & WordPress Strategy',
      topics: [
        'Digital Marketing Ecosystem vs Traditional Marketing Lifecycle',
        'Customer Personas, Inbound Marketing Funnels (TOFU, MOFU, BOFU)',
        'Domain, Hosting, WordPress Setup & Elementor Page Builder',
        'Designing High-Converting Landing Pages with Clear Call to Actions',
        'UI/UX Principles & Mobile Optimization for Maximum Conversions',
        'Live Lab: Building a Live E-Commerce & Lead Generation Website'
      ]
    },
    {
      title: 'Module 2: Search Engine Optimization (SEO) & Technical Audits',
      topics: [
        'Keyword Research & Competitive Analysis with SEMrush, Ahrefs & Google Keyword Planner',
        'On-Page SEO: Title Tags, Meta Descriptions, URL Structure, Header Tags & Schema Markup',
        'Technical SEO: Robots.txt, XML Sitemaps, Canonical Tags, Core Web Vitals & 404 Fixes',
        'Off-Page SEO: White-Hat Link Building, Guest Posting & Outreach Strategies',
        'Local SEO: Google Business Profile (GBP) Optimization & Local Citations',
        'Live Project: Complete Live Website SEO Audit & Ranking Strategy'
      ]
    },
    {
      title: 'Module 3: Google Ads (Search, Display, Video & Shopping PPC)',
      topics: [
        'Google Ads Account Setup, Campaign Structure & Quality Score Optimization',
        'Search Campaigns: Match Types (Broad, Phrase, Exact), Negative Keywords & Ad Extensions',
        'Bidding Strategies: Manual CPC, Target CPA, Target ROAS & Maximize Conversions',
        'Display Network & YouTube Video Ads: Audience Targeting & Placements',
        'Google Shopping Ads & Merchant Center Product Feed Setup',
        'Live Lab: Setting up and Launching Live Google Ads Search & Display Campaigns'
      ]
    },
    {
      title: 'Module 4: Social Media Marketing & Meta Ads Manager (FB & Insta)',
      topics: [
        'Social Media Strategy for Organic Growth: Instagram Reels, LinkedIn & YouTube',
        'Meta Business Suite & Ads Manager Campaign Structure',
        'Audience Targeting: Core Audiences, Custom Audiences & Lookalike Audiences',
        'Meta Pixel Integration, Standard Events & Conversions API (CAPI)',
        'LinkedIn Ads for B2B Lead Generation & Account-Based Marketing (ABM)',
        'Live Project: Running High-ROI Lead Generation Ads with A/B Creative Testing'
      ]
    },
    {
      title: 'Module 5: Email Marketing, Marketing Automation & Content AI',
      topics: [
        'Email Marketing Strategy: Lead Magnets, List Segmentation & Deliverability',
        'Marketing Automation Workflows using Mailchimp, HubSpot & ActiveCampaign',
        'Drip Campaigns, Abandoned Cart Recovery & Welcome Series Automations',
        'Content Marketing Strategy & Utilizing AI Tools (ChatGPT, Claude, Jasper) for Copywriting',
        'Video Marketing, Podcast Distribution & Influencer Marketing Outreach',
        'Live Lab: Designing Automated Lead Nurturing Email Funnels'
      ]
    },
    {
      title: 'Module 6: Google Analytics 4 (GA4), GTM, CRO & Certification Prep',
      topics: [
        'Google Analytics 4 (GA4) Architecture: Events, Parameters, Dimensions & Metrics',
        'Google Tag Manager (GTM): Creating Triggers, Tags, Variables & Pixel Tracking',
        'Conversion Rate Optimization (CRO), Heatmaps with Microsoft Clarity & A/B Testing',
        'Google Data Studio / Looker Studio: Creating Real-Time Client Marketing Dashboards',
        'Preparation for Official Google Ads, Google Analytics & Meta Certified Media Associate Exams',
        'Capstone Project: Complete 360-Degree Growth Hacking Marketing Campaign'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'High-ROI E-Commerce Performance Marketing Campaign',
      desc: 'Architected and managed an omni-channel paid media campaign across Google Shopping, Meta Dynamic Product Ads, and email automations with a 4.5x Return on Ad Spend (ROAS).',
      tags: ['Google Shopping', 'Meta Ads', 'ROAS Optimization', 'Email Drip']
    },
    {
      title: 'Complete Enterprise SEO Strategy & 300% Organic Traffic Growth',
      desc: 'Executed end-to-end technical, on-page, and high-authority link-building campaigns taking competitive business keywords from page 5 to Google Top 3 rankings.',
      tags: ['SEMrush', 'Technical SEO', 'Schema Markup', 'Link Building']
    },
    {
      title: 'B2B Lead Generation Funnel & Automated CRM Nurturing',
      desc: 'Designed a high-converting LinkedIn sponsored content campaign linked to a custom landing page and HubSpot automated email lead-scoring sequence.',
      tags: ['LinkedIn Ads', 'HubSpot CRM', 'GA4 Tracking', 'GTM']
    }
  ];

  const hiringCompanies = [
    { name: 'Amazon', logo: '/images/companies/amazon.webp' },
    { name: 'Flipkart', logo: '/images/companies/tcs.webp' },
    { name: 'Accenture', logo: '/images/companies/accenture.webp' },
    { name: 'Cognizant', logo: '/images/companies/cognizant.webp' },
    { name: 'Wipro', logo: '/images/companies/wipro.webp' },
    { name: 'Infosys', logo: '/images/companies/infosys.webp' },
    { name: 'IBM', logo: '/images/companies/ibm.webp' },
    { name: 'Microsoft', logo: '/images/companies/microsoft.webp' }
  ];

  const faqs = [
    {
      q: `Why enroll at LearnMore Technologies for Digital Marketing Training in ${locName}?`,
      a: `LearnMore Technologies is recognized as the #1 institute for Digital Marketing Training in ${locName}. Our mentors are Senior Growth Marketers and Agency Directors with 14+ years of real campaign experience. We offer 100% hands-on live ad budget practice, real brand client projects, and 100% placement support.`
    },
    {
      q: `What is the average salary after completing Digital Marketing Training in ${locName}?`,
      a: `Freshers starting as Digital Marketing Executives or Performance Marketing Specialists in Bangalore earn between ₹4.5 LPA to ₹8.0 LPA. Experienced Digital Marketing Managers and Growth Hackers with 3+ years experience regularly achieve ₹10 LPA to ₹22+ LPA.`
    },
    {
      q: `Do I need coding skills to learn Digital Marketing in ${locName}?`,
      a: `No coding knowledge is required! Digital Marketing is designed for students, freshers, business owners, and working professionals from any academic background. We teach website building with WordPress, SEO, PPC, SMM, and Analytics step-by-step from scratch.`
    },
    {
      q: `Does Digital Marketing Training in ${locName} include Official Google & Meta Certifications?`,
      a: `Yes! Our curriculum includes comprehensive preparation and voucher guidance for 15+ industry certifications including Google Ads, Google Analytics (GA4), HubSpot Inbound Marketing, and Meta Certified Digital Marketing Associate.`
    },
    {
      q: `What batch formats are available for Digital Marketing Training in ${locName}?`,
      a: `We offer weekday classroom batches at our Bangalore campus, instructor-led live online classes, and dedicated weekend batches tailored for working professionals and entrepreneurs.`
    },
    {
      q: `Does Digital Marketing Training in ${locName} provide 100% Placement Support?`,
      a: `Yes! Enrolling in Digital Marketing Training in ${locName} includes 100% placement assistance with live portfolio reviews, resume optimization, mock interviews, and direct placement drives across 300+ hiring partner agencies and corporate brands.`
    }
  ];

  const testimonials = [
    {
      name: 'Aditi Nair',
      role: 'Performance Marketing Specialist at GroupM',
      package: '7.5 LPA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'The live ad campaign execution and Google Analytics 4 tracking sessions at LearnMore Technologies were outstanding! I managed real ad budgets during class and cracked my interview at GroupM immediately.'
    },
    {
      name: 'Naveen Reddy',
      role: 'Senior SEO Strategist at Accenture',
      package: '8.2 LPA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'Coming from a sales background, I wanted to switch to high-growth digital careers. The mentors taught advanced technical SEO and GA4 funnels with practical live examples that gave me huge confidence!'
    },
    {
      name: 'Kavita Joshi',
      role: 'Digital Marketing Lead at Swiggy Partner',
      package: '9.0 LPA',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      text: 'Exceptional training! Practical labs on Meta Ads, Lead Gen funnels, and Email Automations helped me build a stunning portfolio that impressed recruiters during all rounds.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&q=80"
            alt="Digital Marketing Training Background"
            className="w-full h-full object-cover opacity-60 md:opacity-75 scale-100 transform transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-orange-950/80 to-slate-950/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/course" className="hover:text-orange-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">Digital Marketing Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-5">
                <i className="fas fa-bullhorn"></i> Ranked #1 Institute for Digital Marketing Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-white">
                Digital Marketing Training in <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-4 leading-relaxed">
                LearnMore Technologies offers the best <strong>Digital Marketing Training in {locName}</strong> with 100% placement assistance. Master SEO, Google Ads (PPC), Meta Ads, Social Media Marketing, Email Automation, and Google Analytics (GA4) with certified marketing strategists in our <strong>Digital Marketing Training in {locName}</strong> program.
              </p>

              {/* Urgency & Limited Seats Timer */}
              <BatchUrgencyBanner batchDate="Upcoming Monday" seatsRemaining={5} />

              {/* Badges / Rating & EMI */}
              <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-750 px-3.5 py-2 rounded-xl text-amber-400 font-bold shadow-sm">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(3,300+ Reviews for Digital Marketing in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-750 px-3.5 py-2 rounded-xl text-emerald-400 font-bold shadow-sm">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-orange-500/30 px-3.5 py-2 rounded-xl text-orange-300 font-bold shadow-sm">
                  <i className="fas fa-credit-card text-orange-400"></i>
                  <span>No-Cost EMI @ ₹2,499/mo</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8 text-slate-200 text-sm">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Comprehensive SEO, Google Ads, Meta Ads & GA4 in <strong>Digital Marketing Training in {locName}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Senior Performance Marketing & Agency Mentors for <strong>Digital Marketing in {locName}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Live Ad Budget Campaigns & 15+ Global Certifications included in <strong>Digital Marketing in {locName}</strong></span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal(`Digital Marketing Training in ${locName}`)}
                  className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 text-sm tracking-wide cursor-pointer"
                >
                  <i className="fas fa-paper-plane"></i> Enroll for Digital Marketing in {locName}
                </button>
                <button
                  onClick={() => openEnrollModal(`Digital Marketing Syllabus - ${locName}`)}
                  className="bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <i className="fas fa-file-download"></i> Download Marketing Syllabus
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-800 border-2 border-orange-100 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-orange-200/60 shadow-2xs">
                    🔥 Limited Seats • 100% Placement Support
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    Book Free Marketing Counselling
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Speak 1-on-1 with Certified Growth Strategists & claim 30% scholarship
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-orange-500 transition"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-orange-500 transition"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-orange-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Preferred Training Mode *</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-orange-500 transition"
                    >
                      <option value="Yes, am Interested in Online Training">Instructor-Led Live Online Training</option>
                      <option value="Classroom Training - Bangalore Campus">Classroom Training (Bangalore Campus)</option>
                      <option value="Weekend Batch for Working Professionals">Weekend Batch (For Professionals)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition text-sm text-center cursor-pointer"
                  >
                    Book Free Marketing Session
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
              <p className="text-3xl md:text-4xl font-black text-orange-600 mb-1">16,500+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Marketers Trained</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-amber-600 mb-1">10,200+</p>
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

      {/* SEO Content Section for Digital Marketing Training */}
      <section className="py-16 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 border-b pb-4">
              Best Digital Marketing Training in {locName} – LearnMore Technologies
            </h2>
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Are you looking for the best <strong>Digital Marketing Training in {locName}</strong>? LearnMore Technologies provides the most comprehensive and practical <strong>Digital Marketing Training in {locName}</strong> crafted for freshers, entrepreneurs, business owners, and marketing executives. Our <strong>Digital Marketing Training in {locName}</strong> covers end-to-end modern marketing verticals including Search Engine Optimization (SEO), Google Search & Display Ads, Social Media Marketing (Meta Ads), Email Automation, Content Marketing, and Web Analytics (GA4).
              </p>
              <p>
                Enrolling in our <strong>Digital Marketing Training in {locName}</strong> gives you real-world exposure through hands-on campaigns with live ad budgets guided by Senior Growth Marketers and Agency Heads. Our <strong>Digital Marketing Training in {locName}</strong> program prepares candidates thoroughly for official Google, Meta, and HubSpot certifications along with guaranteed 100% placement support.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
                Why Join Our Digital Marketing Training in {locName}?
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 font-semibold text-slate-800">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-orange-500"></i> 100% Practical Live Campaign Labs in <strong>Digital Marketing Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-orange-500"></i> Senior Growth Strategist Mentors for <strong>Digital Marketing in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-orange-500"></i> 100% Placement Support with <strong>Digital Marketing Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-orange-500"></i> Real-World Multi-Channel Capstone Projects in <strong>Digital Marketing in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-orange-500"></i> ISO 9001:2015 & Google / Meta Certifications in <strong>Digital Marketing in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-orange-500"></i> Flexible Batches for <strong>Digital Marketing Training in {locName}</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Tools & Platforms Mastered Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              GROWTH MARKETING STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Digital Marketing Tools & Platforms You Will Master
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Gain complete hands-on mastery over the modern growth marketing, ad management, and web analytics suite.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {marketingTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-orange-400 transition duration-300">
                <div className="w-14 h-14 mx-auto bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center text-2xl mb-4">
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
      <section className="py-20 bg-gradient-to-br from-orange-100/80 via-slate-100 to-amber-100/80 border-t border-b border-orange-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider mb-3.5 shadow-sm">
              COMPREHENSIVE DIGITAL MARKETING CURRICULUM
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Master Growth Marketing with <span className="text-orange-600">Industry-Focused Modules</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-orange-500 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 font-bold text-xs">
                      <i className="fas fa-clock text-[11px]"></i> {idx === 0 ? '2 Weeks Duration' : idx === 1 ? '3 Weeks Duration' : idx === 2 ? '3 Weeks Duration' : idx === 3 ? '4 Weeks Duration' : idx === 4 ? '3 Weeks Duration' : '3 Weeks Duration'}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-orange-600 transition leading-snug">
                    {module.title.replace(/^Module \d+: /, '')}
                  </h3>

                  <ul className="space-y-3 mb-6 border-t border-slate-100 pt-4">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-3 text-slate-700 text-sm">
                        <i className="fas fa-check-circle text-orange-500 text-base mt-0.5 flex-shrink-0"></i>
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
              Live Capstone Marketing Projects You Will Build
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Manage real campaigns and add verified performance marketing case studies to your portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-orange-100 text-orange-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
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
      <section className="py-20 bg-gradient-to-r from-slate-950 via-orange-950 to-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 text-orange-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-orange-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certified Digital Marketing Specialist Credential
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Upon successful completion of the training program and live capstone campaigns, candidates receive the official LearnMore Technologies Certified Digital Marketing Specialist Credential along with 15+ Google & Meta certifications.
              </p>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Lifetime valid credential recognized across 300+ hiring partner agencies & corporate brands
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Official exam guidance for Google Ads, GA4 & Meta Certified Media Associate
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Shareable digital badge for LinkedIn & Resume integration
                </li>
              </ul>
              <button
                onClick={() => openEnrollModal('Digital Marketing Certification Sample Request')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-900 border-2 border-orange-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  ISO 9001:2015
                </div>
                <div className="w-20 h-20 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-orange-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-orange-300 font-extrabold uppercase tracking-widest mb-4">Certified Digital Marketing Specialist</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  This certifies that candidate has successfully mastered Search Engine Optimization, Google PPC, Meta Ads, GA4 Analytics & Growth Strategies.
                </p>
                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-DM-2026
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
            Our Marketing Alumni Work at Leading Agencies & Product Unicorns
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
              Real Marketing Placement Success Stories
            </h2>
            <p className="text-slate-600 text-base">
              See how our students transformed their careers into Growth & Performance Marketers through LearnMore Technologies.
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
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-orange-500 shadow-sm" />
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                    <span className="inline-block mt-1 bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
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
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mb-4"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  openFaq === idx ? 'border-orange-500 bg-orange-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-orange-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-slate-900 text-base md:text-lg transition cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === idx ? 'up text-orange-600' : 'down text-slate-400'} text-sm flex-shrink-0`}></i>
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-orange-100">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-800 font-extrabold text-xs uppercase tracking-wider mb-3 border border-orange-200">
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
                  <th className="py-5 px-6 bg-orange-50 text-orange-900 font-extrabold border-t-2 border-l border-r border-orange-300 w-1/3 text-base">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-crown text-orange-600 text-lg"></i>
                      <span>LearnMore Technologies</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-slate-500 font-bold w-1/3">Other Local Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm bg-white">
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Trainer Expertise & Background</td>
                  <td className="py-5 px-6 bg-orange-50/50 border-l border-r border-orange-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Senior Growth Strategists & Agency Heads with 14+ Yrs Exp
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers or freshers with theoretical knowledge only
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Practical & Lab Sessions</td>
                  <td className="py-5 px-6 bg-orange-50/50 border-l border-r border-orange-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Practical Live Ad Budget Campaigns & SEO Audits
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Heavy PowerPoint slides with minimal live campaign work
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-orange-50/50 border-l border-r border-orange-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Placement Support & 300+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Only basic resume forwarding without placement support
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-orange-50/50 border-l border-r border-orange-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 3 Real-World Multi-Channel Paid Ads & SEO Capstones
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Simple theoretical blog examples only
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Batch Flexibility & Session Access</td>
                  <td className="py-5 px-6 bg-orange-50/50 border-l border-r border-orange-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Classroom (Bangalore), Online, Weekend + Lifetime Recording Access
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Rigid batch timings with limited/no class recordings
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Certification Accreditation</td>
                  <td className="py-5 px-6 bg-orange-50/50 border-l border-r border-orange-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> ISO 9001:2015 + 15 Google, Meta & HubSpot Official Certs
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
      <UpcomingBatchSchedule courseName="Digital Marketing & Growth Hacking Master Program" />

      {/* Recent Student Placements Section */}
      <RecentPlacementsSection courseName="Digital Marketing & Growth Hacking Master Program" />

      {/* Sticky Mobile CTA Bar for Google Ads Conversions */}
      <StickyMobileCTA courseName="Digital Marketing & Growth Hacking Master Program" />

      {/* SEO Location Content Block */}
      <LocationSeoContentBlock courseName="Digital Marketing" locationName={locName} />

      <Footer />
    </div>
  );
}
