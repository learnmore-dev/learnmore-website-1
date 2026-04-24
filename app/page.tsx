'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useEnroll } from '@/context/EnrollContext';
import coursesData from '@/data/courses.json';
import placementsData from '@/data/placements.json';
import testimonialsData from '@/data/testimonials.json';

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className="text-3xl md:text-4xl font-bold text-blue-600">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

// Stats Card Component with Animation on Scroll
const StatsCard = ({ icon, title, value, suffix, delay }: { icon: string; title: string; value: number; suffix?: string; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay || 0);
          }
        });
      },
      { threshold: 0.3 }
    );
    const element = document.getElementById(`stat-${title.replace(/\s/g, '')}`);
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [title, delay, hasAnimated]);

  return (
    <div id={`stat-${title.replace(/\s/g, '')}`} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition group">
      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition">
        <i className={`${icon} text-blue-600 text-2xl`}></i>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-blue-600">
        {isVisible ? <AnimatedCounter target={value} suffix={suffix || ''} /> : `0${suffix || ''}`}
      </div>
      <div className="text-gray-500 text-sm mt-1">{title}</div>
    </div>
  );
};

export default function Home() {
  const { openEnrollModal } = useEnroll();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const { courses } = coursesData;
  const { placements } = placementsData;
  const { testimonials } = testimonialsData;
  const featuredCourses = courses.slice(0, 9);

  const categories = [
    { id: 'all', name: 'All Programs', icon: 'fas fa-th-large' },
    { id: 'development', name: 'Development', icon: 'fas fa-code' },
    { id: 'data', name: 'Data Science & AI', icon: 'fas fa-brain' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: 'fas fa-cloud' },
    { id: 'testing', name: 'Testing', icon: 'fas fa-bug' },
    { id: 'marketing', name: 'Marketing', icon: 'fas fa-bullhorn' },
  ];

  const filteredCourses = courses.filter(course => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'development') {
      return course.title.toLowerCase().includes('python') || 
             course.title.toLowerCase().includes('java') ||
             course.title.toLowerCase().includes('fullstack') ||
             course.title.toLowerCase().includes('react');
    }
    if (activeCategory === 'data') {
      return course.title.toLowerCase().includes('data') || 
             course.title.toLowerCase().includes('analytics') ||
             course.title.toLowerCase().includes('science');
    }
    if (activeCategory === 'cloud') {
      return course.title.toLowerCase().includes('cloud') || 
             course.title.toLowerCase().includes('devops') ||
             course.title.toLowerCase().includes('aws') ||
             course.title.toLowerCase().includes('azure');
    }
    if (activeCategory === 'testing') {
      return course.title.toLowerCase().includes('testing');
    }
    if (activeCategory === 'marketing') {
      return course.title.toLowerCase().includes('marketing');
    }
    return true;
  });

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
        {/* Hero Section */}
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
                  <button onClick={() => openEnrollModal()} className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
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

        {/* Stats Section with Animated Counters */}
        <section className="py-16 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Our Impact in Numbers</h2>
              <p className="text-gray-600">The numbers that speak for our success</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <StatsCard icon="fas fa-chalkboard-user" title="Live Classes Monthly" value={700} suffix="+" delay={0} />
              <StatsCard icon="fas fa-book-open" title="Learning Solutions" value={550} suffix="+" delay={200} />
              <StatsCard icon="fas fa-laptop-code" title="Hands-on Projects" value={100} suffix="+" delay={400} />
              <StatsCard icon="fas fa-briefcase" title="Job Assistance" value={100} suffix="%" delay={600} />
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
                  <button onClick={() => openEnrollModal()} className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
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

        {/* Categories Filter Section */}
        <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full font-medium transition flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <i className={`${category.icon} text-sm`}></i>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Courses Grid Section */}
       
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Our Programs Stand Out</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-graduation-cap text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Cutting Edge Curriculum</h3>
                <p className="text-gray-500 text-sm">Co-created with industry experts</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chalkboard-teacher text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Live Expert Training</h3>
                <p className="text-gray-500 text-sm">Learn from industry practitioners</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-project-diagram text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Hands-On Projects</h3>
                <p className="text-gray-500 text-sm">Real-world case studies</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-briefcase text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-bold mb-2">Career Guidance</h3>
                <p className="text-gray-500 text-sm">Resume & interview prep</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Courses Carousel Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Popular Programs</h2>
              <p className="text-gray-600">Most popular courses chosen by 8M+ learners worldwide</p>
            </div>

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
                          <div className="relative h-48 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
                            {course.image ? (
                              <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
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
        </section>{/* Blogs Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2">Latest Blogs</h2>
      <p className="text-gray-600">Stay updated with our latest articles and insights</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "15 Features Of Python That Make Everyone Love It", date: "Apr 15, 2026", readTime: "5 min read", category: "Python" },
        { title: "Cloud Computing Trends in 2026", date: "Apr 12, 2026", readTime: "7 min read", category: "Cloud" },
        { title: "Data Science Career Guide", date: "Apr 10, 2026", readTime: "8 min read", category: "Data Science" },
        { title: "DevOps Best Practices", date: "Apr 8, 2026", readTime: "6 min read", category: "DevOps" },
        { title: "Top 10 Python Libraries", date: "Apr 5, 2026", readTime: "4 min read", category: "Python" },
        { title: "AWS vs Azure vs GCP", date: "Apr 3, 2026", readTime: "10 min read", category: "Cloud" }
      ].map((blog, idx) => (
        <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:shadow-lg transition">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">{blog.category}</span>
            <span className="text-gray-400 text-xs">{blog.readTime}</span>
          </div>
          <h3 className="font-bold text-lg mb-2 hover:text-blue-600 transition cursor-pointer">{blog.title}</h3>
          <p className="text-gray-500 text-sm mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-xs">{blog.date}</span>
            <button className="text-blue-600 text-sm font-semibold hover:underline">Read More →</button>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-8">
      <Link href="/blog" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
        View All Blogs <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  </div>
</section>

{/* Job Opportunities in Python (Course-specific) */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2">Job Opportunities in Technology</h2>
      <p className="text-gray-600">High-demand roles with competitive salaries</p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fab fa-python text-green-600 text-xl"></i>
          </div>
          <h3 className="font-bold text-lg">Python Developer</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">₹4-12 LPA • 5,000+ openings</p>
        <p className="text-gray-500 text-xs">Top companies: Google, Amazon, Microsoft, TCS</p>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <i className="fab fa-aws text-blue-600 text-xl"></i>
          </div>
          <h3 className="font-bold text-lg">Cloud Engineer</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">₹5-15 LPA • 3,000+ openings</p>
        <p className="text-gray-500 text-xs">Top companies: AWS, Azure, Google Cloud, IBM</p>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <i className="fas fa-brain text-purple-600 text-xl"></i>
          </div>
          <h3 className="font-bold text-lg">Data Scientist</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">₹6-18 LPA • 2,000+ openings</p>
        <p className="text-gray-500 text-xs">Top companies: Amazon, Flipkart, Uber, Microsoft</p>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <i className="fab fa-java text-orange-600 text-xl"></i>
          </div>
          <h3 className="font-bold text-lg">Java Full Stack Developer</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">₹4-14 LPA • 4,000+ openings</p>
        <p className="text-gray-500 text-xs">Top companies: Infosys, TCS, Wipro, Accenture</p>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <i className="fas fa-shield-alt text-red-600 text-xl"></i>
          </div>
          <h3 className="font-bold text-lg">Cybersecurity Analyst</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">₹5-16 LPA • 2,500+ openings</p>
        <p className="text-gray-500 text-xs">Top companies: Palo Alto, CrowdStrike, Deloitte</p>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
            <i className="fas fa-database text-teal-600 text-xl"></i>
          </div>
          <h3 className="font-bold text-lg">Data Engineer</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">₹5-15 LPA • 3,500+ openings</p>
        <p className="text-gray-500 text-xs">Top companies: Amazon, Google, Flipkart, Walmart</p>
      </div>
    </div>
  </div>
</section>
{/* Placement Statistics Section */}


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
      {placements.slice(0, 6).map((student: any) => (
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

{/* Salary Guide Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2">Salary Guide by Experience</h2>
      <p className="text-gray-600">Average salaries for different experience levels</p>
    </div>
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex-1">
            <p className="font-semibold">Entry Level (0-2 years)</p>
            <p className="text-2xl font-bold text-green-600">₹4-6 LPA</p>
          </div>
          <div className="w-full md:w-1/2 bg-gray-200 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: '25%' }}></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex-1">
            <p className="font-semibold">Mid Level (2-5 years)</p>
            <p className="text-2xl font-bold text-blue-600">₹8-12 LPA</p>
          </div>
          <div className="w-full md:w-1/2 bg-gray-200 rounded-full h-3">
            <div className="bg-blue-500 h-3 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex-1">
            <p className="font-semibold">Senior Level (5-8 years)</p>
            <p className="text-2xl font-bold text-purple-600">₹15-25 LPA</p>
          </div>
          <div className="w-full md:w-1/2 bg-gray-200 rounded-full h-3">
            <div className="bg-purple-500 h-3 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex-1">
            <p className="font-semibold">Expert Level (8+ years)</p>
            <p className="text-2xl font-bold text-red-600">₹30-50 LPA</p>
          </div>
          <div className="w-full md:w-1/2 bg-gray-200 rounded-full h-3">
            <div className="bg-red-500 h-3 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Classes with Unique Syllabus Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2">Classes with Unique Syllabus</h2>
      <p className="text-gray-600">Our curriculum is crafted by industry experts with real-world insights</p>
    </div>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <i className="fas fa-star text-yellow-500"></i>
          <h3 className="font-bold text-lg">Industry-Aligned Curriculum</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our syllabus is uniquely designed by professionals with 10+ years of experience in leading IT companies. 
          Updated regularly to match current industry requirements.
        </p>
      </div>
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <i className="fas fa-laptop-code text-blue-500"></i>
          <h3 className="font-bold text-lg">Practical Hands-on Training</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          80% practical training with real-world projects, case studies, and live coding sessions.
        </p>
      </div>
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <i className="fas fa-file-alt text-green-500"></i>
          <h3 className="font-bold text-lg">Free Course Materials</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          All course materials, assignments, and project guides are provided at no additional cost.
        </p>
      </div>
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <i className="fas fa-certificate text-purple-500"></i>
          <h3 className="font-bold text-lg">Certification Guidance</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Complete guidance for industry certifications like AWS, Python, Java, and more.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Upcoming Batch Schedule Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2">Upcoming Batch Schedule</h2>
      <p className="text-gray-600">Choose a batch that fits your schedule</p>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left rounded-tl-xl">Start Date</th>
            <th className="p-3 text-left">Batch Type</th>
            <th className="p-3 text-left">Time</th>
            <th className="p-3 text-left rounded-tr-xl">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3 font-semibold">27th April 2026</td>
            <td className="p-3">Weekdays (Mon-Fri)</td>
            <td className="p-3">08:00 AM IST</td>
            <td className="p-3"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Enrolling</span></td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-semibold">23rd April 2026</td>
            <td className="p-3">Weekdays (Mon-Fri)</td>
            <td className="p-3">08:00 AM IST</td>
            <td className="p-3"><span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">Limited Seats</span></td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-semibold">25th April 2026</td>
            <td className="p-3">Weekend (Sat-Sun)</td>
            <td className="p-3">11:00 AM IST</td>
            <td className="p-3"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Available</span></td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">2nd May 2026</td>
            <td className="p-3">Weekdays (Mon-Fri)</td>
            <td className="p-3">06:00 PM IST</td>
            <td className="p-3"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Coming Soon</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="text-center mt-6">
      <p className="text-gray-500 text-sm">Can't find a batch that works for you?</p>
      <button onClick={() => openEnrollModal()} className="mt-2 text-blue-600 font-semibold hover:underline">
        Request a Custom Batch →
      </button>
    </div>
  </div>
</section>

{/* Trainer Profile Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2">Meet Our Expert Trainers</h2>
      <p className="text-gray-600">Learn from industry professionals with real-world experience</p>
    </div>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <i className="fas fa-user-tie text-blue-600 text-2xl"></i>
          </div>
          <div>
            <h3 className="font-bold text-lg">Senior Industry Experts</h3>
            <p className="text-gray-500 text-sm">20+ Years Combined Experience</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          Our trainers are industry professionals with 10+ years of experience in leading MNCs across Bangalore. 
          They bring real-world project experience into the classroom.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <i className="fas fa-check-circle text-green-500 text-xs"></i>
            Previously worked at Google, Amazon, Microsoft
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <i className="fas fa-check-circle text-green-500 text-xs"></i>
            Certified Professionals with Global Recognition
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <i className="fas fa-check-circle text-green-500 text-xs"></i>
            AWS Certified | Python Expert | DevOps Specialist
          </li>
        </ul>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <i className="fas fa-chalkboard-user text-blue-500 text-3xl"></i>
          <h3 className="font-bold text-lg">Why Our Trainers Stand Out?</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          Our trainers are proactive professionals dedicated to addressing individual student challenges, 
          ensuring you develop strong analytical and problem-solving abilities required in the industry.
        </p>
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

{/* Frequently Asked Questions Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 max-w-3xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
      <p className="text-gray-600">Find answers to common questions about our courses</p>
    </div>
    <div className="space-y-4">
      {[
        { q: "Why should I learn this course from Learnmore Technologies?", 
          a: "We offer industry-expert trainers, hands-on projects, placement assistance, and flexible batch timings. Our curriculum is designed by professionals currently working in top MNCs." },
        { q: "Does Learnmore Technologies offer placement assistance after course completion?", 
          a: "Yes, we provide 100% placement assistance including resume building, mock interviews, and direct referrals to our 50+ hiring partner companies." },
        { q: "What if I miss a session?", 
          a: "We provide recorded sessions for all classes. You can access them anytime through our learning portal and catch up on missed content." },
        { q: "What certification will I receive after course completion?", 
          a: "You'll receive an industry-recognized certificate from Learnmore Technologies, valid for job applications worldwide." },
        { q: "Are there any EMI options available for course fees?", 
          a: "Yes, we offer flexible EMI options with 0% interest for eligible students. Contact our admission counselors for more details." }
      ].map((faq, idx) => (
        <details key={idx} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
          <summary className="font-semibold cursor-pointer hover:text-blue-600 flex items-center justify-between">
            <span>{faq.q}</span>
            <i className="fas fa-chevron-down text-gray-400 text-sm"></i>
          </summary>
          <p className="mt-3 text-gray-600 text-sm pl-4 border-l-2 border-blue-500">{faq.a}</p>
        </details>
      ))}
    </div>
    <div className="text-center mt-8">
      <button onClick={() => openEnrollModal()} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
        Still Have Questions? Contact Us
      </button>
    </div>
  </div>
</section>

{/* Online Training Benefits Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Live Instructor-Led Online Training Available</h2>
          <p className="text-gray-700 mb-4">
            Can't make it to our centers? Join our live online classes from anywhere in the world. 
            Get the same quality training with additional flexibility.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-500"></i>
              <span>Live Instructor-Led Sessions</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-500"></i>
              <span>Recorded Sessions for Revision</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-500"></i>
              <span>100% Placement Support Included</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-500"></i>
              <span>Students from 10+ Countries</span>
            </li>
          </ul>
          <button onClick={() => openEnrollModal()} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
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

        {/* Trusted Companies Section */}
        {/* Trusted Companies Section with CSS Animation */}
<section className="py-16 bg-gray-50 overflow-hidden">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Digital Leaders</h2>
    <p className="text-gray-500 mb-8">from Top Companies Worldwide</p>
    
    <style jsx>{`
      @keyframes scrollRightToLeft {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-scroll {
        animation: scrollRightToLeft 25s linear infinite;
      }
      .animate-scroll:hover {
        animation-play-state: paused;
      }
    `}</style>
    
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex animate-scroll">
        {(() => {
          const companies = [
            { name: 'TCS', logo: '/images/companies/tcs.png' },
            { name: 'Infosys', logo: '/images/companies/infosys.png' },
            { name: 'Wipro', logo: '/images/companies/wipro.png' },
            { name: 'Accenture', logo: '/images/companies/accenture.png' },
            { name: 'IBM', logo: '/images/companies/ibm.png' },
            { name: 'Deloitte', logo: '/images/companies/deloitte.png' },
            { name: 'Amazon', logo: '/images/companies/amazon.png' },
            { name: 'Google', logo: '/images/companies/google.png' },
            { name: 'Microsoft', logo: '/images/companies/microsoft.png' },
            { name: 'Zomato', logo: '/images/companies/zomato.png' },
            { name: 'Flipkart', logo: '/images/companies/flipkart.png' },
            { name: 'Paytm', logo: '/images/companies/paytm.png' },
          ];
          // Double the array for seamless loop
          return [...companies, ...companies].map((company, idx) => (
            <div
              key={idx}
              className="w-40 h-48 flex-shrink-0 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 border border-gray-100 hover:border-blue-200 mx-3"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const textSpan = document.createElement('span');
                    textSpan.className = 'text-gray-600 font-semibold text-sm';
                    textSpan.textContent = company.name;
                    parent.appendChild(textSpan);
                  }
                }}
              />
            </div>
          ));
        })()}
      </div>
    </div>
    
    <div className="mt-8">
      <Link 
        href="/companies" 
        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
      >
        View All Our Hiring Partners
        <i className="fas fa-arrow-right text-sm"></i>
      </Link>
    </div>
  </div>
</section>

        {/* Placement Stats Section */}


        {/* CTA Section */}
       
      </main>
      <Footer />
    </>
  );
}