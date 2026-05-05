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

  // Icon color mapping for gradient backgrounds
  const iconGradients: Record<string, string> = {
    'fab fa-python': 'from-blue-500 to-blue-700',
    'fas fa-chart-line': 'from-green-500 to-teal-600',
    'fab fa-aws': 'from-orange-500 to-red-600',
    'fas fa-bug': 'from-red-500 to-red-700',
    'fas fa-database': 'from-teal-500 to-cyan-600',
    'fas fa-brain': 'from-purple-500 to-pink-600',
    'fab fa-java': 'from-orange-500 to-red-600',
    'fas fa-chart-bar': 'from-green-500 to-teal-600',
    'fas fa-shield-alt': 'from-red-500 to-red-700',
    'fas fa-code': 'from-indigo-500 to-purple-600',
    'fas fa-cloud': 'from-cyan-500 to-blue-600',
    'fas fa-bullhorn': 'from-orange-500 to-yellow-600',
  };

  // Job Opportunities Data
  const jobOpportunities = [
    { title: "Python Developer", icon: "fab fa-python", salary: "₹4-12 LPA", openings: "5,000+", color: "from-blue-500 to-blue-700", companies: "Google, Amazon, Microsoft, TCS" },
    { title: "Cloud Engineer", icon: "fab fa-aws", salary: "₹5-15 LPA", openings: "3,000+", color: "from-orange-500 to-red-600", companies: "AWS, Azure, Google Cloud, IBM" },
    { title: "Data Scientist", icon: "fas fa-brain", salary: "₹6-18 LPA", openings: "2,000+", color: "from-purple-500 to-pink-600", companies: "Amazon, Flipkart, Uber, Microsoft" },
    { title: "Java Full Stack Developer", icon: "fab fa-java", salary: "₹4-14 LPA", openings: "4,000+", color: "from-orange-500 to-red-600", companies: "Infosys, TCS, Wipro, Accenture" },
    { title: "DevOps Engineer", icon: "fas fa-cogs", salary: "₹5-16 LPA", openings: "3,500+", color: "from-purple-500 to-pink-600", companies: "Amazon, Google, Microsoft, IBM" },
    { title: "Data Analyst", icon: "fas fa-chart-line", salary: "₹3-10 LPA", openings: "6,000+", color: "from-green-500 to-teal-600", companies: "Accenture, Deloitte, TCS, Infosys" },
  ];

  // Blog Data
  const blogs = [
    { title: "15 Features Of Python That Make Everyone Love It", category: "Python", date: "Apr 15, 2026", readTime: "5 min", icon: "fab fa-python", color: "from-blue-500 to-blue-700" },
    { title: "Cloud Computing Trends in 2026", category: "Cloud", date: "Apr 12, 2026", readTime: "7 min", icon: "fas fa-cloud", color: "from-cyan-500 to-blue-600" },
    { title: "Data Science Career Guide", category: "Data Science", date: "Apr 10, 2026", readTime: "10 min", icon: "fas fa-chart-line", color: "from-green-500 to-teal-600" },
    { title: "DevOps Best Practices", category: "DevOps", date: "Apr 8, 2026", readTime: "8 min", icon: "fas fa-cogs", color: "from-purple-500 to-pink-600" },
    { title: "AWS vs Azure vs GCP", category: "Cloud", date: "Apr 3, 2026", readTime: "12 min", icon: "fas fa-cloud-upload-alt", color: "from-cyan-500 to-blue-600" },
    { title: "Full Stack Development Roadmap", category: "Web", date: "Mar 20, 2026", readTime: "10 min", icon: "fas fa-code", color: "from-indigo-500 to-purple-600" },
  ];

  // FAQ Data
  const faqs = [
    { q: "Why should I learn from Learnmore Technologies?", a: "We offer industry-expert trainers, hands-on projects, placement assistance, and flexible batch timings. Our curriculum is designed by professionals currently working in top MNCs." },
    { q: "Do you offer placement assistance after course completion?", a: "Yes, we provide 100% placement assistance including resume building, mock interviews, and direct referrals to our 50+ hiring partner companies." },
    { q: "What if I miss a session?", a: "We provide recorded sessions for all classes. You can access them anytime through our learning portal." },
    { q: "What certification will I receive?", a: "You'll receive an industry-recognized certificate from Learnmore Technologies, valid for job applications worldwide." },
    { q: "Are there EMI options available?", a: "Yes, we offer flexible EMI options with 0% interest for eligible students." },
  ];

  // Upcoming Batches
  const batches = [
    { date: "27th April 2026", type: "Weekdays (Mon-Fri)", time: "08:00 AM IST", status: "Enrolling", statusColor: "green" },
    { date: "23rd April 2026", type: "Weekdays (Mon-Fri)", time: "08:00 AM IST", status: "Limited Seats", statusColor: "yellow" },
    { date: "25th April 2026", type: "Weekend (Sat-Sun)", time: "11:00 AM IST", status: "Available", statusColor: "green" },
    { date: "2nd May 2026", type: "Weekdays (Mon-Fri)", time: "06:00 PM IST", status: "Coming Soon", statusColor: "blue" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
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
                <span className="font-semibold text-white">{courses.length}+</span>
                <span className="text-gray-200 ml-2">Professional Courses</span>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-full px-6 py-2">
                <span className="font-semibold text-white">5000+</span>
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
              {courses.map((course: any, idx: number) => (
                <Link 
                  key={course.id} 
                  href={`/course/${course.slug}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block"
                >
                  {/* Card Image Section */}
                  <div className={`relative h-48 overflow-hidden bg-gradient-to-r ${iconGradients[course.icon] || 'from-red-500 to-red-700'}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <i className={`${course.icon} text-4xl text-white`}></i>
                      </div>
                    </div>
                    {idx < 3 && (
                      <span className="absolute top-4 left-4 bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-full z-10">
                        Most Popular
                      </span>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-red-500 transition line-clamp-1">
                      {course.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                      {course.shortDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.tools.slice(0, 3).map((tool: string, tidx: number) => (
                        <span key={tidx} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
                          {tool}
                        </span>
                      ))}
                      {course.tools.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
                          +{course.tools.length - 3}
                        </span>
                      )}
                    </div>
                    
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
                    
                    <div className="mt-4 text-red-500 font-medium flex items-center justify-between group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </Link>
              ))}
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

        {/* Job Opportunities Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Job Opportunities in <span className="text-red-500">Technology</span></h2>
              <p className="text-gray-600">High-demand roles with competitive salaries</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobOpportunities.map((job, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${job.color} rounded-full flex items-center justify-center`}>
                      <i className={`${job.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{job.title}</h3>
                      <p className="text-gray-500 text-sm">{job.salary} • {job.openings} openings</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs">Top companies: {job.companies}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Batch Schedule Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Upcoming <span className="text-red-500">Batch Schedule</span></h2>
              <p className="text-gray-600">Choose a batch that fits your schedule</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md">
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Meet Our <span className="text-red-500">Expert Trainers</span></h2>
              <p className="text-gray-600">Learn from industry professionals with real-world experience</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-md">
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
              <p className="text-gray-600">Find answers to common questions about our courses</p>
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
                  <div className={`h-32 bg-gradient-to-r ${blog.color} flex items-center justify-center`}>
                    <i className={`${blog.icon} text-5xl text-white/40`}></i>
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
      </main>
      <Footer />
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}