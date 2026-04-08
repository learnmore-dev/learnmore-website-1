'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnrollModal from '@/components/common/EnrollModal';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: "fas fa-laptop-code",
      title: "Online Training",
      description: "Learn anytime, anywhere with our Live Online Training Programs led by industry experts.",
      features: [
        "Live instructor-led sessions",
        "Real-time projects & hands-on labs",
        "Recorded sessions for revision",
        "Flexible schedules for students & working professionals",
        "Same placement support as classroom training"
      ],
      bestFor: "Working professionals, remote learners, and students outside Bangalore.",
      color: "blue"
    },
    {
      id: 2,
      icon: "fas fa-chalkboard-teacher",
      title: "Offline (Classroom) Training",
      description: "Experience immersive learning with classroom-based training at our state-of-the-art centers.",
      features: [
        "Face-to-face interaction with trainers",
        "Lab-based practical sessions",
        "Small batch sizes for personal attention",
        "Peer learning & doubt-clearing sessions",
        "Placement-oriented curriculum"
      ],
      bestFor: "Freshers, graduates, and learners who prefer in-person training.",
      color: "green"
    },
    {
      id: 3,
      icon: "fas fa-building",
      title: "Corporate Training",
      description: "Customized corporate training solutions to help organizations upskill their workforce.",
      features: [
        "Customized training modules",
        "Onsite & online corporate sessions",
        "Skill gap analysis",
        "Practical use-case driven learning",
        "Post-training assessment & reporting"
      ],
      technologies: ["Cloud", "DevOps", "Data Analytics", "Python", "Java", "Automation Testing"],
      bestFor: "Organizations looking to upskill their teams.",
      color: "purple"
    },
    {
      id: 4,
      icon: "fas fa-briefcase",
      title: "Internship Programs",
      description: "Gain real-world exposure through our internship programs designed to bridge the gap between learning and employment.",
      features: [
        "Real-time project experience",
        "Industry-level problem solving",
        "Internship certification",
        "Mentor guidance",
        "Interview-ready project portfolio"
      ],
      bestFor: "Students, fresh graduates, and career switchers.",
      color: "orange"
    },
    {
      id: 5,
      icon: "fas fa-handshake",
      title: "Placement Support",
      description: "Placements are a core part of our services. We focus on making students job-ready and confident.",
      features: [
        "Resume & LinkedIn profile building",
        "Mock technical & HR interviews",
        "Interview referrals & job alerts",
        "Career mentoring",
        "Continuous placement assistance"
      ],
      roles: ["Software Developer", "Cloud Engineer", "DevOps Engineer", "Data Analyst", "QA Tester", "Full Stack Developer"],
      bestFor: "All students looking for job opportunities.",
      color: "red"
    },
    {
      id: 6,
      icon: "fas fa-certificate",
      title: "Certification Programs",
      description: "Industry-recognized certifications to validate your skills and boost your career.",
      features: [
        "AWS Certification Prep",
        "Microsoft Azure Certification",
        "Python Certification",
        "Data Science Certification",
        "DevOps Certification",
        "ISTQB Certification"
      ],
      bestFor: "Professionals looking to get certified and advance their careers.",
      color: "teal"
    }
  ];

  const benefits = [
    { icon: "fas fa-user-tie", title: "Industry Expert Trainers", desc: "Learn from professionals with 10+ years of experience" },
    { icon: "fas fa-project-diagram", title: "Practical Learning", desc: "80% hands-on training with real-world projects" },
    { icon: "fas fa-calendar-alt", title: "Flexible Schedules", desc: "Weekday and weekend batches available" },
    { icon: "fas fa-briefcase", title: "Placement Assistance", desc: "100% job assistance with resume building" },
    { icon: "fas fa-chart-line", title: "Career Growth", desc: "Average salary hike of 50% after completion" },
    { icon: "fas fa-users", title: "Small Batches", desc: "Personalized attention with 5-10 students per batch" }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section with Background Image */}
        <section className="relative py-20 text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/services-bg.jpg"
              alt="Services Background"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.style.background = 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)';
                }
              }}
            />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl mb-2">Industry-Focused Training. Career-Driven Outcomes.</p>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">
              At Learnmore Technologies, we provide end-to-end learning and career solutions designed 
              to help students, professionals, and organizations succeed in the IT industry.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Our Learning & Career Solutions</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose from our comprehensive range of services designed to meet your learning and career goals
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                >
                  <div className={`bg-gradient-to-r ${
                    service.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    service.color === 'green' ? 'from-green-500 to-green-600' :
                    service.color === 'purple' ? 'from-purple-500 to-purple-600' :
                    service.color === 'orange' ? 'from-orange-500 to-orange-600' :
                    service.color === 'red' ? 'from-red-500 to-red-600' :
                    'from-teal-500 to-teal-600'
                  } p-6 text-white`}>
                    <i className={`${service.icon} text-4xl`}></i>
                    <h3 className="text-xl font-bold mt-3">{service.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    {activeService === service.id && (
                      <div className="animate-fadeIn">
                        <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                        <ul className="space-y-1 mb-4">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <i className="fas fa-check-circle text-green-500 text-xs mt-1"></i>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {service.technologies && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, idx) => (
                                <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">{tech}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {service.roles && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-800 mb-2">Job Roles:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.roles.map((role, idx) => (
                                <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">{role}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <p className="text-sm text-gray-500 mb-4">
                          <strong>Best For:</strong> {service.bestFor}
                        </p>
                      </div>
                    )}
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveService(activeService === service.id ? null : service.id);
                      }}
                      className="w-full mt-2 text-red-500 font-semibold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all"
                    >
                      {activeService === service.id ? 'Show Less' : 'Learn More'}
                      <i className={`fas fa-chevron-${activeService === service.id ? 'up' : 'down'} text-xs`}></i>
                    </button>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsModalOpen(true);
                      }}
                      className="w-full mt-3 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition text-sm"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Learnmore Technologies?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition group">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition">
                    <i className={`${benefit.icon} text-red-500 text-2xl group-hover:text-white transition`}></i>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
            <p className="text-center text-gray-600 mb-12">We're here to guide you at every step of your learning journey.</p>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-phone-alt text-red-500"></i> Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-phone text-red-500 mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">+91 9036524555</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-envelope text-red-500 mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">office.learnmore@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-map-marker-alt text-red-500 mt-1"></i>
                    <div>
                      <h4 className="font-semibold">Head Office</h4>
                      <p className="text-gray-600">Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 w-full bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
                >
                  Talk to Our Career Counselor
                </button>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-paper-plane text-red-500"></i> Send Us a Message
                </h3>
                <form id="contactForm" className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Full Name *</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Email Address *</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Service Interested In</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500">
                      <option value="">Select a service</option>
                      <option>Online Training</option>
                      <option>Offline Training</option>
                      <option>Corporate Training</option>
                      <option>Internship Program</option>
                      <option>Placement Support</option>
                      <option>Certification Programs</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Message *</label>
                    <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl mb-8">Get in touch with us today and take the first step toward your dream career</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
              >
                Enroll Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition">
                Book Free Demo
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