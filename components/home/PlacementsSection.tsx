'use client';

import Link from 'next/link';
import PlacementStudentCard from '@/components/common/PlacementStudentCard';

interface Placement {
  id: number;
  name: string;
  course: string;
  company: string;
  role: string;
  package: string;
  image?: string;
}

interface PlacementsSectionProps {
  placements: Placement[];
}

export default function PlacementsSection({ placements }: PlacementsSectionProps) {
  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-4">Recently Placed Students</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          We're proud to celebrate the success of our learners who achieved their dream careers through focused training and personalized support.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placements.slice(0, 6).map((student) => (
            <PlacementStudentCard key={student.id} student={student} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/placement" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition">
            View All Placements <i className="fas fa-arrow-right ml-1"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}