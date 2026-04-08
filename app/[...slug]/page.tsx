'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnrollModal from '@/components/common/EnrollModal';
import coursesData from '@/data/courses.json';
import locationsData from '@/data/locations.json';

interface CatchAllPageProps {
  params: {
    slug: string[];
  };
}

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
  'data-engineering': '/pdfs/data-engineering-syllabus.pdf',
  'digital-marketing': '/pdfs/digital-marketing-syllabus.pdf',
  'cybersecurity': '/pdfs/cybersecurity-syllabus.pdf',
};

// કોર્સ મેપિંગ - બધા કોર્સ
const courseMapping = {
  // AWS & Cloud DevOps
  'aws': { 
    slug: 'cloud-devops', 
    name: 'AWS Training', 
    fullName: 'AWS & Cloud DevOps Training',
    icon: 'fab fa-aws', 
    color: 'blue',
    image: '/images/courses/aws-hero.jpg',
    bannerImage: '/images/courses/aws-banner.jpg',
    logo: '/images/courses/aws-logo.png',
    shortDesc: 'Master AWS cloud computing, Linux, Docker, Kubernetes, Jenkins, and DevOps practices.',
    features: ['AWS Cloud Services', 'Linux Administration', 'Docker Containers', 'Kubernetes', 'Jenkins CI/CD', 'Terraform IaC']
  },
  
  // Python Training
  'python': { 
    slug: 'python-fullstack', 
    name: 'Python Training', 
    fullName: 'Python Training Program',
    icon: 'fab fa-python', 
    color: 'yellow',
    image: '/images/courses/python-hero.jpg',
    bannerImage: '/images/courses/python-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master Python programming from basics to advanced with real-world projects and applications.',
    features: ['Python Basics', 'Object Oriented Programming', 'Data Structures', 'File Handling', 'Modules & Packages', 'Web Development']
  },
  
  // Python Full Stack Training
  'python-fullstack': { 
    slug: 'python-fullstack', 
    name: 'Python Full Stack Training', 
    fullName: 'Python Full Stack Development',
    icon: 'fab fa-python', 
    color: 'yellow',
    image: '/images/courses/fullstack-hero.jpg',
    bannerImage: '/images/courses/fullstack-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master Python, Django, React, and full-stack web development.',
    features: ['Python Programming', 'Django Framework', 'React.js', 'REST APIs', 'Database Design', 'Deployment']
  },
  
  // DevOps Training
  'devops': { 
    slug: 'cloud-devops', 
    name: 'DevOps Training', 
    fullName: 'DevOps Training Program',
    icon: 'fas fa-cogs', 
    color: 'blue',
    image: '/images/courses/aws-hero.jpg',
    bannerImage: '/images/courses/aws-banner.jpg',
    logo: '/images/courses/aws-logo.png',
    shortDesc: 'Master DevOps practices including CI/CD, Docker, Kubernetes, Jenkins, and automation tools.',
    features: ['CI/CD Pipelines', 'Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Prometheus & Grafana']
  },
  
  // Software Testing Training
  'software-testing': { 
    slug: 'software-testing', 
    name: 'Software Testing Training', 
    fullName: 'Software Testing Master Program',
    icon: 'fas fa-bug', 
    color: 'red',
    image: '/images/courses/testing-hero.jpg',
    bannerImage: '/images/courses/testing-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master manual and automation testing with Selenium, Java, Python, and API testing.',
    features: ['Manual Testing', 'Selenium WebDriver', 'TestNG Framework', 'API Testing', 'Database Testing', 'Agile Methodology']
  },
  
  // Java Training
  'java': { 
    slug: 'python-fullstack', 
    name: 'Java Training', 
    fullName: 'Java Programming Training',
    icon: 'fab fa-java', 
    color: 'orange',
    image: '/images/courses/fullstack-hero.jpg',
    bannerImage: '/images/courses/fullstack-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master Java programming, OOP concepts, and application development.',
    features: ['Core Java', 'OOP Concepts', 'Exception Handling', 'Collections Framework', 'Multithreading', 'JDBC']
  },
  
  // Java Full Stack Training
  'java-fullstack': { 
    slug: 'python-fullstack', 
    name: 'Java Full Stack Training', 
    fullName: 'Java Full Stack Development',
    icon: 'fab fa-java', 
    color: 'orange',
    image: '/images/courses/fullstack-hero.jpg',
    bannerImage: '/images/courses/fullstack-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master Java, Spring Boot, Hibernate, React, and full-stack development.',
    features: ['Core Java', 'Spring Boot', 'Hibernate', 'React.js', 'REST APIs', 'Database Management', 'Microservices']
  },
  
  // Data Analytics Training
  'data-analytics': { 
    slug: 'data-analytics', 
    name: 'Data Analytics Training', 
    fullName: 'Data Analytics Program',
    icon: 'fas fa-chart-line', 
    color: 'green',
    image: '/images/courses/analytics-hero.jpg',
    bannerImage: '/images/courses/analytics-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master Excel, SQL, Power BI, Tableau, and Python for data analysis.',
    features: ['Excel & Advanced Excel', 'SQL Queries', 'Power BI Dashboards', 'Tableau Visualizations', 'Python for Analytics', 'Statistical Analysis']
  },
  
  // Microsoft Azure Training
  'azure': { 
    slug: 'cloud-devops', 
    name: 'Microsoft Azure Training', 
    fullName: 'Microsoft Azure Training Program',
    icon: 'fab fa-microsoft', 
    color: 'blue',
    image: '/images/courses/aws-hero.jpg',
    bannerImage: '/images/courses/aws-banner.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master Microsoft Azure cloud services, virtual machines, networking, and DevOps.',
    features: ['Azure Virtual Machines', 'Azure Storage', 'Azure Networking', 'Azure DevOps', 'Azure Functions', 'Azure Kubernetes Service']
  },
  
  // Data Science Training
  'data-science': { 
    slug: 'data-science-ai', 
    name: 'Data Science Training', 
    fullName: 'Data Science with AI Program',
    icon: 'fas fa-brain', 
    color: 'purple',
    image: '/images/courses/datascience-hero.jpg',
    bannerImage: '/images/courses/datascience-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master machine learning, deep learning, NLP, and AI with Python.',
    features: ['Python for Data Science', 'Machine Learning Algorithms', 'Deep Learning', 'NLP', 'Computer Vision', 'Model Deployment']
  },
  
  // Data Engineering Training
  'data-engineering': { 
    slug: 'data-engineering', 
    name: 'Data Engineering Training', 
    fullName: 'Data Engineering Program',
    icon: 'fas fa-database', 
    color: 'teal',
    image: '/images/courses/datascience-hero.jpg',
    bannerImage: '/images/courses/datascience-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master SQL, Python, Spark, Kafka, and cloud data platforms.',
    features: ['Advanced SQL', 'Python for Data Engineering', 'Apache Spark', 'Apache Kafka', 'Data Warehousing', 'Cloud Data Platforms']
  },
  
  // Power BI Training
  'power-bi': { 
    slug: 'data-analytics', 
    name: 'Power BI Training', 
    fullName: 'Power BI Training Program',
    icon: 'fas fa-chart-bar', 
    color: 'green',
    image: '/images/courses/analytics-hero.jpg',
    bannerImage: '/images/courses/analytics-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master Power BI, DAX, data visualization, and business intelligence.',
    features: ['Power BI Desktop', 'DAX Formulas', 'Data Modeling', 'Dashboard Design', 'Power BI Service', 'Report Publishing']
  },
  
  // Digital Marketing Training
  'digital-marketing': { 
    slug: 'digital-marketing', 
    name: 'Digital Marketing Training', 
    fullName: 'Digital Marketing Program',
    icon: 'fas fa-bullhorn', 
    color: 'orange',
    image: '/images/courses/placeholder-hero.jpg',
    bannerImage: '/images/courses/placeholder-banner.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master SEO, Social Media Marketing, Google Ads, and digital marketing strategies.',
    features: ['Search Engine Optimization', 'Social Media Marketing', 'Google Ads', 'Email Marketing', 'Content Marketing', 'Analytics']
  },
  
  // Cybersecurity Training
  'cybersecurity': { 
    slug: 'cybersecurity', 
    name: 'Cybersecurity Training', 
    fullName: 'Cybersecurity Program',
    icon: 'fas fa-shield-alt', 
    color: 'red',
    image: '/images/courses/placeholder-hero.jpg',
    bannerImage: '/images/courses/placeholder-banner.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master network security, ethical hacking, cryptography, and security best practices.',
    features: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Security Auditing', 'Risk Management', 'Incident Response']
  },
  
  // React JS Training
  'react': { 
      
    name: 'React JS Training', 
    fullName: 'React JS Development',
    icon: 'fab fa-react', 
    color: 'blue',
    image: '/images/courses/fullstack-hero.jpg',
    bannerImage: '/images/courses/fullstack-hero.jpg',
    logo: '/images/courses/placeholder-logo.jpg',
    shortDesc: 'Master React.js, hooks, state management, and modern frontend development.',
    features: ['React Basics', 'Hooks', 'State Management', 'React Router', 'API Integration', 'Deployment']
  }
};

export default function CatchAllPage({ params }: CatchAllPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const fullSlug = params.slug.join('-');
  
  // કોર્સ શોધો
  let foundCourse = null;
  let courseKey = null;
  
  for (const key of Object.keys(courseMapping)) {
    if (fullSlug.startsWith(`${key}-training-in-`)) {
      courseKey = key;
      foundCourse = courseMapping[key];
      break;
    }
  }
  
  if (!foundCourse) {
    notFound();
  }
  
  // લોકેશન શોધો
  const locationPart = fullSlug.replace(`${courseKey}-training-in-`, '');
  const location = locationsData.locations.find(l => 
    l.slug === locationPart || 
    l.name.toLowerCase().replace(/\s+/g, '-') === locationPart
  );
  
  if (!location) {
    notFound();
  }
  
  // કોર્સ ડેટા લોડ કરો
  const course = coursesData.courses.find(c => c.slug === foundCourse.slug);
  
  // Get syllabus PDF path
  const syllabusPDFPath = syllabusPDFs[foundCourse.slug] || syllabusPDFs[courseKey] || '/pdfs/default-syllabus.pdf';
  
  // Handle syllabus download (only after enrollment)
  const handleDownloadSyllabus = () => {
    if (isEnrolled) {
      const link = document.createElement('a');
      link.href = syllabusPDFPath;
      link.download = `${foundCourse.name.toLowerCase().replace(/\s+/g, '-')}-syllabus.pdf`;
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
    // After enrollment, download syllabus automatically
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = syllabusPDFPath;
      link.download = `${foundCourse.name.toLowerCase().replace(/\s+/g, '-')}-syllabus.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };
  
  // કલર કોડ
  const colorClasses = {
    blue: { bg: "from-blue-600 to-blue-800", light: "bg-blue-50", hover: "blue-700", text: "text-blue-600", border: "border-blue-600" },
    yellow: { bg: "from-yellow-600 to-yellow-800", light: "bg-yellow-50", hover: "yellow-700", text: "text-yellow-600", border: "border-yellow-600" },
    purple: { bg: "from-purple-600 to-purple-800", light: "bg-purple-50", hover: "purple-700", text: "text-purple-600", border: "border-purple-600" },
    green: { bg: "from-green-600 to-green-800", light: "bg-green-50", hover: "green-700", text: "text-green-600", border: "border-green-600" },
    orange: { bg: "from-orange-600 to-orange-800", light: "bg-orange-50", hover: "orange-700", text: "text-orange-600", border: "border-orange-600" },
    red: { bg: "from-red-600 to-red-800", light: "bg-red-50", hover: "red-700", text: "text-red-600", border: "border-red-600" },
    teal: { bg: "from-teal-600 to-teal-800", light: "bg-teal-50", hover: "teal-700", text: "text-teal-600", border: "border-teal-600" }
  };
  
  const colors = colorClasses[foundCourse.color as keyof typeof colorClasses] || colorClasses.blue;
  
  // કોર્સ ફીચર્સ
  const features = course?.features || foundCourse.features || [
    "Expert-led training sessions",
    "Hands-on practical projects",
    "Industry-recognized certification",
    "Placement assistance",
    "Real-world case studies",
    "24/7 mentor support"
  ];
  
  const tools = course?.tools || ["Industry Tools", "Modern Technologies", "Best Practices"];
  const duration = course?.duration || "3-6 Months";
  const price = course?.price || 29999;
  const level = course?.level || "Beginner to Intermediate";
  const certification = course?.certification || `${foundCourse.name} Certification`;
  const fullDescription = course?.fullDescription || foundCourse.shortDesc || `Comprehensive ${foundCourse.name} program designed to make you industry-ready with hands-on experience and real-world projects.`;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
              <Link href="/" className="hover:text-red-500 transition">Home</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              <Link href="/course" className="hover:text-red-500 transition">Courses</Link>
              <i className="fas fa-chevron-right text-xs"></i>
              <span className="text-gray-800 font-medium">{foundCourse.name}</span>
              <i className="fas fa-chevron-right text-xs"></i>
              <span className="text-gray-800 font-medium">{location.name}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className={`bg-gradient-to-r ${colors.bg} text-white`}>
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 rounded-xl p-3 backdrop-blur">
                    <i className={`${foundCourse.icon} text-4xl`}></i>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold">{foundCourse.name}</h1>
                    <p className="text-white/80 mt-1">Training at {location.name}</p>
                  </div>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">{foundCourse.shortDesc}</p>
                
                {/* Stats */}
                <div className="flex gap-3 flex-wrap mb-6">
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5 text-sm">
                    <i className="fas fa-star text-yellow-400"></i>
                    <span>4.9 Rating</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5 text-sm">
                    <i className="fas fa-users"></i>
                    <span>5,000+ Students</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5 text-sm">
                    <i className="fas fa-briefcase"></i>
                    <span>95% Placement</span>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex gap-4 flex-wrap">
                  <button onClick={() => setIsModalOpen(true)} className={`bg-white ${colors.text} px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg text-sm md:text-base`}>
                    Enroll Now at {location.name}
                  </button>
                  <button 
                    onClick={handleDownloadSyllabus}
                    className="border-2 border-white text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition text-sm md:text-base"
                  >
                    <i className="fas fa-download mr-2"></i> Download Syllabus
                  </button>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                    <Image
                      src={foundCourse.image || '/images/courses/placeholder-course.jpg'}
                      alt={`${foundCourse.name} Training`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/courses/placeholder-course.jpg';
                      }}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <i className={`${foundCourse.icon} text-4xl mb-2`}></i>
                    <p className="text-lg font-bold">Certified Training Program</p>
                    <p className="text-white/70 text-sm">Industry Recognized Certification</p>
                    <div className="flex justify-center gap-6 mt-4">
                      <div className="text-center">
                        <p className="text-xl font-bold">₹{price.toLocaleString()}</p>
                        <p className="text-xs text-white/70">Course Fee</p>
                      </div>
                      <div className="w-px bg-white/30"></div>
                      <div className="text-center">
                        <p className="text-xl font-bold">{duration}</p>
                        <p className="text-xs text-white/70">Duration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Location Info Bar */}
        <div className="bg-white shadow-md sticky top-0 z-10">
          <div className="container mx-auto px-4 py-2.5">
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-red-500"></i>
                <span className="font-semibold">{location.name}:</span>
                <span className="text-gray-600 truncate max-w-[300px]">{location.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <a href={`tel:${location.phone}`} className="text-red-500 hover:text-red-600">
                  <i className="fas fa-phone"></i> {location.phone}
                </a>
                <Link href="/location" className="text-blue-500 hover:text-blue-600 text-sm">
                  View All Locations →
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-gray-200 mb-6 overflow-x-auto">
            {['overview', 'syllabus', 'projects', 'career', 'certificate'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 font-semibold text-sm md:text-base transition whitespace-nowrap ${
                  activeTab === tab
                    ? `border-b-2 ${colors.border} ${colors.text}`
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'overview' && '📖 Overview'}
                {tab === 'syllabus' && '📚 Syllabus'}
                {tab === 'projects' && '🚀 Projects'}
                {tab === 'career' && '💼 Career'}
                {tab === 'certificate' && '🎓 Certificate'}
              </button>
            ))}
          </div>
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-md p-5 mb-5">
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <i className={`${foundCourse.icon} ${colors.text}`}></i>
                    About the Course
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">{fullDescription}</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-5">
                  <h2 className="text-xl font-bold mb-3">What You'll Learn</h2>
                  <div className="grid md:grid-cols-2 gap-2">
                    {features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <i className="fas fa-check-circle text-green-500 mt-0.5 text-xs"></i>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
                  <div className="text-center mb-4">
                    <div className={`w-20 h-20 ${colors.light} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <i className={`${foundCourse.icon} text-3xl ${colors.text}`}></i>
                    </div>
                    <h3 className="text-lg font-bold">Course Highlights</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration</span>
                      <span className="font-semibold">{duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Level</span>
                      <span className="font-semibold">{level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Certification</span>
                      <span className="font-semibold text-right">{certification}</span>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-2">Tools Covered</p>
                      <div className="flex flex-wrap gap-2">
                        {tools.slice(0, 5).map((tool: string, idx: number) => (
                          <span key={idx} className="bg-gray-100 px-2 py-1 rounded-full text-xs">{tool}</span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-2xl font-bold text-center text-blue-600">₹{price.toLocaleString()}</p>
                      <button onClick={() => setIsModalOpen(true)} className="w-full mt-3 bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Syllabus Tab */}
          {activeTab === 'syllabus' && (
            <div className="bg-white rounded-xl shadow-md p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <i className={`fas fa-book-open ${colors.text}`}></i>
                  Course Syllabus
                </h2>
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
              <div className="space-y-3">
                {course?.syllabus ? (
                  Object.entries(course.syllabus).map(([module, topics]: [string, any], idx) => (
                    <details key={idx} className="border rounded-lg p-3">
                      <summary className="font-semibold cursor-pointer hover:text-blue-600 text-sm">
                        Module {idx + 1}: {module.charAt(0).toUpperCase() + module.slice(1)}
                      </summary>
                      <ul className="mt-2 ml-4 space-y-1">
                        {topics.map((topic: string, tidx: number) => (
                          <li key={tidx} className="text-gray-600 text-sm flex items-start gap-2">
                            <i className={`fas fa-circle ${colors.text} text-[6px] mt-1.5`}></i>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <i className="fas fa-file-alt text-4xl text-gray-300 mb-3"></i>
                    <p className="text-gray-500">Syllabus details coming soon...</p>
                    {isEnrolled && (
                      <button
                        onClick={handleDownloadSyllabus}
                        className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
                      >
                        Download Sample Syllabus
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Real-World Projects</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Project 1: Application Development", description: "Build a complete application using the technologies learned in this course." },
                  { name: "Project 2: Real-World Implementation", description: "Implement real-world scenarios and industry best practices." },
                  { name: "Project 3: Deployment & Showcase", description: "Deploy your project and showcase it in your portfolio." },
                  { name: "Project 4: Capstone Project", description: "Work on a comprehensive capstone project that demonstrates all skills learned." }
                ].map((project, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 ${colors.light} rounded-lg flex items-center justify-center`}>
                        <i className={`fas fa-code ${colors.text}`}></i>
                      </div>
                      <h3 className="font-bold">{project.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Career Tab */}
          {activeTab === 'career' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-5">
                <h2 className="text-xl font-bold mb-3">Career Opportunities</h2>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Software Developer", "Web Developer", "Application Developer",
                    "Full Stack Developer", "Backend Engineer", "Frontend Developer",
                    "Cloud Engineer", "DevOps Engineer"
                  ].map((career, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <i className={`fas fa-check-circle ${colors.text} text-xs`}></i>
                      <span>{career}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5">
                <h2 className="text-xl font-bold mb-3">Top Hiring Companies</h2>
                <div className="flex flex-wrap gap-2">
                  {["Amazon", "Google", "Microsoft", "TCS", "Infosys", "Accenture", "IBM", "Deloitte", "Wipro", "Capgemini"].map((company, idx) => (
                    <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{company}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Certificate Tab */}
          {activeTab === 'certificate' && (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <i className="fas fa-certificate text-yellow-500"></i>
                Course Completion Certificate
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="relative rounded-xl overflow-hidden border-4 border-yellow-500 mb-6 bg-white shadow-lg">
                  <Image
                    src="/images/courses/certificate-sample.png"
                    alt="Course Completion Certificate"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const textVersion = document.createElement('div');
                        textVersion.className = "bg-gradient-to-br from-yellow-50 to-amber-50 p-8 text-center";
                        textVersion.innerHTML = `
                          <i class="fas fa-certificate text-6xl text-yellow-500 mb-4"></i>
                          <h3 class="text-3xl font-bold text-gray-800 mb-2">CERTIFICATE OF COMPLETION</h3>
                          <div class="w-24 h-1 bg-yellow-500 mx-auto my-3"></div>
                          <p class="text-gray-600 text-lg mb-6">This certifies that</p>
                          <p class="text-4xl font-bold text-red-600 mb-4">[Student Name]</p>
                          <p class="text-gray-600 text-lg mb-3">has successfully completed the course</p>
                          <p class="text-2xl font-bold text-blue-600 mb-8 bg-blue-50 inline-block px-6 py-2 rounded-lg">
                            ${foundCourse.name}
                          </p>
                          <div class="flex justify-center gap-12 mb-6">
                            <div>
                              <p class="text-gray-500 text-sm">Awarded on</p>
                              <p class="font-semibold">[Date]</p>
                            </div>
                            <div>
                              <p class="text-gray-500 text-sm">Issued by</p>
                              <p class="font-semibold">Learnmore Technologies</p>
                            </div>
                          </div>
                          <div class="border-t-2 border-gray-300 pt-6 mt-4">
                            <div class="flex justify-between px-8">
                              <div class="text-center">
                                <div class="w-40 h-0.5 bg-gray-400 mb-2"></div>
                                <p class="text-sm text-gray-500">Authorized Signature</p>
                              </div>
                              <div class="text-center">
                                <div class="w-40 h-0.5 bg-gray-400 mb-2"></div>
                                <p class="text-sm text-gray-500">Program Director</p>
                              </div>
                            </div>
                          </div>
                          <p class="text-xs text-gray-400 mt-6">
                            Certificate ID: LMT-${foundCourse.slug?.toUpperCase() || courseKey?.toUpperCase()}-2026-XXXX
                          </p>
                        `;
                        parent.appendChild(textVersion);
                      }
                    }}
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  Upon successful completion, you'll receive an industry-recognized certificate that validates your skills in {foundCourse.name}.
                </p>
                <div className="flex gap-4 justify-center">
                  <button 
                    onClick={() => window.open('/images/courses/certificate-sample.png', '_blank')}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
                  >
                    View Certificate
                  </button>
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/images/courses/certificate-sample.png';
                      link.download = `${foundCourse.slug || courseKey}-certificate.png`;
                      link.click();
                    }}
                    className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
                  >
                    Download Certificate
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* CTA Section */}
        <section className={`bg-gradient-to-r ${colors.bg} text-white py-10 mt-4`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Start Your {foundCourse.name.split(' ')[0]} Career?</h2>
            <p className="text-base mb-5">Join our training at {location.name} and become a certified professional</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-800 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">
                Enroll Now
              </button>
              <button 
                onClick={handleDownloadSyllabus}
                className="border-2 border-white text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition text-sm"
              >
                <i className="fas fa-download mr-2"></i> Download Syllabus
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <EnrollModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        courseName={foundCourse.name}
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