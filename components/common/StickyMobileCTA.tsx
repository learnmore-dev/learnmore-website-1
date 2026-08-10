'use client';

import { useEnroll } from '@/context/EnrollContext';

interface StickyMobileCTAProps {
  courseName?: string;
  phoneNumber?: string;
  whatsappNumber?: string;
}

export default function StickyMobileCTA({
  courseName = 'Training Course',
  phoneNumber = '+919108365851',
  whatsappNumber = '919108365851'
}: StickyMobileCTAProps) {
  const { openEnrollModal } = useEnroll();

  const encodedMessage = encodeURIComponent(
    `Hi LearnMore Technologies, I am interested in ${courseName}. Please share batch timings and fee details.`
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 px-3 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-3 gap-2 items-center">
        {/* Call Now */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-1.5 bg-blue-600 active:bg-blue-700 text-white py-2.5 px-2 rounded-xl text-xs font-bold transition shadow-md"
          aria-label="Call Now"
        >
          <i className="fas fa-phone-alt text-sm animate-pulse"></i>
          <span>Call Now</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-emerald-600 active:bg-emerald-700 text-white py-2.5 px-2 rounded-xl text-xs font-bold transition shadow-md"
          aria-label="WhatsApp Us"
        >
          <i className="fab fa-whatsapp text-base text-emerald-200"></i>
          <span>WhatsApp</span>
        </a>

        {/* Enquire Modal */}
        <button
          onClick={() => openEnrollModal()}
          className="flex items-center justify-center gap-1 bg-gradient-to-r from-red-600 to-rose-600 active:from-red-700 active:to-rose-700 text-white py-2.5 px-2 rounded-xl text-xs font-bold transition shadow-md"
        >
          <i className="fas fa-edit text-xs"></i>
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
}
