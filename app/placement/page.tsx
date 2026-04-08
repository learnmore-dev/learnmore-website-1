'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnrollModal from '@/components/common/EnrollModal';
import placementsData from '@/data/placements.json';

export default function PlacementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { placements } = placementsData;
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('all');

  // Get unique courses for filter
  const courses = ['all', ...new Set(placements.map(p => p.course))];

  // Filter placements
  const filteredPlacements = placements.filter(placement => {
    const matchesSearch = placement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          placement.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          placement.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = filterCourse === 'all' || placement.course === filterCourse;
    return matchesSearch && matchesCourse;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-red-500">Placement Records</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly showcase the achievements of our students who have successfully 
              transitioned into rewarding IT careers through focused training and placement support.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-red-500">{placements.length}+</div>
              <div className="text-gray-500 text-sm">Students Placed</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-red-500">50+</div>
              <div className="text-gray-500 text-sm">Hiring Companies</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-red-500">95%</div>
              <div className="text-gray-500 text-sm">Placement Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-red-500">6.5 LPA</div>
              <div className="text-gray-500 text-sm">Highest Package</div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Search Student</label>
                <div className="relative">
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Search by name, company or role..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Filter by Course</label>
                <select
                  value={filterCourse}
                  onChange={(e) => setFilterCourse(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                >
                  {courses.map((course, idx) => (
                    <option key={idx} value={course}>
                      {course === 'all' ? 'All Courses' : course}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Placement Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredPlacements.map((student) => (
              <div key={student.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
                <div className="flex p-5 gap-4">
                  {/* Student Image */}
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-r from-red-500 to-red-600 flex-shrink-0">
                    {student.image ? (
                      <Image
                        src={student.image}
                        alt={student.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white text-2xl font-bold">${student.initial}</div>`;
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                        {student.initial || student.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  {/* Student Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-500 transition">
                      {student.name}
                    </h3>
                    <p className="text-red-500 text-sm font-semibold">{student.role}</p>
                    <p className="text-gray-600 text-sm flex items-center gap-1 mt-1">
                      <i className="fas fa-building text-gray-400 text-xs"></i> {student.company}
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                      <i className="fas fa-graduation-cap text-gray-400 text-xs"></i> {student.course}
                    </p>
                    <div className="mt-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {student.package}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* If no results */}
          {filteredPlacements.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-user-graduate text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500">No placement records found matching your criteria.</p>
            </div>
          )}

          {/* Placement Process Section */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">How We Help Students Get Placed</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-code text-red-500 text-2xl"></i>
                </div>
                <h3 className="font-semibold mb-2">Skill Development</h3>
                <p className="text-gray-500 text-sm">Industry-aligned curriculum with hands-on projects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-file-alt text-red-500 text-2xl"></i>
                </div>
                <h3 className="font-semibold mb-2">Resume Building</h3>
                <p className="text-gray-500 text-sm">ATS-friendly resume with portfolio projects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-microphone text-red-500 text-2xl"></i>
                </div>
                <h3 className="font-semibold mb-2">Interview Preparation</h3>
                <p className="text-gray-500 text-sm">Mock interviews and technical Q&A sessions</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Want to Be on This List?</h2>
            <p className="mb-6">Join Learnmore Technologies and take the next step toward your IT career.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/course" className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Explore Courses
              </Link>
              <button onClick={() => setIsModalOpen(true)} className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">
                Talk to Advisor
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}