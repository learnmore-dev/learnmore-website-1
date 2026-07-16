'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnrollModal from '@/components/common/EnrollModal';
import itServicesData from '@/data/itServices.json';
import siteConfig from '@/data/siteConfig.json';

export default function ITServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { itServices } = itServicesData;
  const { contact } = siteConfig;

  // Filter services for BTM
  const btmServices = itServices.filter(service => service.location === "BTM");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">IT Services - BTM Layout</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We offer comprehensive IT training programs at our BTM Layout center. Choose from our wide range of courses.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {btmServices.map((service: any) => (
              <a 
                key={service.id}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition group"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-red-500 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500 transition">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <div className="mt-4 text-red-500 font-medium flex items-center gap-1">
                  Learn More <i className="fas fa-arrow-right"></i>
                </div>
              </a>
            ))}
          </div>
          
          {/* Location Info */}
          <div className="mt-12 bg-white rounded-xl p-8 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">📍 BTM Layout Training Center</h2>
            <p className="text-gray-600 mb-2">BTM 1st Stage, Near Jayadeva Hospital, Bangalore - 560029</p>
            <p className="text-gray-600 mb-4">Contact: +91 90365 42555</p>
            <a 
              href="https://maps.google.com/?q=BTM+Layout+Bangalore" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
            >
              <i className="fas fa-map-marker-alt"></i> Get Directions
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}