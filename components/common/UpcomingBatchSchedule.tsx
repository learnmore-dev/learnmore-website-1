'use client';

import { useState, useEffect } from 'react';
import { useEnroll } from '@/context/EnrollContext';

interface UpcomingBatchScheduleProps {
  courseName?: string;
}

interface Batch {
  startDate: string;
  batchType: string;
  time: string;
  status: string;
  statusColor: string;
}

function getOrdinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function formatDate(d: Date): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return `${getOrdinal(d.getDate())} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function getDynamicBatches(): Batch[] {
  const today = new Date();
  
  const addDays = (base: Date, days: number): Date => {
    const d = new Date(base);
    d.setDate(d.getDate() + days);
    return d;
  };

  const dayOfWeek = today.getDay(); // 0: Sun, 1: Mon, ...
  
  // Calculate next upcoming weekday batch (at least 2 days in future)
  let daysToMon = (1 + 7 - dayOfWeek) % 7;
  if (daysToMon <= 1) daysToMon += 7;
  
  const d1 = addDays(today, daysToMon);
  const d2 = addDays(d1, 2); // Wed
  
  // Calculate upcoming weekend batch
  let daysToSat = (6 + 7 - d2.getDay()) % 7;
  if (daysToSat === 0) daysToSat = 7;
  const d3 = addDays(d2, daysToSat); // Sat
  
  // Next weekday batch after weekend
  const d4 = addDays(d3, 2); // Mon

  return [
    {
      startDate: formatDate(d1),
      batchType: 'Weekdays (Mon-Fri)',
      time: '08:00 AM IST',
      status: 'Enrolling',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      startDate: formatDate(d2),
      batchType: 'Weekdays (Mon-Fri)',
      time: '10:00 AM IST',
      status: 'Enrolling',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      startDate: formatDate(d3),
      batchType: 'Weekend (Sat-Sun)',
      time: '11:00 AM IST',
      status: 'Limited Seats',
      statusColor: 'bg-amber-50 text-amber-700 border-amber-200 font-extrabold animate-pulse'
    },
    {
      startDate: formatDate(d4),
      batchType: 'Weekdays (Mon-Fri)',
      time: '06:00 PM IST',
      status: 'Available',
      statusColor: 'bg-blue-50 text-blue-700 border-blue-200'
    }
  ];
}

export default function UpcomingBatchSchedule({
  courseName = 'Training Program'
}: UpcomingBatchScheduleProps) {
  const { openEnrollModal } = useEnroll();
  const [batches, setBatches] = useState<Batch[]>(getDynamicBatches);

  useEffect(() => {
    setBatches(getDynamicBatches());
  }, []);

  return (
    <section className="py-16 bg-white text-slate-900 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider border border-red-200 mb-2">
            <i className="fas fa-calendar-alt text-red-600"></i> Batch Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Upcoming Batch Schedule
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Choose a batch that fits your schedule (Classroom & Instructor-Led Live Online)
          </p>
        </div>

        {/* Schedule Table (Desktop & Tablet) */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/80 border-b border-slate-200 text-xs font-extrabold uppercase tracking-wider text-slate-700">
                <th className="py-4 px-6">Start Date</th>
                <th className="py-4 px-6">Batch Type</th>
                <th className="py-4 px-6">Time</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {batches.map((batch, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition">
                  <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                    <i className="fas fa-calendar-check text-red-600"></i>
                    {batch.startDate}
                  </td>
                  <td className="py-4 px-6 text-slate-700 font-medium">
                    {batch.batchType}
                  </td>
                  <td className="py-4 px-6 text-slate-800 font-mono font-semibold">
                    <i className="far fa-clock text-amber-600 mr-1.5"></i>
                    {batch.time}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${batch.statusColor}`}>
                      {batch.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => openEnrollModal(`${courseName} - Batch ${batch.startDate}`)}
                      className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-md"
                    >
                      Reserve Seat
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Schedule Cards (Mobile View) */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {batches.map((batch, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <i className="fas fa-calendar-check text-red-600"></i>
                  {batch.startDate}
                </span>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${batch.statusColor}`}>
                  {batch.status}
                </span>
              </div>
              
              <div className="space-y-1.5 mb-4 text-sm">
                <p className="text-slate-900 font-semibold flex items-center gap-2">
                  <i className="fas fa-users text-slate-400 text-xs"></i>
                  {batch.batchType}
                </p>
                <p className="text-slate-700 font-mono text-xs flex items-center gap-2">
                  <i className="far fa-clock text-amber-600 text-xs"></i>
                  {batch.time}
                </p>
              </div>

              <button
                onClick={() => openEnrollModal(`${courseName} - Batch ${batch.startDate}`)}
                className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-md flex items-center justify-center gap-1.5"
              >
                <span>Reserve Seat Now</span>
                <i className="fas fa-arrow-right text-[10px]"></i>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
