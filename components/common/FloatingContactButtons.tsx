'use client';

export default function FloatingContactButtons() {
  const phoneNumber = '+919036524555';
  const whatsappUrl = 'https://wa.me/919036524555';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5">
      {/* Phone Call Floating Button (Proper Natural Orientation & Vibrant Red Style) */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call LearnMore Technologies"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/90"
      >
        {/* Animated Ripple Pulse */}
        <span className="absolute inset-0 rounded-full bg-red-400 opacity-40 animate-ping"></span>
        
        {/* Phone Handset SVG with Natural Calling Angle */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-white relative z-10 transition-transform duration-300 group-hover:rotate-12"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
        </svg>

        {/* Hover Tooltip on Left */}
        <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap shadow-lg backdrop-blur-sm border border-slate-700">
          Call: +91 9036524555
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/90"
      >
        {/* Animated Ripple Pulse */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-40 animate-ping"></span>
        
        {/* WhatsApp Icon */}
        <i className="fab fa-whatsapp text-2xl sm:text-3xl relative z-10"></i>

        {/* Hover Tooltip on Left */}
        <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap shadow-lg backdrop-blur-sm border border-slate-700">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
