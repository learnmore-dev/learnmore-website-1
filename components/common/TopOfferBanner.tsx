'use client';

import Link from 'next/link';
import { useState } from 'react';
import offersData from '@/data/offers.json';

export default function TopOfferBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { topBanner } = offersData;

  if (!topBanner.show || !isVisible) return null;

  return (
    <div className={`bg-gradient-to-r ${topBanner.bgColor} text-white py-2 px-4 relative z-50 overflow-hidden`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left side - Gift Icon */}
        <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0 z-10 bg-gradient-to-r from-red-600 via-red-600/90 to-transparent pr-3">
          <i className="fas fa-gift text-yellow-300 text-xs animate-pulse"></i>
          <span className="text-xs font-bold tracking-wide">
            Limited Time Offer!
          </span>
        </div>

        {/* Center - Offer Text (Smooth Sliding Marquee) */}
        <div className="flex-1 overflow-hidden relative py-0.5">
          <div className="inline-block whitespace-nowrap animate-top-marquee">
            <Link href={topBanner.link} className="hover:opacity-90 transition inline-flex items-center gap-3 text-xs sm:text-sm font-medium">
              <span>
                🔥 Get <strong className="font-extrabold text-yellow-300">30% OFF</strong> on all courses! 
                Use Code: <span className="font-mono bg-white/20 px-2 py-0.5 rounded font-bold text-white">EARLY30</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold shadow-xs">
                Grab Deal <i className="fas fa-arrow-right text-[9px]"></i>
              </span>
            </Link>
          </div>
        </div>

        {/* Right side - Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="text-white/70 hover:text-white transition text-xs px-1 flex-shrink-0 font-bold z-10 bg-gradient-to-l from-purple-700 via-purple-700/90 to-transparent pl-3"
          aria-label="Close Announcement"
        >
          ✕
        </button>
      </div>

      <style jsx>{`
        @keyframes topMarquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-top-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: topMarquee 18s linear infinite;
        }
        .animate-top-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}