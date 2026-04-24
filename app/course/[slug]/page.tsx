'use client';

import { notFound } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnrollModal from '@/components/common/EnrollModal';
import coursesData from '@/data/courses.json';
import placementsData from '@/data/placements.json';  // ← આ ઉમેરો

// Syllabus PDF mapping
const syllabusPDFs: Record<string, string> = {
  'python-fullstack': '/pdfs/python-fullstack-syllabus.pdf',
  'data-analytics': '/pdfs/data-analytics-syllabus.pdf',
  'cloud-devops': '/pdfs/cloud-devops-syllabus.pdf',
  'software-testing': '/pdfs/software-testing-syllabus.pdf',
  'data-engineering': '/pdfs/data-engineering-syllabus.pdf',
  'data-science-ai': '/pdfs/data-science-ai-syllabus.pdf',
  'aws': '/pdfs/aws-syllabus.pdf',
  'python': '/pdfs/python-syllabus.pdf',
  'devops': '/pdfs/devops-syllabus.pdf',
  'java': '/pdfs/java-syllabus.pdf',
  'java-fullstack': '/pdfs/java-fullstack-syllabus.pdf',
  'azure': '/pdfs/azure-syllabus.pdf',
  'power-bi': '/pdfs/power-bi-syllabus.pdf',
  'react': '/pdfs/react-syllabus.pdf',
  'data-science': '/pdfs/data-science-syllabus.pdf',
  'digital-marketing': '/pdfs/digital-marketing-syllabus.pdf',
  'cybersecurity': '/pdfs/cybersecurity-syllabus.pdf',
};

export default function CoursePage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const course = coursesData.courses.find(c => c.slug === params.slug);
  
  if (!course) {
    notFound();
  }

  // Get syllabus PDF path
  const syllabusPDFPath = syllabusPDFs[course.slug] || '/pdfs/default-syllabus.pdf';

  // Handle syllabus download
  const handleDownloadSyllabus = () => {
    if (isEnrolled) {
      const link = document.createElement('a');
      link.href = syllabusPDFPath;
      link.download = `${course.slug}-syllabus.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setShowSyllabusModal(true);
    }
  };

  // Handle successful enrollment
  const handleEnrollmentSuccess = () => {
    setIsEnrolled(true);
    setIsModalOpen(false);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = syllabusPDFPath;
      link.download = `${course.slug}-syllabus.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  // Hero tags from tools or create default
  const heroTags = course.tools?.slice(0, 5) || [
    "Industry Expert Trainers",
    "Hands-on Projects",
    "Placement Assistance",
    "Certificate",
    "Live Projects"
  ];

  // Career paths based on course title
  const getCareerPaths = () => {
    if (course.title.includes('Python')) {
      return [
        "Python Developer",
        "Full Stack Developer",
        "Django Developer",
        "Software Engineer",
        "Backend Developer",
        "Web Developer"
      ];
    } else if (course.title.includes('Data Analytics')) {
      return [
        "Data Analyst",
        "Business Analyst",
        "Power BI Developer",
        "Data Visualization Expert",
        "SQL Developer",
        "BI Analyst"
      ];
    } else if (course.title.includes('Cloud') || course.title.includes('DevOps')) {
      return [
        "Cloud Engineer",
        "DevOps Engineer",
        "AWS Solutions Architect",
        "Site Reliability Engineer",
        "Platform Engineer",
        "Cloud Consultant"
      ];
    } else if (course.title.includes('Testing')) {
      return [
        "QA Engineer",
        "Automation Tester",
        "Test Analyst",
        "SDET",
        "Manual Tester",
        "Test Lead"
      ];
    } else if (course.title.includes('Data Science')) {
      return [
        "Data Scientist",
        "Machine Learning Engineer",
        "AI Engineer",
        "Data Analyst",
        "NLP Engineer",
        "AI Consultant"
      ];
    } else if (course.title.includes('Data Engineering')) {
      return [
        "Data Engineer",
        "Big Data Engineer",
        "ETL Developer",
        "Data Architect",
        "Cloud Data Engineer",
        "Data Pipeline Engineer"
      ];
    } else {
      return [
        "Software Developer",
        "Full Stack Developer",
        "Web Developer",
        "Application Developer",
        "Technical Lead",
        "Solutions Architect"
      ];
    }
  };

  const careerPaths = getCareerPaths();

  // Job Opportunities Data
  const jobOpportunities = [
    { title: "Software Developer", icon: "fas fa-code", salary: "₹4-12 LPA", openings: "5,000+", companies: "Google, Amazon, Microsoft, TCS" },
    { title: "Cloud Engineer", icon: "fab fa-aws", salary: "₹5-15 LPA", openings: "3,000+", companies: "AWS, Azure, Google Cloud, IBM" },
    { title: "Data Scientist", icon: "fas fa-brain", salary: "₹6-18 LPA", openings: "2,000+", companies: "Amazon, Flipkart, Uber, Microsoft" },
    { title: "DevOps Engineer", icon: "fas fa-cogs", salary: "₹5-16 LPA", openings: "3,500+", companies: "Amazon, Google, Microsoft, IBM" },
    { title: "Data Analyst", icon: "fas fa-chart-line", salary: "₹3-10 LPA", openings: "6,000+", companies: "Accenture, Deloitte, TCS, Infosys" },
    { title: "Full Stack Developer", icon: "fas fa-code", salary: "₹4-14 LPA", openings: "4,000+", companies: "Infosys, TCS, Wipro, Accenture" },
  ];

  // Blog Data
  const blogs = [
    { title: "15 Features Of Python That Make Everyone Love It", category: "Python", date: "Apr 15, 2026", readTime: "5 min", icon: "fab fa-python" },
    { title: "Cloud Computing Trends in 2026", category: "Cloud", date: "Apr 12, 2026", readTime: "7 min", icon: "fas fa-cloud" },
    { title: "Data Science Career Guide", category: "Data Science", date: "Apr 10, 2026", readTime: "10 min", icon: "fas fa-chart-line" },
    { title: "DevOps Best Practices", category: "DevOps", date: "Apr 8, 2026", readTime: "8 min", icon: "fas fa-cogs" },
    { title: "AWS vs Azure vs GCP", category: "Cloud", date: "Apr 3, 2026", readTime: "12 min", icon: "fas fa-cloud-upload-alt" },
    { title: "Full Stack Development Roadmap", category: "Web", date: "Mar 20, 2026", readTime: "10 min", icon: "fas fa-code" },
  ];

  // FAQ Data
  const faqs = [
    { q: "Why should I learn this course from Learnmore Technologies?", a: "We offer industry-expert trainers, hands-on projects, placement assistance, and flexible batch timings. Our curriculum is designed by professionals currently working in top MNCs." },
    { q: "Does Learnmore Technologies offer placement assistance after course completion?", a: "Yes, we provide 100% placement assistance including resume building, mock interviews, and direct referrals to our 50+ hiring partner companies." },
    { q: "What if I miss a session?", a: "We provide recorded sessions for all classes. You can access them anytime through our learning portal and catch up on missed content." },
    { q: "What certification will I receive after course completion?", a: "You'll receive an industry-recognized certificate from Learnmore Technologies, valid for job applications worldwide." },
    { q: "Are there EMI options available for course fees?", a: "Yes, we offer flexible EMI options with 0% interest for eligible students. Contact our admission counselors for more details." },
  ];

  // Upcoming Batches
  const batches = [
    { date: "27th April 2026", type: "Weekdays (Mon-Fri)", time: "08:00 AM IST", status: "Enrolling", statusColor: "green" },
    { date: "23rd April 2026", type: "Weekdays (Mon-Fri)", time: "08:00 AM IST", status: "Limited Seats", statusColor: "yellow" },
    { date: "25th April 2026", type: "Weekend (Sat-Sun)", time: "11:00 AM IST", status: "Available", statusColor: "green" },
    { date: "2nd May 2026", type: "Weekdays (Mon-Fri)", time: "06:00 PM IST", status: "Coming Soon", statusColor: "blue" },
  ];

  // Get background image based on course
  const getBackgroundImage = () => {
    if (course.slug.includes('python')) return '/images/courses/python-bg.jpg';
    if (course.slug.includes('cloud') || course.slug.includes('devops')) return '/images/courses/aws-bg.jpg';
    if (course.slug.includes('analytics')) return '/images/courses/analytics-bg.jpg';
    if (course.slug.includes('testing')) return '/images/courses/testing-bg.jpg';
    if (course.slug.includes('engineering')) return '/images/courses/data-engineering-bg.jpg';
    if (course.slug.includes('science')) return '/images/courses/datascience-bg.jpg';
    return '/images/courses/default-bg.jpg';
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative py-20 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={getBackgroundImage()}
              alt={`${course.title} Background`}
              fill
              className="object-cover"
              priority
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
                }
              }}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 mb-6">
                <i className="fas fa-certificate"></i>
                <span className="text-sm">Certified Course</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-200 mb-6">{course.shortDescription}</p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {heroTags.map((tag: string, idx: number) => (
                  <span key={idx} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                  Enroll Now <i className="fas fa-arrow-right ml-2"></i>
                </button>
                <button 
                  onClick={handleDownloadSyllabus}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition"
                >
                  <i className="fas fa-download mr-2"></i> Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Course Stats */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">{course.duration}</div>
                <div className="text-gray-500 text-sm">Course Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">₹{course.price.toLocaleString()}</div>
                <div className="text-gray-500 text-sm">Course Fee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">{course.level}</div>
                <div className="text-gray-500 text-sm">Skill Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">100%</div>
                <div className="text-gray-500 text-sm">Placement Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Course */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-center">About This Course</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{course.fullDescription}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-graduation-cap text-red-500"></i> What You'll Learn
                </h3>
                <ul className="space-y-2">
                  {course.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-green-500 mt-1 text-sm"></i>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-tools text-red-500"></i> Tools You'll Master
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.tools.map((tool: string, idx: number) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <i className="fas fa-certificate text-yellow-500"></i> Certification
                  </h4>
                  <p className="text-gray-600 text-sm">{course.certification}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Classes with Unique Syllabus Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Classes with <span className="text-red-500">Unique Syllabus</span></h2>
              <p className="text-gray-600">Our curriculum is crafted by industry experts with real-world insights</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-star text-blue-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg">Industry-Aligned Curriculum</h3>
                </div>
                <p className="text-gray-600 text-sm">Syllabus designed by professionals with 10+ years experience in leading IT companies.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-laptop-code text-green-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg">Practical Hands-on Training</h3>
                </div>
                <p className="text-gray-600 text-sm">80% practical training with real-world projects and live coding sessions.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-file-alt text-purple-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg">Free Course Materials</h3>
                </div>
                <p className="text-gray-600 text-sm">All materials, assignments, and project guides provided at no additional cost.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-certificate text-red-600 text-xl"></i>
                  </div>
                  <h3 className="font-bold text-lg">Certification Guidance</h3>
                </div>
                <p className="text-gray-600 text-sm">Complete guidance for industry certifications like AWS, Python, Java, and more.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus Preview */}
        {(course as any).syllabus && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
                <h2 className="text-3xl font-bold text-center flex-1">Course Syllabus</h2>
                <button
                  onClick={handleDownloadSyllabus}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${
                    isEnrolled 
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!isEnrolled}
                >
                  <i className="fas fa-download"></i> Download PDF
                  {!isEnrolled && <span className="text-xs ml-1">(Enroll first)</span>}
                </button>
              </div>
              <div className="space-y-4">
                {Object.entries((course as any).syllabus).map(([module, topics]: [string, any], idx) => (
                  <details key={idx} className="border rounded-lg p-4 bg-white hover:shadow-md transition">
                    <summary className="font-semibold text-lg cursor-pointer hover:text-red-500">
                      Module {idx + 1}: {module.charAt(0).toUpperCase() + module.slice(1)}
                    </summary>
                    <ul className="mt-3 ml-6 space-y-1">
                      {topics.map((topic: string, tidx: number) => (
                        <li key={tidx} className="text-gray-600 text-sm flex items-start gap-2">
                          <i className="fas fa-circle text-red-400 text-[6px] mt-1.5"></i>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Job Opportunities Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Job Opportunities in <span className="text-red-500">Technology</span></h2>
              <p className="text-gray-600">High-demand roles with competitive salaries</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {jobOpportunities.map((job, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-5 shadow-md hover:shadow-lg transition">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <i className={`${job.icon} text-red-500 text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold">{job.title}</h3>
                      <p className="text-gray-500 text-xs">{job.salary}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs mb-2">{job.openings} openings</p>
                  <p className="text-gray-400 text-xs">Top companies: {job.companies}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Batch Schedule Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Upcoming <span className="text-red-500">Batch Schedule</span></h2>
              <p className="text-gray-600">Choose a batch that fits your schedule</p>
            </div>
            <div className="overflow-x-auto max-w-4xl mx-auto">
              <table className="w-full bg-white rounded-xl shadow-md">
                <thead className="bg-red-600 text-white">
                  <tr>
                    <th className="p-3 text-left rounded-tl-xl">Start Date</th>
                    <th className="p-3 text-left">Batch Type</th>
                    <th className="p-3 text-left">Time</th>
                    <th className="p-3 text-left rounded-tr-xl">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {batches.map((batch, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-3 font-semibold">{batch.date}</td>
                      <td className="p-3">{batch.type}</td>
                      <td className="p-3">{batch.time}</td>
                      <td className="p-3">
                        <span className={`bg-${batch.statusColor === 'green' ? 'green' : batch.statusColor === 'yellow' ? 'yellow' : 'blue'}-100 text-${batch.statusColor === 'green' ? 'green' : batch.statusColor === 'yellow' ? 'yellow' : 'blue'}-700 px-3 py-1 rounded-full text-xs`}>
                          {batch.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-500 text-sm">Can't find a batch that works for you?</p>
              <button onClick={() => setIsModalOpen(true)} className="mt-2 text-red-600 font-semibold hover:underline">
                Request a Custom Batch →
              </button>
            </div>
          </div>
        </section>

        {/* Trainer Profile Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Meet Our <span className="text-red-500">Expert Trainers</span></h2>
              <p className="text-gray-600">Learn from industry professionals with real-world experience</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-user-tie text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Senior Industry Experts</h3>
                    <p className="text-gray-500 text-sm">20+ Years Combined Experience</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">Our trainers are industry professionals with 10+ years of experience in leading MNCs.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="fas fa-check-circle text-green-500 text-xs"></i> Previously worked at Google, Amazon, Microsoft
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="fas fa-check-circle text-green-500 text-xs"></i> Certified Professionals with Global Recognition
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <i className="fas fa-chalkboard-user text-blue-500 text-3xl"></i>
                  <h3 className="font-bold text-lg">Why Our Trainers Stand Out?</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">Our trainers are proactive professionals dedicated to addressing individual student challenges.</p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-600">95%</p>
                    <p className="text-xs text-gray-500">Student Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-600">5000+</p>
                    <p className="text-xs text-gray-500">Students Trained</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-600">100+</p>
                    <p className="text-xs text-gray-500">Live Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Career Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {careerPaths.map((path: string, idx: number) => (
                <div key={idx} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition">
                  <i className="fas fa-briefcase text-red-500 text-2xl mb-2"></i>
                  <p className="font-medium text-gray-700">{path}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold mb-4">Top Hiring Companies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Amazon", "Google", "Microsoft", "TCS", "Infosys", "Accenture", "IBM", "Deloitte"].map((company, idx) => (
                  <span key={idx} className="bg-white px-4 py-2 rounded-full text-sm shadow-sm">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Placement Assistance Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Placement Assistance</h2>
              <p className="text-gray-600">We help you land your dream job</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-alt text-green-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Resume Building</h3>
                <p className="text-gray-500 text-sm">Professional resume tailored for target roles</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-microphone text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Mock Interviews</h3>
                <p className="text-gray-500 text-sm">Technical & HR interview preparation</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-building text-purple-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Placement Drives</h3>
                <p className="text-gray-500 text-sm">Regular campus placement drives</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Placements Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Recent Placements</h2>
              <p className="text-gray-600">Our students placed in top companies</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placementsData.placements.slice(0, 6).map((student: any) => (
                <div key={student.id} className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-user-graduate text-blue-600 text-xl"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{student.name}</h3>
                    <p className="text-red-500 text-sm">{student.role}</p>
                    <p className="text-gray-500 text-sm">{student.company} • {student.package}</p>
                    <p className="text-gray-400 text-xs mt-1">{student.course}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link 
                href="/placement" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                View All Placements
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Features of Online Training */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Live Instructor-Led <span className="text-red-500">Online Training</span></h2>
                  <p className="text-gray-700 mb-4">Can't make it to our centers? Join our live online classes from anywhere in the world.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-500"></i> Live Instructor-Led Sessions</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-500"></i> Recorded Sessions for Revision</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-500"></i> 100% Placement Support Included</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-500"></i> Students from 10+ Countries</li>
                  </ul>
                  <button onClick={() => setIsModalOpen(true)} className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                    Enroll for Online Training
                  </button>
                </div>
                <div className="text-center">
                  <i className="fas fa-globe text-8xl text-blue-500 mb-4"></i>
                  <p className="text-lg font-semibold">India • USA • UK • Australia • Canada • Singapore</p>
                  <p className="text-gray-500 text-sm mt-2">Students from 10+ countries trust us</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Online Courses & Training */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Benefits of <span className="text-red-500">Online Courses & Training</span></h2>
              <p className="text-gray-600">Why choose our online training programs</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chalkboard-user text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Live Instructor-Led</h3>
                <p className="text-gray-500 text-sm">Real-time interactive sessions</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-video text-green-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Recorded Sessions</h3>
                <p className="text-gray-500 text-sm">Access anytime for revision</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-briefcase text-purple-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Placement Support</h3>
                <p className="text-gray-500 text-sm">100% placement assistance</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-orange-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Certification</h3>
                <p className="text-gray-500 text-sm">Industry-recognized certificate</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Frequently Asked <span className="text-red-500">Questions</span></h2>
              <p className="text-gray-600">Find answers to common questions about this course</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition">
                  <summary className="font-semibold cursor-pointer hover:text-red-500 flex items-center justify-between">
                    <span>{faq.q}</span>
                    <i className="fas fa-chevron-down text-gray-400 text-sm"></i>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm pl-4 border-l-2 border-red-500">{faq.a}</p>
                </details>
              ))}
            </div>
            <div className="text-center mt-8">
              <button onClick={() => setIsModalOpen(true)} className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                Still Have Questions? Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Related Blogs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Related <span className="text-red-500">Blogs</span></h2>
              <p className="text-gray-600">Stay updated with our latest articles and insights</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group">
                  <div className="h-40 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                    <i className={`${blog.icon} text-6xl text-white/30`}></i>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">{blog.category}</span>
                      <span className="text-gray-400 text-xs">{blog.readTime}</span>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-red-500 transition line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-500 text-xs">{blog.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline">
                View All Blogs <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8">Join thousands of successful students who have transformed their careers</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Enroll Now
              </button>
              <button 
                onClick={handleDownloadSyllabus}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition"
              >
                <i className="fas fa-download mr-2"></i> Download Syllabus
              </button>
            </div>
            <p className="text-sm text-red-100 mt-4">Limited seats available. Enroll today!</p>
          </div>
        </section>
      </main>
      <Footer />
      <EnrollModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        courseName={course.title}
        onSuccess={handleEnrollmentSuccess}
      />
      
      {/* Syllabus Download Modal - Message for non-enrolled users */}
      {showSyllabusModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] p-4" onClick={() => setShowSyllabusModal(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-download text-yellow-500 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Download Syllabus</h3>
            <p className="text-gray-600 mb-4">
              Please complete the enrollment form to download the syllabus.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  setShowSyllabusModal(false);
                  setIsModalOpen(true);
                }}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Enroll Now
              </button>
              <button 
                onClick={() => setShowSyllabusModal(false)}
                className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}