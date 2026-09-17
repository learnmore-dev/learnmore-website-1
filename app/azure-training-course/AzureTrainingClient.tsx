'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import StickyMobileCTA from '@/components/common/StickyMobileCTA';
import BatchUrgencyBanner from '@/components/common/BatchUrgencyBanner';
import UpcomingBatchSchedule from '@/components/common/UpcomingBatchSchedule';
import RecentPlacementsSection from '@/components/common/RecentPlacementsSection';
import { useEnroll } from '@/context/EnrollContext';

interface AzureTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function AzureTrainingClient({ location }: AzureTrainingClientProps = {}) {
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
          program: 'Microsoft Azure Cloud Master Program',
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

  const azureTools = [
    { name: 'Azure Virtual Machines', icon: 'fas fa-server', desc: 'Scalable Cloud Compute Instances' },
    { name: 'Azure Blob Storage', icon: 'fas fa-database', desc: 'Massively Scalable Object Storage' },
    { name: 'Azure Virtual Network (VNet)', icon: 'fas fa-network-wired', desc: 'Secure Isolated Cloud Networking' },
    { name: 'Microsoft Entra ID (Azure AD)', icon: 'fas fa-user-shield', desc: 'Identity, RBAC & Cloud Governance' },
    { name: 'Azure Functions & Logic Apps', icon: 'fas fa-bolt', desc: 'Event-Driven Serverless Compute' },
    { name: 'Azure SQL & Cosmos DB', icon: 'fas fa-table', desc: 'Managed Relational & NoSQL Databases' },
    { name: 'Azure DevOps & Pipelines', icon: 'fas fa-code-branch', desc: 'CI/CD Automation & Release Mgmt' },
    { name: 'Azure Monitor & Sentinel', icon: 'fas fa-chart-line', desc: 'Observability & Cloud Security' }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Cloud Fundamentals, Microsoft Entra ID (Azure AD) & Governance',
      topics: [
        'Introduction to Cloud Computing & Microsoft Azure Global Infrastructure (Regions, Availability Zones)',
        'Azure Portal Navigation, Cloud Shell, Azure CLI & PowerShell Setup',
        'Microsoft Entra ID (formerly Azure Active Directory): Users, Groups & Service Principals',
        'Role-Based Access Control (RBAC), Custom Roles & Privileged Identity Management (PIM)',
        'Azure Subscriptions, Resource Groups, Azure Policies & Cost Management / Budgets',
        'Live Lab: Configuring Multi-Tenant Microsoft Entra ID with Custom RBAC Policies'
      ]
    },
    {
      title: 'Module 2: Azure Compute (Virtual Machines, App Services & Scale Sets)',
      topics: [
        'Azure Virtual Machines (Windows & Linux): Provisioning, Sizing, Disks & SSH/RDP Access',
        'Virtual Machine Scale Sets (VMSS) for Automated Horizontal Scaling',
        'Azure App Services: Web Apps, API Apps, Custom Domains & SSL Certificates',
        'Azure Container Instances (ACI) & Introduction to Azure Kubernetes Service (AKS)',
        'Serverless Computing with Azure Functions, Event Grid & Logic Apps',
        'Live Project: High-Availability Web App Deployment on VMSS with Auto-Scaling'
      ]
    },
    {
      title: 'Module 3: Azure Storage Architecture (Blob, Files, Disks & Data Lake)',
      topics: [
        'Azure Storage Accounts: Standard vs Premium Tiers & Redundancy (LRS, GRS, ZRS, RA-GRS)',
        'Azure Blob Storage: Hot, Cool, Cold & Archive Tiers with Lifecycle Management',
        'Azure Files & Azure File Sync for Hybrid Enterprise File Sharing',
        'Managed Disks (OS & Data Disks), Snapshots, Encryption & Azure Backup / Recovery Vaults',
        'Shared Access Signatures (SAS Tokens), Storage Firewalls & Azure Storage Explorer',
        'Live Lab: Configuring Enterprise Hybrid Storage & Automated Backup Lifecycle Rules'
      ]
    },
    {
      title: 'Module 4: Azure Virtual Networking (VNet, Subnets, VPN, NSGs & Peering)',
      topics: [
        'Azure Virtual Networks (VNet) Architecture, CIDR Notation & Subnet Partitioning',
        'Network Security Groups (NSGs), Application Security Groups (ASGs) & Rules',
        'Azure Bastion Host Setup for Secure Private VM Access without Public IPs',
        'VNet-to-VNet Peering (Local & Global Peering) & Hub-and-Spoke Topology',
        'Azure Load Balancer (Public & Internal), Application Gateway & Web Application Firewall (WAF)',
        'Azure VPN Gateway (Point-to-Site & Site-to-Site) & Azure ExpressRoute Concepts',
        'Live Project: Designing a Multi-Tier Isolated Hub-and-Spoke VNet Network'
      ]
    },
    {
      title: 'Module 5: Database Services & Serverless Integration (Azure SQL & Cosmos DB)',
      topics: [
        'Azure SQL Database: Single Database, Elastic Pools & Managed Instances',
        'High-Availability, Failover Groups, Point-in-Time Restore & Geo-Replication',
        'Azure Cosmos DB: Multi-Model Global NoSQL Database & Consistency Levels',
        'Azure Cache for Redis for High-Performance Caching',
        'Azure Database Migration Service (DMS) & Data Factory Overview',
        'Live Lab: Setting up Geo-Replicated High-Availability Azure SQL Database'
      ]
    },
    {
      title: 'Module 6: Azure DevOps, ARM / Bicep IaC, Security & Certification Prep',
      topics: [
        'Infrastructure as Code (IaC) with Azure Resource Manager (ARM) Templates & Bicep',
        'Introduction to Terraform for Azure Infrastructure Provisioning',
        'Azure DevOps: Azure Repos, CI/CD Azure Pipelines, Artifacts & Release Pipelines',
        'Azure Monitor, Log Analytics Workspaces, Metrics & Application Insights',
        'Azure Key Vault for Secrets, Keys & Certificate Management',
        'AZ-104 (Azure Administrator) & AZ-305 (Solutions Architect) Exam Preparation & Mock Tests',
        'Capstone Project: Complete Enterprise Cloud Architecture Deployment on Microsoft Azure'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'High-Availability Multi-Tier Enterprise Web App on Microsoft Azure',
      desc: 'Architected an automated multi-tier architecture using Azure VM Scale Sets, Application Gateway with WAF, and Geo-Redundant Azure SQL Database with Failover Groups.',
      tags: ['VM Scale Sets', 'App Gateway', 'Azure SQL', 'High Availability']
    },
    {
      title: 'End-to-End Azure DevOps CI/CD Automation Pipeline with AKS',
      desc: 'Built a complete CI/CD automation pipeline using Azure Repos, Azure Pipelines, Azure Container Registry (ACR), and Azure Kubernetes Service (AKS) with automated rollouts.',
      tags: ['Azure DevOps', 'CI/CD Pipelines', 'AKS', 'Docker']
    },
    {
      title: 'Enterprise Hub-Spoke VNet Network & Bicep Automated IaC Deployment',
      desc: 'Created infrastructure as code (IaC) templates in Bicep to automatically deploy Hub-and-Spoke VNets, Bastion Hosts, Network Security Groups, and Site-to-Site VPN tunnels.',
      tags: ['Bicep IaC', 'Hub-Spoke VNet', 'Azure Bastion', 'NSG Rules']
    }
  ];

  const hiringCompanies = [
    { name: 'Microsoft', logo: '/images/companies/microsoft.webp' },
    { name: 'Accenture', logo: '/images/companies/accenture.webp' },
    { name: 'TCS', logo: '/images/companies/tcs.webp' },
    { name: 'Infosys', logo: '/images/companies/infosys.webp' },
    { name: 'Wipro', logo: '/images/companies/wipro.webp' },
    { name: 'Cognizant', logo: '/images/companies/cognizant.webp' },
    { name: 'IBM', logo: '/images/companies/ibm.webp' },
    { name: 'Amazon', logo: '/images/companies/amazon.webp' }
  ];

  const faqs = [
    {
      q: `Why enroll at LearnMore Technologies for Microsoft Azure Training in ${locName}?`,
      a: `LearnMore Technologies is recognized as the #1 institute for Microsoft Azure Training in ${locName}. Our trainers are Microsoft Certified Azure Solutions Architects with 14+ years of real-world cloud implementation experience. We offer hands-on Azure Portal & CLI lab infrastructure, 100% placement support, and official AZ-104 / AZ-305 certification guidance.`
    },
    {
      q: `What is the average salary after completing Microsoft Azure Training in ${locName}?`,
      a: `Freshers completing Microsoft Azure Training in ${locName} start at ₹5.0 LPA to ₹9.5 LPA. Certified Azure Solutions Architects and Cloud DevOps Engineers with 3-5 years experience frequently earn between ₹12 LPA to ₹28+ LPA in Bangalore MNCs.`
    },
    {
      q: `Is Microsoft Azure Training in ${locName} suitable for beginners and non-IT professionals?`,
      a: `Yes! Our Microsoft Azure Training in ${locName} starts from fundamental cloud principles, networking basics, and Windows/Linux fundamentals before advancing to Virtual Networks (VNet), Entra ID security, VM Scale Sets, and Azure DevOps automation.`
    },
    {
      q: `Does Microsoft Azure Training in ${locName} include AZ-104 and AZ-305 Certification support?`,
      a: `Yes! Our Microsoft Azure Training in ${locName} provides complete exam preparation for AZ-900 (Fundamentals), AZ-104 (Azure Administrator Associate), and AZ-305 (Solutions Architect Expert), including official mock tests and architecture case studies.`
    },
    {
      q: `What batch options are available for Microsoft Azure Training in ${locName}?`,
      a: `We offer weekday classroom sessions for Microsoft Azure Training in ${locName}, live online interactive training, and dedicated weekend batches for working IT professionals.`
    },
    {
      q: `Does Microsoft Azure Training in ${locName} provide 100% Placement Assistance?`,
      a: `Yes, enrolling in Microsoft Azure Training in ${locName} includes 100% placement assistance with resume building, mock technical interviews, LinkedIn profile optimization, and direct referrals to 300+ hiring partner companies.`
    }
  ];

  const testimonials = [
    {
      name: 'Rohan Sharma',
      role: 'Azure Cloud Administrator at Accenture',
      package: '8.4 LPA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'The hands-on VNet peering, VM Scale Sets, and Entra ID RBAC labs at LearnMore Technologies were outstanding! I cleared my AZ-104 exam on my first attempt and joined Accenture as an Azure Administrator.'
    },
    {
      name: 'Pooja Reddy',
      role: 'Azure Solutions Engineer at Wipro',
      package: '9.0 LPA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'Transitioning from system admin to Microsoft Azure was seamless thanks to LearnMore Technologies. The live Capstone project on Hub-Spoke VNet and Azure DevOps pipelines gave me total confidence in interviews.'
    },
    {
      name: 'Anand Kulkarni',
      role: 'Cloud Operations Specialist at Infosys',
      package: '7.2 LPA',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      text: 'Superb practical training! Real-time scenarios on Azure Blob storage lifecycle, Backup vaults, and Azure SQL geo-replication helped me crack multiple MNC technical rounds easily.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80"
            alt="Microsoft Azure Training Background"
            className="w-full h-full object-cover opacity-60 md:opacity-75 scale-100 transform transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/80 to-slate-950/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-sky-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/course" className="hover:text-sky-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">Microsoft Azure Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold mb-5">
                <i className="fab fa-microsoft"></i> Ranked #1 Institute for Microsoft Azure Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-white">
                Microsoft Azure Training in <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-4 leading-relaxed">
                LearnMore Technologies offers the best <strong>Microsoft Azure Training in {locName}</strong> with 100% placement assistance. Master Azure Virtual Machines, Blob Storage, Virtual Networks (VNet), Microsoft Entra ID (Azure AD), Azure DevOps, and Azure SQL with certified mentors in our <strong>Microsoft Azure Training in {locName}</strong> program.
              </p>

              {/* Urgency & Limited Seats Timer */}
              <BatchUrgencyBanner batchDate="Upcoming Monday" seatsRemaining={5} />

              {/* Badges / Rating & EMI */}
              <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-750 px-3.5 py-2 rounded-xl text-amber-400 font-bold shadow-sm">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(3,200+ Reviews for Azure Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-750 px-3.5 py-2 rounded-xl text-emerald-400 font-bold shadow-sm">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-sky-500/30 px-3.5 py-2 rounded-xl text-sky-300 font-bold shadow-sm">
                  <i className="fas fa-credit-card text-sky-400"></i>
                  <span>No-Cost EMI @ ₹3,499/mo</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8 text-slate-200 text-sm">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Comprehensive Azure VMs, VNet, Blob, Entra ID & DevOps in <strong>Microsoft Azure Training in {locName}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Microsoft Certified Azure Solutions Architect Mentors for <strong>Azure Training in {locName}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Official AZ-104 & AZ-305 Certification Exam Prep included with <strong>Azure Training in {locName}</strong></span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal(`Microsoft Azure Training in ${locName}`)}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-sky-500/25 transition transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 text-sm tracking-wide cursor-pointer"
                >
                  <i className="fas fa-paper-plane"></i> Enroll for Azure Training in {locName}
                </button>
                <button
                  onClick={() => openEnrollModal(`Microsoft Azure Training Syllabus - ${locName}`)}
                  className="bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <i className="fas fa-file-download"></i> Download Azure Syllabus
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-800 border-2 border-sky-100 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-sky-200/60 shadow-2xs">
                    🔥 Limited Seats • 100% Placement Support
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    Book Free Azure Counselling
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Speak 1-on-1 with Microsoft Certified Mentors & claim 30% scholarship
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-sky-500 transition"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-sky-500 transition"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-sky-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Preferred Training Mode *</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-sky-500 transition"
                    >
                      <option value="Yes, am Interested in Online Training">Instructor-Led Live Online Training</option>
                      <option value="Classroom Training - Bangalore Campus">Classroom Training (Bangalore Campus)</option>
                      <option value="Weekend Batch for Working Professionals">Weekend Batch (For Professionals)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition text-sm text-center cursor-pointer"
                  >
                    Book Free Azure Session
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
              <p className="text-3xl md:text-4xl font-black text-sky-600 mb-1">16,000+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Azure Students Trained</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-blue-600 mb-1">9,200+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Placed Alumni</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-indigo-600 mb-1">300+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Hiring Partners</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-black text-emerald-600 mb-1">15+ Years</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section for Microsoft Azure Training */}
      <section className="py-16 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 border-b pb-4">
              Best Microsoft Azure Training in {locName} – LearnMore Technologies
            </h2>
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Are you searching for the top-rated <strong>Microsoft Azure Training in {locName}</strong>? LearnMore Technologies offers industry-leading <strong>Microsoft Azure Training in {locName}</strong> designed for freshers, system administrators, software developers, and cloud architects. Our <strong>Microsoft Azure Training in {locName}</strong> delivers comprehensive hands-on exposure to Microsoft Azure cloud infrastructure, including Virtual Machines, Blob & File Storage, Virtual Networks (VNet), Microsoft Entra ID (Azure AD), Azure Functions, Azure DevOps, and Azure SQL databases.
              </p>
              <p>
                Enrolling in our <strong>Microsoft Azure Training in {locName}</strong> offers 100% practical lab-driven learning guided by certified Microsoft Azure Solutions Architects. Our <strong>Microsoft Azure Training in {locName}</strong> program is specifically structured to help candidates pass the official Microsoft Certified: Azure Administrator Associate (AZ-104) and Azure Solutions Architect Expert (AZ-305) exams and secure high-paying cloud engineering jobs across Bangalore IT MNCs.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
                Why Join Our Microsoft Azure Training in {locName}?
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 font-semibold text-slate-800">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-sky-500"></i> 100% Practical Azure Portal & CLI Labs in <strong>Microsoft Azure Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-sky-500"></i> Certified Azure Solutions Architect Mentors for <strong>Azure Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-sky-500"></i> 100% Placement Support with <strong>Microsoft Azure Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-sky-500"></i> Real-time Capstone Projects in <strong>Microsoft Azure Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-sky-500"></i> ISO 9001:2015 Certification in <strong>Microsoft Azure Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-sky-500"></i> Flexible Batches for <strong>Microsoft Azure Training in {locName}</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Azure Tools & Services Mastered Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              HANDS-ON AZURE CLOUD STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Microsoft Azure Services & Tools You Will Master
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Gain practical hands-on experience on core Microsoft Azure cloud infrastructure tools and services.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {azureTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-sky-400 transition duration-300">
                <div className="w-14 h-14 mx-auto bg-sky-500/10 text-sky-600 rounded-2xl flex items-center justify-center text-2xl mb-4">
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
      <section className="py-20 bg-gradient-to-br from-sky-100/80 via-slate-100 to-blue-100/80 border-t border-b border-sky-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-600 text-white font-extrabold text-xs uppercase tracking-wider mb-3.5 shadow-sm">
              COMPREHENSIVE AZURE CLOUD CURRICULUM
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Master Microsoft Azure with <span className="text-sky-600">Industry-Focused Modules</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-sky-500 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 font-bold text-xs">
                      <i className="fas fa-clock text-[11px]"></i> {idx === 0 ? '3 Weeks Duration' : idx === 1 ? '4 Weeks Duration' : idx === 2 ? '3 Weeks Duration' : idx === 3 ? '4 Weeks Duration' : idx === 4 ? '3 Weeks Duration' : '3 Weeks Duration'}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-sky-600 transition leading-snug">
                    {module.title.replace(/^Module \d+: /, '')}
                  </h3>

                  <ul className="space-y-3 mb-6 border-t border-slate-100 pt-4">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-3 text-slate-700 text-sm">
                        <i className="fas fa-check-circle text-sky-500 text-base mt-0.5 flex-shrink-0"></i>
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
              Live Capstone Microsoft Azure Projects You Will Build
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Add real enterprise cloud projects to your GitHub & Microsoft Azure portfolio to impress interview recruiters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-sky-500 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-sky-100 text-sky-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
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
      <section className="py-20 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-sky-500/20 text-sky-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-sky-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certified Microsoft Azure Cloud Specialist Certification
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Upon successful completion of the Microsoft Azure training program and live capstone projects, candidates receive the official LearnMore Technologies Azure Solutions Architect Professional Certification.
              </p>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Lifetime valid credential recognized by 300+ hiring partner MNCs
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Official prep & voucher assistance for Microsoft AZ-104 & AZ-305 Exams
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Shareable digital badge for LinkedIn & Resume integration
                </li>
              </ul>
              <button
                onClick={() => openEnrollModal('Microsoft Azure Certification Sample Request')}
                className="bg-sky-500 hover:bg-sky-600 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-900 border-2 border-sky-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-sky-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  ISO 9001:2015
                </div>
                <div className="w-20 h-20 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-sky-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-sky-300 font-extrabold uppercase tracking-widest mb-4">Microsoft Azure Cloud Architect Certified</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  This certifies that candidate has successfully mastered Microsoft Azure Infrastructure, VNet Networking, Virtual Machines, Blob Storage, Entra ID & DevOps Automation.
                </p>
                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-AZURE-2026
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
            Our Microsoft Azure Cloud Alumni Work at Global IT MNCs & Cloud Leaders
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
              Real Azure Placement Success Stories
            </h2>
            <p className="text-slate-600 text-base">
              See how our students transformed their careers into Microsoft Azure Cloud Engineers through LearnMore Technologies.
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
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-sky-500 shadow-sm" />
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                    <span className="inline-block mt-1 bg-sky-100 text-sky-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
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
            <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full mb-4"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  openFaq === idx ? 'border-sky-500 bg-sky-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-sky-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-slate-900 text-base md:text-lg transition cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === idx ? 'up text-sky-600' : 'down text-slate-400'} text-sm flex-shrink-0`}></i>
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-sky-100">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-800 font-extrabold text-xs uppercase tracking-wider mb-3 border border-sky-200">
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
                  <th className="py-5 px-6 bg-sky-50 text-sky-900 font-extrabold border-t-2 border-l border-r border-sky-300 w-1/3 text-base">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-crown text-sky-600 text-lg"></i>
                      <span>LearnMore Technologies</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-slate-500 font-bold w-1/3">Other Local Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm bg-white">
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Trainer Expertise & Background</td>
                  <td className="py-5 px-6 bg-sky-50/50 border-l border-r border-sky-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Certified Azure Solutions Architects with 14+ Yrs Experience
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers or freshers with theoretical knowledge only
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Practical & Lab Sessions</td>
                  <td className="py-5 px-6 bg-sky-50/50 border-l border-r border-sky-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Practical Azure Portal & CLI Live Hands-on Labs
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Heavy PowerPoint slides with minimal lab practice time
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-sky-50/50 border-l border-r border-sky-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Placement Support & 300+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Only basic resume forwarding without placement support
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-sky-50/50 border-l border-r border-sky-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 3 Real-World Enterprise Azure Architecture Deployments
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Basic dummy sample projects or no live deployment
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Batch Flexibility & Session Access</td>
                  <td className="py-5 px-6 bg-sky-50/50 border-l border-r border-sky-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Classroom (Bangalore), Online, Weekend + Lifetime Recording Access
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Rigid batch timings with limited/no class recordings
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Certification Accreditation</td>
                  <td className="py-5 px-6 bg-sky-50/50 border-l border-r border-sky-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> ISO 9001:2015 Certification + AZ-104 & AZ-305 Official Exam Prep
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
      <UpcomingBatchSchedule courseName="Microsoft Azure Cloud Master Program" />

      {/* Recent Student Placements Section */}
      <RecentPlacementsSection courseName="Microsoft Azure Cloud Master Program" />

      {/* Sticky Mobile CTA Bar for Google Ads Conversions */}
      <StickyMobileCTA courseName="Microsoft Azure Cloud Master Program" />

      <Footer />
    </div>
  );
}
