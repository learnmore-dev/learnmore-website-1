'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StickyMobileCTA from '@/components/common/StickyMobileCTA';
import BatchUrgencyBanner from '@/components/common/BatchUrgencyBanner';
import CourseComparisonTable from '@/components/common/CourseComparisonTable';
import UpcomingBatchSchedule from '@/components/common/UpcomingBatchSchedule';
import RecentPlacementsSection from '@/components/common/RecentPlacementsSection';
import { useEnroll } from '@/context/EnrollContext';

interface AwsTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function AwsTrainingClient({ location }: AwsTrainingClientProps = {}) {
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
          program: 'AWS Cloud Master Program',
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

  const awsTools = [
    { name: 'Amazon EC2', icon: 'fas fa-server', desc: 'Virtual Compute Instances' },
    { name: 'Amazon S3', icon: 'fas fa-database', desc: 'Object Storage Service' },
    { name: 'AWS VPC', icon: 'fas fa-network-wired', desc: 'Isolated Network Cloud' },
    { name: 'AWS IAM', icon: 'fas fa-user-shield', desc: 'Identity & Access Management' },
    { name: 'AWS Lambda', icon: 'fas fa-bolt', desc: 'Serverless Functions' },
    { name: 'Amazon RDS', icon: 'fas fa-table', desc: 'Relational Database Service' },
    { name: 'AWS CloudFormation', icon: 'fas fa-code-branch', desc: 'Infrastructure as Code' },
    { name: 'AWS CloudWatch', icon: 'fas fa-chart-line', desc: 'Monitoring & Observability' }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: AWS Fundamentals, IAM & Global Infrastructure',
      topics: [
        'Introduction to Cloud Computing & AWS Global Infrastructure (Regions/AZs)',
        'AWS Management Console, AWS CLI & SDK Setup',
        'Identity & Access Management (IAM): Users, Groups, Roles & Policies',
        'Multi-Factor Authentication (MFA) & Security Best Practices',
        'AWS Billing, Cost Management & Budgets',
        'Live Lab: Designing Secure IAM Access Policies for Enterprise Organizations'
      ]
    },
    {
      title: 'Module 2: Compute Services (AWS EC2, Elastic Beanstalk & Lambda)',
      topics: [
        'Elastic Compute Cloud (EC2) Instances, AMIs & Key Pairs',
        'Instance Types, Launch Templates & Placement Groups',
        'AWS Elastic Load Balancer (ALB, NLB) & Auto Scaling Groups (ASG)',
        'AWS Elastic Beanstalk for Automated Web App Deployment',
        'Serverless Architecture with AWS Lambda & API Gateway',
        'Live Project: High-Availability Web Server Infrastructure with Auto Scaling'
      ]
    },
    {
      title: 'Module 3: AWS Storage Architecture (S3, EBS, EFS & Glacier)',
      topics: [
        'Simple Storage Service (S3): Buckets, Objects, Versioning & Lifecycle Rules',
        'S3 Storage Classes, Cross-Region Replication & Static Website Hosting',
        'Elastic Block Store (EBS) Volumes, Snapshots & Encryption',
        'Elastic File System (EFS) for Shared Linux File Storage',
        'AWS Glacier for Archival & AWS Storage Gateway',
        'Live Lab: Securing & Hosting Static Web Applications on Amazon S3'
      ]
    },
    {
      title: 'Module 4: Virtual Private Cloud (VPC Networking & Security)',
      topics: [
        'Amazon VPC Architecture: Subnets, Route Tables & Internet Gateways',
        'Public & Private Subnets, NAT Gateways & Bastion Hosts',
        'Security Groups vs Network Access Control Lists (NACLs)',
        'VPC Peering, AWS Transit Gateway & Virtual Private Gateways (VPN)',
        'VPC Flow Logs & AWS CloudWatch Network Monitoring',
        'Live Project: Designing a Multi-Tier Isolated VPC Network Architecture'
      ]
    },
    {
      title: 'Module 5: Database Services (RDS, DynamoDB & Redshift)',
      topics: [
        'Amazon Relational Database Service (RDS): MySQL, PostgreSQL & Aurora',
        'Multi-AZ Deployments, Read Replicas & Automated Backups',
        'Amazon DynamoDB: NoSQL Database Architecture, Tables & Items',
        'Amazon Redshift Data Warehousing & ElastiCache (Redis/Memcached)',
        'Database Migration Service (DMS) Overview',
        'Live Lab: Setting up High-Availability Multi-AZ RDS MySQL Instance'
      ]
    },
    {
      title: 'Module 6: Infrastructure as Code (IaC), Security & Exam Prep',
      topics: [
        'AWS CloudFormation Templates (JSON/YAML) & Stack Management',
        'AWS CloudTrail, AWS Config & Security Hub Compliance',
        'AWS KMS (Key Management Service) & Secrets Manager',
        'AWS Certified Solutions Architect – Associate (SAA-C03) Exam Prep',
        'Resume Building, Mock Technical Interviews & Real-World Case Studies',
        'Capstone Project: Complete Enterprise Cloud Architecture Deployment on AWS'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'High-Availability Multi-Tier E-Commerce Web App on AWS',
      desc: 'Architected an automated multi-tier architecture using AWS EC2, Application Load Balancers, Auto Scaling Groups, and Multi-AZ RDS MySQL Database.',
      tags: ['EC2', 'ALB', 'Auto Scaling', 'RDS Multi-AZ']
    },
    {
      title: 'Serverless Real-Time Data Processing & API Gateway Pipeline',
      desc: 'Built a 100% serverless event-driven architecture using Amazon S3, AWS Lambda, API Gateway, DynamoDB, and CloudWatch alerts.',
      tags: ['Serverless', 'Lambda', 'API Gateway', 'DynamoDB']
    },
    {
      title: 'Enterprise VPC Security & CloudFormation Automated Deployment',
      desc: 'Created infrastructure as code (IaC) templates in YAML to automatically deploy VPCs, NAT Gateways, Bastion Hosts, and NACL security rules.',
      tags: ['CloudFormation', 'VPC Peering', 'IAM Roles', 'IaC']
    }
  ];

  const hiringCompanies = [
    { name: 'Accenture', logo: '/images/companies/accenture.webp' },
    { name: 'TCS', logo: '/images/companies/tcs.webp' },
    { name: 'Infosys', logo: '/images/companies/infosys.webp' },
    { name: 'Wipro', logo: '/images/companies/wipro.webp' },
    { name: 'Cognizant', logo: '/images/companies/cognizant.webp' },
    { name: 'IBM', logo: '/images/companies/ibm.webp' },
    { name: 'Amazon', logo: '/images/companies/amazon.webp' },
    { name: 'Microsoft', logo: '/images/companies/microsoft.webp' }
  ];

  const faqs = [
    {
      q: 'Why enroll at LearnMore Technologies for AWS Cloud Training?',
      a: 'LearnMore Technologies is recognized as the top AWS Cloud Training Institute. Our trainers are Certified AWS Solutions Architects with 14+ years of real-world cloud implementation experience. We offer hands-on lab infrastructure, 100% placement support, and AWS certification guidance.'
    },
    {
      q: 'What is the average salary of an AWS Cloud Engineer in India?',
      a: 'The average starting salary for an entry-level AWS Cloud Engineer ranges from ₹5.0 LPA to ₹9.5 LPA. Certified AWS Solutions Architects with 3-5 years experience frequently earn between ₹12 LPA to ₹26+ LPA.'
    },
    {
      q: 'Is AWS Cloud Training suitable for beginners and non-IT professionals?',
      a: 'Yes, our AWS Cloud curriculum begins with fundamental networking, Linux commands, and cloud concepts before advancing to VPC design, IAM security, and automation. Over 40% of our successful alumni started from non-technical backgrounds.'
    },
    {
      q: 'Does LearnMore Technologies assist with AWS Certification (SAA-C03 / Cloud Practitioner)?',
      a: 'Yes! We provide complete exam preparation, official practice mock tests, dumps reviews, and hands-on scenarios tailored for AWS Certified Cloud Practitioner & Solutions Architect Associate certifications.'
    },
    {
      q: 'What are the training modes available for AWS Training in LearnMore Technologies?',
      a: 'We offer Classroom Training in Bangalore (Marathahalli & BTM Layout), Live Interactive Online Training, and Weekend Batches for working professionals.'
    },
    {
      q: 'Does LearnMore Technologies provide 100% Placement Assistance?',
      a: 'Yes, we provide 100% Placement Assistance with 300+ active hiring partners including top IT MNCs and cloud consulting firms across India.'
    }
  ];

  const testimonials = [
    {
      name: 'Karthik Raja',
      role: 'AWS Cloud Engineer at Wipro',
      package: '7.5 LPA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'The hands-on VPC and EC2 auto-scaling labs at LearnMore Technologies were game-changers for me! I passed my AWS Solutions Architect Associate exam and landed a job within 3 weeks.'
    },
    {
      name: 'Deepika Nair',
      role: 'Cloud Architect at Cognizant',
      package: '8.2 LPA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'Coming from a support role, I wanted to shift into Cloud Engineering. The mentors guided me through real AWS architecture projects that impressed my interviewers.'
    },
    {
      name: 'Suresh Babu',
      role: 'AWS Operations Engineer at IBM',
      package: '6.8 LPA',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      text: 'Exceptional training! Practical labs on S3, IAM policies, and Lambda serverless gave me total confidence during technical interview rounds.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/courses/aws-hero.webp"
            alt="AWS Training Background"
            className="w-full h-full object-cover opacity-75 md:opacity-85 scale-100 transform transition duration-500"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/course" className="hover:text-amber-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">AWS Training Course {location ? `in ${location.name}` : ''}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-5">
                <i className="fab fa-aws"></i> Ranked #1 AWS Training Institute in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                Advanced Certification in <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">AWS Cloud Computing</span> {location ? <span className="text-white block mt-1 text-2xl md:text-3xl font-extrabold">in {location.name}</span> : null}
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-4 leading-relaxed">
                Master AWS EC2, S3 Storage, VPC Networking, IAM Security, Serverless Lambda, and RDS Databases. Become a certified AWS Solutions Architect in {locName} with 100% Placement Assistance.
              </p>

              {/* Urgency & Limited Seats Timer */}
              <BatchUrgencyBanner batchDate="Upcoming Monday" seatsRemaining={5} />

              {/* Badges / Rating & EMI */}
              <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700/80 px-3.5 py-2 rounded-xl text-amber-400 font-bold shadow-sm">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(3,100+ Reviews on Google)</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/90 border border-slate-700/80 px-3.5 py-2 rounded-xl text-emerald-400 font-bold shadow-sm">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/90 border border-amber-500/30 px-3.5 py-2 rounded-xl text-amber-300 font-bold shadow-sm">
                  <i className="fas fa-credit-card text-amber-400"></i>
                  <span>No-Cost EMI @ ₹3,499/mo</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8 text-slate-200 text-sm">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Learn EC2, VPC, S3, RDS, Lambda, IAM & CloudFormation</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Certified AWS Solutions Architect Mentors with 14+ Yrs Experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Official SAA-C03 Certification Exam Prep & 4 Live Architecture Labs</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal('AWS Cloud Master Program')}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 text-sm tracking-wide"
                >
                  <i className="fas fa-paper-plane"></i> Enroll Now & Get 30% OFF
                </button>
                <button
                  onClick={() => openEnrollModal('AWS Cloud Master Program - Syllabus')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2 text-sm"
                >
                  <i className="fas fa-file-download"></i> Download Detailed Syllabus (PDF)
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-800 border-2 border-amber-100/80 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-amber-200/60 shadow-2xs">
                    🔥 Limited Seats • 100% Placement Call Guarantee
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    Book Free AWS Counselling
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Speak 1-on-1 with AWS Certified Mentors & claim 30% scholarship
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-amber-500 transition"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-amber-500 transition"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Preferred Training Mode *</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-amber-500 transition"
                    >
                      <option value="Yes, am Interested in Online Training">Instructor-Led Live Online Training</option>
                      <option value="Classroom Training - Bangalore Campus">Classroom Training (Bangalore Campus)</option>
                      <option value="Weekend Batch for Working Professionals">Weekend Batch (For Professionals)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition text-sm text-center"
                  >
                    Book Free AWS Session
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
              <p className="text-3xl md:text-4xl font-black text-amber-600 mb-1">15,000+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">AWS Students Trained</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-orange-600 mb-1">8,800+</p>
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

      {/* NEW SECTION 1: AWS Tools & Services Mastered Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              HANDS-ON AWS CLOUD STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              AWS Services & Tools You Will Master
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Gain practical hands-on experience on core Amazon Web Services cloud infrastructure tools.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {awsTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-amber-400 transition duration-300">
                <div className="w-14 h-14 mx-auto bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center text-2xl mb-4">
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
      <section className="py-20 bg-gradient-to-br from-amber-100/80 via-slate-100 to-orange-100/80 border-t border-b border-amber-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider mb-3.5 shadow-sm">
              COMPREHENSIVE AWS CLOUD CURRICULUM
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Master AWS Cloud with <span className="text-amber-600">Industry-Focused Modules</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-amber-500 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-bold text-xs">
                      <i className="fas fa-clock text-[11px]"></i> {idx === 0 ? '3 Weeks Duration' : idx === 1 ? '4 Weeks Duration' : idx === 2 ? '3 Weeks Duration' : idx === 3 ? '4 Weeks Duration' : idx === 4 ? '3 Weeks Duration' : '3 Weeks Duration'}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-amber-600 transition leading-snug">
                    {module.title.replace(/^Module \d+: /, '')}
                  </h3>

                  <ul className="space-y-3 mb-6 border-t border-slate-100 pt-4">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-3 text-slate-700 text-sm">
                        <i className="fas fa-check-circle text-amber-500 text-base mt-0.5 flex-shrink-0"></i>
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

      {/* NEW SECTION 2: Real-World Capstone Live Projects */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              PRACTICAL INDUSTRY PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Live Capstone AWS Projects You Will Build
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Add real enterprise cloud projects to your GitHub & AWS portfolio to impress interview recruiters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-amber-100 text-amber-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: ISO Certification Preview */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-black to-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-amber-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certified AWS Cloud Specialist Certification
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Upon successful completion of the AWS training program and live capstone projects, candidates receive the official LearnMore Technologies AWS Solutions Architect Professional Certification.
              </p>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Lifetime valid credential recognized by 300+ hiring partner MNCs
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Official prep & voucher assistance for AWS SAA-C03 Exam
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Shareable digital badge for LinkedIn & Resume integration
                </li>
              </ul>
              <button
                onClick={() => openEnrollModal('AWS Certification Sample Request')}
                className="bg-amber-500 hover:bg-amber-600 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-800 border-2 border-amber-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-amber-500 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  ISO 9001:2015
                </div>
                <div className="w-20 h-20 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-amber-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-amber-300 font-extrabold uppercase tracking-widest mb-4">AWS Solutions Architect Certified</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  This certifies that candidate has successfully mastered AWS Cloud Infrastructure, VPC Design, EC2, S3, IAM & DevOps Automation.
                </p>
                <div className="pt-4 border-t border-slate-700 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-AWS-2026
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
            Our AWS Cloud Alumni Work at Global IT MNCs & Cloud Leaders
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
              Real AWS Placement Success Stories
            </h2>
            <p className="text-slate-600 text-base">
              See how our students transformed their careers into AWS Cloud Engineers through LearnMore Technologies.
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
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-amber-500 shadow-sm" />
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                    <span className="inline-block mt-1 bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
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
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  openFaq === idx ? 'border-amber-500 bg-amber-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-amber-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-slate-900 text-base md:text-lg transition"
                >
                  <span className="pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === idx ? 'up text-amber-600' : 'down text-slate-400'} text-sm flex-shrink-0`}></i>
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-amber-100">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-800 font-extrabold text-xs uppercase tracking-wider mb-3 border border-amber-200">
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
                  <th className="py-5 px-6 bg-amber-50 text-amber-900 font-extrabold border-t-2 border-l border-r border-amber-300 w-1/3 text-base">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-crown text-amber-500 text-lg"></i>
                      <span>LearnMore Technologies</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-slate-500 font-bold w-1/3">Other Local Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm bg-white">
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Trainer Expertise & Background</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Certified AWS Solutions Architects with 14+ Yrs Experience
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers or freshers with theoretical knowledge only
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Practical & Lab Sessions</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Practical AWS Console & CLI Live Hands-on Labs
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Heavy PowerPoint slides with minimal lab practice time
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Placement Call Guarantee & 300+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Only basic resume forwarding without interview guarantee
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 3 Real-World Enterprise AWS Architecture Deployments
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Basic dummy sample projects or no live deployment
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Batch Flexibility & Session Access</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Classroom (Bangalore), Online, Weekend + Lifetime Recording Access
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Rigid batch timings with limited/no class recordings
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Certification Accreditation</td>
                  <td className="py-5 px-6 bg-amber-50/50 border-l border-r border-amber-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> ISO 9001:2015 Certification + AWS SAA-C03 Official Exam Prep
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
      <UpcomingBatchSchedule courseName="AWS Cloud Master Program" />

      {/* Recent Student Placements Section */}
      <RecentPlacementsSection courseName="AWS Cloud Master Program" />

      {/* Sticky Mobile CTA Bar for Google Ads Conversions */}
      <StickyMobileCTA courseName="AWS Cloud Master Program" />

      <Footer />
    </div>
  );
}
