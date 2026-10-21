'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useEnroll } from '@/context/EnrollContext';

interface DevOpsTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function DevOpsTrainingClient({ location }: DevOpsTrainingClientProps = {}) {
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
          program: 'DevOps Master Program',
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

  const devopsTools = [
    { name: 'Docker', icon: 'fab fa-docker', desc: 'Containerization Platform' },
    { name: 'Kubernetes', icon: 'fas fa-dharmachakra', desc: 'Container Orchestration' },
    { name: 'Jenkins', icon: 'fas fa-cogs', desc: 'CI/CD Automation Server' },
    { name: 'Terraform', icon: 'fas fa-code-branch', desc: 'Infrastructure as Code (IaC)' },
    { name: 'Ansible', icon: 'fas fa-terminal', desc: 'Configuration Management' },
    { name: 'Git & GitHub', icon: 'fab fa-github', desc: 'Version Control & Repos' },
    { name: 'Linux Bash', icon: 'fab fa-linux', desc: 'OS Administration & Scripting' },
    { name: 'Prometheus', icon: 'fas fa-chart-area', desc: 'Metrics & Monitoring' }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Linux Administration & Shell Scripting',
      topics: [
        'Linux Architecture, System Commands, File System Hierarchy & Permissions',
        'User & Group Management, SSH Security & Package Managers (yum/apt)',
        'Bash Shell Scripting: Variables, Conditional Loops, Functions & Automation',
        'Process Management, Disk Partitioning (LVM), & Networking Tools'
      ]
    },
    {
      title: 'Module 2: Version Control & Collaboration with Git & GitHub',
      topics: [
        'Git Architecture, Repositories, Staging, Commits & Branching Strategies',
        'Merging, Rebasing, Conflict Resolution & Cherry-Picking',
        'GitHub Actions & Pull Request Workflows for Automated Testing'
      ]
    },
    {
      title: 'Module 3: Containerization with Docker & Docker Compose',
      topics: [
        'Docker Architecture, Engine, Images, Containers & Registries (Docker Hub)',
        'Writing Production Dockerfiles & Multi-Stage Builds',
        'Docker Networking, Volumes, & Orchestration with Docker Compose'
      ]
    },
    {
      title: 'Module 4: Kubernetes (K8s) Cluster Orchestration',
      topics: [
        'Kubernetes Architecture: Control Plane, Worker Nodes, kubectl CLI',
        'Pods, Deployments, ReplicaSets, Services (NodePort, ClusterIP, LoadBalancer)',
        'ConfigMaps, Secrets, Ingress Controllers, Persistent Volumes & Helm Charts'
      ]
    },
    {
      title: 'Module 5: Continuous Integration & Deployment (CI/CD) with Jenkins',
      topics: [
        'Jenkins Installation, Plugin Management & Master-Slave Agent Architecture',
        'Declarative Pipeline as Code (Jenkinsfile) with Git, Maven & Docker Integration',
        'Automated Build Triggers, Webhooks & Artifact Management'
      ]
    },
    {
      title: 'Module 6: Infrastructure as Code (Terraform) & Monitoring',
      topics: [
        'Terraform HCL Syntax, Providers (AWS), Resources, State File & Modules',
        'Ansible Playbooks, Roles & Configuration Management Automation',
        'Monitoring & Logging: Prometheus, Grafana & ELK Stack Setup',
        'Capstone Project: Complete Automated End-to-End Cloud DevOps Pipeline'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'Automated CI/CD Pipeline for Microservices Application',
      desc: 'Configured GitHub Webhooks, Jenkins Pipelines, SonarQube Code Analysis, and Docker Hub automated container pushes.',
      tags: ['Jenkins', 'Docker', 'SonarQube', 'GitHub']
    },
    {
      title: 'Kubernetes Production Cluster Deployment with Helm & Ingress',
      desc: 'Deployed a multi-node Kubernetes cluster with Ingress Controller, TLS certificates, Auto Scaling Pods, and Persistent Storage.',
      tags: ['Kubernetes', 'Helm', 'Ingress', 'K8s Pods']
    },
    {
      title: 'Terraform Infrastructure Provisioning on AWS Cloud',
      desc: 'Wrote Terraform HCL scripts to automatically provision AWS EC2, VPC, Load Balancers, and EKS Clusters with remote S3 state storage.',
      tags: ['Terraform', 'AWS EKS', 'HCL', 'Ansible']
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
      q: `Why enroll at LearnMore Technologies for DevOps Training in ${locName}?`,
      a: `LearnMore Technologies is recognized as the top institute for DevOps Training in ${locName}. Our trainers are Principal DevOps Engineers with 14+ years of real-world experience in Docker, Kubernetes, Jenkins, AWS, and Terraform.`
    },
    {
      q: `What is the average salary after completing DevOps Training in ${locName}?`,
      a: `Freshers completing DevOps Training in ${locName} start at ₹5.5 LPA to ₹9.8 LPA. Experienced DevOps Architects frequently command packages between ₹14 LPA to ₹28+ LPA in Bangalore MNCs.`
    },
    {
      q: `Is DevOps Training in ${locName} suitable for freshers and system admins?`,
      a: `Yes! Our DevOps Training in ${locName} begins with Linux fundamentals and Shell Scripting before advancing to Docker, Kubernetes, Jenkins CI/CD, and Terraform.`
    },
    {
      q: `Does DevOps Training in ${locName} include hands-on labs and placement support?`,
      a: `Yes, enrolling in DevOps Training in ${locName} includes 100% practical live server labs, capstone projects, and 100% placement support.`
    }
  ];

  const testimonials = [
    {
      name: 'Manish Kumar',
      role: 'DevOps Engineer at Amazon',
      package: '8.5 LPA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'The Kubernetes and Jenkins CI/CD pipeline hands-on labs were top notch!'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/course" className="hover:text-blue-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">DevOps Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-5">
                <i className="fas fa-cogs"></i> Ranked #1 DevOps Training in {locName} | 100% Placement
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                Best <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent">DevOps Training in {locName}</span> - 100% Placement Assistance
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">
                Join the top-rated <strong>DevOps Training in {locName}</strong> at LearnMore Technologies. Master Linux Administration, AWS Cloud, Docker Containerization, Kubernetes Cluster Orchestration, Jenkins CI/CD Pipelines, Terraform Infrastructure as Code, and Prometheus Monitoring with dedicated <strong>DevOps Training in {locName}</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-amber-400 font-bold">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(3,200+ Google Reviews)</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-emerald-400 font-bold">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal(`DevOps Training in ${locName}`)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-paper-plane"></i> Apply for DevOps Training in {locName}
                </button>
                <button
                  onClick={() => openEnrollModal(`DevOps Training in ${locName} - Syllabus`)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-file-download"></i> Download DevOps Syllabus
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-800 border-2 border-blue-100 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-100">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900">Book Free Demo for DevOps Training in {locName}</h3>
                </div>

                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={inlineForm.name}
                      onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase mb-1">Mobile No *</label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="Enter mobile number"
                      value={inlineForm.phone}
                      onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter email address"
                      value={inlineForm.email}
                      onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 rounded-xl transition text-sm"
                  >
                    {isInlineSubmitting ? 'Submitting...' : `Book Demo for DevOps Training in ${locName}`}
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
              <p className="text-3xl md:text-4xl font-black text-blue-600 mb-1">16,200+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Students in DevOps Training in {locName}</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-indigo-600 mb-1">9,100+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Placed Alumni in {locName}</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-emerald-600 mb-1">300+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Hiring Partners</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-black text-amber-500 mb-1">15+ Years</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* On-Page SEO Content Block */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 font-extrabold text-xs uppercase tracking-wider mb-4">
                BEST DEVOPS TRAINING IN {locName.toUpperCase()}
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 leading-snug">
                Why LearnMore is the #1 Center for DevOps Training in {locName}?
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed space-y-4">
                <p>
                  Looking for the leading institute offering <strong>DevOps Training in {locName}</strong>? LearnMore Technologies provides a top-tier hands-on program. Our <strong>DevOps Training in {locName}</strong> equips students and working IT professionals with production-grade skills across cloud infrastructure, automation, and CI/CD pipelines.
                </p>
                <p>
                  Our <strong>DevOps Training in {locName}</strong> covers Linux Administration, Shell Scripting, Docker Containers, Kubernetes Cluster Management, Jenkins Declarative Pipelines, Terraform Infrastructure as Code, and Prometheus/Grafana Monitoring. Every batch of <strong>DevOps Training in {locName}</strong> is trained by senior DevOps Architects with 14+ years of real-world cloud deployment experience.
                </p>
                <p>
                  We offer flexible weekday and weekend classroom batches for <strong>DevOps Training in {locName}</strong> at our state-of-the-art center, as well as live online training options. Register for <strong>DevOps Training in {locName}</strong> to secure 100% placement call assistance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-blue-50/60 border border-blue-100">
                  <i className="fas fa-certificate text-blue-600 text-lg mt-0.5"></i>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs">ISO Certified Program</h4>
                    <p className="text-[11px] text-slate-500">DevOps Training in {locName}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100">
                  <i className="fas fa-user-tie text-indigo-600 text-lg mt-0.5"></i>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs">14+ Yrs DevOps Architects</h4>
                    <p className="text-[11px] text-slate-500">Cloud Mentors in {locName}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                  <i className="fas fa-briefcase text-emerald-600 text-lg mt-0.5"></i>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs">100% Placement Support</h4>
                    <p className="text-[11px] text-slate-500">300+ Hiring Partners</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-purple-50/60 border border-purple-100">
                  <i className="fas fa-server text-purple-600 text-lg mt-0.5"></i>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs">Live Cloud Labs</h4>
                    <p className="text-[11px] text-slate-500">Real Deployments in {locName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Tools & Stack Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              HANDS-ON DEVOPS STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              DevOps Training in {locName} - Tools & Infrastructure Covered
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {devopsTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-blue-400 transition duration-300">
                <div className="w-14 h-14 mx-auto bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-4">
                  <i className={tool.icon}></i>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1">{tool.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Grid */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Comprehensive Curriculum for DevOps Training in {locName}
            </h2>
            <p className="text-slate-600 text-base">
              Designed by principal DevOps architects to master production infrastructure and CI/CD pipelines in {locName}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((t, i) => (
                    <li key={i} className="text-slate-700 text-sm flex items-center gap-2">
                      <i className="fas fa-check-circle text-blue-500"></i> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capstone Projects Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              PRACTICAL INDUSTRY PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Live Capstone Projects in DevOps Training in {locName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-md flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-blue-100 text-blue-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
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
      <section className="py-20 bg-gradient-to-r from-slate-900 via-black to-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-blue-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certificate in DevOps Training in {locName}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Receive an official, lifetime-valid LearnMore Technologies Professional Certificate upon completing <strong>DevOps Training in {locName}</strong>.
              </p>
              <button
                onClick={() => openEnrollModal(`DevOps Training in ${locName} - Sample Request`)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-800 border-2 border-blue-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="w-20 h-20 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-blue-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-blue-300 font-extrabold uppercase tracking-widest mb-4">DevOps Training in {locName} Certified</p>
                <div className="pt-4 border-t border-slate-700 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-DEVOPS-{locName.toUpperCase().replace(/\s+/g, '-')}-2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LearnMore Technologies vs Other Institutes Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 font-extrabold text-xs uppercase tracking-wider mb-3 border border-blue-500/30">
              WHY WE ARE #1
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              DevOps Training in {locName}: LearnMore vs Other Institutes
            </h2>
            <p className="text-slate-400 mt-2 text-base">
              See why students choose LearnMore Technologies for <strong>DevOps Training in {locName}</strong> over local institutes.
            </p>
          </div>

          <div className="overflow-x-auto shadow-2xl rounded-3xl border border-slate-800">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 text-sm uppercase tracking-wider bg-slate-900/80">
                  <th className="py-5 px-6 text-slate-400 font-bold w-1/3">Feature / Comparison</th>
                  <th className="py-5 px-6 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 text-blue-400 font-extrabold border-t-2 border-l border-r border-blue-500 w-1/3 text-base">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-crown text-amber-400 text-lg"></i>
                      <span>LearnMore ({locName})</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-slate-500 font-bold w-1/3">Other Institutes in {locName}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-sm bg-slate-950/60">
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Trainer Expertise & Background</td>
                  <td className="py-5 px-6 bg-blue-950/20 border-l border-r border-blue-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Principal DevOps Engineers in {locName} with 14+ Yrs Enterprise Experience
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers or freshers with theoretical knowledge only
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Practical & Lab Sessions</td>
                  <td className="py-5 px-6 bg-blue-950/20 border-l border-r border-blue-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 100% Practical Docker, Kubernetes, Jenkins & Terraform Labs in {locName}
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Heavy PowerPoint slides with minimal lab practice time
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-blue-950/20 border-l border-r border-blue-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 100% Placement Support & 300+ Active Partner Tie-ups
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Only basic resume forwarding without placement support
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-blue-950/20 border-l border-r border-blue-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> 3 End-to-End Automated Cloud CI/CD & K8s Cluster Deployments
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Basic dummy sample projects or no live deployment
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="py-5 px-6 font-bold text-slate-200">Batch Flexibility & Session Access</td>
                  <td className="py-5 px-6 bg-blue-950/20 border-l border-r border-blue-500/30 text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-400"></i> Classroom ({locName}), Online, Weekend + Lifetime Recording Access
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Rigid batch timings with limited/no class recordings
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section for On-Page SEO */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 font-extrabold text-xs uppercase tracking-wider mb-3">
              FAQ & ANSWERS
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Frequently Asked Questions - DevOps Training in {locName}
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full p-6 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition"
              >
                <span>What is the course fee for DevOps Training in {locName}?</span>
                <i className={`fas fa-chevron-${openFaq === 0 ? 'up' : 'down'} text-blue-500`}></i>
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  The fee for <strong>DevOps Training in {locName}</strong> at LearnMore Technologies is highly competitive. We offer No-Cost EMI options along with special discounts for early registrants in <strong>DevOps Training in {locName}</strong>.
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full p-6 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition"
              >
                <span>Why is LearnMore rated #1 for DevOps Training in {locName}?</span>
                <i className={`fas fa-chevron-${openFaq === 1 ? 'up' : 'down'} text-blue-500`}></i>
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  LearnMore Technologies is recognized as the top center for <strong>DevOps Training in {locName}</strong> because of 14+ years experienced mentors, 100% real cloud lab deployments (AWS, Docker, K8s, Jenkins), and 100% placement call support.
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full p-6 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition"
              >
                <span>Is placement assistance provided with DevOps Training in {locName}?</span>
                <i className={`fas fa-chevron-${openFaq === 2 ? 'up' : 'down'} text-blue-500`}></i>
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  Yes, 100% placement support is included with <strong>DevOps Training in {locName}</strong>. We help prepare your resume, build GitHub DevOps repositories, conduct mock technical interviews, and arrange direct calls with 300+ hiring partners.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
