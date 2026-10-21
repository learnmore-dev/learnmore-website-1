'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import UpcomingBatchSchedule from '@/components/common/UpcomingBatchSchedule';
import RecentPlacementsSection from '@/components/common/RecentPlacementsSection';
import CenterDirectorCard from '@/components/common/CenterDirectorCard';
import PlacementStudentCard from '@/components/common/PlacementStudentCard';
import { useEnroll } from '@/context/EnrollContext';
import coursesData from '@/data/courses.json';
import placementsData from '@/data/placements.json';
import testimonialsData from '@/data/testimonials.json';

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// Tech Vector Illustrations for Course Cards
const CourseIllustration = ({ type }: { type: string }) => {
  if (type === 'accounting') {
    return (
      <svg className="w-full h-44 max-w-[280px]" viewBox="0 0 260 160" fill="none">
        <rect x="25" y="20" width="210" height="115" rx="14" fill="white" fillOpacity="0.18" stroke="white" strokeWidth="2.5" />
        <circle cx="65" cy="80" r="14" fill="white" />
        <path d="M45 125c0-15 10-22 20-22s20 7 20 22" fill="white" />
        <rect x="75" y="95" width="40" height="22" rx="4" fill="#FFCC80" />
        <path d="M70 117h50" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <rect x="125" y="35" width="95" height="65" rx="8" fill="white" fillOpacity="0.25" />
        <path d="M135 85 L155 65 L175 75 L205 45" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="190" cy="105" r="18" fill="#FF7043" />
        <text x="190" y="112" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">%</text>
      </svg>
    );
  }
  if (type === 'data') {
    return (
      <svg className="w-full h-44 max-w-[280px]" viewBox="0 0 260 160" fill="none">
        <rect x="20" y="15" width="220" height="125" rx="14" fill="white" fillOpacity="0.18" stroke="white" strokeWidth="2.5" />
        <line x1="30" y1="50" x2="230" y2="50" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="30" y1="85" x2="230" y2="85" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="65" cy="75" r="28" fill="none" stroke="white" strokeWidth="12" strokeOpacity="0.3" />
        <path d="M65 47 A28 28 0 1 1 37 75" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" />
        <circle cx="130" cy="65" r="12" fill="#FFD54F" />
        <path d="M115 105c0-12 7-18 15-18s15 6 15 18" fill="#FFD54F" />
        <rect x="165" y="70" width="14" height="40" rx="3" fill="white" />
        <rect x="185" y="50" width="14" height="60" rx="3" fill="white" />
        <rect x="205" y="35" width="14" height="75" rx="3" fill="white" />
      </svg>
    );
  }
  if (type === 'datascience') {
    return (
      <svg className="w-full h-44 max-w-[280px]" viewBox="0 0 260 160" fill="none">
        <path d="M60 115h140a35 35 0 0 0 0-70 50 50 0 0 0-96-12 35 35 0 0 0-44 82z" fill="white" fillOpacity="0.25" />
        <circle cx="130" cy="65" r="24" fill="#1565C0" stroke="white" strokeWidth="3" />
        <circle cx="130" cy="58" r="8" fill="white" />
        <path d="M118 78c0-8 5-12 12-12s12 4 12 12" fill="white" />
        <rect x="205" y="65" width="30" height="40" rx="4" fill="white" fillOpacity="0.9" />
        <path d="M212 75h16M212 85h12M212 95h16" stroke="#E5A100" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="55" cy="60" r="10" fill="white" />
        <path d="M55 54v12M49 60h12" stroke="#E5A100" strokeWidth="2" />
      </svg>
    );
  }
  if (type === 'ai') {
    return (
      <svg className="w-full h-44 max-w-[280px]" viewBox="0 0 260 160" fill="none">
        <circle cx="130" cy="80" r="50" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2.5" />
        <circle cx="130" cy="80" r="32" fill="white" fillOpacity="0.9" />
        <circle cx="118" cy="75" r="5" fill="#00BFA5" />
        <circle cx="142" cy="75" r="5" fill="#00BFA5" />
        <path d="M122 93q8 8 16 0" stroke="#00BFA5" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M130 48V32M105 38l-10-10M155 38l10-10" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === 'cloud') {
    return (
      <svg className="w-full h-44 max-w-[280px]" viewBox="0 0 260 160" fill="none">
        <path d="M70 115h120a35 35 0 0 0 0-70 45 45 0 0 0-86-12 30 30 0 0 0-34 82z" fill="white" fillOpacity="0.9" />
        <path d="M130 60v35M115 80l15 15 15-15" stroke="#059669" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === 'security') {
    return (
      <svg className="w-full h-44 max-w-[280px]" viewBox="0 0 260 160" fill="none">
        <path d="M130 25L65 52v42c0 38 65 55 65 55s65-17 65-55V52L130 25z" fill="white" fillOpacity="0.9" />
        <path d="M130 60v38M112 82h36" stroke="#E11D48" strokeWidth="4.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className="w-full h-44 max-w-[280px]" viewBox="0 0 260 160" fill="none">
      <rect x="25" y="20" width="210" height="115" rx="12" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2.5" />
      <path d="M80 60L50 80l30 20M180 60l30 20-30 20M145 52l-30 56" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

// Affiliations Logo Component
const AffiliationLogo = ({ name }: { name: string }) => {
  if (name === 'nsdc') {
    return (
      <svg className="h-12 w-auto max-w-[170px]" viewBox="0 0 180 50" fill="none">
        <circle cx="25" cy="18" r="4" fill="#E53935" />
        <circle cx="15" cy="28" r="4" fill="#43A047" />
        <circle cx="35" cy="28" r="4" fill="#1E88E5" />
        <path d="M25 22L15 32M25 22L35 32M25 22V38" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        <text x="50" y="28" fill="#1A237E" fontSize="18" fontWeight="bold">N·S·D·C</text>
        <text x="50" y="42" fill="#666" fontSize="8" fontWeight="bold">National Skill Development</text>
      </svg>
    );
  }
  if (name === 'skillindia') {
    return (
      <svg className="h-12 w-auto max-w-[170px]" viewBox="0 0 180 50" fill="none">
        <rect x="10" y="8" width="30" height="24" rx="3" fill="#1A237E" />
        <path d="M25 15l-8 10h16z" fill="#FF9800" />
        <text x="50" y="24" fill="#0D47A1" fontSize="16" fontWeight="bold">Skill India</text>
        <text x="50" y="38" fill="#D84315" fontSize="10" fontWeight="bold">कौशल भारत - कुशल भारत</text>
      </svg>
    );
  }
  if (name === 'nielit') {
    return (
      <svg className="h-12 w-auto max-w-[170px]" viewBox="0 0 180 50" fill="none">
        <circle cx="25" cy="25" r="18" fill="#00838F" />
        <path d="M12 25a13 13 0 0 1 26 0M25 12a13 13 0 0 1 0 26" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="25" cy="25" r="5" fill="#FF8F00" />
        <text x="52" y="22" fill="#006064" fontSize="11" fontWeight="bold">रा.इ.सू.प्रौ.सं</text>
        <text x="52" y="38" fill="#00838F" fontSize="16" fontWeight="extrabold">NIELIT</text>
      </svg>
    );
  }
  if (name === 'certiport') {
    return (
      <svg className="h-12 w-auto max-w-[170px]" viewBox="0 0 180 50" fill="none">
        <text x="10" y="28" fill="#006064" fontSize="20" fontWeight="extrabold" letterSpacing="2">CERTI PORT</text>
        <circle cx="82" cy="18" r="3" fill="#FFB300" />
        <path d="M82 14v8M78 18h8" stroke="#FFB300" strokeWidth="1.5" />
        <text x="35" y="42" fill="#555" fontSize="8" fontWeight="bold" letterSpacing="1">A PEARSON VUE BUSINESS</text>
      </svg>
    );
  }
  if (name === 'iso') {
    return (
      <svg className="h-12 w-auto max-w-[170px]" viewBox="0 0 180 50" fill="none">
        <circle cx="25" cy="25" r="20" fill="#FFB300" stroke="#F57F17" strokeWidth="2" />
        <text x="25" y="24" fill="#000" fontSize="10" fontWeight="bold" textAnchor="middle">ISO</text>
        <text x="25" y="34" fill="#000" fontSize="7" fontWeight="bold" textAnchor="middle">9001:2015</text>
        <text x="55" y="24" fill="#1A237E" fontSize="14" fontWeight="bold">ISO Certified</text>
        <text x="55" y="38" fill="#555" fontSize="9">Quality Management</text>
      </svg>
    );
  }
  return (
    <svg className="h-12 w-auto max-w-[170px]" viewBox="0 0 180 50" fill="none">
      <circle cx="25" cy="25" r="18" fill="#B71C1C" />
      <path d="M25 12l10 20H15z" fill="#FFD54F" />
      <text x="52" y="24" fill="#B71C1C" fontSize="14" fontWeight="bold">Govt. Recognized</text>
      <text x="52" y="38" fill="#444" fontSize="9">Ministry of Corp Affairs</text>
    </svg>
  );
};

// Client Companies Logo Component
const ClientLogo = ({ name }: { name: string }) => {
  if (name === 'Microsoft') {
    return (
      <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
        <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
          <div className="bg-[#F25022] w-2.5 h-2.5" />
          <div className="bg-[#7FBA00] w-2.5 h-2.5" />
          <div className="bg-[#00A4EF] w-2.5 h-2.5" />
          <div className="bg-[#FFB900] w-2.5 h-2.5" />
        </div>
        <span className="font-semibold text-slate-700">Microsoft</span>
      </div>
    );
  }
  if (name === 'Accenture') {
    return (
      <div className="flex items-center gap-1.5 font-bold text-slate-900 text-lg">
        <span className="text-[#A100FF] font-black text-xl">&gt;</span>
        <span className="tracking-tight">accenture</span>
      </div>
    );
  }
  if (name === 'BitAce') {
    return (
      <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
        <div className="w-6 h-6 rounded bg-gradient-to-tr from-emerald-500 to-blue-500 flex items-center justify-center text-white text-xs font-black shadow-sm">
          B
        </div>
        <span>BitAce</span>
      </div>
    );
  }
  if (name === 'microlink') {
    return (
      <div className="flex items-center gap-1 font-bold text-lg">
        <span className="text-red-600">micro</span>
        <span className="text-slate-700">link</span>
      </div>
    );
  }
  if (name === 'AppLabs') {
    return (
      <div className="flex items-center gap-1.5 font-bold text-blue-700 text-lg">
        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">●</div>
        <span>AppLabs</span>
      </div>
    );
  }
  if (name === 'IBM') {
    return (
      <div className="font-black text-blue-800 text-xl tracking-widest">
        IBM
      </div>
    );
  }
  if (name === 'Google') {
    return (
      <div className="flex items-center gap-1 font-bold text-lg">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </div>
    );
  }
  if (name === 'Amazon') {
    return (
      <div className="flex flex-col items-center">
        <span className="font-bold text-slate-900 text-lg tracking-tight">amazon</span>
        <span className="text-amber-500 text-xs font-black -mt-1">➔</span>
      </div>
    );
  }
  if (name === 'Deloitte') {
    return (
      <div className="font-extrabold text-slate-900 text-lg">
        Deloitte<span className="text-emerald-500">.</span>
      </div>
    );
  }
  if (name === 'Capgemini') {
    return (
      <div className="flex items-center gap-1.5 font-bold text-blue-900 text-lg">
        <span className="text-cyan-500 text-xl">♠</span>
        <span>Capgemini</span>
      </div>
    );
  }
  return (
    <div className="font-bold text-slate-700 text-base">
      {name}
    </div>
  );
};

export default function HomeClient() {
  const { openEnrollModal } = useEnroll();
  const [activeTab, setActiveTab] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const testimonials = testimonialsData?.testimonials || [];

  const heroSlides = [
    {
      title: <>Learn. Grow.<br /><span className="text-[#007DF2]">Get Ahead with AI</span> <span className="text-sky-400">✨</span></>,
      desc: null,
      checklist: [
        '15 Million+ Careers advanced',
        '2,000 Live classes every month',
        '85% Report career success',
      ],
      primaryBtn: { text: 'Explore Programs', href: '#courses-grid' },
      secondaryBtn: { text: 'Try Learnmore for Business', actionName: 'Try Learnmore for Business' },
      rightShowcase: (
        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
            <img
              src="/hero/executive.jpg"
              alt="Learnmore Executive holding tablet"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: <>Learn with <span className="text-[#007DF2]">LearnMore AI™</span>,<br />Your AI Coach from<br />Start to Success</>,
      desc: 'From choosing the right course to clearing doubts, building projects, and preparing for interviews, LearnMore AI supports you at every step.',
      checklist: null,
      primaryBtn: { text: 'Ask LearnMore AI Anything', actionName: 'Ask LearnMore AI Anything' },
      secondaryBtn: null,
      rightShowcase: (
        <div className="relative flex justify-center items-center py-4">
          <div className="relative w-full max-w-[440px]">
            {/* Main Phone/Portrait Card */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-white">
              <img
                src="/hero/ai_coach.jpg"
                alt="LearnMore AI Coach Girl"
                className="w-full h-auto object-cover max-h-[460px]"
              />
            </div>
            {/* Top Floating Badge */}
            <div className="absolute -top-3 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-800">
              <span className="text-blue-500">✦</span> Interview Prep
              <div className="flex -space-x-1 ml-1">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-[10px] flex items-center justify-center border border-white">👨‍💼</span>
                <span className="w-5 h-5 rounded-full bg-amber-100 text-[10px] flex items-center justify-center border border-white">👩‍💼</span>
              </div>
            </div>
            {/* Bottom Floating Roadmap Card */}
            <div className="absolute -bottom-4 left-2 bg-amber-50/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-amber-200/80 text-xs text-slate-800 max-w-[270px]">
              <div className="font-bold text-slate-900 mb-1.5 flex items-center gap-1">
                <span className="text-blue-600">✦</span> 6-week Career Roadmap
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-slate-600 font-mono">
                <span className="bg-white px-2 py-0.5 rounded shadow-sm">Week 1-2</span>
                <span>➔</span>
                <span className="bg-white px-2 py-0.5 rounded shadow-sm">Week 3-4</span>
                <span>➔</span>
                <span className="bg-white px-2 py-0.5 rounded shadow-sm">Week 5-6</span>
              </div>
            </div>
            {/* Floating Sparkle Badge */}
            <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-xl border border-slate-200 flex items-center justify-center text-blue-600 text-lg font-bold">
              ✨
            </div>
          </div>
        </div>
      ),
    },
    {
      title: <>Enterprise Platform to Build<br /><span className="text-[#007DF2]">AI-Ready Teams</span></>,
      desc: null,
      checklist: [
        '700 Live Classes Monthly',
        '1000 Expert-Led Async Courses',
        '1000 Projects, Labs & Assessments',
      ],
      primaryBtn: { text: 'Explore Learnmore SkillUp+', actionName: 'Explore Learnmore SkillUp+' },
      secondaryBtn: null,
      rightShowcase: (
        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-[520px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
            <img
              src="/hero/enterprise_team.jpg"
              alt="Enterprise AI-Ready Team"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: <>Welcome to <span className="text-red-500">Learnmore</span> <span className="text-slate-900">Technologies</span></>,
      desc: 'Unlock your future in tech with 100% job assistance programs, real-time projects, industry expert trainers, and top certification courses in Bangalore.',
      checklist: null,
      primaryBtn: { text: 'Explore Courses', href: '#courses-grid' },
      secondaryBtn: { text: 'Enroll Now', actionName: 'Enroll Now' },
      rightShowcase: (
        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-[520px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
            <img
              src="/hero/welcome_banner.png"
              alt="Welcome to Learnmore Technologies"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      ),
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(slideTimer);
  }, [heroSlides.length]);

  const courseSliderRef = useRef<HTMLDivElement>(null);
  const affiliationSliderRef = useRef<HTMLDivElement>(null);
  const clientSliderRef = useRef<HTMLDivElement>(null);

  const [isCourseSliderHovered, setIsCourseSliderHovered] = useState(false);
  const [isAffiliationHovered, setIsAffiliationHovered] = useState(false);
  const [isClientHovered, setIsClientHovered] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [mainVideo, setMainVideo] = useState({
    videoUrl: '/videos/video6.mp4',
    poster: '/glimpse/unnamed (2).jpg',
    label: 'Student Feedback',
  });

  // Auto-slide effect for Course Slider
  useEffect(() => {
    if (isCourseSliderHovered) return;
    const courseAutoTimer = setInterval(() => {
      if (courseSliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = courseSliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          courseSliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          courseSliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
        }
      }
    }, 2800);

    return () => clearInterval(courseAutoTimer);
  }, [isCourseSliderHovered]);

  // Auto-slide effect for Affiliation Slider
  useEffect(() => {
    if (isAffiliationHovered) return;
    const affTimer = setInterval(() => {
      if (affiliationSliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = affiliationSliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          affiliationSliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          affiliationSliderRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(affTimer);
  }, [isAffiliationHovered]);

  // Auto-slide effect for Client Slider
  useEffect(() => {
    if (isClientHovered) return;
    const clientTimer = setInterval(() => {
      if (clientSliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = clientSliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          clientSliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          clientSliderRef.current.scrollBy({ left: 240, behavior: 'smooth' });
        }
      }
    }, 2200);

    return () => clearInterval(clientTimer);
  }, [isClientHovered]);

  const scrollCourseLeft = () => {
    if (courseSliderRef.current) {
      courseSliderRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollCourseRight = () => {
    if (courseSliderRef.current) {
      courseSliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const scrollAffiliationLeft = () => {
    if (affiliationSliderRef.current) {
      affiliationSliderRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollAffiliationRight = () => {
    if (affiliationSliderRef.current) {
      affiliationSliderRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  const scrollClientLeft = () => {
    if (clientSliderRef.current) {
      clientSliderRef.current.scrollBy({ left: -240, behavior: 'smooth' });
    }
  };

  const scrollClientRight = () => {
    if (clientSliderRef.current) {
      clientSliderRef.current.scrollBy({ left: 240, behavior: 'smooth' });
    }
  };

  const allMasterPrograms = [
    {
      title: 'Accounting Professional Course',
      slug: 'course/python-fullstack',
      category: 'dev',
      badge: 'Hot Career',
      cardBg: 'bg-[#48A275]', // Emerald Green (matching Image 1 card 1)
      desc: 'Boost your career with our Accounting Professional Course, covering Tally, GST, and financial reporting. Practical training with industry tools prepares you for high-demand jobs.',
      duration: '8 Weeks',
      salary: '₹4.5 - ₹12 LPA',
      rating: '4.95',
      reviews: '1,420',
      tools: ['Tally Prime', 'GST', 'Excel', 'TDS', 'Financial Audit'],
      illustration: 'accounting',
    },
    {
      title: 'Data Analytics Course',
      slug: 'course/data-science-ai',
      category: 'data',
      badge: 'High Demand',
      cardBg: 'bg-[#8525D9]', // Vibrant Purple (matching Image 1 card 2)
      desc: 'Learn how to analyze data with our Data Analytics Course using Excel, SQL, Python, and Power BI. Gain real insights from datasets and secure placement in top companies.',
      duration: '10 Weeks',
      salary: '₹6 - ₹16 LPA',
      rating: '4.92',
      reviews: '2,150',
      tools: ['Power BI', 'SQL', 'Python', 'Excel', 'Tableau'],
      illustration: 'data',
    },
    {
      title: 'Data Science Course',
      slug: 'course/data-science-ai',
      category: 'data',
      badge: 'Top Rated',
      cardBg: 'bg-[#E5A100]', // Golden Yellow (matching Image 1 card 3)
      desc: 'Advance your skills with our Data Science Course covering Python, Machine Learning, AI, and visualization. Build real-world projects and kickstart your career as a data scientist.',
      duration: '14 Weeks',
      salary: '₹8 - ₹22 LPA',
      rating: '4.95',
      reviews: '1,850',
      tools: ['Python', 'Machine Learning', 'Deep Learning', 'PyTorch', 'Pandas'],
      illustration: 'datascience',
    },
    {
      title: 'Agentic AI & Multi-Agent Systems',
      slug: 'agentic-ai-training-course',
      category: 'ai',
      badge: 'Trending',
      cardBg: 'bg-[#00BFA5]', // Vibrant Teal (matching Image 1 card 4)
      desc: 'Master LangGraph, CrewAI, AutoGen, MCP Protocols, Tool Use & LLM Autonomous Agents with live cloud projects.',
      duration: '8 Weeks',
      salary: '₹8 - ₹24 LPA',
      rating: '4.95',
      reviews: '1,420',
      tools: ['LangGraph', 'CrewAI', 'Claude 3.5', 'Python', 'Vector DB'],
      illustration: 'ai',
    },
    {
      title: 'Generative AI & LLM Engineering',
      slug: 'generative-ai-training-course',
      category: 'ai',
      badge: 'Most Popular',
      cardBg: 'bg-[#2563EB]', // Bright Blue
      desc: 'Advanced RAG Pipelines, Fine-tuning Llama 3, OpenAI APIs, Prompt Engineering & Production LLMOps.',
      duration: '10 Weeks',
      salary: '₹7.5 - ₹22 LPA',
      rating: '4.92',
      reviews: '2,150',
      tools: ['OpenAI', 'LangChain', 'Llama 3', 'Pinecone', 'FastAPI'],
      illustration: 'ai',
    },
    {
      title: 'Cloud DevOps Master Program',
      slug: 'course/cloud-devops',
      category: 'cloud',
      badge: 'High Placement',
      cardBg: 'bg-[#059669]', // Deep Emerald
      desc: 'Master AWS, Azure, Docker, Kubernetes, Terraform, Jenkins CI/CD, Ansible & Production Monitoring.',
      duration: '12 Weeks',
      salary: '₹6 - ₹18 LPA',
      rating: '4.90',
      reviews: '3,400',
      tools: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
      illustration: 'cloud',
    },
    {
      title: 'Python Fullstack Master Program',
      slug: 'course/python-fullstack',
      category: 'dev',
      badge: 'Top Seller',
      cardBg: 'bg-[#7C3AED]', // Violet
      desc: 'Full-stack engineering with Python, Django, FastAPI, React.js, PostgreSQL, Tailwind & Cloud Deployments.',
      duration: '12 Weeks',
      salary: '₹5 - ₹15 LPA',
      rating: '4.88',
      reviews: '4,100',
      tools: ['Python', 'Django', 'FastAPI', 'React', 'PostgreSQL'],
      illustration: 'code',
    },
    {
      title: 'Cybersecurity & SOC Defense',
      slug: 'cybersecurity-training-course',
      category: 'security',
      badge: 'Essential',
      cardBg: 'bg-[#E11D48]', // Rose
      desc: 'Ethical Hacking, OWASP Top 10 Web Pentesting, SOC SIEM Threat Hunting with Splunk, CEH v12 & Cyber Range.',
      duration: '10 Weeks',
      salary: '₹5.5 - ₹18 LPA',
      rating: '4.90',
      reviews: '1,950',
      tools: ['Kali Linux', 'Metasploit', 'Splunk', 'Burp Suite', 'Nmap'],
      illustration: 'security',
    },
  ];

  const filteredPrograms = activeTab === 'all'
    ? allMasterPrograms
    : allMasterPrograms.filter(p => p.category === activeTab);

  const stats = [
    {
      label: 'Live Classes Monthly',
      value: 700,
      suffix: '+',
      bg: 'bg-blue-100/70',
      numberColor: 'text-blue-600',
      borderColor: 'hover:border-blue-300 hover:shadow-blue-500/10',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 4H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 12H4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1z" />
          <path d="M10 9a2 2 0 100 4 2 2 0 000-4zm-4 7c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25v.75H6V16z" />
        </svg>
      )
    },
    {
      label: 'Learning Solutions',
      value: 550,
      suffix: '+',
      bg: 'bg-purple-100/70',
      numberColor: 'text-purple-600',
      borderColor: 'hover:border-purple-300 hover:shadow-purple-500/10',
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.17 0-2.39.15-3.5.5C2.34 5.36 2 6.09 2 6.92v11.75c0 1.14.99 2 2.05 1.76C5.12 20.2 6.31 20 7.5 20c1.95 0 4.05.4 5.5 1.5 1.45-1.1 3.55-1.5 5.5-1.5 1.19 0 2.38.2 3.45.43 1.06.24 2.05-.62 2.05-1.76V6.92c0-.83-.34-1.56-1.05-1.92zM11 18.5c-1.1-.65-2.48-1-3.5-1-1.15 0-2.34.17-3.35.48V7.27c.95-.27 2.07-.42 3.35-.42 1.3 0 2.7.4 3.5 1.15v10.5zm10 .48c-1.01-.31-2.2-.48-3.35-.48-1.02 0-2.4.35-3.5 1V8c.8-.75 2.2-1.15 3.5-1.15 1.28 0 2.4.15 3.35.42v11.71z" />
        </svg>
      )
    },
    {
      label: 'Hands-on Projects',
      value: 100,
      suffix: '+',
      bg: 'bg-indigo-100/70',
      numberColor: 'text-indigo-600',
      borderColor: 'hover:border-indigo-300 hover:shadow-indigo-500/10',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
          <path d="M9.5 9L7 11.5 9.5 14M14.5 9l2.5 2.5-2.5 2.5" />
        </svg>
      )
    },
    {
      label: 'Job Assistance',
      value: 100,
      suffix: '%',
      bg: 'bg-emerald-100/70',
      numberColor: 'text-emerald-600',
      borderColor: 'hover:border-emerald-300 hover:shadow-emerald-500/10',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
        </svg>
      )
    },
  ];

  const hiringCompanies = [
    'Google', 'Amazon', 'Microsoft', 'Deloitte', 'Capgemini', 'Infosys',
    'TCS', 'Wipro', 'Accenture', 'Flipkart', 'Walmart', 'Oracle', 'IBM', 'Cognizant'
  ];

  const centerGlimpseImages = [
    { src: '/glimpse/unnamed (1).jpg', alt: 'Learnmore Student Counseling 2' },
    { src: '/glimpse/unnamed (2).jpg', alt: 'Learnmore High-Tech Computer Lab 3' },
    { src: '/glimpse/unnamed (3).jpg', alt: 'Learnmore Practical Classroom 4' },
    { src: '/glimpse/unnamed (4).jpg', alt: 'Learnmore Entrance & Reception 5' },
    { src: '/glimpse/unnamed (5).jpg', alt: 'Learnmore Hands-On Training 6' },
    { src: '/glimpse/unnamed (6).jpg', alt: 'Learnmore Training Center Campus 7' },
    { src: '/glimpse/unnamed (7).jpg', alt: 'Learnmore IT Infrastructure Lab 8' },
    { src: '/glimpse/unnamed (8).jpg', alt: 'Learnmore Student Discussion Area 9' },


  ];

  const certificateImages = [
    { src: '/certificates/unnamed.jpg', alt: 'Student Course Completion Certificate Award 1' },
    { src: '/certificates/unnamed (1).jpg', alt: 'Student Course Completion Certificate Award 2' },
    { src: '/certificates/unnamed (2).jpg', alt: 'Student Course Completion Certificate Award 3' },
    { src: '/certificates/unnamed (3).jpg', alt: 'Student Course Completion Certificate Award 4' },
    { src: '/certificates/unnamed (4).jpg', alt: 'Student Course Completion Certificate Award 5' },
    { src: '/certificates/unnamed (5).jpg', alt: 'Student Course Completion Certificate Award 6' },
    { src: '/certificates/unnamed (6).jpg', alt: 'Student Course Completion Certificate Award 7' },
    { src: '/certificates/unnamed (7).jpg', alt: 'Student Course Completion Certificate Award 8' },
    { src: '/certificates/unnamed (8).jpg', alt: 'Student Course Completion Certificate Award 9' },
    { src: '/certificates/unnamed (9).jpg', alt: 'Student Course Completion Certificate Award 10' },
    { src: '/certificates/unnamed (10).jpg', alt: 'Student Course Completion Certificate Award 11' },
    { src: '/certificates/unnamed (11).jpg', alt: 'Student Course Completion Certificate Award 12' },
    { src: '/certificates/unnamed (12).jpg', alt: 'Student Course Completion Certificate Award 13' },
    { src: '/certificates/unnamed (13).jpg', alt: 'Student Course Completion Certificate Award 14' },
    { src: '/certificates/unnamed (14).jpg', alt: 'Student Course Completion Certificate Award 15' },
    { src: '/certificates/unnamed (15).jpg', alt: 'Student Course Completion Certificate Award 16' },
    { src: '/certificates/unnamed (16).jpg', alt: 'Student Course Completion Certificate Award 17' },
  ];

  const faqs = [
    {
      q: 'What software training courses does Learnmore Technologies offer?',
      a: 'We offer job-oriented professional courses including Agentic AI, Generative AI, Python Fullstack Development, Data Analytics, Cloud DevOps, Software Testing, Snowflake, and Data Science with AI in Bangalore.',
    },
    {
      q: 'Does Learnmore Technologies provide 100% placement support?',
      a: 'Yes, we provide dedicated placement support with regular resume building sessions, technical mock interviews, and direct placement drives with our 500+ hiring partners.',
    },
    {
      q: 'What is the duration of the training programs?',
      a: 'Most certification courses run between 2 to 4 months, featuring extensive hands-on laboratory sessions and live industry project training.',
    },
    {
      q: 'Where is Learnmore Technologies located in Bangalore?',
      a: 'Our premium training centers are located in Marathahalli and BTM Layout, Bangalore, fully equipped with high-tech lab infrastructure.',
    },
    {
      q: 'Can I choose weekday or weekend batch timings?',
      a: 'Yes! We offer flexible batch options including daily morning/evening sessions and weekend-only classes for working professionals.',
    },
    {
      q: 'Will I receive certification after completing the course?',
      a: 'Yes, upon course completion, you will receive an ISO 9001:2015 verified Certificate of Completion recognized by top IT companies worldwide.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      {/* Hero Section matching exact Light Simplilearn Style */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-white via-slate-50 to-blue-50/60 text-slate-900 border-b border-slate-200 overflow-hidden min-h-[75vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          {heroSlides.map((slide, idx) => {
            if (idx !== currentSlide) return null;
            return (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center animate-fadeIn">

                {/* Left Hero Content */}
                <div className="lg:col-span-7 space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                    {slide.title}
                  </h1>

                  {slide.desc && (
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                      {slide.desc}
                    </p>
                  )}

                  {/* Checklist Items matching Simplilearn Style */}
                  {slide.checklist && (
                    <div className="space-y-3 pt-1 text-sm sm:text-base text-slate-700 font-medium">
                      {slide.checklist.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center text-slate-700 text-xs font-bold shrink-0">
                            ✓
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons matching Simplilearn Style */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    {slide.primaryBtn && slide.primaryBtn.href ? (
                      <a
                        href={slide.primaryBtn.href}
                        className="bg-[#007DF2] hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-lg text-sm transition-all shadow-md shadow-blue-500/20"
                      >
                        {slide.primaryBtn.text}
                      </a>
                    ) : (
                      <button
                        onClick={() => openEnrollModal(slide.primaryBtn.actionName || 'Hero Primary')}
                        className="bg-[#007DF2] hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-lg text-sm transition-all shadow-md shadow-blue-500/20"
                      >
                        {slide.primaryBtn.text}
                      </button>
                    )}

                    {slide.secondaryBtn && (
                      <button
                        onClick={() => openEnrollModal(slide.secondaryBtn.actionName || 'Hero Secondary')}
                        className="bg-white border border-[#007DF2] text-[#007DF2] hover:bg-blue-50 font-bold px-7 py-3.5 rounded-lg text-sm transition-all shadow-sm"
                      >
                        {slide.secondaryBtn.text}
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Hero Image Showcase */}
                <div className="lg:col-span-5">
                  {slide.rightShowcase}
                </div>
              </div>
            );
          })}

          {/* Centered Blue Pagination Dots matching Simplilearn Style */}
          <div className="flex items-center justify-center gap-2.5 pt-12">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${idx === currentSlide
                  ? 'w-3 h-3 bg-[#007DF2]'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section (Our Impact in Numbers) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Our Impact in Numbers</h2>
            <p className="text-slate-500 text-sm">The numbers that speak for our success across Bangalore & beyond</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-6 sm:p-8 text-center shadow-md shadow-slate-100/70 border border-slate-100 ${stat.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center`}
              >
                <div className={`w-16 h-16 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-5 shrink-0`}>
                  {stat.icon}
                </div>
                <div className={`text-4xl sm:text-5xl font-extrabold ${stat.numberColor} mb-2 tracking-tight`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-600 text-sm sm:text-base font-bold leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations & Client Companies Section */}
      <section className="py-14 bg-slate-100/70 border-b border-slate-200 overflow-hidden space-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 1. Affiliations Subsection */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F97316] text-center mb-6 tracking-tight">
              Affiliations
            </h2>

            {/* Affiliations Infinite Marquee Slider */}
            <div className="flex overflow-hidden relative">
              <div className="flex gap-6 items-center animate-marquee whitespace-nowrap py-2">
                {[
                  'nsdc', 'skillindia', 'nielit', 'certiport', 'iso', 'mca',
                  'nsdc', 'skillindia', 'nielit', 'certiport', 'iso', 'mca',
                  'nsdc', 'skillindia', 'nielit', 'certiport', 'iso', 'mca'
                ].map((aff, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/80 px-6 py-4 shadow-sm hover:shadow-md transition-all h-24 sm:h-28 w-56 sm:w-64 shrink-0 flex items-center justify-center hover:-translate-y-1"
                  >
                    <AffiliationLogo name={aff} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Our Client Companies Subsection */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F97316] text-center mb-6 tracking-tight">
              Our Client Companies
            </h2>

            {/* Client Companies Infinite Marquee Slider */}
            <div className="flex overflow-hidden relative">
              <div className="flex gap-6 items-center animate-marquee whitespace-nowrap py-2">
                {[
                  'AppLabs', 'BitAce', 'microlink', 'Microsoft', 'Accenture', 'IBM', 'Google', 'Amazon', 'Deloitte', 'Capgemini',
                  'AppLabs', 'BitAce', 'microlink', 'Microsoft', 'Accenture', 'IBM', 'Google', 'Amazon', 'Deloitte', 'Capgemini'
                ].map((client, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200/80 px-6 py-4 shadow-sm hover:shadow-md transition-all h-20 w-48 sm:w-56 shrink-0 flex items-center justify-center hover:-translate-y-0.5"
                  >
                    <ClientLogo name={client} />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Master Programs Showcase Horizontal Slider Carousel */}
      <section id="courses-grid" className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              Industry-Aligned Programs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Popular Master Certification Courses
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Co-created with senior tech leads to get you hired in high-paying roles.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: 'all', label: 'All Programs' },
                { id: 'ai', label: 'AI & Generative AI' },
                { id: 'cloud', label: 'Cloud & DevOps' },
                { id: 'data', label: 'Data Science & Analytics' },
                { id: 'dev', label: 'Full Stack & Accounting' },
                { id: 'security', label: 'Cybersecurity' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Slider Container with Left & Right Floating Arrows */}
          <div className="relative px-2 sm:px-6">
            {/* Left Navigation Arrow Button */}
            <button
              onClick={scrollCourseLeft}
              aria-label="Scroll left"
              className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-blue-600 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:scale-110 active:scale-95 transition-all"
            >
              <i className="fas fa-chevron-left text-base" />
            </button>

            {/* Right Navigation Arrow Button */}
            <button
              onClick={scrollCourseRight}
              aria-label="Scroll right"
              className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-blue-600 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:scale-110 active:scale-95 transition-all"
            >
              <i className="fas fa-chevron-right text-base" />
            </button>

            {/* Scrollable Cards Track */}
            <div
              ref={courseSliderRef}
              onMouseEnter={() => setIsCourseSliderHovered(true)}
              onMouseLeave={() => setIsCourseSliderHovered(false)}
              className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 px-2"
            >
              {filteredPrograms.map((course, idx) => (
                <div
                  key={idx}
                  className={`w-[310px] sm:w-[350px] shrink-0 ${course.cardBg} rounded-[32px] p-7 text-white flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group`}
                >
                  <div>
                    {/* Course Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white text-center leading-snug mb-3">
                      {course.title}
                    </h3>

                    {/* Course Description */}
                    <p className="text-white/90 text-xs sm:text-sm text-center leading-relaxed mb-5 font-normal">
                      {course.desc}
                    </p>

                    {/* Learn More Action Button */}
                    <div className="text-center mb-4">
                      <button
                        onClick={() => openEnrollModal(course.title)}
                        className="text-white hover:text-amber-200 font-bold text-sm sm:text-base inline-flex items-center gap-1.5 transition-colors"
                      >
                        Learn More <span className="text-lg">→</span>
                      </button>
                    </div>
                  </div>

                  {/* Bottom Tech Illustration */}
                  <div className="mt-4 pt-2 w-full flex items-center justify-center">
                    <CourseIllustration type={course.illustration} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us? Section matching User Screenshot */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F97316]">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Featured Main Video & Bullet Points */}
            <div className="lg:col-span-6 space-y-6">
              {/* Main Featured Video */}
              <div className="rounded-2xl overflow-hidden shadow-xl bg-black aspect-video relative border border-slate-200 group">
                <video
                  key={mainVideo.videoUrl}
                  controls
                  poster={mainVideo.poster}
                  src={mainVideo.videoUrl}
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-3 left-3 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm pointer-events-none shadow-md">
                  Learnmore Technologies
                </div>
              </div>

              {/* Checklist Highlights matching image */}
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✓</span>
                  <span>20+ Years of Excellence in Education.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✓</span>
                  <span>400K+ Students Trained & Placed.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✓</span>
                  <span>500+ Tie-up Companies Across India.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✓</span>
                  <span>Experience & Professional Trainers and Team Members.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✓</span>
                  <span>International Certification options available.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✓</span>
                  <span>Free Soft Skills Classes and 1 year free Membership.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0">✓</span>
                  <span>Strong Placement Cell that guarantees multiple interviews.</span>
                </div>
              </div>
            </div>

            {/* Right Column: 6 Video Cards Grid (2 cols x 3 rows) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { videoUrl: '/videos/video1.mp4', poster: '/slider/alumni-banner.png', duration: '0:17', label: 'Placement Review' },
                  { videoUrl: '/videos/video2.mp4', poster: '/slider/slide-2.jpg', duration: '0:55', label: 'Placement Story' },
                  { videoUrl: '/videos/video3.mp4', poster: '/slider/slide-3.jpg', duration: '0:30', label: 'Student Feedback' },
                  { videoUrl: '/videos/video4.mp4', poster: '/slider/slide-4.jpg', duration: '1:44', label: 'hackathon' },
                  { videoUrl: '/videos/video5.mp4', poster: '/glimpse/unnamed.jpg', duration: '1:08', label: 'Placement Review' },
                  { videoUrl: '/videos/video6.mp4', poster: '/glimpse/unnamed (2).jpg', duration: '0:39', label: 'Why Choose Us?' },

                ].map((item, idx) => {
                  const isSelected = mainVideo.videoUrl === item.videoUrl;
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setMainVideo({ videoUrl: item.videoUrl, poster: item.poster, label: item.label });
                        setActiveVideoUrl(item.videoUrl);
                      }}
                      className={`rounded-2xl overflow-hidden shadow-md bg-slate-950 border group relative aspect-[16/10] cursor-pointer hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${isSelected
                        ? 'ring-4 ring-red-500 border-red-500 scale-[1.02]'
                        : 'border-slate-200/80'
                        }`}
                    >
                      <video
                        src={`${item.videoUrl}#t=0.5`}
                        poster={item.poster}
                        preload="metadata"
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center group-hover:bg-black/15 transition-colors">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <i className="fas fa-play text-sm sm:text-base ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-md font-mono shadow">
                        {item.duration}
                      </div>
                      <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-lg shadow-md tracking-wide">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Glimpse of Centers Section */}
      <section className="py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Glimpse of Centers
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Explore our modern classrooms, high-tech computer labs, and vibrant learning atmosphere in Bangalore
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {centerGlimpseImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-slate-200/80 aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold drop-shadow-md">Learnmore Training Center</span>
                </div>
              </div>
            ))}
          </div>

          {/* Words From Center Directors Section */}
          <div className="pt-8 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block bg-blue-100 text-blue-700 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-2">
                Center Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Words From Center Directors
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-2">
                Hear from our learning center directors and regional leaders empowering student futures across India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              <CenterDirectorCard
                director={{
                  id: 1,
                  name: 'Mr. Ajit Kumar Yadav',
                  title: 'Technoglobe - Mainpuri - Uttar Pradesh',
                  message: 'As the Center Director of Mainpuri Technoglobe, I would like to express my sincere appreciation to the entire team for empowering students with high quality IT skill training.',
                  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
                  onReadMore: () => openEnrollModal('Center Director Inquiry'),
                  onVisitCenter: () => openEnrollModal('Visit Center Request')
                }}
              />
              <CenterDirectorCard
                director={{
                  id: 2,
                  name: 'Mr. Suresh Sharma',
                  title: 'Learnmore Academy - Whitefield - Bangalore',
                  message: 'Leading our flagship Whitefield center with a vision to equip tech graduates with industry-ready coding, AI, and cloud development skills.',
                  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
                  onReadMore: () => openEnrollModal('Center Director Inquiry'),
                  onVisitCenter: () => openEnrollModal('Visit Center Request')
                }}
              />
              <CenterDirectorCard
                director={{
                  id: 3,
                  name: 'Mr. Rajesh Patel',
                  title: 'Learnmore Hub - BTM Layout - Bangalore',
                  message: 'Delivering top-tier practical training and personalized placement guidance to help aspiring software engineers land their dream IT roles.',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
                  onReadMore: () => openEnrollModal('Center Director Inquiry'),
                  onVisitCenter: () => openEnrollModal('Visit Center Request')
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Single Line Slow Auto-Scrolling Horizontal Marquee Placement Cards */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-500/30">
            <i className="fas fa-trophy text-amber-400"></i>
            100% Verified Placements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Placed Students
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Explore our students placed at top IT companies & MNCs in a continuous live marquee (Hover to pause)
          </p>
        </div>

        {/* Single Row Slow Auto-Scrolling Horizontal Marquee */}
        <div className="flex overflow-hidden relative py-4">
          <div className="flex gap-6 items-center animate-marquee whitespace-nowrap">
            {[...placementsData.placements, ...placementsData.placements].map((student, idx) => (
              <div key={idx} className="w-80 sm:w-84 shrink-0 whitespace-normal">
                <PlacementStudentCard
                  student={student}
                  onReadMore={() => openEnrollModal(`${student.name} - Placement Inquiry`)}
                  onVisitCenter={() => openEnrollModal(`${student.name} - Placement Inquiry`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Distribution & Certified Alumni Section */}
      <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
            <i className="fas fa-award text-amber-500"></i>
            ISO 9001:2015 Verified Certification
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Proud Certified Alumni
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Celebrating our students successfully earning industry-aligned course completion certificates at Learnmore Technologies
          </p>
        </div>

        {/* Infinite Auto-Scrolling Horizontal Marquee Slider */}
        <div className="flex overflow-hidden relative">
          <div className="flex gap-6 items-center animate-marquee whitespace-nowrap py-4">
            {[...certificateImages, ...certificateImages].map((cert, idx) => (
              <div
                key={idx}
                className="w-64 sm:w-72 h-80 sm:h-[380px] shrink-0 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 group p-2 relative"
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                      <i className="fas fa-certificate mr-1"></i> Course Certified
                    </span>
                    <span className="text-xs font-semibold drop-shadow-md">Learnmore Technologies Bangalore</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Alumni Placements Section */}
      <RecentPlacementsSection />

      {/* Upcoming Batch Schedule */}
      <UpcomingBatchSchedule courseName="Training Program" />

      {/* Testimonials Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Real Stories</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Hear From Our Successful Alumni
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testi: any) => (
              <div key={testi.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                      {testi.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{testi.name}</h4>
                      <p className="text-slate-500 text-xs">{testi.role} at {testi.company}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed mb-4">
                    "{testi.content.substring(0, 160)}..."
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-xs">
                  <div className="flex text-yellow-400">{'★'.repeat(testi.rating || 5)}</div>
                  <span className="text-emerald-600 font-semibold">Verified Learner</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Got Questions?</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs text-blue-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Converting Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Ready to Unlock Your IT Career in Bangalore?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Book a free 1-on-1 counseling session with our Senior Mentors and explore syllabus, fees, and placement opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openEnrollModal('Homepage Bottom CTA')}
              className="px-8 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-50 font-extrabold text-sm uppercase tracking-wider shadow-2xl transition-all hover:scale-105"
            >
              Book Your Free Live Demo
            </button>
            <a
              href="https://wa.me/+919036354552"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <i className="fab fa-whatsapp text-lg" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal Popup */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-red-600 transition-colors font-bold text-lg"
            >
              ✕
            </button>
            <video
              controls
              autoPlay
              src={activeVideoUrl}
              className="w-full h-auto max-h-[82vh] rounded-2xl"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}