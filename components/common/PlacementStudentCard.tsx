'use client';

import { useState } from 'react';

export interface StudentPlacementItem {
  id?: number | string;
  name: string;
  role: string;
  company: string;
  course?: string;
  package: string;
  image?: string;
  onReadMore?: () => void;
  onVisitCenter?: () => void;
}

export default function PlacementStudentCard({
  student,
  onReadMore,
  onVisitCenter
}: {
  student: StudentPlacementItem;
  onReadMore?: () => void;
  onVisitCenter?: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  // Background fallback avatar initials generator
  const initial = student.name ? student.name.trim().charAt(0).toUpperCase() : 'S';
  const displayCourse = student.course || student.role || 'IT Training Program';

  return (
    <div className="bg-[#186EF2] text-white rounded-[2rem] p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center max-w-sm w-full mx-auto border border-blue-400/30 group relative">
      {/* Top Center Circular Profile Avatar with Dark Ring */}
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-slate-900/60 shadow-2xl relative bg-blue-900/40 flex items-center justify-center flex-shrink-0 mx-auto">
        {student.image && !imgError ? (
          <img
            src={student.image}
            alt={student.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-blue-900 text-white font-black text-3xl sm:text-4xl flex items-center justify-center">
            {initial}
          </div>
        )}
      </div>

      {/* Student Name */}
      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-4 sm:mt-5 font-sans leading-snug">
        {student.name}
      </h3>

      {/* Role / Designation (Vibrant Highlight) */}
      <p className="text-amber-300 text-xs sm:text-sm font-extrabold uppercase tracking-wider mt-1">
        {student.role}
      </p>

      {/* Company Name */}
      <p className="text-white/95 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 mt-2">
        <i className="fas fa-building text-blue-200 text-xs"></i>
        <span>{student.company}</span>
      </p>

      {/* Course Name */}
      <p className="text-white/80 text-xs font-medium flex items-center justify-center gap-1.5 mt-1">
        <i className="fas fa-graduation-cap text-blue-200 text-xs"></i>
        <span>{displayCourse}</span>
      </p>

      {/* Green CTC Package Pill Badge */}
      <div className="mt-3.5">
        <span className="inline-block bg-[#00C853] text-white font-black px-4 py-1.5 rounded-full text-xs sm:text-sm shadow-md border border-emerald-400/50">
          💰 {student.package}
        </span>
      </div>

      {/* Bottom Action Buttons Row */}
      <div className="flex items-center justify-center gap-3 mt-6 w-full pt-1">
        <button
          onClick={onReadMore}
          className="flex-1 bg-black hover:bg-slate-900 active:scale-95 text-white font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all duration-200 text-center"
        >
          Read More
        </button>
        <button
          onClick={onVisitCenter}
          className="flex-1 bg-[#00C853] hover:bg-[#00B048] active:scale-95 text-white font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all duration-200 text-center"
        >
          Visit Center
        </button>
      </div>
    </div>
  );
}
