'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useEnroll } from '@/context/EnrollContext';
import TopOfferBanner from './TopOfferBanner';

interface NavItem {
  name: string;
  link?: string;
  type: 'link' | 'dropdown';
  items?: { name: string; link: string; external?: boolean; icon?: string }[];
}

const navLinks: NavItem[] = [
  { name: 'Home', link: '/', type: 'link' },
  {
    name: 'Course',
    type: 'dropdown',
    items: [
      { name: 'Python Fullstack Master Program', link: '/course/python-fullstack' },
      { name: 'Data Analytics Master Program', link: '/course/data-analytics' },
      { name: 'Cloud Master Program', link: '/course/cloud-devops' },
      { name: 'Software Testing Master Program', link: '/course/software-testing' },
      { name: 'Data Engineering Master Program', link: '/course/data-engineering' },
      { name: 'Data Science with AI Master Program', link: '/course/data-science-ai' },
    ],
  },
  {
    name: 'IT Services',
    type: 'dropdown',
    items: [
      { name: 'AWS Training', link: '/aws-training-in-marathahalli', external: false, icon: 'fab fa-aws' },
      { name: 'Python Training', link: '/python-training-in-marathahalli', external: false, icon: 'fab fa-python' },
      { name: 'DevOps Training', link: '/devops-training-in-marathahalli', external: false, icon: 'fas fa-cogs' },
      { name: 'Software Testing Training', link: '/software-testing-training-in-marathahalli', external: false, icon: 'fas fa-bug' },
      { name: 'Java Full Stack Training', link: '/java-fullstack-training-in-marathahalli', external: false, icon: 'fab fa-java' },
      { name: 'Python Full Stack Training', link: '/python-fullstack-training-in-marathahalli', external: false, icon: 'fab fa-python' },
      { name: 'Data Analytics Training', link: '/data-analytics-training-in-marathahalli', external: false, icon: 'fas fa-chart-line' },
      { name: 'Microsoft Azure Training', link: '/azure-training-in-marathahalli', external: false, icon: 'fab fa-microsoft' },
    ],
  },
  { name: 'Placement', link: '/placement', type: 'link' },
  { name: 'Services', link: '/services', type: 'link' },
  { name: 'Internships', link: '/internships', type: 'link' },
  { name: 'Blog', link: '/blog', type: 'link' },
  { name: 'Offers', link: '/offer', type: 'link' },
];

export default function Header() {
  const { openEnrollModal } = useEnroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close menu
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

  // Prevent body scroll when menu is open
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
  const whatsappNumber = "+919036354552";

  return (
    <>
      {/* Top Offer Banner */}
      <TopOfferBanner />

      <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        {/* Contact Bar - Hidden on mobile, shows only on desktop */}
        <div className="contact-bar hidden md:block">
          <div className="contact-bar-inner">
            <div className="flex items-center gap-4">
              <a href={`tel:${phoneNumber}`} className="contact-link">
                <i className="fas fa-phone-alt"></i>
                <span>Call: {phoneNumber}</span>
              </a>
              <span className="text-gray-600">|</span>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-whatsapp text-green-500"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container-custom">
          <div className="nav-flex">
            {/* Logo */}
            <Link href="/" className="logo" onClick={closeMenu}>
              <img src="/logo.png" alt="LearnMore Logo" />
              <div>
                <span className="logo-red">LearnMore</span>
                <span className="logo-black">Technologies</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="nav-links">
              {navLinks.map((item, idx) => (
                <li key={idx} className={item.type === 'dropdown' ? 'dropdown' : ''}>
                  {item.type === 'link' ? (
                    <Link href={item.link!}>{item.name}</Link>
                  ) : (
                    <>
                      <a href="#">{item.name} <i className="fas fa-chevron-down text-xs ml-1"></i></a>
                      <ul className={`dropdown-menu ${item.name === 'IT Services' ? 'it-services-menu' : ''}`}>
                        {item.items?.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <Link href={subItem.link}>
                              {subItem.icon && <i className={`${subItem.icon} mr-2 w-4`}></i>}
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Side */}
            <div className="nav-right">
              <button onClick={() => openEnrollModal()} className="btn-primary">
                Enroll Now
              </button>
            </div>

            {/* Animated Hamburger Menu Button */}
            <button
              ref={menuButtonRef}
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Animated Sidebar Mobile Menu */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <div ref={mobileMenuRef} className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <button onClick={closeMenu} className="mobile-close-btn">
            <i className="fas fa-times"></i>
          </button>

          {/* Logo in Sidebar */}
          <div className="mobile-logo">
            <img src="/logo.png" alt="LearnMore Logo" />
            <div>
              <span className="logo-red">LearnMore</span>
              <span className="logo-black">Technologies</span>
            </div>
          </div>

          {/* Mobile Navigation Links with Animation */}
          <ul className="mobile-nav-links">
            {navLinks.map((item, idx) => (
              <li key={idx} style={{ animationDelay: `${idx * 0.05}s` }}>
                {item.type === 'link' ? (
                  <Link href={item.link!} onClick={closeMenu}>
                    <span className="link-icon">
                      {item.name === 'Home' && <i className="fas fa-home"></i>}
                      {item.name === 'Placement' && <i className="fas fa-briefcase"></i>}
                      {item.name === 'Services' && <i className="fas fa-cogs"></i>}
                      {item.name === 'Internships' && <i className="fas fa-graduation-cap"></i>}
                      {item.name === 'Blog' && <i className="fas fa-blog"></i>}
                      {item.name === 'Offers' && <i className="fas fa-tags"></i>}
                    </span>
                    <span className="link-text">{item.name}</span>
                    <i className="fas fa-arrow-right link-arrow"></i>
                  </Link>
                ) : (
                  <>
                    <button onClick={() => toggleDropdown(item.name)} className="mobile-dropdown-btn">
                      <span className="link-icon">
                        {item.name === 'Course' && <i className="fas fa-book-open"></i>}
                        {item.name === 'IT Services' && <i className="fas fa-cloud"></i>}
                      </span>
                      <span className="link-text">{item.name}</span>
                      <i className={`fas fa-chevron-${activeDropdown === item.name ? 'up' : 'down'} dropdown-arrow`}></i>
                    </button>
                    <div className={`mobile-dropdown-menu ${activeDropdown === item.name ? 'active' : ''}`}>
                      {item.items?.map((subItem, subIdx) => (
                        <Link key={subIdx} href={subItem.link} onClick={closeMenu}>
                          {subItem.icon && <i className={`${subItem.icon} mr-2`}></i>}
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Contact Info */}
          <div className="mobile-contact-info">
            <div className="flex flex-col gap-3">
              <a href={`tel:${phoneNumber}`} className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <span>{phoneNumber}</span>
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="contact-item">
                <i className="fab fa-whatsapp text-green-500"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mobile-social-icons">
            <h4>Connect With Us</h4>
            <div className="social-icons-wrapper">
              <a href="https://www.youtube.com/@learnnmore" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com/learnmore_technologies/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/learnmoretechnologiesbangalore/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/919514203013" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.facebook.com/share/1CyNbbCSho/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          {/* Enroll Button */}
          <button 
            onClick={() => {
              closeMenu();
              openEnrollModal();
            }} 
            className="btn-primary mobile-enroll-btn"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="floating-icons">
        <a href={`tel:${phoneNumber}`} className="floating-call">
          <i className="fas fa-phone-alt"></i>
          <span className="tooltip">Call Us</span>
        </a>
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="floating-whatsapp">
          <i className="fab fa-whatsapp"></i>
          <span className="tooltip">WhatsApp</span>
        </a>
      </div>

      <style jsx>{`
        /* Animated Hamburger Menu */
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 40px;
          height: 40px;
          position: relative;
          z-index: 1001;
        }

        .menu-toggle .line {
          display: block;
          width: 25px;
          height: 2px;
          background: #333;
          position: absolute;
          left: 7.5px;
          transition: all 0.3s ease;
        }

        .menu-toggle .line-1 { top: 14px; }
        .menu-toggle .line-2 { top: 20px; }
        .menu-toggle .line-3 { top: 26px; }

        .menu-toggle.active .line-1 {
          transform: rotate(45deg);
          top: 20px;
          background: #e63946;
        }

        .menu-toggle.active .line-2 {
          opacity: 0;
          transform: translateX(-20px);
        }

        .menu-toggle.active .line-3 {
          transform: rotate(-45deg);
          top: 20px;
          background: #e63946;
        }

        @media (max-width: 992px) {
          .menu-toggle {
            display: block;
          }
        }

        /* Sidebar Overlay */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Sidebar Container */
        .mobile-menu-container {
          position: absolute;
          right: -100%;
          top: 0;
          width: 85%;
          max-width: 380px;
          height: 100%;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 30px 25px;
          overflow-y: auto;
          transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: -5px 0 30px rgba(0, 0, 0, 0.3);
        }

        .mobile-menu-overlay.active .mobile-menu-container {
          right: 0;
        }

        /* All Text White */
        .mobile-menu-container,
        .mobile-menu-container * {
          color: #ffffff !important;
        }

        .mobile-logo .logo-red {
          color: #e63946 !important;
        }

        .mobile-logo .logo-black {
          color: #ffffff !important;
        }

        /* Close Button */
        .mobile-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .mobile-close-btn:hover {
          background: rgba(230, 57, 70, 0.8);
          transform: rotate(90deg);
        }

        /* Mobile Logo */
        .mobile-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-logo img {
          height: 40px;
          filter: brightness(0) invert(1);
        }

        /* Navigation Links */
        .mobile-nav-links {
          list-style: none;
          padding: 0;
          margin: 0 0 30px 0;
        }

        .mobile-nav-links li {
          margin-bottom: 5px;
          opacity: 0;
          transform: translateX(30px);
          animation: slideIn 0.4s ease forwards;
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-nav-links li a,
        .mobile-dropdown-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          text-decoration: none;
          width: 100%;
          background: none;
          border: none;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-nav-links li a .link-icon,
        .mobile-dropdown-btn .link-icon {
          width: 28px;
          color: #e63946 !important;
        }

        .mobile-nav-links li a .link-text,
        .mobile-dropdown-btn .link-text {
          flex: 1;
          text-align: left;
        }

        .mobile-nav-links li a .link-arrow,
        .mobile-dropdown-btn .dropdown-arrow {
          opacity: 0;
          transition: all 0.3s ease;
        }

        .mobile-nav-links li a:hover .link-arrow,
        .mobile-dropdown-btn:hover .dropdown-arrow {
          opacity: 1;
          transform: translateX(5px);
        }

        .mobile-nav-links li a:hover,
        .mobile-dropdown-btn:hover {
          color: #e63946 !important;
          padding-left: 5px;
        }

        /* Dropdown Menu */
        .mobile-dropdown-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
          padding-left: 40px;
        }

        .mobile-dropdown-menu.active {
          max-height: 500px;
        }

        .mobile-dropdown-menu a {
          display: block;
          padding: 10px 0;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateX(-20px);
        }

        .mobile-dropdown-menu.active a {
          animation: fadeInLeft 0.3s ease forwards;
        }

        @keyframes fadeInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-dropdown-menu a:hover {
          color: #e63946 !important;
          padding-left: 10px;
        }

        /* Contact Info */
        .mobile-contact-info {
          margin-bottom: 25px;
          padding: 15px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
          text-decoration: none;
        }

        .contact-item i {
          width: 35px;
          height: 35px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Social Icons */
        .mobile-social-icons {
          margin-bottom: 25px;
        }

        .mobile-social-icons h4 {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 15px;
        }

        .social-icons-wrapper {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .social-icons-wrapper a {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-icons-wrapper a:hover {
          background: #e63946;
          transform: translateY(-5px);
        }

        /* Enroll Button */
        .mobile-enroll-btn {
          width: 100%;
          background: linear-gradient(135deg, #e63946, #d00000);
          color: white;
          border: none;
          padding: 14px;
          border-radius: 40px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-enroll-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(230, 57, 70, 0.4);
        }

        /* Scrollbar */
        .mobile-menu-container::-webkit-scrollbar {
          width: 4px;
        }

        .mobile-menu-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        .mobile-menu-container::-webkit-scrollbar-thumb {
          background: #e63946;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}