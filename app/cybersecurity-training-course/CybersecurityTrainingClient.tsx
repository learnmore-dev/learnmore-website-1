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

interface CybersecurityTrainingClientProps {
  location?: {
    name: string;
    slug: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function CybersecurityTrainingClient({ location }: CybersecurityTrainingClientProps = {}) {
  const { openEnrollModal } = useEnroll();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeModule, setActiveModule] = useState(0);
  const locName = location?.name || 'Bangalore';

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trainingMode: 'Classroom Training',
    city: locName
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          program: `Cybersecurity Training in ${locName}`,
          trainingMode: formData.trainingMode,
          city: formData.city,
          source: 'hero-lead-form'
        })
      });
      if (res.ok) {
        window.location.href = '/thank-you';
      } else {
        openEnrollModal(`Cybersecurity Training in ${locName}`);
      }
    } catch (err) {
      console.error(err);
      openEnrollModal(`Cybersecurity Training in ${locName}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const tools = [
    { name: 'Kali Linux', icon: 'fab fa-linux', desc: 'SOTA Penetration Testing OS in Cybersecurity Training in ' + locName },
    { name: 'Wireshark', icon: 'fas fa-network-wired', desc: 'Deep Packet Inspection & Analysis in Cybersecurity Training in ' + locName },
    { name: 'Metasploit Pro', icon: 'fas fa-skull', desc: 'Exploit Development Framework in Cybersecurity Training in ' + locName },
    { name: 'Burp Suite Pro', icon: 'fas fa-spider', desc: 'OWASP Web Application Security in Cybersecurity Training in ' + locName },
    { name: 'Splunk SIEM', icon: 'fas fa-chart-line', desc: 'SOC Log Analytics & Threat Hunting in Cybersecurity Training in ' + locName },
    { name: 'Nmap & Nessus', icon: 'fas fa-radar', desc: 'Network Discovery & Vulnerability Scan in Cybersecurity Training in ' + locName },
    { name: 'CrowdStrike EDR', icon: 'fas fa-shield-virus', desc: 'Endpoint Threat Detection & Response in Cybersecurity Training in ' + locName },
    { name: 'AWS & Azure Security', icon: 'fab fa-aws', desc: 'Cloud IAM & GuardDuty Defense in Cybersecurity Training in ' + locName }
  ];

  const syllabus = [
    {
      title: `Module 1: Networking, Linux & Cyber Security Fundamentals in ${locName}`,
      duration: '3 Weeks',
      topics: [
        `OSI & TCP/IP Protocol Stack Deep-Dive, Packet Flow (DNS, DHCP, HTTPS, SSH, TLS 1.3) in Cybersecurity Training in ${locName}`,
        'Linux Administration for Ethical Hackers: Bash Scripting, Permissions & Process Control',
        'Firewalls (iptables, pfSense), Routing, Subnetting & Enterprise Topologies',
        'VPNs, Proxies, Tor Architecture, Anonymity & Network Defense Principles',
        `Live Lab: Building Hardened Perimeter Defense in Cybersecurity Training in ${locName}`
      ]
    },
    {
      title: `Module 2: Ethical Hacking, OSINT & Network Penetration Testing in ${locName}`,
      duration: '4 Weeks',
      topics: [
        `Information Gathering, OSINT (Recon-ng, Shodan, Maltego) & Advanced Google Dorking in Cybersecurity Training in ${locName}`,
        'Port Scanning & Vulnerability Assessment with Nmap, Nessus Professional & OpenVAS',
        'System Exploitation with Metasploit Framework & Custom Payload Generation (msfvenom)',
        'Privilege Escalation (Windows & Linux), Post-Exploitation & Maintaining Persistence',
        `Live Lab: Domain Controller Exploit & Root Privilege Escalation in Cybersecurity Training in ${locName}`
      ]
    },
    {
      title: `Module 3: Web Application Security & OWASP Top 10 Vulnerabilities in ${locName}`,
      duration: '3.5 Weeks',
      topics: [
        `OWASP Top 10 Exploits: SQL Injection, XSS, CSRF, SSRF, IDOR & Broken Access Control in Cybersecurity Training in ${locName}`,
        'Web App Pentesting with Burp Suite Professional, OWASP ZAP & Postman API Testing',
        'REST & GraphQL API Security Testing & Authentication Bypass Techniques',
        'Secure Code Review, Input Sanitization & Web Application Firewall (WAF) Setup',
        `Live Lab: Full-Scale Web Pentest on Vulnerable Banking Portal in Cybersecurity Training in ${locName}`
      ]
    },
    {
      title: `Module 4: SOC Operations, SIEM & Threat Hunting with Splunk in ${locName}`,
      duration: '3.5 Weeks',
      topics: [
        `SOC Tier-1 & Tier-2 Roles, Alert Triaging & Cyber Kill Chain Framework in Cybersecurity Training in ${locName}`,
        'Splunk & QRadar SIEM: Log Ingestion, Search Processing Language (SPL) & Threat Dashboards',
        'Threat Intelligence with MITRE ATT&CK Framework & Indicators of Compromise (IoCs)',
        'Endpoint Detection & Response (EDR) with CrowdStrike & Microsoft Defender for Endpoint',
        `Live Lab: 24/7 Threat Hunting & Brute-Force Incident Triage in Cybersecurity Training in ${locName}`
      ]
    },
    {
      title: `Module 5: Cryptography, Cloud Security & Zero Trust IAM in ${locName}`,
      duration: '3 Weeks',
      topics: [
        `Symmetric & Asymmetric Encryption (AES-256, RSA), Hashing (SHA-256) & PKI in Cybersecurity Training in ${locName}`,
        'SSL/TLS Certificate Handshake, HTTPS Interception & Certificate Authority Infrastructure',
        'AWS & Azure Cloud Security: IAM Least-Privilege, GuardDuty, CloudTrail & Key Vaults',
        'Zero Trust Architecture & Enterprise Identity Governance Implementation',
        `Live Lab: AWS GuardDuty Cloud Intrusion Defense in Cybersecurity Training in ${locName}`
      ]
    },
    {
      title: `Module 6: Incident Response, Digital Forensics & CEH / Security+ Prep in ${locName}`,
      duration: '3 Weeks',
      topics: [
        `NIST SP 800-61 Incident Handling: Preparation, Detection, Containment & Recovery in Cybersecurity Training in ${locName}`,
        'Memory Forensics with Volatility & Disk Forensics with Autopsy and FTK Imager',
        'Malware Analysis Basics: Static & Dynamic Sandboxed Malware Investigation',
        'CEH v12, CompTIA Security+ & Cisco CyberOps Mock Exam Drill & Placement Bootcamps',
        `100% Dedicated Placement Assistance for Cybersecurity Training in ${locName}`
      ]
    }
  ];

  const projects = [
    {
      title: `Enterprise Vulnerability Assessment & Pentest in Cybersecurity Training in ${locName}`,
      tag: 'Pen Testing',
      desc: `Simulated a red-team penetration test on an enterprise multi-tier network in our Cybersecurity Training in ${locName}. Discovered 14 critical vulnerabilities, exploited SMB services, elevated privileges to Domain Admin, and produced an executive remediation audit report.`,
      badge: 'Red Team Lab',
      tools: 'Kali Linux, Metasploit, Nmap, Nessus, Burp Suite'
    },
    {
      title: `24/7 SOC Threat Hunting & Incident Response with Splunk in ${locName}`,
      tag: 'SOC & SIEM',
      desc: `Built an enterprise SOC monitoring environment in our Cybersecurity Training in ${locName} using Splunk Enterprise SIEM. Ingested 500k+ firewall and Windows Event logs, developed correlation rules for brute-force attacks and lateral movement, and orchestrated rapid containment playbooks.`,
      badge: 'Blue Team Defense',
      tools: 'Splunk Enterprise, MITRE ATT&CK, Wireshark, Suricata'
    },
    {
      title: `Cloud Security Posture & Web Defense with AWS GuardDuty in ${locName}`,
      tag: 'Cloud Security',
      desc: `Hardened an AWS cloud infrastructure hosting enterprise microservices in our Cybersecurity Training in ${locName}. Configured AWS WAF rules against OWASP Top 10, automated vulnerability alerts with AWS GuardDuty and Security Hub, and enforced least-privilege IAM policies.`,
      badge: 'Cloud Defense',
      tools: 'AWS WAF, GuardDuty, IAM, CloudTrail, Terraform'
    }
  ];

  const faqs = [
    {
      q: `Do I need prior coding or networking experience for Cybersecurity Training in ${locName}?`,
      a: `No prior cybersecurity experience is required for Cybersecurity Training in ${locName}. We start from absolute scratch with Computer Networks (OSI/TCP-IP), Linux command line, and Security Fundamentals before advancing to Ethical Hacking, SOC, and Web Pentesting.`
    },
    {
      q: `What global certifications does Cybersecurity Training in ${locName} prepare me for?`,
      a: `Our Cybersecurity Training in ${locName} prepares you for Certified Ethical Hacker (CEH v12), CompTIA Security+, Cisco CyberOps Associate, and Splunk Certified Core User, along with LearnMore Technologies ISO 9001:2015 Course Completion Certification.`
    },
    {
      q: `Are the labs and virtual cyber range hands-on in Cybersecurity Training in ${locName}?`,
      a: `Yes! In our Cybersecurity Training in ${locName}, you get hands-on access to our 24/7 Virtual Cyber Range and cloud labs loaded with Kali Linux, Metasploit, Burp Suite Pro, Splunk SIEM, and vulnerable target applications for realistic hacking and defense exercises.`
    },
    {
      q: `What are the job roles after completing Cybersecurity Training in ${locName}?`,
      a: `After completing Cybersecurity Training in ${locName}, you can target high-paying roles such as SOC Analyst (L1/L2), Penetration Tester / Ethical Hacker, Cybersecurity Engineer, Information Security Analyst, and Cloud Security Specialist.`
    },
    {
      q: `How does Cybersecurity Training in ${locName} provide 100% placement assistance?`,
      a: `Enrolling in Cybersecurity Training in ${locName} at LearnMore Technologies gives you 100% dedicated placement support including resume re-engineering, CEH technical mock interviews, LinkedIn branding, and direct interview scheduling with 150+ cybersecurity hiring companies across Bangalore.`
    },
    {
      q: `Can I choose between Classroom and Online modes for Cybersecurity Training in ${locName}?`,
      a: `Yes, for Cybersecurity Training in ${locName}, we offer both interactive in-person classroom batches at our Marathahalli center in ${locName} and live instructor-led online batches with recorded session access.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-rose-500 selection:text-white" style={{ backgroundColor: '#020617', color: '#f8fafc' }}>
      <Header />
      <BatchUrgencyBanner courseName={`Cybersecurity Training in ${locName}`} />

      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" style={{ backgroundColor: '#020617' }}>
        {/* Glow Accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-600/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-rose-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <Link href="/courses" className="hover:text-rose-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <span className="text-slate-200">Cybersecurity Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider shadow-inner">
                <i className="fas fa-shield-alt" /> Ranked #1 Institute for Cybersecurity Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Cybersecurity Training in <span className="bg-gradient-to-r from-rose-400 via-red-300 to-amber-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                LearnMore Technologies provides the most comprehensive <strong className="text-white">Cybersecurity Training in {locName}</strong> with 100% placement support. Master Ethical Hacking, SOC & SIEM (Splunk), OWASP Top 10 Web Pentesting, Virtual Cyber Range simulations, and Cloud Security defense in our hands-on <strong className="text-white">Cybersecurity Training in {locName}</strong>.
              </p>

              {/* Social Proof & Rating */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-700 px-3.5 py-2 rounded-xl text-amber-400 font-bold">
                  <i className="fas fa-star text-amber-400" />
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(1,950+ Reviews for Cybersecurity Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3.5 py-2 rounded-xl text-emerald-400 font-bold">
                  <i className="fas fa-user-check" />
                  <span>100% Placement Assistance</span>
                </div>
              </div>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { icon: 'fas fa-shield-virus', label: 'Virtual Cyber Range Labs' },
                  { icon: 'fas fa-certificate', label: 'CEH v12 & Security+ Prep' },
                  { icon: 'fas fa-briefcase', label: '100% Placement Support' },
                  { icon: 'fas fa-user-shield', label: 'Red & Blue Team Projects' },
                  { icon: 'fas fa-chart-line', label: 'Splunk SIEM Operations' },
                  { icon: 'fas fa-clock', label: 'Weekday & Weekend Batches' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-medium">
                    <i className={`${item.icon} text-rose-400 text-sm`} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Lead Capture Form */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-rose-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-rose-500 to-red-500 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Free Demo Class
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Book Your Free Live Demo</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Get curriculum roadmap, fee discounts & live demo for Cybersecurity Training in {locName}.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number (with WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Training Mode</label>
                    <select
                      value={formData.trainingMode}
                      onChange={(e) => setFormData({ ...formData, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-rose-500 transition-colors"
                    >
                      <option value="Classroom Training">Classroom Training ({locName})</option>
                      <option value="Online Live Training">Live Online Interactive</option>
                      <option value="Weekend Fast-Track">Weekend Fast-Track Batch</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-rose-500 via-red-500 to-rose-500 hover:from-rose-400 hover:to-red-400 text-white font-bold text-sm tracking-wide uppercase transition-all shadow-lg hover:shadow-rose-500/25 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Booking Demo...' : 'Book Free Demo & Syllabus'}
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
              <div className="text-2xl sm:text-3xl font-extrabold text-rose-400">2,400+</div>
              <div className="text-xs text-slate-400 mt-1">Cyber Professionals Trained in {locName}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">95.4%</div>
              <div className="text-xs text-slate-400 mt-1">Placement Success Rate</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">₹5.5 - ₹18 LPA</div>
              <div className="text-xs text-slate-400 mt-1">Salary Package Range</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">150+</div>
              <div className="text-xs text-slate-400 mt-1">Cybersecurity Hiring Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Tech Stack */}
      <section className="py-16 bg-slate-950 border-b border-slate-800" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2">Technology Ecosystem</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Tools You Will Master in Cybersecurity Training in {locName}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-rose-500/40 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 group-hover:bg-rose-500/20 transition-colors">
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
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2">Curriculum Breakdown</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">
                Cybersecurity Training in {locName} Course Syllabus
              </p>
            </div>
            <button
              onClick={() => openEnrollModal(`Cybersecurity Syllabus Download (${locName})`)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 hover:bg-rose-500/20 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <i className="fas fa-file-pdf text-rose-400" />
              Download Full Syllabus PDF
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Module Selector */}
            <div className="lg:col-span-5 space-y-3">
              {syllabus.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModule(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    activeModule === idx
                      ? 'bg-rose-500/10 border-rose-500 text-white shadow-lg shadow-rose-950/20'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wide">{m.duration}</div>
                    <div className="font-bold text-sm mt-0.5">{m.title}</div>
                  </div>
                  <i className={`fas fa-chevron-right text-xs transition-transform ${activeModule === idx ? 'text-rose-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              ))}
            </div>

            {/* Module Details Pane */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-block px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 text-xs font-semibold mb-3">
                    {syllabus[activeModule].duration} Hands-on Intensive
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6">{syllabus[activeModule].title}</h3>

                  <div className="space-y-3.5">
                    {syllabus[activeModule].topics.map((topic, tidx) => (
                      <div key={tidx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <i className="fas fa-check-circle text-rose-400 mt-1 flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    Includes Lab Exercises & Virtual Cyber Range Assignments
                  </div>
                  <button
                    onClick={() => openEnrollModal(`Cybersecurity ${syllabus[activeModule].title} (${locName})`)}
                    className="px-4 py-2 rounded-lg bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs transition-colors"
                  >
                    Enroll in this Module
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Capstone Defense & Attack Projects */}
      <section className="py-16 bg-slate-950 border-b border-slate-800" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2">Hands-on Portfolio</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Projects in Cybersecurity Training in {locName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <div
                key={idx}
                className="bg-slate-900/70 rounded-2xl border border-slate-800 hover:border-rose-500/40 p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {p.tag}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold">{p.badge}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{p.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-400">Tools:</span> {p.tools}
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
            <h2 className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2">The LearnMore Advantage</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Why LearnMore for Cybersecurity Training in {locName}?
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-800 text-xs text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Feature</th>
                  <th className="py-4 px-6 text-rose-400 bg-rose-500/10 rounded-t-lg">LearnMore Technologies</th>
                  <th className="py-4 px-6 text-slate-500">Other Training Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Virtual Cyber Range & Live Labs</td>
                  <td className="py-4 px-6 text-rose-300 bg-rose-500/5 font-semibold">✅ 24/7 Dedicated Virtual Lab Access</td>
                  <td className="py-4 px-6 text-slate-500">❌ Basic Theory PPTs only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">SOC & SIEM Specialization</td>
                  <td className="py-4 px-6 text-rose-300 bg-rose-500/5 font-semibold">✅ Splunk + MITRE ATT&CK Threat Hunting</td>
                  <td className="py-4 px-6 text-slate-500">❌ Not Covered</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Web Pentesting & OWASP Top 10</td>
                  <td className="py-4 px-6 text-rose-300 bg-rose-500/5 font-semibold">✅ Burp Suite Pro + Real Target Apps</td>
                  <td className="py-4 px-6 text-slate-500">❌ Basic tool demonstration</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Certification Support</td>
                  <td className="py-4 px-6 text-rose-300 bg-rose-500/5 font-semibold">✅ Full CEH v12 & CompTIA Security+ Prep</td>
                  <td className="py-4 px-6 text-slate-500">❌ Course completion slip only</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">100% Dedicated Placement Cell</td>
                  <td className="py-4 px-6 text-rose-300 bg-rose-500/5 font-semibold">✅ Direct Interviews with 150+ Companies</td>
                  <td className="py-4 px-6 text-slate-500">❌ Generic Job Forwarding</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Upcoming Batch Schedule */}
      <UpcomingBatchSchedule courseName={`Cybersecurity Training in ${locName}`} />

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-slate-950 border-t border-slate-800" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2">Got Questions?</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions on Cybersecurity Training in {locName}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-rose-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs text-rose-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
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
            Cybersecurity & Ethical Hacking Training Institute in {locName}, Bangalore
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed max-w-3xl mx-auto">
            LearnMore Technologies offers premier Cybersecurity Training in {locName}. Join our specialized Cybersecurity Training in {locName} to master Ethical Hacking, CEH v12, SOC Splunk SIEM, Web Pentesting, and Cloud Security with 100% placement support in Bangalore. Accessible from Outer Ring Road, Whitefield, Bellandur, Electronic City, and HSR Layout.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openEnrollModal(`Cybersecurity Course Enrollment (${locName})`)}
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-rose-500 via-red-500 to-rose-500 hover:from-rose-400 hover:to-red-400 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-rose-500/25"
            >
              Enroll Now in {locName}
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA courseName={`Cybersecurity Master Program in ${locName}`} />
    </div>
  );
}
