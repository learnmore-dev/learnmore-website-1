'use client';

import { useEnroll } from '@/context/EnrollContext';

interface StudentPlacement {
  name: string;
  role: string;
  company: string;
  package: string;
  image: string;
  badge?: string;
}

interface RecentPlacementsSectionProps {
  courseName?: string;
}

export default function RecentPlacementsSection({
  courseName = 'Training Program'
}: RecentPlacementsSectionProps) {
  const { openEnrollModal } = useEnroll();

  const placements: StudentPlacement[] = [
    {
      name: 'Rohan Verma',
      role: 'Full Stack Developer',
      company: 'Accenture',
      package: '6.5 LPA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      badge: 'Placed Recently'
    },
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      company: 'Capgemini',
      package: '5.8 LPA',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      badge: 'Placed Recently'
    },
    {
      name: 'Karthik Raja',
      role: 'AWS Cloud Engineer',
      company: 'Wipro',
      package: '7.5 LPA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      badge: 'Placed Recently'
    },
    {
      name: 'Sneha Kulkarni',
      role: 'Data Analyst',
      company: 'Deloitte',
      package: '7.2 LPA',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      badge: 'Placed Recently'
    }
  ];

  const hiringLogos = [
    { name: 'Accenture', logo: '/images/companies/accenture.webp' },
    { name: 'TCS', logo: '/images/companies/tcs.webp' },
    { name: 'Infosys', logo: '/images/companies/infosys.webp' },
    { name: 'Wipro', logo: '/images/companies/wipro.webp' },
    { name: 'Cognizant', logo: '/images/companies/cognizant.webp' },
    { name: 'IBM', logo: '/images/companies/ibm.webp' },
    { name: 'Amazon', logo: '/images/companies/amazon.webp' },
    { name: 'Microsoft', logo: '/images/companies/microsoft.webp' }
  ];

  return (
    <section className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold uppercase tracking-wider border border-emerald-200 mb-2">
            <i className="fas fa-briefcase text-emerald-600"></i> 100% Placement Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Recent Placements
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Our students placed in top IT companies & MNCs with high salary packages
          </p>
        </div>

        {/* Student Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {placements.map((student, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-3xl p-5 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Top Row: Avatar & Salary Package */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 shadow-md"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-sm">
                      💰 {student.package}
                    </span>
                    <p className="text-[10px] text-slate-500 font-semibold mt-1">Salary Package</p>
                  </div>
                </div>

                {/* Student Info */}
                <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                  {student.name}
                </h3>
                <p className="text-xs text-blue-600 font-bold mb-3">
                  {student.role}
                </p>

                {/* Company Tag */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-500 font-medium">Placed At:</span>
                  <span className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                    <i className="fas fa-building text-amber-600 text-xs"></i>
                    {student.company}
                  </span>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-semibold">
                <span><i className="fas fa-check-circle text-emerald-600 mr-1"></i> Verified Placement</span>
                <span className="text-slate-400">2026 Batch</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Partners Logos */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 text-center shadow-md">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-6">
            Top Hiring Companies Recruited Our Students
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {hiringLogos.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-center hover:border-slate-300 transition">
                <span className="text-xs font-bold text-slate-800 tracking-wide">{item.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-bold text-slate-900">Want to be our next success story?</p>
              <p className="text-xs text-slate-500">Get guaranteed placement calls & 1-on-1 resume preparation.</p>
            </div>
            <button
              onClick={() => openEnrollModal(`${courseName} - Placement Inquiry`)}
              className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold px-6 py-3 rounded-xl shadow-lg transition text-xs tracking-wide flex items-center gap-2"
            >
              <i className="fas fa-user-graduate"></i> Get Placement Guidance Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
