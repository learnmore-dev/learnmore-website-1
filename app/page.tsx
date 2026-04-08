'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnrollModal from '@/components/common/EnrollModal';
import coursesData from '@/data/courses.json';
import placementsData from '@/data/placements.json';
import testimonialsData from '@/data/testimonials.json';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { courses } = coursesData;
  const { placements } = placementsData;
  const { testimonials } = testimonialsData;
  const featuredCourses = courses.slice(0, 9); // 9 courses for carousel

  // Auto-scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(featuredCourses.length / 3));
    }, 2000);
    return () => clearInterval(interval);
  }, [featuredCourses.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const totalSlides = Math.ceil(featuredCourses.length / 3);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative py-20 text-white overflow-hidden min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-black/50"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Welcome to <span className="text-yellow-300">Learnmore Technologies</span>
                </h1>
                <h2 className="text-2xl mb-4">Top Software Training & IT Skill-Building Institute in Bangalore</h2>
                <p className="text-lg mb-8 text-blue-100">
                  Unlock your future in tech with 100% job assistance programs, real-time projects, 
                  industry expert trainers, and top certification courses.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link href="/course" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                    Explore Courses
                  </Link>
                  <button onClick={() => setIsModalOpen(true)} className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🎓</div>
                <p className="text-2xl font-bold">8 Million+</p>
                <p className="text-blue-100">Learners Worldwide</p>
                <div className="mt-4 flex justify-center gap-4">
                  <div>
                    <p className="text-xl font-bold">80%</p>
                    <p className="text-sm">Graduation Rate</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">4.8/5</p>
                    <p className="text-sm">Learner Rating</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">50%+</p>
                    <p className="text-sm">Avg Salary Hike</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">700+</div>
                <div className="text-gray-500 text-sm">Live classes monthly</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">550+</div>
                <div className="text-gray-500 text-sm">Learning solutions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-gray-500 text-sm">Hands-on projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-500 text-sm">Job Assistance</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">About <span className="text-blue-600">Learnmore Technologies</span></h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Learnmore Technologies is a fast-growing hub for IT and professional skill development. 
                  We've built a reputation for delivering high-quality, job-ready training that bridges 
                  the gap between academic learning and real-world industry needs.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our dedicated coordinators, experienced trainers, and carefully designed courses ensure 
                  that every student receives the guidance needed to excel in their career.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Learn More
                  </button>
                  <button onClick={() => setIsModalOpen(true)} className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md text-center">
                  <i className="fas fa-user-tie text-blue-600 text-3xl mb-2"></i>
                  <h3 className="font-bold">Industry Experts</h3>
                  <p className="text-gray-500 text-sm">10+ Years Experience</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center">
                  <i className="fas fa-project-diagram text-blue-600 text-3xl mb-2"></i>
                  <h3 className="font-bold">Live Projects</h3>
                  <p className="text-gray-500 text-sm">Real-world Experience</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center">
                  <i className="fas fa-certificate text-blue-600 text-3xl mb-2"></i>
                  <h3 className="font-bold">Certification</h3>
                  <p className="text-gray-500 text-sm">Industry Recognized</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center">
                  <i className="fas fa-briefcase text-blue-600 text-3xl mb-2"></i>
                  <h3 className="font-bold">Placement</h3>
                  <p className="text-gray-500 text-sm">100% Assistance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Courses Carousel Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Our Popular Programs</h2>
              <p className="text-gray-600">Most popular courses chosen by 8M+ learners worldwide</p>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                      {featuredCourses.slice(slideIndex * 3, slideIndex * 3 + 3).map((course: any, idx: number) => (
                        <div
                          key={course.id}
                          className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                          {/* Image Section */}
                          <div className="relative h-56 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
                            {course.image ? (
                              <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  const parent = e.currentTarget.parentElement;
                                  if (parent) {
                                    parent.style.background = `linear-gradient(135deg, ${idx % 2 === 0 ? '#3b82f6' : '#8b5cf6'}, ${idx % 2 === 0 ? '#1d4ed8' : '#7c3aed'})`;
                                  }
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <i className={`${course.icon || 'fas fa-graduation-cap'} text-6xl text-white/40`}></i>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-black/20"></div>
                            {slideIndex === 0 && idx < 3 && (
                              <span className="absolute top-4 left-4 bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-full z-10">
                                Most Popular
                              </span>
                            )}
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition line-clamp-1">
                              {course.title}
                            </h3>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                              {course.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {course.tools.slice(0, 3).map((tool: string, tidx: number) => (
                                <span key={tidx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                                  {tool}
                                </span>
                              ))}
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-2xl font-bold text-blue-600">
                                ₹{course.price.toLocaleString()}
                              </span>
                              <Link
                                href={`/course/${course.slug}`}
                                className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                              >
                                View Program
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-8 bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-10">
              <Link
                href="/course"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                View All Programs <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Our Programs Stand Out</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-graduation-cap text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Cutting Edge Curriculum</h3>
                <p className="text-gray-500 text-sm">Co-created with industry experts</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chalkboard-teacher text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Live Expert Training</h3>
                <p className="text-gray-500 text-sm">Learn from industry practitioners</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-project-diagram text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Hands-On Projects</h3>
                <p className="text-gray-500 text-sm">Real-world case studies</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-briefcase text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Career Guidance</h3>
                <p className="text-gray-500 text-sm">Resume & interview prep</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Real Stories, Incredible Journeys</h2>
            <p className="text-center text-gray-600 mb-12">Hear from our successful learners</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial: any) => (
                <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">"{testimonial.content.substring(0, 150)}..."</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex text-yellow-400">{'★'.repeat(testimonial.rating)}</div>
                    <span className="text-green-600 font-semibold text-sm">Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Companies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Trusted by Digital Leaders from Top Companies</h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {['TCS', 'Infosys', 'Wipro', 'Accenture', 'IBM', 'Deloitte', 'Amazon', 'Google'].map((company, idx) => (
                <div key={idx} className="text-gray-400 font-semibold text-xl">{company}</div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-dark to-dark-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Upskill Your Career?</h2>
            <p className="text-xl mb-8">Join 8 Million+ learners who trust us for their career growth</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/course" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Explore Programs
              </Link>
              <button onClick={() => setIsModalOpen(true)} className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
                Talk to Advisor
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