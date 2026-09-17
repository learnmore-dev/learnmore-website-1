'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useEnroll } from '@/context/EnrollContext';
import TopOfferBanner from './TopOfferBanner';

interface NavItem {
  name: string;
  link?: string;
  type: 'link' | 'dropdown';
  badge?: string;
  items?: { name: string; link: string; external?: boolean; icon?: string; badge?: string }[];
}

const navLinks: NavItem[] = [
  { name: 'Home', link: '/', type: 'link' },
  {
    name: 'Course',
    type: 'dropdown',
    items: [
      { name: 'Agentic AI Training', link: '/agentic-ai-training-course', icon: 'fas fa-robot', badge: 'Hot' },
      { name: 'Generative AI Training', link: '/generative-ai-training-course', icon: 'fas fa-brain', badge: 'Trending' },
      { name: 'AI/ML Engineering', link: '/aiml-engineering-training-course', icon: 'fas fa-microchip' },
      { name: 'Anthropic AI Training', link: '/anthropic-training-course', icon: 'fas fa-sparkles', badge: 'New' },
      { name: 'Cloud DevOps Master Program', link: '/course/cloud-devops', icon: 'fas fa-cloud' },
      { name: 'Python Fullstack Master', link: '/course/python-fullstack', icon: 'fab fa-python' },
      { name: 'Data Analytics Master', link: '/course/data-analytics', icon: 'fas fa-chart-pie' },
      { name: 'Data Science with AI', link: '/course/data-science-ai', icon: 'fas fa-project-diagram' },
      { name: 'Data Engineering Master', link: '/course/data-engineering', icon: 'fas fa-database' },
      { name: 'Snowflake Training', link: '/snowflake-training-course', icon: 'fas fa-snowflake' },
      { name: 'DBT Training', link: '/dbt-training-course', icon: 'fas fa-layer-group' },
      { name: 'Cybersecurity Master', link: '/cybersecurity-training-course', icon: 'fas fa-shield-alt' },
      { name: 'SAP Master Program', link: '/sap-training-course', icon: 'fas fa-cubes' },
      { name: 'Mobile App Development', link: '/mobile-app-development-training-course', icon: 'fas fa-mobile-alt' },
      { name: 'Software Testing Master', link: '/course/software-testing', icon: 'fas fa-vial' },
    ],
  },
  {
    name: 'IT Services',
    type: 'dropdown',
    items: [
      { name: 'AWS Cloud Training', link: '/aws-training-in-marathahalli', icon: 'fab fa-aws' },
      { name: 'Python Programming', link: '/python-training-in-marathahalli', icon: 'fab fa-python' },
      { name: 'DevOps & CI/CD Training', link: '/devops-training-in-marathahalli', icon: 'fas fa-cogs' },
      { name: 'Software Testing (QA)', link: '/software-testing-training-in-marathahalli', icon: 'fas fa-bug' },
      { name: 'Java Full Stack Training', link: '/java-fullstack-training-in-marathahalli', icon: 'fab fa-java' },
      { name: 'Python Full Stack Training', link: '/python-fullstack-training-in-marathahalli', icon: 'fab fa-python' },
      { name: 'Data Analytics & Power BI', link: '/data-analytics-training-in-marathahalli', icon: 'fas fa-chart-line' },
      { name: 'Microsoft Azure Training', link: '/azure-training-in-marathahalli', icon: 'fab fa-microsoft' },
    ],
  },
  { name: 'Placement', link: '/placement', type: 'link' },
  { name: 'Services', link: '/services', type: 'link' },
  { name: 'Internships', link: '/internships', type: 'link' },
  { name: 'Blog', link: '/blog', type: 'link' },
  { name: 'Offers', link: '/offer', type: 'link', badge: 'Sale' },
];

export default function Header() {
  const { openEnrollModal } = useEnroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const phoneNumber = "+919036524555";
  const whatsappNumber = "+919036524555";

  return (
    <>
      {/* Top Offer Banner */}
      <TopOfferBanner />

      {/* Top Contact Bar */}
      <div className="hidden md:block bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              2026 Batch Admissions Open • 100% Placement Support
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">
              <i className="fas fa-map-marker-alt text-rose-400 mr-1.5"></i>
              Marathahalli & BTM Layout, Bangalore
            </span>
          </div>

          <div className="flex items-center gap-5 font-medium">
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <i className="fas fa-phone-alt text-blue-400 text-[11px]"></i>
              <span>Call: {phoneNumber}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <i className="fab fa-whatsapp text-emerald-400 text-sm"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200'
            : 'bg-white py-3.5 border-b border-slate-100 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with logo.webp */}
            <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
              <img
                src="/logo.webp"
                alt="LearnMore Technologies"
                className="h-11 sm:h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-none">
                  <span className="text-red-600 font-bold">LearnMore</span> Technologies
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                  Top IT Skill Academy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((item, idx) => (
                <div key={idx} className="relative group">
                  {item.type === 'link' ? (
                    <Link
                      href={item.link!}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all"
                    >
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded-full bg-rose-100 text-rose-600">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <div className="group relative">
                      <button
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 group-hover:text-blue-600 group-hover:bg-slate-50 transition-all"
                        aria-expanded="false"
                      >
                        <span>{item.name}</span>
                        <i className="fas fa-chevron-down text-[10px] text-slate-400 group-hover:text-blue-600 group-hover:rotate-180 transition-transform duration-200 ml-0.5"></i>
                      </button>

                      {/* Dropdown Menu */}
                      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 absolute top-full left-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white border border-slate-200 p-3 shadow-2xl z-50">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 border-b border-slate-100 mb-2 flex items-center justify-between">
                          <span>{item.name === 'Course' ? 'Master Certification Programs' : 'IT Training Specializations'}</span>
                          <span className="text-blue-600 font-bold">100% Placement</span>
                        </div>
                        <div className="max-h-[380px] overflow-y-auto pr-1 space-y-1">
                          {item.items?.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              href={sub.link}
                              className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all group/item"
                            >
                              <div className="flex items-center gap-2.5 truncate">
                                <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                  <i className={`${sub.icon || 'fas fa-graduation-cap'} text-xs`}></i>
                                </span>
                                <span className="truncate">{sub.name}</span>
                              </div>
                              {sub.badge && (
                                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-rose-100 text-rose-600 shrink-0">
                                  {sub.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>



            {/* Mobile Header Buttons */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${phoneNumber}`}
                className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center text-sm shadow-sm"
                aria-label="Call Us"
              >
                <i className="fas fa-phone-alt text-xs"></i>
              </a>
              <a
                href={`https://wa.me/919036524555`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center text-base shadow-sm"
                aria-label="WhatsApp Us"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <button
                ref={menuButtonRef}
                onClick={toggleMenu}
                className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-all ml-1"
                aria-label="Toggle menu"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeMenu}
      >
        <div
          ref={mobileMenuRef}
          className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out shadow-2xl ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <img src="/logo.webp" alt="Logo" className="h-9 w-auto" />
                <span className="font-extrabold text-slate-900 text-base">LearnMore</span>
              </div>
              <button
                onClick={closeMenu}
                className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center"
              >
                <i className="fas fa-times text-sm"></i>
              </button>
            </div>

            <div className="space-y-1">
              {navLinks.map((item, idx) => (
                <div key={idx}>
                  {item.type === 'link' ? (
                    <Link
                      href={item.link!}
                      onClick={closeMenu}
                      className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                    >
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-600">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                      >
                        <span>{item.name}</span>
                        <i className={`fas fa-chevron-${activeDropdown === item.name ? 'up' : 'down'} text-xs text-slate-400`}></i>
                      </button>

                      {activeDropdown === item.name && (
                        <div className="pl-3 pr-1 py-2 space-y-1 bg-slate-50 rounded-xl mt-1">
                          {item.items?.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              href={sub.link}
                              onClick={closeMenu}
                              className="flex items-center justify-between py-2 px-2 text-xs font-medium text-slate-600 hover:text-blue-600"
                            >
                              <span className="truncate">{sub.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-4">
            <button
              onClick={() => {
                closeMenu();
                openEnrollModal('Mobile Menu CTA');
              }}
              className="w-full py-3 rounded-full bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25"
            >
              Book Free Demo Class
            </button>
            <div className="flex flex-col gap-2 text-xs text-slate-600">
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 hover:text-blue-600">
                <i className="fas fa-phone-alt text-blue-600"></i>
                <span>{phoneNumber}</span>
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-600">
                <i className="fab fa-whatsapp text-emerald-600 text-sm"></i>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}