'use client';

import { notFound } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnrollModal from '@/components/common/EnrollModal';
import coursesData from '@/data/courses.json';

export default function CoursePage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const course = coursesData.courses.find(c => c.slug === params.slug);
  
  if (!course) {
    notFound();
  }

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
          {/* Background Image */}
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
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          
          {/* Content */}
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
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition">
                  Download Syllabus
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

                {/* Certificate Info */}
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

        {/* Syllabus Preview */}
        {course.syllabus && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold mb-6 text-center">Course Syllabus</h2>
              <div className="space-y-4">
                {Object.entries(course.syllabus).map(([module, topics]: [string, any], idx) => (
                  <details key={idx} className="border rounded-lg p-4 bg-gray-50">
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
            
            {/* Hiring Companies */}
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
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition">
                Book Free Demo
              </button>
            </div>
            <p className="text-sm text-red-100 mt-4">Limited seats available. Enroll today!</p>
          </div>
        </section>
      </main>
      <Footer />
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} courseName={course.title} />
    </>
  );
}