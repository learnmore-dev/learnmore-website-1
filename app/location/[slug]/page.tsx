'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnrollModal from '@/components/common/EnrollModal';
import locationsData from '@/data/locations.json';

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = locationsData.locations.find(l => l.slug === params.slug);
  
  if (!location) {
    notFound();
  }
  
  // Ensure courses is always an array
  const coursesList = location.courses || [];
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link href="/location" className="inline-flex items-center gap-2 text-red-600 mb-6 hover:underline">
            <i className="fas fa-arrow-left"></i> Back to All Locations
          </Link>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8">
              <div className="flex items-center gap-3 mb-2">
                <i className="fas fa-map-marker-alt text-3xl"></i>
                <h1 className="text-3xl font-bold">{location.name}</h1>
              </div>
              <p className="text-red-100">Training Center</p>
            </div>
            
            {/* Details */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">About This Center</h2>
                <p className="text-gray-600">{location.description || `Our ${location.name} center offers world-class IT training with state-of-the-art facilities and expert trainers.`}</p>
              </div>
              
              {/* Contact Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-location-dot text-red-500"></i> Address
                  </h3>
                  <p className="text-gray-600">{location.address || `Coming soon in ${location.name}`}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-clock text-red-500"></i> Timings
                  </h3>
                  <p className="text-gray-600">{location.timings || 'Mon-Sat: 9:00 AM - 9:00 PM, Sun: 10:00 AM - 6:00 PM'}</p>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <i className="fas fa-phone text-red-500 text-xl mt-1"></i>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">{location.phone || 'Contact us for details'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fas fa-envelope text-red-500 text-xl mt-1"></i>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">{location.email || `info@learnmore.com`}</p>
                  </div>
                </div>
              </div>
              
              {/* Courses Available */}
              <div className="border-t pt-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <i className="fas fa-graduation-cap text-red-500"></i> Courses Available Here
                </h2>
                {coursesList && coursesList.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {coursesList.map((course: string, index: number) => {
                      const slug = course.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
                      return (
                        <Link
                          key={index}
                          href={`/course/${slug}`}
                          className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-100 transition"
                        >
                          {course}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-gray-500">Courses details coming soon. Contact us for more information.</p>
                )}
              </div>
              
              {/* Country/Continent Info for International Locations */}
              {(location.country || location.continent) && (
                <div className="border-t pt-6 mb-8">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <i className="fas fa-globe text-red-500"></i> Location Info
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {location.country && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-gray-500 text-sm">Country</p>
                        <p className="font-semibold">{location.country}</p>
                      </div>
                    )}
                    {location.continent && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-gray-500 text-sm">Continent</p>
                        <p className="font-semibold">{location.continent}</p>
                      </div>
                    )}
                    {location.timezone && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-gray-500 text-sm">Timezone</p>
                        <p className="font-semibold">{location.timezone}</p>
                      </div>
                    )}
                    {location.currency && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-gray-500 text-sm">Currency</p>
                        <p className="font-semibold">{location.currency}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Map Button */}
              {location.mapUrl && (
                <div className="border-t pt-6">
                  <a 
                    href={location.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
                  >
                    <i className="fas fa-map-marked-alt text-red-500 text-xl"></i>
                    <span>Open in Google Maps</span>
                    <i className="fas fa-external-link-alt text-sm"></i>
                  </a>
                </div>
              )}
              
              {/* Enroll CTA */}
              <div className="mt-8 bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Want to join us at {location.name}?</h3>
                <p className="text-gray-600 mb-4">Visit our center or contact us to book a free demo class</p>
                <div className="flex gap-4 justify-center">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                  >
                    Book Free Demo
                  </button>
                  <a 
                    href={`tel:${location.phone || '+919036524555'}`} 
                    className="border border-red-500 text-red-500 px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}