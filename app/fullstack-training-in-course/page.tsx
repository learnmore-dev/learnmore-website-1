'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useEnroll } from '@/context/EnrollContext';
import locationsData from '@/data/locations.json';

// Full Stack Courses Data - Complete 8 Courses
const fullStackCourses = [
  {
    id: 1,
    slug: 'python-fullstack',
    name: 'Python Full Stack Development',
    shortName: 'Python Stack',
    displayName: 'Python',
    icon: 'fab fa-python',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    description: 'Master Python, Django, React, and full-stack web development. Build scalable web applications with modern frameworks.',
    fullDescription: 'Become a professional Python Full Stack Developer with our comprehensive training program. Learn frontend technologies (HTML, CSS, JavaScript, React) and backend development with Python and Django. Master database management, REST APIs, and deployment.',
    duration: '6 Months',
    price: 49999,
    originalPrice: 69999,
    level: 'Beginner to Advanced',
    certification: 'Python Full Stack Developer Professional',
    features: [
      'Python Programming Fundamentals',
      'Django Framework Mastery',
      'React.js Frontend Development',
      'REST API Development',
      'Database Management (SQL, PostgreSQL)',
      'Deployment on Cloud (AWS/Heroku)',
      'Git & Version Control',
      'Real-time Projects',
      '100% Placement Assistance'
    ],
    tools: ['Python', 'Django', 'React', 'JavaScript', 'HTML/CSS', 'PostgreSQL', 'Git', 'AWS'],
    syllabus: {
      'Frontend Development': [
        'HTML5 & CSS3 - Complete Guide',
        'JavaScript (ES6+) - Advanced Concepts',
        'React.js - Components, Hooks, State Management',
        'Tailwind CSS & Bootstrap',
        'Responsive Web Design',
        'API Integration with React'
      ],
      'Backend Development': [
        'Python Programming - Core to Advanced',
        'Django Framework - Models, Views, Templates',
        'Django REST Framework - API Development',
        'Authentication & Authorization',
        'Web Security Best Practices',
        'Testing & Debugging'
      ],
      'Database & Tools': [
        'SQL & PostgreSQL - Database Design',
        'MongoDB - NoSQL Database',
        'Git & GitHub - Version Control',
        'Docker - Containerization',
        'Deployment on AWS/Heroku',
        'CI/CD Pipeline Basics'
      ],
      'Projects': [
        'E-Commerce Website',
        'Blog Platform with Admin Panel',
        'Task Management App',
        'Social Media Dashboard',
        'Portfolio Website with CMS',
        'Capstone Project - Full Stack Application'
      ]
    },
    careerPaths: [
      'Python Full Stack Developer',
      'Backend Developer',
      'Frontend Developer (React)',
      'Django Developer',
      'Software Engineer',
      'Web Application Developer'
    ]
  },
  {
    id: 2,
    slug: 'java-fullstack',
    name: 'Java Full Stack Development',
    shortName: 'Java Stack',
    displayName: 'Java',
    icon: 'fab fa-java',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    description: 'Master Java, Spring Boot, Hibernate, React, and full-stack development. Build enterprise-level applications.',
    fullDescription: 'Become a professional Java Full Stack Developer with our comprehensive training program. Learn Core Java, Spring Framework, Spring Boot, Hibernate, and frontend with React. Master database management, REST APIs, and microservices architecture.',
    duration: '6 Months',
    price: 54999,
    originalPrice: 74999,
    level: 'Intermediate to Advanced',
    certification: 'Java Full Stack Developer Professional',
    features: [
      'Core Java & Advanced Java',
      'Spring Framework & Spring Boot',
      'Hibernate & JPA',
      'React.js Frontend Development',
      'REST API Development',
      'Microservices Architecture',
      'Database Management (MySQL, PostgreSQL)',
      'Git & Maven',
      'Real-time Projects',
      '100% Placement Assistance'
    ],
    tools: ['Java', 'Spring Boot', 'Hibernate', 'React', 'MySQL', 'Maven', 'Git', 'Docker'],
    syllabus: {
      'Core Java': [
        'Java Fundamentals - OOP, Data Types',
        'Exception Handling & Multithreading',
        'Collections Framework',
        'JDBC - Database Connectivity',
        'Lambda Expressions & Streams',
        'Design Patterns'
      ],
      'Spring Framework': [
        'Spring Core & Dependency Injection',
        'Spring MVC - Web Applications',
        'Spring Boot - Auto Configuration',
        'Spring Data JPA',
        'Spring Security - Authentication',
        'Spring REST APIs'
      ],
      'Frontend Development': [
        'HTML5, CSS3, JavaScript',
        'React.js - Components & Hooks',
        'State Management - Redux',
        'React Router',
        'API Integration',
        'Deployment'
      ],
      'Database & Tools': [
        'MySQL & PostgreSQL',
        'Hibernate ORM',
        'Maven - Build Tool',
        'Git & GitHub',
        'Docker Basics',
        'AWS Deployment'
      ]
    },
    careerPaths: [
      'Java Full Stack Developer',
      'Spring Boot Developer',
      'Backend Developer',
      'Java Developer',
      'Software Engineer',
      'Enterprise Application Developer'
    ]
  },
  {
    id: 3,
    slug: 'mern-stack',
    name: 'MERN Stack Development',
    shortName: 'MERN Stack',
    displayName: 'MERN',
    icon: 'fab fa-react',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    description: 'Master MongoDB, Express.js, React, Node.js. Build modern full-stack JavaScript applications.',
    fullDescription: 'Become a professional MERN Stack Developer with our comprehensive training program. Learn MongoDB, Express.js, React, and Node.js to build modern, scalable web applications. Master full-stack JavaScript development.',
    duration: '5 Months',
    price: 44999,
    originalPrice: 64999,
    level: 'Intermediate',
    certification: 'MERN Stack Developer Professional',
    features: [
      'JavaScript (ES6+) - Advanced',
      'React.js - Complete Guide',
      'Node.js - Backend Development',
      'Express.js Framework',
      'MongoDB Database',
      'REST API Development',
      'Authentication & Authorization',
      'Real-time Applications (Socket.io)',
      'Real-time Projects',
      '100% Placement Assistance'
    ],
    tools: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Git', 'AWS'],
    syllabus: {
      'Frontend Development': [
        'JavaScript ES6+ - Advanced Concepts',
        'React.js - Components, Hooks, Context',
        'State Management - Redux Toolkit',
        'React Router v6',
        'API Integration - Axios',
        'Tailwind CSS & Styling'
      ],
      'Backend Development': [
        'Node.js - Core Modules',
        'Express.js Framework',
        'REST API Development',
        'Authentication - JWT',
        'Error Handling & Security',
        'WebSockets - Socket.io'
      ],
      'Database': [
        'MongoDB - NoSQL Database',
        'Mongoose ODM',
        'Database Design & Modeling',
        'Aggregation Pipeline',
        'Indexing & Optimization',
        'Data Validation'
      ],
      'Projects': [
        'E-Commerce Platform',
        'Social Media App',
        'Chat Application',
        'Task Management System',
        'Blog Platform',
        'Capstone Project'
      ]
    },
    careerPaths: [
      'MERN Stack Developer',
      'Full Stack JavaScript Developer',
      'React Developer',
      'Node.js Developer',
      'MEAN Stack Developer',
      'Software Engineer'
    ]
  },
  {
    id: 4,
    slug: 'mean-stack',
    name: 'MEAN Stack Development',
    shortName: 'MEAN Stack',
    displayName: 'MEAN',
    icon: 'fab fa-angular',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    description: 'Master MongoDB, Express.js, Angular, Node.js. Build enterprise-level Angular applications.',
    fullDescription: 'Become a professional MEAN Stack Developer with our comprehensive training program. Learn MongoDB, Express.js, Angular, and Node.js to build enterprise-level web applications with Google\'s Angular framework.',
    duration: '5 Months',
    price: 44999,
    originalPrice: 64999,
    level: 'Intermediate',
    certification: 'MEAN Stack Developer Professional',
    features: [
      'TypeScript - Complete Guide',
      'Angular - Components, Services, Modules',
      'Node.js & Express.js',
      'MongoDB Database',
      'REST API Development',
      'RxJS & Observables',
      'Angular Material UI',
      'Real-time Projects',
      '100% Placement Assistance'
    ],
    tools: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'RxJS', 'Git'],
    syllabus: {
      'Frontend Development': [
        'TypeScript Fundamentals',
        'Angular - Architecture & Setup',
        'Components & Data Binding',
        'Directives & Pipes',
        'Services & Dependency Injection',
        'Routing & Navigation',
        'Forms - Template & Reactive',
        'HTTP Client & API Integration'
      ],
      'Backend Development': [
        'Node.js Fundamentals',
        'Express.js Framework',
        'REST API Development',
        'Authentication - JWT',
        'Error Handling',
        'Security Best Practices'
      ],
      'Database': [
        'MongoDB - NoSQL Database',
        'Mongoose ODM',
        'Database Design',
        'Aggregation Framework',
        'Data Modeling'
      ],
      'Projects': [
        'E-Commerce Application',
        'Blog Management System',
        'Task Manager',
        'CRM Application',
        'Dashboard with Analytics',
        'Capstone Project'
      ]
    },
    careerPaths: [
      'MEAN Stack Developer',
      'Angular Developer',
      'Full Stack JavaScript Developer',
      'Frontend Developer (Angular)',
      'Node.js Developer',
      'Software Engineer'
    ]
  },
  {
    id: 5,
    slug: 'nextjs-fullstack',
    name: 'Next.js Full Stack Development',
    shortName: 'Next.js Stack',
    displayName: 'Next.js',
    icon: 'fas fa-bolt',
    color: 'from-gray-800 to-black',
    bgColor: 'bg-gray-50',
    textColor: 'text-gray-800',
    description: 'Master Next.js, React, Node.js, and modern full-stack development with SSR & SEO optimization.',
    fullDescription: 'Become a professional Next.js Full Stack Developer with our comprehensive training program. Learn Next.js, React, Node.js, and modern full-stack development. Master Server Side Rendering (SSR), Static Site Generation (SSG), and API routes.',
    duration: '4-5 Months',
    price: 49999,
    originalPrice: 69999,
    level: 'Intermediate',
    certification: 'Next.js Full Stack Developer Professional',
    features: [
      'Next.js - App Router & Pages Router',
      'React.js - Components & Hooks',
      'Server Side Rendering (SSR)',
      'Static Site Generation (SSG)',
      'API Routes & Backend',
      'Authentication with NextAuth',
      'Database Integration',
      'SEO Optimization',
      'Real-time Projects',
      '100% Placement Assistance'
    ],
    tools: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Vercel'],
    syllabus: {
      'Next.js Fundamentals': [
        'Next.js Setup & Architecture',
        'App Router vs Pages Router',
        'Routing & Navigation',
        'Data Fetching - SSR, SSG, ISR',
        'API Routes',
        'Middleware & Authentication'
      ],
      'Frontend Development': [
        'React Components & Hooks',
        'State Management',
        'Tailwind CSS Styling',
        'Responsive Design',
        'Performance Optimization'
      ],
      'Backend & Database': [
        'Node.js & Express.js',
        'Database with Prisma/ Mongoose',
        'REST API Development',
        'Authentication with NextAuth',
        'File Upload & Cloud Storage'
      ],
      'Projects': [
        'Blog Platform with CMS',
        'E-Commerce Website',
        'Portfolio with Blog',
        'Dashboard Application',
        'Social Media App',
        'Capstone Project'
      ]
    },
    careerPaths: [
      'Next.js Developer',
      'React Developer',
      'Full Stack Developer',
      'Frontend Developer',
      'Software Engineer',
      'Jamstack Developer'
    ]
  },
  {
    id: 6,
    slug: 'dotnet-fullstack',
    name: '.NET Full Stack Development',
    shortName: '.NET Stack',
    displayName: '.NET',
    icon: 'fas fa-code',
    color: 'from-purple-600 to-indigo-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    description: 'Learn C#, ASP.NET Core, React/Angular for building enterprise-level web applications.',
    fullDescription: 'Become a professional .NET Full Stack Developer with our comprehensive training program. Learn C#, ASP.NET Core, Entity Framework, and frontend with React or Angular. Build secure, scalable enterprise applications.',
    duration: '6 Months',
    price: 54999,
    originalPrice: 74999,
    level: 'Intermediate',
    certification: '.NET Full Stack Developer Professional',
    features: [
      'C# Programming - Core to Advanced',
      'ASP.NET Core MVC',
      'Entity Framework Core',
      'React.js / Angular Frontend',
      'REST API Development',
      'Microservices Architecture',
      'Azure Cloud Deployment',
      'Real-time Projects',
      '100% Placement Assistance'
    ],
    tools: ['C#', '.NET Core', 'ASP.NET Core', 'Entity Framework', 'React', 'SQL Server', 'Azure', 'Git'],
    syllabus: {
      'C# & .NET Core': [
        'C# Fundamentals - OOP, LINQ',
        '.NET Core Architecture',
        'ASP.NET Core MVC',
        'Razor Pages',
        'Dependency Injection',
        'Middleware & Filters'
      ],
      'Database & Entity Framework': [
        'SQL Server Database',
        'Entity Framework Core - Code First',
        'Database Migrations',
        'LINQ Queries',
        'Stored Procedures',
        'Performance Optimization'
      ],
      'Frontend Development': [
        'HTML5, CSS3, JavaScript',
        'React.js or Angular',
        'State Management',
        'API Integration',
        'Responsive Design'
      ],
      'Projects': [
        'Enterprise CRM System',
        'E-Commerce Platform',
        'Inventory Management System',
        'HR Management System',
        'School Management System',
        'Capstone Project'
      ]
    },
    careerPaths: [
      '.NET Full Stack Developer',
      'ASP.NET Core Developer',
      'C# Developer',
      'Backend Developer',
      'Enterprise Application Developer',
      'Software Engineer'
    ]
  },
  {
    id: 7,
    slug: 'php-fullstack',
    name: 'PHP Full Stack Development',
    shortName: 'PHP Stack',
    displayName: 'PHP',
    icon: 'fab fa-php',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    description: 'Master PHP, Laravel, MySQL, and modern frontend development.',
    fullDescription: 'Become a professional PHP Full Stack Developer with our comprehensive training program. Learn PHP, Laravel framework, MySQL database, and frontend technologies. Build dynamic, feature-rich web applications.',
    duration: '4 Months',
    price: 39999,
    originalPrice: 59999,
    level: 'Beginner',
    certification: 'PHP Full Stack Developer Professional',
    features: [
      'PHP Programming - Core to Advanced',
      'Laravel Framework',
      'MySQL Database Design',
      'JavaScript & jQuery',
      'Bootstrap & Tailwind CSS',
      'REST API Development',
      'Authentication & Authorization',
      'Real-time Projects',
      '100% Placement Assistance'
    ],
    tools: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'Git'],
    syllabus: {
      'PHP Fundamentals': [
        'PHP Syntax & Variables',
        'Functions & Arrays',
        'Object Oriented PHP',
        'Error Handling & Debugging',
        'File Handling & Sessions',
        'Security Best Practices'
      ],
      'Laravel Framework': [
        'Laravel Setup & Architecture',
        'Routing & Controllers',
        'Blade Templates',
        'Eloquent ORM',
        'Authentication & Authorization',
        'REST API Development'
      ],
      'Frontend Development': [
        'HTML5, CSS3, JavaScript',
        'jQuery & AJAX',
        'Bootstrap Framework',
        'Tailwind CSS',
        'Responsive Design',
        'API Integration'
      ],
      'Projects': [
        'E-Commerce Website',
        'Blog Platform',
        'School Management System',
        'Hotel Booking System',
        'Task Management App',
        'Capstone Project'
      ]
    },
    careerPaths: [
      'PHP Full Stack Developer',
      'Laravel Developer',
      'Backend Developer',
      'Web Developer',
      'Software Engineer',
      'Freelance Developer'
    ]
  },
  {
    id: 8,
    slug: 'flutter-fullstack',
    name: 'Flutter Full Stack Development',
    shortName: 'Flutter Stack',
    displayName: 'Flutter',
    icon: 'fas fa-mobile-alt',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    description: 'Build cross-platform mobile apps with Flutter and backend with Firebase/Node.js.',
    fullDescription: 'Become a professional Flutter Full Stack Developer with our comprehensive training program. Learn Flutter for cross-platform mobile development and integrate with Firebase or Node.js backend. Build complete mobile applications with user authentication, database, and push notifications.',
    duration: '5 Months',
    price: 44999,
    originalPrice: 64999,
    level: 'Intermediate',
    certification: 'Flutter Full Stack Developer Professional',
    features: [
      'Dart Programming Language',
      'Flutter - Widgets & UI Design',
      'State Management (Provider, Bloc)',
      'Firebase Integration',
      'Node.js Backend',
      'REST API Integration',
      'Push Notifications',
      'App Deployment (Play Store/App Store)',
      'Real-time Projects',
      '100% Placement Assistance'
    ],
    tools: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'VS Code'],
    syllabus: {
      'Flutter & Dart': [
        'Dart Programming - Core Concepts',
        'Flutter Setup & Architecture',
        'Widgets - Stateless & Stateful',
        'Layout & Styling',
        'Navigation & Routing',
        'State Management - Provider, Bloc'
      ],
      'Firebase Backend': [
        'Firebase Authentication',
        'Cloud Firestore Database',
        'Firebase Storage',
        'Cloud Functions',
        'Push Notifications',
        'Analytics & Crashlytics'
      ],
      'Custom Backend (Node.js)': [
        'Node.js & Express.js',
        'MongoDB Database',
        'REST API Development',
        'Authentication - JWT',
        'API Integration in Flutter',
        'Deployment'
      ],
      'Projects': [
        'E-Commerce App',
        'Chat Application',
        'Social Media App',
        'Task Management App',
        'Food Delivery App',
        'Capstone Project'
      ]
    },
    careerPaths: [
      'Flutter Developer',
      'Mobile App Developer',
      'Full Stack Mobile Developer',
      'Cross-Platform Developer',
      'Firebase Developer',
      'Software Engineer'
    ]
  }
];

// All locations
const allLocations = locationsData.locations;

// Bangalore locations
const bangaloreLocations = allLocations.filter(loc => 
  ['marathahalli', 'btm', 'kalyan-nagar', 'hebbal', 'whitefield'].includes(loc.slug)
);

// India locations
const indiaLocations = allLocations.filter(loc => 
  ['ahmedabad', 'jaipur', 'mumbai', 'patna', 'chandigarh', 'trivandrum', 
   'indore', 'delhi', 'hyderabad', 'gurgaon', 'visakhapatnam', 'noida', 
   'mysore', 'lucknow', 'cochin', 'chennai', 'warangal', 'trichy'].includes(loc.slug)
);

// International locations
const internationalLocations = allLocations.filter(loc => 
  ['usa', 'singapore', 'uae', 'uk', 'canada', 'australia', 'germany', 'france'].includes(loc.slug)
);

export default function FullStackAllLocationsPage() {
  const { openEnrollModal } = useEnroll();
  const [selectedCourse, setSelectedCourse] = useState(fullStackCourses[0]);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Full Stack Training in <span className="text-yellow-300">All Courses</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Become a professional Full Stack Developer. Choose from 8 different stacks including 
              Python, Java, MERN, MEAN, Next.js, .NET, PHP, and Flutter.
              Training available at all our centers worldwide.
            </p>
          </div>
        </section>

        {/* Course Selector */}
        <section className="py-8 bg-white shadow-sm sticky top-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {fullStackCourses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className={`px-4 py-2 rounded-full font-semibold transition flex items-center gap-2 text-sm ${
                    selectedCourse.id === course.id
                      ? `bg-gradient-to-r ${course.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <i className={`${course.icon} text-sm`}></i>
                  {course.shortName}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Course Header */}
            <div className={`bg-gradient-to-r ${selectedCourse.color} rounded-2xl p-8 text-white mb-8`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <i className={`${selectedCourse.icon} text-4xl`}></i>
                    <h2 className="text-3xl font-bold">{selectedCourse.name}</h2>
                  </div>
                  <p className="text-white/90 max-w-2xl">{selectedCourse.description}</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-3xl font-bold">₹{selectedCourse.price.toLocaleString()}</p>
                  <p className="text-white/70 line-through text-sm">₹{selectedCourse.originalPrice.toLocaleString()}</p>
                  <button 
                    onClick={() => openEnrollModal()}
                    className="mt-2 bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap border-b border-gray-200 mb-6">
              {['overview', 'syllabus', 'locations', 'career'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-semibold transition ${
                    activeTab === tab
                      ? `border-b-2 border-${selectedCourse.textColor.split('-')[1]}-600 text-${selectedCourse.textColor.split('-')[1]}-600`
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab === 'overview' && '📖 Overview'}
                  {tab === 'syllabus' && '📚 Syllabus'}
                  {tab === 'locations' && '📍 Training Locations'}
                  {tab === 'career' && '💼 Career'}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4">About This Course</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedCourse.fullDescription}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedCourse.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <i className="fas fa-check-circle text-green-500 mt-1 text-sm"></i>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                    <h3 className="text-xl font-bold mb-4">Course Highlights</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Duration</span>
                        <span className="font-semibold">{selectedCourse.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Level</span>
                        <span className="font-semibold">{selectedCourse.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Certification</span>
                        <span className="font-semibold text-right">{selectedCourse.certification}</span>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-2">Tools Covered</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedCourse.tools.slice(0, 6).map((tool, idx) => (
                            <span key={idx} className="bg-gray-100 px-2 py-1 rounded-full text-xs">{tool}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => openEnrollModal()}
                      className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 rounded-lg font-semibold hover:shadow-md transition"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Syllabus Tab */}
            {activeTab === 'syllabus' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-6">Course Syllabus</h3>
                <div className="space-y-4">
                  {Object.entries(selectedCourse.syllabus).map(([module, topics], idx) => (
                    <details key={idx} className="border rounded-lg p-4">
                      <summary className="font-semibold text-lg cursor-pointer hover:text-blue-600">
                        Module {idx + 1}: {module}
                      </summary>
                      <ul className="mt-3 ml-6 space-y-2">
                        {topics.map((topic, tidx) => (
                          <li key={tidx} className="text-gray-600 text-sm flex items-start gap-2">
                            <i className={`fas fa-circle text-${selectedCourse.textColor.split('-')[1]}-500 text-[6px] mt-1.5`}></i>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Locations Tab */}
            {activeTab === 'locations' && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <i className="fas fa-map-marker-alt text-red-500"></i>
                    Training in Bangalore
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {bangaloreLocations.map((loc) => (
                      <Link
                        key={loc.id}
                        href={`/${selectedCourse.slug}-training-in-${loc.slug}`}
                        className="text-gray-700 hover:text-red-500 transition text-sm flex items-center gap-2 p-2 rounded-lg hover:bg-red-50"
                      >
                        <i className="fas fa-map-marker-alt text-red-500 text-xs"></i>
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <i className="fas fa-flag-india text-red-500"></i>
                    Training in Other Cities
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {indiaLocations.map((loc) => (
                      <Link
                        key={loc.id}
                        href={`/${selectedCourse.slug}-training-in-${loc.slug}`}
                        className="text-gray-700 hover:text-red-500 transition text-sm flex items-center gap-2 p-2 rounded-lg hover:bg-red-50"
                      >
                        <i className="fas fa-map-marker-alt text-red-500 text-xs"></i>
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <i className="fas fa-globe text-red-500"></i>
                    International Training Centers
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {internationalLocations.map((loc) => (
                      <Link
                        key={loc.id}
                        href={`/${selectedCourse.slug}-training-in-${loc.slug}`}
                        className="text-gray-700 hover:text-red-500 transition text-sm flex items-center gap-2 p-2 rounded-lg hover:bg-red-50"
                      >
                        <i className="fas fa-globe text-red-500 text-xs"></i>
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Career Tab */}
            {activeTab === 'career' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <i className="fas fa-briefcase text-blue-500"></i>
                    Career Opportunities
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedCourse.careerPaths.map((career, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <i className={`fas fa-check-circle ${selectedCourse.textColor} text-sm`}></i>
                        <span className="text-sm">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <i className="fas fa-building text-green-500"></i>
                    Top Hiring Companies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['TCS', 'Infosys', 'Wipro', 'Accenture', 'IBM', 'Deloitte', 'Amazon', 'Google', 'Microsoft', 'Capgemini', 'Cognizant', 'Tech Mahindra'].map((company, idx) => (
                      <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{company}</span>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <i className="fas fa-chart-line text-blue-500 mr-2"></i>
                      Average Salary: <strong>₹5-18 LPA</strong> for freshers, up to <strong>₹30 LPA+</strong> for experienced professionals
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Other Full Stack Courses Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Other Full Stack Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fullStackCourses.filter(c => c.id !== selectedCourse.id).map((course) => (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className={`bg-gradient-to-r ${course.color} rounded-xl p-6 text-white text-left hover:shadow-xl transition transform hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <i className={`${course.icon} text-3xl`}></i>
                    <h3 className="text-xl font-bold">{course.name}</h3>
                  </div>
                  <p className="text-white/80 text-sm line-clamp-2">{course.description}</p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-sm">Click to view</span>
                    <i className="fas fa-arrow-right text-sm"></i>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Become a Full Stack Developer?</h2>
            <p className="text-xl mb-8">Join our comprehensive training program at any of our locations worldwide</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button 
                onClick={() => openEnrollModal()}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
              >
                Enroll Now
              </button>
              <Link 
                href="/course"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition"
              >
                Explore All Courses
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}