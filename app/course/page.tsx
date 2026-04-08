'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnrollModal from '@/components/common/EnrollModal';
import coursesData from '@/data/courses.json';

export default function CoursesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { courses } = coursesData;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative py-20 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Courses Hero Background"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
                }
              }}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="inline-block mb-4">
              <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-red-500">Courses</span>
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg">
              Choose from our industry-focused courses designed to make you job-ready. 
              Each course is crafted by industry experts with hands-on practical training.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-white/20 backdrop-blur rounded-full px-6 py-2">
                <span className="font-semibold text-white">6+</span>
                <span className="text-gray-200 ml-2">Professional Courses</span>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-full px-6 py-2">
                <span className="font-semibold text-white">1000+</span>
                <span className="text-gray-200 ml-2">Students Trained</span>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-full px-6 py-2">
                <span className="font-semibold text-white">95%</span>
                <span className="text-gray-200 ml-2">Placement Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course: any) => (
                <Link 
                  key={course.id} 
                  href={`/course/${course.slug}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
                >
                  {/* Card Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.backgroundImage || course.image || '/images/courses/placeholder-course.jpg'}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = '/images/courses/placeholder-course.jpg';
                      }}
                    />
                    {/* Dark Overlay for better text visibility */}
                    <div className="absolute inset-0 bg-black/30"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <i className={`${course.icon} text-4xl text-white`}></i>
                      </div>
                    </div>
                    
                    {/* Badge */}
                    {course.id <= 3 && (
                      <span className="absolute top-4 left-4 bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-full z-10">
                        Most Popular
                      </span>
                    )}
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-red-500 transition line-clamp-1">
                      {course.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                      {course.shortDescription}
                    </p>
                    
                    {/* Tools Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.tools.slice(0, 3).map((tool: string, idx: number) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
                          {tool}
                        </span>
                      ))}
                      {course.tools.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
                          +{course.tools.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Price and Duration */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-gray-400 text-xs">Course Fee</span>
                        <span className="text-red-600 font-bold text-lg block">₹{course.price.toLocaleString()}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 text-xs">Duration</span>
                        <span className="text-gray-500 text-sm flex items-center gap-1">
                          <i className="far fa-clock text-gray-400"></i> {course.duration}
                        </span>
                      </div>
                    </div>
                    
                    {/* Learn More Link */}
                    <div className="mt-4 text-red-500 font-medium flex items-center justify-between group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Not sure which course to choose?</h3>
              <p className="text-gray-600 mb-4">Our career counselors can help you find the right path</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition shadow-md"
              >
                Talk to Counselor
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}