'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import EnrollModal from '@/components/common/EnrollModal';

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
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const phoneNumber = "+919036354552";
  const whatsappNumber = "919514203013";

  return (
    <>
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
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="btn-primary"
              >
                Enroll Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <div ref={mobileMenuRef} className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
          <button onClick={closeMenu} className="mobile-close-btn">
            <i className="fas fa-times"></i>
          </button>

          {/* Mobile Navigation Links */}
          <ul className="mobile-nav-links">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                {item.type === 'link' ? (
                  <Link href={item.link!} onClick={closeMenu}>
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button onClick={() => toggleDropdown(item.name)} className="mobile-dropdown-btn">
                      <span>{item.name}</span>
                      <i className={`fas fa-chevron-${activeDropdown === item.name ? 'up' : 'down'} text-xs ml-2`}></i>
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
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-gray-300">
                <i className="fas fa-phone-alt w-5"></i>
                <span>{phoneNumber}</span>
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300">
                <i className="fab fa-whatsapp w-5 text-green-500"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mobile-social-icons">
            <h4>Connect With Us</h4>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@learnnmore" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="https://www.instagram.com/learnmore_technologies/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/company/learnmoretechnologiesbangalore/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="https://wa.me/919514203013" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a href="https://www.facebook.com/share/1CyNbbCSho/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
            </div>
          </div>

          {/* Enroll Button */}
          <button 
            onClick={() => {
              closeMenu();
              setIsModalOpen(true);
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

      {/* Enroll Modal */}
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}