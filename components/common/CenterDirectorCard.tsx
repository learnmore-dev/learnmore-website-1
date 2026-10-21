'use client';

import { useState } from 'react';

export interface DirectorCardItem {
  id?: number | string;
  name: string;
  title: string; // e.g. Technoglobe - Mainpuri - Uttar Pradesh
  message: string;
  image?: string;
  readMoreLink?: string;
  visitCenterLink?: string;
  onReadMore?: () => void;
  onVisitCenter?: () => void;
}

export default function CenterDirectorCard({
  director = {
    name: 'Mr. Ajit Kumar Yadav',
    title: 'Technoglobe - Mainpuri - Uttar Pradesh',
    message: 'As the Center Director of Mainpuri Technoglobe, I would like to express my sincere appreciation to the entire team for empowering students with high quality IT skill training.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80',
  }
}: { director?: DirectorCardItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-[#186EF2] text-white rounded-[2.5rem] p-7 sm:p-9 shadow-2xl hover:shadow-3xl transition-all duration-300 flex flex-col items-center text-center max-w-md w-full mx-auto border-2 border-blue-400/40 group">
      {/* Large Circular Profile Avatar with Dark Ring */}
      <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-slate-900/60 shadow-2xl relative bg-blue-900/40 flex items-center justify-center flex-shrink-0">
        {director.image && !imgError ? (
          <img
            src={director.image}
            alt={director.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-blue-900 text-white font-black text-4xl sm:text-5xl flex items-center justify-center">
            {director.name ? director.name.charAt(0) : 'D'}
          </div>
        )}
      </div>

      {/* Director Name (Large) */}
      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-6 font-sans leading-tight">
        {director.name}
      </h3>

      {/* Subtitle / Center Location */}
      <p className="text-white/95 text-sm sm:text-base font-bold tracking-wide mt-2 px-2">
        {director.title}
      </p>

      {/* Description Quote (Spacious & Clear) */}
      <p className="text-white/90 text-sm sm:text-base font-medium mt-4 px-2 sm:px-4 line-clamp-4 leading-relaxed">
        "{director.message}"
      </p>

      {/* Action Buttons Row (Large & Prominent) */}
      <div className="flex items-center justify-center gap-3.5 mt-8 w-full pt-2">
        <button
          onClick={director.onReadMore}
          className="flex-1 bg-black hover:bg-slate-900 active:scale-95 text-white font-black text-sm sm:text-base px-5 py-3 rounded-2xl shadow-xl transition-all duration-200 text-center tracking-wide"
        >
          Read More
        </button>
        <button
          onClick={director.onVisitCenter}
          className="flex-1 bg-[#00C853] hover:bg-[#00B048] active:scale-95 text-white font-black text-sm sm:text-base px-5 py-3 rounded-2xl shadow-xl transition-all duration-200 text-center tracking-wide"
        >
          Visit Center
        </button>
      </div>
    </div>
  );
}
