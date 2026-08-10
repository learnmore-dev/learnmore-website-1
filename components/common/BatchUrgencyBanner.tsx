'use client';

import { useState, useEffect } from 'react';

interface BatchUrgencyBannerProps {
  batchDate?: string;
  seatsRemaining?: number;
}

export default function BatchUrgencyBanner({
  batchDate = 'Upcoming Monday',
  seatsRemaining = 5
}: BatchUrgencyBannerProps) {
  // Set initial countdown duration (e.g. 24 hours countdown loop for ad conversion urgency)
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-amber-500/15 via-red-500/15 to-amber-500/15 border border-amber-500/30 rounded-2xl p-3 sm:p-4 text-white shadow-lg my-4 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        
        {/* Left Side: Batch Info & Seats */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center flex-shrink-0 animate-pulse">
            <i className="fas fa-fire text-red-400 text-lg"></i>
          </div>
          <div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider animate-bounce">
                Google Ads Special Offer
              </span>
              <span className="text-amber-300 text-xs font-semibold flex items-center gap-1">
                <i className="fas fa-user-check text-[10px]"></i> Fast Filling Batch
              </span>
            </div>
            <p className="text-sm font-bold text-slate-100 mt-1">
              🚀 Next New Batch: <span className="text-amber-400 font-extrabold">{batchDate}</span>
              <span className="hidden sm:inline mx-1.5 text-slate-500">•</span>
              <span className="inline-block sm:inline bg-red-500/20 text-red-300 text-xs px-2 py-0.5 rounded border border-red-500/30 mt-1 sm:mt-0 font-mono">
                Only {seatsRemaining} Seats Left!
              </span>
            </p>
          </div>
        </div>

        {/* Right Side: Timer */}
        <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-700/60 shadow-inner flex-shrink-0">
          <span className="text-xs text-slate-400 font-medium mr-1 flex items-center gap-1">
            <i className="fas fa-clock text-amber-400 text-xs"></i> Offer Ends:
          </span>
          <div className="flex items-center gap-1 font-mono font-bold text-amber-400 text-sm">
            <span className="bg-slate-800 px-1.5 py-0.5 rounded text-white border border-slate-700">
              {String(timeLeft.hours).padStart(2, '0')}h
            </span>
            <span>:</span>
            <span className="bg-slate-800 px-1.5 py-0.5 rounded text-white border border-slate-700">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
            <span>:</span>
            <span className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-400 border border-slate-700 animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
