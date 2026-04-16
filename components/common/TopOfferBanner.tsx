'use client';

import Link from 'next/link';
import { useState } from 'react';
import offersData from '@/data/offers.json';

export default function TopOfferBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { topBanner } = offersData;

  if (!topBanner.show || !isVisible) return null;

  return (
    <div className={`bg-gradient-to-r ${topBanner.bgColor} text-white py-2.5 px-4 relative z-50`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          {/* Left side - Gift Icon */}
          <div className="flex items-center gap-2">
            <i className="fas fa-gift text-yellow-300 text-sm animate-pulse"></i>
            <span className="text-xs md:text-sm font-medium">
              🎉 Limited Time Offer!
            </span>
          </div>

          {/* Center - Offer Text (This will move left to right) */}
          <div className="flex-1 text-center overflow-hidden">
            <div className="inline-block whitespace-nowrap animate-marquee">
              <Link href={topBanner.link} className="hover:opacity-90 transition inline-flex items-center gap-3">
                <span className="text-sm md:text-base font-medium">
                  🔥 Get <span className="font-bold">30% OFF</span> on all courses! 
                  Use Code: <span className="font-mono bg-white/20 px-2 py-0.5 rounded">EARLY30</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                  Grab Deal <i className="fas fa-arrow-right text-xs"></i>
                </span>
              </Link>
            </div>
          </div>

          {/* Right side - Close Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white/70 hover:text-white transition text-sm px-2"
          >
            ✕
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee 15s linear infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}