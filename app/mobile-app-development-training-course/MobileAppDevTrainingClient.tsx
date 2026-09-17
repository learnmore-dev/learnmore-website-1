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

interface MobileAppDevTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function MobileAppDevTrainingClient({ location }: MobileAppDevTrainingClientProps = {}) {
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
          program: `Mobile App Development Training in ${locName}`,
          trainingMode: inlineForm.trainingMode,
          city: inlineForm.city,
          source: 'hero-lead-form'
        })
      });
      if (res.ok) {
        window.location.href = '/thank-you';
      } else {
        openEnrollModal(`Mobile App Development Training in ${locName}`);
      }
    } catch (err) {
      console.error(err);
      openEnrollModal(`Mobile App Development Training in ${locName}`);
    } finally {
      setIsInlineSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const mobileTools = [
    { name: 'React Native & Expo', icon: 'fab fa-react', desc: 'Cross-Platform Native iOS & Android Apps in Mobile App Development Training in ' + locName },
    { name: 'Flutter & Dart Framework', icon: 'fas fa-mobile-alt', desc: 'Google High-Performance UI Toolkit in Mobile App Development Training in ' + locName },
    { name: 'Redux Toolkit & Zustand', icon: 'fas fa-layer-group', desc: 'Enterprise Client State Management in Mobile App Development Training in ' + locName },
    { name: 'Firebase & Cloud Firestore', icon: 'fas fa-fire', desc: 'Real-Time Database, Auth & Push Alerts in Mobile App Development Training in ' + locName },
    { name: 'REST APIs & TanStack Query', icon: 'fas fa-network-wired', desc: 'Backend Data Fetching & Caching in Mobile App Development Training in ' + locName },
    { name: 'Native Device Hardware APIs', icon: 'fas fa-camera', desc: 'Camera, Biometrics & Google Maps SDK in Mobile App Development Training in ' + locName },
    { name: 'Fast Storage (MMKV / SQLite)', icon: 'fas fa-database', desc: 'Offline First Persistence & Caching in Mobile App Development Training in ' + locName },
    { name: 'App Store & Play Store ASO', icon: 'fab fa-google-play', desc: 'Signed Bundles, CI/CD & Publishing in Mobile App Development Training in ' + locName }
  ];

  const syllabusModules = [
    {
      title: `Module 1: Mobile App Architecture, TypeScript & Dart Foundations in Mobile App Development Training in ${locName}`,
      topics: [
        `Mobile App Ecosystem: Native (iOS/Android) vs Hybrid vs Cross-Platform in Mobile App Development Training in ${locName}`,
        'TypeScript & Modern ES6+ Features for Scalable React Native Codebases',
        'Dart Programming Mastery: Variables, OOPs, Null Safety, Async/Await & Streams for Flutter',
        'Configuring Development Tools: Android Studio, Xcode Simulator, VS Code & Expo CLI',
        'Mobile UX Principles: Responsive Layouts, Dynamic Pixel Densities & Safe Area Views',
        `Live Lab: Building Multi-Platform Base Wireframe in Mobile App Development Training in ${locName}`
      ]
    },
    {
      title: `Module 2: React Native Core Components, Styling & Dynamic Navigation in ${locName}`,
      topics: [
        'React Native Core Primitives: View, Text, Image, ScrollView, FlatList & TextInput',
        'Advanced Flexbox Layouts, Animated API & Custom NativeWind (Tailwind CSS) Styling',
        'React Navigation 6: Stack Navigator, Bottom Tab Navigator & Dynamic Gesture Drawers',
        'Building Custom Reusable UI Kits, Modals & Micro-Interaction Animations',
        'Form Handling with Formik, React Hook Form & Yup Schema Validation',
        `Live Project: Dynamic Navigation & Adaptive Mobile UI in Mobile App Development Training in ${locName}`
      ]
    },
    {
      title: `Module 3: Flutter Framework, Widgets & Reactive State Management in ${locName}`,
      topics: [
        'Flutter Engine Architecture: Everything is a Widget (Stateless vs Stateful Tree)',
        'Building Adaptive UI: Container, Column, Row, ListView, GridView & Custom Slivers',
        'State Management Patterns in Flutter: Provider, Riverpod & Bloc Architecture',
        'Declarative Navigation & Route Guards with GoRouter in Flutter 3',
        'Custom Theming, Material 3 Guidelines & Cupertino (iOS) Native Widgets',
        `Live Lab: Multi-Screen Flutter Dashboard in Mobile App Development Training in ${locName}`
      ]
    },
    {
      title: `Module 4: Global State Management & Real-Time Backend Integration in ${locName}`,
      topics: [
        'Global State Management in React Native with Redux Toolkit & Zustand',
        'Connecting REST APIs & GraphQL Backends with Axios, Fetch & TanStack Query',
        'Firebase Mobile Suite: Firebase Auth (Email, Google, Phone OTP), Cloud Firestore & Storage',
        'Offline Data Persistence & Superfast Local Caching with MMKV and SQLite',
        'Building Real-Time Chat & Activity Feed with Firebase WebSockets',
        `Live Project: Real-Time Chat & Cloud Synced App in Mobile App Development Training in ${locName}`
      ]
    },
    {
      title: `Module 5: Native Hardware APIs, Geolocation & Push Notifications in ${locName}`,
      topics: [
        'Accessing Device Hardware: Camera, Image Picker & Biometrics (Face ID / Fingerprint)',
        'Geolocation & Map Integration: Google Maps SDK, Geofencing & Live Driver Tracking',
        'Push Notifications Architecture with Firebase Cloud Messaging (FCM) & OneSignal',
        'Performance Optimization: Memory Leaks, Frame Drop Profiling & FlatList Virtualization',
        'Mobile App Security: SSL Pinning, Secure Storage & API Key Obfuscation',
        `Live Lab: GPS Tracker & Geofenced Hardware App in Mobile App Development Training in ${locName}`
      ]
    },
    {
      title: `Module 6: CI/CD, App Store / Play Store Publishing & Placements in ${locName}`,
      topics: [
        'Generating Android Keystores, Signed APKs & Android App Bundles (AAB)',
        'iOS Certificate Management, Provisioning Profiles & TestFlight Beta Distribution',
        'Google Play Console & Apple App Store Connect Publishing Guidelines & ASO Optimization',
        'Mobile Developer Resume Engineering & Production App Store Showcase',
        'Mock Technical Coding Interviews for React Native & Flutter Roles',
        `100% Dedicated Placement Assistance for Mobile App Development Training in ${locName}`
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: `Full-Stack E-Commerce Mobile App in Mobile App Development Training in ${locName}`,
      desc: `Engineered a production-ready shopping application in our Mobile App Development Training in ${locName} with dynamic product catalogs, category filtering, cart management with Zustand, multi-gateway Stripe/Razorpay checkout, and live order tracking.`,
      tags: ['React Native', 'Expo', 'Zustand', 'Stripe API', 'Node.js Backend'],
      color: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/30'
    },
    {
      title: `Real-Time On-Demand Delivery & Ride-Booking App in ${locName}`,
      desc: `Built an Uber-style on-demand application in our Mobile App Development Training in ${locName} featuring Google Maps route polylines, driver live geolocation broadcasting, turn-by-turn navigation, and automated Fare calculations with Bloc state management in Flutter.`,
      tags: ['Flutter', 'Dart', 'Bloc Pattern', 'Google Maps SDK', 'Firebase'],
      color: 'from-teal-500/20 to-cyan-500/20',
      border: 'border-teal-500/30'
    },
    {
      title: `Enterprise Social Media & Real-Time Video Chat App in ${locName}`,
      desc: `Developed a cross-platform social networking app in our Mobile App Development Training in ${locName} with WebRTC video calling, ephemeral stories, push notifications via FCM, media upload pipelines with Cloudinary, and biometrics security.`,
      tags: ['React Native', 'WebRTC', 'FCM Push', 'Firestore', 'Tailwind'],
      color: 'from-cyan-500/20 to-emerald-500/20',
      border: 'border-cyan-500/30'
    }
  ];

  const faqs = [
    {
      q: `What is covered in the Mobile App Development Training in ${locName}?`,
      a: `Our Mobile App Development Training in ${locName} covers both React Native (JavaScript/TypeScript) and Flutter (Dart) for building cross-platform Android and iOS applications. You gain hands-on experience building full-stack apps with Firebase, REST APIs, native device hardware APIs, and publishing to Google Play & App Store with 100% placement support.`
    },
    {
      q: `Will I learn both React Native and Flutter in Mobile App Development Training in ${locName}?`,
      a: `Yes! In our Mobile App Development Training in ${locName}, you learn both React Native (Meta ecosystem) and Flutter (Google ecosystem), giving you the versatility to apply for React Native Developer, Flutter Engineer, or Cross-Platform Mobile App Developer roles.`
    },
    {
      q: `Do I need a Mac computer to build iOS apps during Mobile App Development Training in ${locName}?`,
      a: `Not mandatory for learning! In Mobile App Development Training in ${locName}, we provide Expo and cloud build tools (EAS Build) that allow you to develop and test iOS apps on Windows/Linux. For advanced Xcode compiling, our Marathahalli classroom lab is equipped with modern high-speed systems.`
    },
    {
      q: `How does Mobile App Development Training in ${locName} provide 100% placement assistance?`,
      a: `Enrolling in Mobile App Development Training in ${locName} at LearnMore Technologies gives you 100% dedicated placement support, resume engineering, live App Store/Play Store app portfolio building, mock interviews with Senior Mobile Architects, and direct interview scheduling with 300+ hiring partners across Bangalore.`
    },
    {
      q: `Are weekday and weekend batches available for Mobile App Development Training in ${locName}?`,
      a: `Yes, we provide flexible weekday morning/evening batches and weekend intensive batches for Mobile App Development Training in ${locName}, available via in-person classroom training in Marathahalli, Bangalore, and live interactive instructor-led online training.`
    },
    {
      q: `Will I receive certification after completing Mobile App Development Training in ${locName}?`,
      a: `Yes, upon completing the Mobile App Development Training in ${locName}, you receive an ISO 9001:2015 verified Mobile Application Developer Certificate with QR verification, recognized by top tech companies globally.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-emerald-500 selection:text-slate-950" style={{ backgroundColor: '#020617', color: '#f8fafc' }}>
      <Header />
      <BatchUrgencyBanner courseName={`Mobile App Development Training in ${locName}`} />

      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" style={{ backgroundColor: '#020617' }}>
        {/* Glow Accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <Link href="/courses" className="hover:text-emerald-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <span className="text-slate-200">Mobile App Development Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider shadow-inner">
                <i className="fas fa-mobile-alt" /> Ranked #1 Institute for Mobile App Development Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Mobile App Development Training in <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                LearnMore Technologies provides the most comprehensive <strong className="text-white">Mobile App Development Training in {locName}</strong> with 100% placement support. Master React Native, Flutter, Dart, Firebase, REST APIs, Google Maps SDK, and live App Store / Play Store deployment in our hands-on <strong className="text-white">Mobile App Development Training in {locName}</strong>.
              </p>

              {/* Social Proof & Rating */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-700 px-3.5 py-2 rounded-xl text-emerald-400 font-bold">
                  <i className="fas fa-star text-amber-400" />
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(2,300+ Reviews for Mobile App Development Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3.5 py-2 rounded-xl text-emerald-400 font-bold">
                  <i className="fas fa-user-check" />
                  <span>100% Placement Assistance</span>
                </div>
              </div>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { icon: 'fab fa-react', label: 'React Native & Expo' },
                  { icon: 'fas fa-mobile-alt', label: 'Flutter & Dart UI' },
                  { icon: 'fas fa-fire', label: 'Firebase Backend & Auth' },
                  { icon: 'fas fa-camera', label: 'Camera & GPS APIs' },
                  { icon: 'fab fa-google-play', label: 'App Store Publishing' },
                  { icon: 'fas fa-user-graduate', label: '100% Placement Support' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-medium">
                    <i className={`${item.icon} text-emerald-400 text-sm`} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Lead Capture Form */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-emerald-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Free Demo Class
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Book Your Free Live Demo</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Get curriculum roadmap, fee discounts & live demo for Mobile App Development Training in {locName}.
                </p>

                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={inlineForm.name}
                      onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number (with WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      value={inlineForm.phone}
                      onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={inlineForm.email}
                      onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Training Mode</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="Classroom Training">Classroom Training ({locName})</option>
                      <option value="Online Live Training">Live Online Interactive</option>
                      <option value="Weekend Fast-Track">Weekend Fast-Track Batch</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50"
                  >
                    {isInlineSubmitting ? 'Booking Demo...' : 'Book Free Demo & Syllabus'}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    🔒 100% Privacy Guaranteed. No Spam Calls.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Quick Stats Bar */}
      <section className="py-8 bg-slate-950 border-b border-slate-800" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">45+ Hrs</div>
              <div className="text-xs text-slate-400 mt-1">Live Mobile App Coding</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-400">3 Real-World</div>
              <div className="text-xs text-slate-400 mt-1">Production Mobile App Projects</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</div>
              <div className="text-xs text-slate-400 mt-1">Placement Support</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-400">1:1</div>
              <div className="text-xs text-slate-400 mt-1">Senior Mobile Architect Mentorship</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Tech Stack */}
      <section className="py-16 bg-slate-950 border-b border-slate-800" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Technology Ecosystem</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Tools You Will Master in Mobile App Development Training in {locName}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileTools.map((tool, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <i className={`${tool.icon} text-lg`} />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{tool.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum & Syllabus */}
      <section className="py-16 bg-slate-950 border-y border-slate-800/80" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Comprehensive Curriculum</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">
                Mobile App Development Training in {locName} Course Syllabus
              </p>
            </div>
            <button
              onClick={() => openEnrollModal(`Mobile App Syllabus Download (${locName})`)}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <i className="fas fa-file-pdf text-emerald-400" />
              Download Full Syllabus PDF
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {syllabusModules.map((mod, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 mb-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[11px] text-emerald-300">
                      {idx + 1}
                    </span>
                    <span>Module {idx + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-4 leading-snug">{mod.title}</h3>
                  <ul className="space-y-2.5">
                    {mod.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <i className="fas fa-check text-emerald-400 text-[10px] mt-1 shrink-0" />
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
      <section className="py-16 bg-slate-950 border-b border-slate-800" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Hands-On Experience</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Projects in Mobile App Development Training in {locName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capstoneProjects.map((proj, idx) => (
              <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-b ${proj.color} border ${proj.border} flex flex-col justify-between`}>
                <div>
                  <div className="w-8 h-8 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center text-emerald-400 text-xs font-bold mb-4">
                    P0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">{proj.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{proj.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] text-emerald-300">
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
      <section className="py-16 bg-slate-950 border-t border-slate-800" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">The LearnMore Advantage</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Why LearnMore for Mobile App Development Training in {locName}?
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-800 text-xs text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Feature</th>
                  <th className="py-4 px-6 text-emerald-400 bg-emerald-500/10 rounded-t-lg">LearnMore Technologies</th>
                  <th className="py-4 px-6 text-slate-500">Other Training Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Dual Frameworks (React Native + Flutter)</td>
                  <td className="py-4 px-6 text-emerald-300 bg-emerald-500/5 font-semibold">✅ Yes, Full Industry Mastery</td>
                  <td className="py-4 px-6 text-slate-500">❌ Single Framework Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Native Hardware & Google Maps SDK</td>
                  <td className="py-4 px-6 text-emerald-300 bg-emerald-500/5 font-semibold">✅ Yes, Camera, GPS, Biometrics & FCM</td>
                  <td className="py-4 px-6 text-slate-500">❌ Basic UI Layouts Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">App Store & Google Play Publishing</td>
                  <td className="py-4 px-6 text-emerald-300 bg-emerald-500/5 font-semibold">✅ Yes, End-to-End ASO & Live Publishing</td>
                  <td className="py-4 px-6 text-slate-500">❌ Local Simulator Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">State Management (Zustand / Redux / Bloc)</td>
                  <td className="py-4 px-6 text-emerald-300 bg-emerald-500/5 font-semibold">✅ Yes, Production Enterprise Patterns</td>
                  <td className="py-4 px-6 text-slate-500">❌ Basic useState Only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Placement Support & Portfolio Reviews</td>
                  <td className="py-4 px-6 text-emerald-300 bg-emerald-500/5 font-semibold">✅ 100% Dedicated with 300+ Partners</td>
                  <td className="py-4 px-6 text-slate-500">❌ Generic Job Leads</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Batch Schedule Section */}
      <UpcomingBatchSchedule courseName={`Mobile App Development Training in ${locName}`} />

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-slate-950 border-t border-slate-800" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Got Questions?</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions on Mobile App Development Training in {locName}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs text-emerald-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
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
      <section className="py-12 bg-slate-950 border-t border-slate-800" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-lg font-bold text-white">
            React Native & Flutter Mobile App Development Training Institute in {locName}, Bangalore
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed max-w-3xl mx-auto">
            LearnMore Technologies offers premier Mobile App Development Training in {locName}. Join our specialized Mobile App Development Training in {locName} to master React Native, Flutter, Dart, Firebase, and live App Store publishing with 100% placement support in Bangalore. Accessible from Outer Ring Road, Whitefield, Bellandur, Electronic City, and HSR Layout.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openEnrollModal(`Mobile App Course Enrollment (${locName})`)}
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-emerald-500/25"
            >
              Enroll Now in {locName}
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA courseName={`Mobile App Development Course in ${locName}`} />
    </div>
  );
}
