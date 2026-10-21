'use client';

import { useEnroll } from '@/context/EnrollContext';
import PlacementStudentCard from '@/components/common/PlacementStudentCard';

interface StudentPlacement {
  id?: number | string;
  name: string;
  role: string;
  company: string;
  course: string;
  package: string;
  image?: string;
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
      id: 1,
      name: 'Subham P',
      role: 'TEAM LEAD',
      company: 'TECH MAHINDRA',
      course: 'TEAM LEAD',
      package: '6.5 LPA',
      image: '/images/students/ram.webp',
    },
    {
      id: 2,
      name: 'Anmol P',
      role: 'Data Analyst',
      company: 'Accenture',
      course: 'Data Analytics',
      package: '5.2 LPA',
      image: '/images/students/anmol.webp',
    },
    {
      id: 3,
      name: 'Rohit Yadav',
      role: 'Snowflake developer',
      company: 'Bizmetric',
      course: 'Snowflake developer',
      package: '7.5 LPA',
      image: '/images/students/rohit.webp',
    },
    {
      id: 4,
      name: 'Priya Sharma',
      role: 'Data Analyst',
      company: 'Accenture',
      course: 'Data Analytics',
      package: '5.2 LPA',
      image: '/images/students/priya.webp',
    },
    {
      id: 5,
      name: 'kanzariya pratik',
      role: 'React Native Developer',
      company: 'Nexgen2AI',
      course: 'React Native',
      package: '5.2 LPA',
      image: '/images/students/pratik.webp',
    },
    {
      id: 6,
      name: 'Aditya Patel',
      role: 'Associate Applications Developer',
      company: 'DXC Technologies',
      course: 'AWS & DevOps',
      package: '4.5 LPA',
      image: '/images/students/aditya.webp',
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

        {/* Student Placement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {placements.map((student, idx) => (
            <PlacementStudentCard
              key={student.id || idx}
              student={student}
              onReadMore={() => openEnrollModal(`${student.name} - Placement Inquiry`)}
              onVisitCenter={() => openEnrollModal(`${student.name} - Placement Inquiry`)}
            />
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
              <p className="text-xs text-slate-500">Get dedicated placement support & 1-on-1 resume preparation.</p>
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
