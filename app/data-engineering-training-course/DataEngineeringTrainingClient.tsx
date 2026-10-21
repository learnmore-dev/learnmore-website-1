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

interface DataEngineeringTrainingClientProps {
  location?: {
    slug: string;
    name: string;
    address?: string;
    phone?: string;
    email?: string;
  };
}

export default function DataEngineeringTrainingClient({ location }: DataEngineeringTrainingClientProps = {}) {
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
          program: 'Data Engineering Master Program',
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

  const dataEngTools = [
    { name: 'Apache Spark & PySpark', icon: 'fas fa-fire', desc: 'Distributed Big Data Processing' },
    { name: 'Apache Airflow', icon: 'fas fa-wind', desc: 'DAG Workflow Orchestration' },
    { name: 'Apache Kafka', icon: 'fas fa-stream', desc: 'Real-Time Event Streaming' },
    { name: 'Snowflake & BigQuery', icon: 'fas fa-snowflake', desc: 'Cloud Data Lakehousing' },
    { name: 'Advanced SQL & Modeling', icon: 'fas fa-database', desc: 'Star Schema, Fact & Dimensions' },
    { name: 'Delta Lake & Iceberg', icon: 'fas fa-layer-group', desc: 'ACID Lakehouse Storage' },
    { name: 'dbt (Data Build Tool)', icon: 'fas fa-cubes', desc: 'In-Warehouse Transformations' },
    { name: 'AWS / GCP Cloud Data', icon: 'fab fa-aws', desc: 'Glue, Redshift, S3 & EMR' }
  ];

  const syllabusModules = [
    {
      title: 'Module 1: Advanced SQL, Data Modeling & Warehouse Architecture',
      topics: [
        'Advanced SQL: CTEs, Window Functions, Analytical Functions, Pivots & Optimization',
        'Data Warehousing Architecture: OLTP vs OLAP, Star & Snowflake Schema Design',
        'Fact & Dimension Table Design with Slowly Changing Dimensions (SCD Type 1, 2, 3)',
        'Query Performance Tuning: Partitioning, Indexing, Clustering & Execution Plans',
        'NoSQL Databases: MongoDB & DynamoDB Integration in Data Pipelines',
        'Live Project: Designing an Enterprise E-Commerce Data Warehouse Architecture'
      ]
    },
    {
      title: 'Module 2: Python for Data Engineering & Automated ETL',
      topics: [
        'Python Scripting for Big Data: Handling Parquet, Avro, ORC & JSON Formats',
        'Consuming External Streaming & Batch REST APIs, Webhooks & Pagination',
        'Database Connectivity: SQLAlchemy, Psycopg2 & JDBC Connectors',
        'Data Validation, Schema Enforcement & Data Cleaning with Python & Great Expectations',
        'Error Handling, Retries, Dead-Letter Queues & Logging Frameworks',
        'Live Lab: Building an Automated Multi-Source Data Ingestion & Transformation Pipeline'
      ]
    },
    {
      title: 'Module 3: Distributed Data Processing with Apache Spark & PySpark',
      topics: [
        'Apache Spark Architecture: Driver, Executors, RDDs, DataFrames & Catalyst Optimizer',
        'PySpark Operations: Transformations, Actions, Lazy Evaluation & Memory Management',
        'PySpark SQL: Complex Joins, Aggregations, Windowing & Data Partitioning',
        'Performance Tuning: Managing Data Skew, Broadcast Joins, Shuffle Partitions & Caching',
        'Spark Structured Streaming: Real-Time Event Processing with Watermarking',
        'Live Project: Processing Terabyte-Scale Telemetry & Clickstream Data in PySpark'
      ]
    },
    {
      title: 'Module 4: Real-Time Event Streaming with Apache Kafka',
      topics: [
        'Kafka Ecosystem: Brokers, Producers, Consumers, Topics & Partitions',
        'Consumer Groups, Offset Management & Delivery Semantics (Exactly-Once)',
        'Kafka Connect: Source & Sink Connectors for Databases & Cloud Storage (S3/GCS)',
        'Schema Registry & Avro Serialization for Schema Evolution',
        'Integrating Apache Kafka with PySpark Structured Streaming',
        'Live Lab: Building a Real-Time Banking Transaction & Fraud Detection Engine'
      ]
    },
    {
      title: 'Module 5: Workflow Orchestration with Apache Airflow & Cloud Lakehouses',
      topics: [
        'Apache Airflow Architecture: Webserver, Scheduler, Celery / Kubernetes Executors & DAGs',
        'Building Complex Airflow DAGs: Dependencies, XComs, Custom Operators, Hooks & Sensors',
        'Lakehouse Architecture: Delta Lake & Apache Iceberg ACID Transactions & Time Travel',
        'Snowflake Cloud Warehouse: Virtual Warehouses, Snowpipe & Zero-Copy Cloning',
        'AWS Redshift, Google BigQuery & AWS Glue Catalog Integration',
        'Live Project: Orchestrating an End-to-End Cloud Lakehouse ETL Pipeline in Airflow'
      ]
    },
    {
      title: 'Module 6: CI/CD with dbt, Docker, Terraform & Capstone Projects',
      topics: [
        'Data Transformation & Testing with dbt (Data Build Tool) on Cloud Warehouses',
        'Containerization of Data Pipelines with Docker & Infrastructure as Code with Terraform',
        'CI/CD for Data Pipelines using GitHub Actions & automated data testing',
        'Data Engineering System Design, Mock Technical Interviews & Resume Polishing',
        '100% Placement Drives & Direct Referrals to 350+ Partner Companies',
        'Capstone Project: Complete Enterprise Real-Time Data Streaming & Analytics Lakehouse'
      ]
    }
  ];

  const capstoneProjects = [
    {
      title: 'Enterprise Real-Time Financial Market Streaming Pipeline',
      desc: 'Built an end-to-end real-time streaming pipeline using Apache Kafka, PySpark Structured Streaming, and Delta Lake to process high-throughput stock market trades with exactly-once semantics.',
      tags: ['Kafka', 'PySpark Streaming', 'Delta Lake', 'Airflow']
    },
    {
      title: 'Automated Cloud Lakehouse with Snowflake, dbt & AWS S3',
      desc: 'Architected an enterprise data warehouse utilizing AWS S3, Snowpipe for automated continuous ingestion, dbt for dimensional modeling, and automated data quality validation.',
      tags: ['Snowflake', 'dbt Cloud', 'AWS S3', 'Python']
    },
    {
      title: 'Orchestrated Multi-Source Healthcare Data Pipeline in Airflow',
      desc: 'Engineered an Apache Airflow pipeline orchestrating multi-tenant hospital records ingestion, PySpark data scrubbing, Delta Lake storage, and automated Slack alert monitoring.',
      tags: ['Apache Airflow', 'PySpark', 'Docker', 'PostgreSQL']
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
      q: `Why enroll at LearnMore Technologies for Data Engineering Training in ${locName}?`,
      a: `LearnMore Technologies is recognized as the #1 institute for Data Engineering Training in ${locName}. Our mentors are Principal Data Architects with 14+ years of real-world experience in Apache Spark, Kafka, Airflow, and Cloud Warehouses. We offer 100% hands-on cluster lab infrastructure, real-world streaming projects, and guaranteed 100% placement support.`
    },
    {
      q: `What is the average salary after completing Data Engineering Training in ${locName}?`,
      a: `Data Engineering is among the highest paid IT domains in Bangalore. Freshers typically secure starting packages of ₹5.5 LPA to ₹10.0 LPA, while experienced professionals transitioning to Data Engineers earn between ₹13 LPA to ₹30+ LPA in top MNCs and product enterprises.`
    },
    {
      q: `What prerequisites are needed for Data Engineering Training in ${locName}?`,
      a: `Basic familiarity with any programming language or SQL is helpful, but not mandatory. Our Data Engineering Training in ${locName} starts from fundamental SQL, Linux commands, and Python basics before moving into advanced PySpark, Kafka streaming, and Cloud Lakehouses.`
    },
    {
      q: `Does Data Engineering Training in ${locName} cover Cloud Platforms like Snowflake & AWS?`,
      a: `Yes! Our curriculum gives you hands-on experience with modern cloud data tools including Snowflake, AWS S3, AWS Glue, AWS Redshift, Google BigQuery, Delta Lake, and dbt.`
    },
    {
      q: `What batch formats are available for Data Engineering Training in ${locName}?`,
      a: `We provide weekday classroom sessions in our Bangalore center, interactive live online batches, and dedicated weekend batches for working IT professionals.`
    },
    {
      q: `Does Data Engineering Training in ${locName} offer 100% Placement Support?`,
      a: `Yes, our Data Engineering Training in ${locName} includes 100% placement assistance with GitHub portfolio reviews, system design mock interviews, resume mentoring, and direct recruitment interviews across 350+ partner companies.`
    }
  ];

  const testimonials = [
    {
      name: 'Abhishek Mishra',
      role: 'Senior Data Engineer at Accenture',
      package: '11.5 LPA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'The PySpark optimization and Apache Kafka live streaming labs at LearnMore Technologies were incredible! The mentors walked us through real enterprise scale problems that helped me ace my data architecture interviews.'
    },
    {
      name: 'Shruthi Rao',
      role: 'Data Engineer at Wipro',
      package: '8.8 LPA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'Coming from a traditional ETL/SQL background, I wanted to transition into Big Data & Cloud Lakehouses. LearnMore Technologies gave me the exact hands-on skills in Airflow, Delta Lake, and Snowflake needed for modern data roles.'
    },
    {
      name: 'Kiran Kumar',
      role: 'Lead Cloud Data Engineer at IBM',
      package: '14.0 LPA',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      text: 'Outstanding training! The live Capstone project on Real-Time Financial Streaming with Kafka and PySpark was so thorough that recruiters were genuinely impressed during my technical design rounds.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/courses/data-engineering-bg.webp"
            alt="Data Engineering Training Background"
            className="w-full h-full object-cover opacity-60 md:opacity-75 scale-100 transform transition duration-500"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-teal-950/80 to-slate-950/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400 transition">Home</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <Link href="/course" className="hover:text-teal-400 transition">Courses</Link>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-slate-200">Data Engineering Training in {locName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold mb-5">
                <i className="fas fa-database"></i> Ranked #1 Institute for Data Engineering Training in {locName}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-white">
                Data Engineering Training in <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">{locName}</span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-4 leading-relaxed">
                LearnMore Technologies offers the best <strong>Data Engineering Training in {locName}</strong> with 100% placement assistance. Master Advanced SQL, Python, Apache Spark (PySpark), Apache Kafka, Apache Airflow, Snowflake, Delta Lake, and AWS/GCP Cloud Pipelines with certified mentors in our <strong>Data Engineering Training in {locName}</strong> program.
              </p>

              {/* Urgency & Limited Seats Timer */}
              <BatchUrgencyBanner batchDate="Upcoming Monday" seatsRemaining={5} />

              {/* Badges / Rating & EMI */}
              <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-750 px-3.5 py-2 rounded-xl text-amber-400 font-bold shadow-sm">
                  <i className="fas fa-star text-amber-400"></i>
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal text-xs ml-1">(3,400+ Reviews for Data Engineering Training in {locName})</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-750 px-3.5 py-2 rounded-xl text-emerald-400 font-bold shadow-sm">
                  <i className="fas fa-user-check"></i>
                  <span>100% Placement Assistance</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/90 border border-teal-500/30 px-3.5 py-2 rounded-xl text-teal-300 font-bold shadow-sm">
                  <i className="fas fa-credit-card text-teal-400"></i>
                  <span>No-Cost EMI @ ₹3,999/mo</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8 text-slate-200 text-sm">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Comprehensive PySpark, Kafka, Airflow & Snowflake in <strong>Data Engineering Training in {locName}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Principal Data Architect Mentors with 14+ Years Experience for <strong>Data Engineering in {locName}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400 text-base"></i>
                  <span>Real-World Streaming & Lakehouse Capstones in <strong>Data Engineering Training in {locName}</strong></span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openEnrollModal(`Data Engineering Training in ${locName}`)}
                  className="bg-gradient-to-r from-teal-500 via-emerald-600 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-teal-500/25 transition transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 text-sm tracking-wide cursor-pointer"
                >
                  <i className="fas fa-paper-plane"></i> Enroll for Data Engineering in {locName}
                </button>
                <button
                  onClick={() => openEnrollModal(`Data Engineering Training Syllabus - ${locName}`)}
                  className="bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 font-bold px-8 py-4 rounded-xl transition text-center flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <i className="fas fa-file-download"></i> Download Data Engineering Syllabus
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative text-slate-800 border-2 border-teal-100 overflow-hidden">
                <div className="text-center pb-5 mb-5 border-b border-slate-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-[11px] font-extrabold uppercase tracking-wider mb-2 border border-teal-200/60 shadow-2xs">
                    🔥 Limited Seats • 100% Placement Support
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    Book Free Data Engineering Counselling
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Speak 1-on-1 with Principal Data Architects & claim 30% scholarship
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-teal-500 transition"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-teal-500 transition"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-teal-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Preferred Training Mode *</label>
                    <select
                      value={inlineForm.trainingMode}
                      onChange={(e) => setInlineForm({ ...inlineForm, trainingMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-teal-500 transition"
                    >
                      <option value="Yes, am Interested in Online Training">Instructor-Led Live Online Training</option>
                      <option value="Classroom Training - Bangalore Campus">Classroom Training (Bangalore Campus)</option>
                      <option value="Weekend Batch for Working Professionals">Weekend Batch (For Professionals)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isInlineSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 via-emerald-600 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition text-sm text-center cursor-pointer"
                  >
                    Book Free Data Engineering Session
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
              <p className="text-3xl md:text-4xl font-black text-teal-600 mb-1">15,500+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Data Engineers Trained</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-emerald-600 mb-1">9,800+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Placed Alumni</p>
            </div>
            <div className="p-4 border-r border-slate-100 last:border-0">
              <p className="text-3xl md:text-4xl font-black text-cyan-600 mb-1">350+</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Hiring Partners</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-black text-blue-600 mb-1">15+ Years</p>
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section for Data Engineering Training */}
      <section className="py-16 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 border-b pb-4">
              Best Data Engineering Training in {locName} – LearnMore Technologies
            </h2>
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Are you searching for the top-rated <strong>Data Engineering Training in {locName}</strong>? LearnMore Technologies provides the industry's most comprehensive <strong>Data Engineering Training in {locName}</strong> designed for software developers, SQL developers, database administrators, and aspiring Big Data professionals. Our <strong>Data Engineering Training in {locName}</strong> covers the full modern data stack including Apache Spark (PySpark), Apache Kafka, Apache Airflow, Snowflake, Delta Lake, dbt, and AWS/GCP cloud data infrastructure.
              </p>
              <p>
                Enrolling in our <strong>Data Engineering Training in {locName}</strong> delivers 100% practical hands-on cluster computing experience under the guidance of Principal Data Architects from leading IT enterprises. Our <strong>Data Engineering Training in {locName}</strong> program is specifically structured to prepare candidates for high-paying Big Data Engineer, Cloud Data Architect, and Analytics Engineer roles across Bangalore IT MNCs.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
                Why Join Our Data Engineering Training in {locName}?
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 font-semibold text-slate-800">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-teal-500"></i> 100% Practical Cluster & Pipeline Labs in <strong>Data Engineering Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-teal-500"></i> Principal Data Architect Mentors for <strong>Data Engineering in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-teal-500"></i> 100% Placement Support with <strong>Data Engineering Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-teal-500"></i> Live Streaming & Lakehouse Projects in <strong>Data Engineering in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-teal-500"></i> ISO 9001:2015 Certification in <strong>Data Engineering Training in {locName}</strong></li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-teal-500"></i> Flexible Batches for <strong>Data Engineering Training in {locName}</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Engineering Tools & Services Mastered Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 font-extrabold text-xs uppercase tracking-wider mb-3">
              HANDS-ON BIG DATA STACK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Data Engineering Tools & Platforms You Will Master
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Gain practical hands-on experience on industry-standard distributed computing, streaming, and lakehouse platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {dataEngTools.map((tool, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-teal-400 transition duration-300">
                <div className="w-14 h-14 mx-auto bg-teal-500/10 text-teal-600 rounded-2xl flex items-center justify-center text-2xl mb-4">
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
      <section className="py-20 bg-gradient-to-br from-teal-100/80 via-slate-100 to-emerald-100/80 border-t border-b border-teal-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-600 text-white font-extrabold text-xs uppercase tracking-wider mb-3.5 shadow-sm">
              COMPREHENSIVE DATA ENGINEERING CURRICULUM
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Master Big Data Pipelines with <span className="text-teal-600">Industry-Focused Modules</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {syllabusModules.map((module, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-teal-500 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-bold text-xs">
                      <i className="fas fa-clock text-[11px]"></i> {idx === 0 ? '3 Weeks Duration' : idx === 1 ? '3 Weeks Duration' : idx === 2 ? '4 Weeks Duration' : idx === 3 ? '4 Weeks Duration' : idx === 4 ? '4 Weeks Duration' : '3 Weeks Duration'}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-teal-600 transition leading-snug">
                    {module.title.replace(/^Module \d+: /, '')}
                  </h3>

                  <ul className="space-y-3 mb-6 border-t border-slate-100 pt-4">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-3 text-slate-700 text-sm">
                        <i className="fas fa-check-circle text-teal-500 text-base mt-0.5 flex-shrink-0"></i>
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
              Live Capstone Data Engineering Projects You Will Build
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Add real enterprise distributed data pipelines to your GitHub portfolio to impress top tech recruiters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capstoneProjects.map((project, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-xl font-black mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-teal-100 text-teal-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
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
      <section className="py-20 bg-gradient-to-r from-slate-950 via-teal-950 to-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-teal-500/20 text-teal-400 font-extrabold text-xs uppercase tracking-wider mb-4 border border-teal-500/40">
                GLOBALLY RECOGNIZED CERTIFICATE
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
                Earn ISO 9001:2015 Certified Data Engineer Professional Credential
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Upon successful completion of the training program and live capstone projects, graduates receive the prestigious LearnMore Technologies Certified Data Engineer Professional Credential.
              </p>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Lifetime valid credential recognized across 350+ global IT MNCs
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Official prep support for Databricks & Snowflake Certified Data Engineer
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-emerald-400"></i> Verifiable digital badge for LinkedIn & Resume integration
                </li>
              </ul>
              <button
                onClick={() => openEnrollModal('Data Engineering Certification Sample Request')}
                className="bg-teal-600 hover:bg-teal-700 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition text-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <i className="fas fa-award"></i> View Sample Certificate
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-900 border-2 border-teal-400/50 rounded-3xl p-8 text-center shadow-2xl max-w-md w-full relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-teal-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  ISO 9001:2015
                </div>
                <div className="w-20 h-20 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-teal-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-xl font-black text-white mb-2">LearnMore Technologies</h3>
                <p className="text-xs text-teal-300 font-extrabold uppercase tracking-widest mb-4">Certified Data Engineer Professional</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  This certifies that candidate has successfully mastered PySpark, Apache Kafka, Apache Airflow, Snowflake Lakehouses, and Cloud Data Pipelines.
                </p>
                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                  VERIFIED CERTIFICATE ID: LMT-DE-2026
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
            Our Data Engineering Alumni Work at Global Cloud & IT Giants
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
              Real Data Engineering Placement Success Stories
            </h2>
            <p className="text-slate-600 text-base">
              See how our students transformed their careers into high-paying Cloud Data Engineers through LearnMore Technologies.
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
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-teal-500 shadow-sm" />
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                    <span className="inline-block mt-1 bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
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
            <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full mb-4"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  openFaq === idx ? 'border-teal-500 bg-teal-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-teal-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-slate-900 text-base md:text-lg transition cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === idx ? 'up text-teal-600' : 'down text-slate-400'} text-sm flex-shrink-0`}></i>
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-teal-100">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-800 font-extrabold text-xs uppercase tracking-wider mb-3 border border-teal-200">
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
                  <th className="py-5 px-6 bg-teal-50 text-teal-900 font-extrabold border-t-2 border-l border-r border-teal-300 w-1/3 text-base">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-crown text-teal-600 text-lg"></i>
                      <span>LearnMore Technologies</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-slate-500 font-bold w-1/3">Other Local Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm bg-white">
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Trainer Expertise & Background</td>
                  <td className="py-5 px-6 bg-teal-50/50 border-l border-r border-teal-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Principal Data Architects with 14+ Yrs Enterprise Experience
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Junior trainers or freshers with theoretical knowledge only
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Practical & Lab Sessions</td>
                  <td className="py-5 px-6 bg-teal-50/50 border-l border-r border-teal-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Practical Spark & Kafka Cluster Live Hands-on Labs
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Heavy PowerPoint slides with minimal hands-on coding
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Placement Assistance & Calls</td>
                  <td className="py-5 px-6 bg-teal-50/50 border-l border-r border-teal-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 100% Placement Support & 350+ Active Partner Tie-ups
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Only basic resume forwarding without placement support
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Enterprise Live Capstone Projects</td>
                  <td className="py-5 px-6 bg-teal-50/50 border-l border-r border-teal-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> 3 Real-World Projects on Streaming, Snowflake & Airflow
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Basic sample CSV batch scripts without real-time streaming
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Batch Flexibility & Session Access</td>
                  <td className="py-5 px-6 bg-teal-50/50 border-l border-r border-teal-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> Classroom (Bangalore), Online, Weekend + Lifetime Recording Access
                  </td>
                  <td className="py-5 px-6 text-slate-500">
                    <i className="fas fa-times-circle mr-2 text-rose-500"></i> Rigid batch timings with limited/no class recordings
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-5 px-6 font-bold text-slate-900">Certification Accreditation</td>
                  <td className="py-5 px-6 bg-teal-50/50 border-l border-r border-teal-200 text-emerald-700 font-semibold">
                    <i className="fas fa-check-circle mr-2 text-emerald-600"></i> ISO 9001:2015 Certification + Official Exam Mentorship
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
      <UpcomingBatchSchedule courseName="Data Engineering Master Program" />

      {/* Recent Student Placements Section */}
      <RecentPlacementsSection courseName="Data Engineering Master Program" />

      {/* Sticky Mobile CTA Bar for Google Ads Conversions */}
      <StickyMobileCTA courseName="Data Engineering Master Program" />

      <Footer />
    </div>
  );
}
