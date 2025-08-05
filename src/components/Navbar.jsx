import React, { useState, useEffect, useRef } from 'react';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone, Linkedin, Menu, X, ChevronDown } from 'lucide-react';

export default function BraintechHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  // Handle dropdown toggle
  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <>
      {/* Top Contact Bar - Desktop Only */}
      <div className="w-full z-40 relative">
        <div className="hidden xl:block bg-white py-4 px-6 shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/">
                <img src="/logo.png" alt="Logo" className="w-24 h-12" />
              </a>
            </div>

            {/* Contact Info - Desktop Only */}
            <div className="flex items-center gap-8">
              <ContactItem
                icon={<MapPin />}
                label="Address"
                value="Plot No.117, Pocket 4, Dwarka Sector 23"
              />
              <ContactItem
                icon={<Mail />}
                label="E-mail"
                value="info@aegitek.com"
              />
              <ContactItem
                icon={<Phone />}
                label="Phone"
                value="+91-9119995726"
              />
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className={`py-4 px-4 md:px-6 transition-all duration-500 ease-in-out ${isScrolled
            ? 'fixed top-0 left-0 right-0 z-50 text-black shadow-lg bg-white '
            : 'bg-blue-400 text-white'
          }`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo - Mobile/Tablet Only */}
            <div className={`${isScrolled ? 'block' : 'xl:hidden flex items-center'}`}>
              <a href="/">
                <img src="/logoremovebg.png" alt="Logo" className="w-20 h-10 px-2 md:w-24 md:h-12" />
              </a>
            </div>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden lg:flex items-center ml-auto">
              <NavLinks
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                dropdownRefs={dropdownRefs}
                isScrolled={isScrolled}
              />
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile/Tablet Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="mobile-menu-content bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <MobileNavLinks onLinkClick={() => setIsMobileMenuOpen(false)} />
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isScrolled ? 'top-16' : 'top-20'}`}>
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative mobile-menu-content bg-white mx-4 mt-4 rounded-lg shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <MobileNavLinks onLinkClick={() => setIsMobileMenuOpen(false)} dark />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
        {React.cloneElement(icon, { className: 'w-5 h-5', style: { color: '#189cd2' } })}
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-gray-800">{label}</div>
        <div className="text-sm text-gray-600 break-words">{value}</div>
      </div>
    </div>
  );
}

function NavLinks({ small = false, activeDropdown, setActiveDropdown, dropdownRefs, isScrolled }) {
  const baseClass = `relative group transition-all duration-300 ease-in-out font-medium transform hover:scale-105 
  ${small ? 'text-sm' : 'text-base'}`;

  // Enhanced link styling with animated underline and hover effects
  const linkClass = `${baseClass} hover:text-blue-100 pb-2 relative overflow-hidden
    before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
    before:bg-gradient-to-r before:from-blue-500 before:to-blue-700 
    before:transition-all before:duration-300 before:ease-out
    hover:before:w-full
    ${isScrolled ? 'hover:text-blue-400' : 'hover:text-blue-200'}`;

  const servicesItems = [
    { name: 'Dairy ERP & Industry Automation', href: '/services/Dairy-ERP' },
    { name: 'Software Development', href: '/services/Software-Development' },
    { name: 'Web & Mobile App Development', href: '/services/Web-Mobile-App' },
    { name: 'IT Consultancy & System Integration', href: '/services/IT-Consultancy' },
    { name: 'AI, ML & Process Automation (RPA)', href: '/services/AI-ML' },
    { name: 'Digital Marketing & SEO', href: '/services/Digital-Marketing' },
    { name: 'Training & Internship Programs', href: '/services/Training-Internship' }
  ];

  const pagesItems = [
    { name: 'Milk Matrix ERP', href: '/pages/dairy' },
    { name: 'Erp Next', href: '/pages/Erp-Next' },
    { name: 'Milk Trail', href: '/pages/Milk-Trail' },
    { name: 'Product 4', href: '/product' }
  ];

  // Handle dropdown toggle
  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <div className="flex items-center space-x-8 relative">
      <a href="/" className={linkClass}>
        <span className="relative z-10">Home</span>
      </a>
      <a href="/AboutPage" className={linkClass}>
        <span className="relative z-10">About</span>
      </a>

      {/* Services Dropdown */}
      <div className="relative dropdown-container" ref={(el) => (dropdownRefs.current.services = el)}>
        <button
          onClick={() => handleDropdownToggle('services')}
          className={`${linkClass} flex items-center space-x-1 focus:outline-none`}
        >
          <span className="relative z-10">Services</span>
          <ChevronDown
            className={`w-4 h-4 transition-all duration-300 transform group-hover:scale-110 ${activeDropdown === 'services' ? 'rotate-180' : ''
              }`}
          />
        </button>

        {activeDropdown === 'services' && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 opacity-0 translate-y-2 animate-fade-in">
            {servicesItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-200 text-sm transform hover:translate-x-2"
                onClick={() => setActiveDropdown(null)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Pages Dropdown */}
      <div className="relative dropdown-container" ref={(el) => (dropdownRefs.current.pages = el)}>
        <button
          onClick={() => handleDropdownToggle('pages')}
          className={`${linkClass} flex items-center space-x-1 focus:outline-none`}
        >
          <span className="relative z-10">Pages</span>
          <ChevronDown
            className={`w-4 h-4 transition-all duration-300 transform group-hover:scale-110 ${activeDropdown === 'pages' ? 'rotate-180' : ''
              }`}
          />
        </button>

        {activeDropdown === 'pages' && (
          <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 opacity-0 translate-y-2 animate-fade-in">
            {pagesItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-200 text-sm transform hover:translate-x-2"
                onClick={() => setActiveDropdown(null)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>

      <a href="/Career" className={linkClass}>
        <span className="relative z-10">Career</span>
      </a>
      <a href="/Contact" className={linkClass}>
        <span className="relative z-10">Contact</span>
      </a>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

function MobileNavLinks({ onLinkClick, dark = false }) {
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const baseClass = `block py-3 px-2 rounded-md transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-105 relative overflow-hidden
    before:absolute before:left-0 before:top-0 before:w-1 before:h-0 before:bg-gradient-to-b before:from-blue-500 before:to-indigo-600 
    before:transition-all before:duration-300 before:ease-out hover:before:h-full ${dark
      ? 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
      : 'text-white hover:text-blue-100 hover:bg-white hover:bg-opacity-20'
    }`;

  const dropdownButtonClass = `flex items-center justify-between w-full py-3 px-2 rounded-md transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-105 relative overflow-hidden
    before:absolute before:left-0 before:top-0 before:w-1 before:h-0 before:bg-gradient-to-b before:from-blue-500 before:to-indigo-600 
    before:transition-all before:duration-300 before:ease-out hover:before:h-full ${dark
      ? 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
      : 'text-white hover:text-blue-100 hover:bg-white hover:bg-opacity-20'
    }`;

  const servicesItems = [
    { name: 'Dairy ERP & Industry Automation', href: '/services/Dairy-ERP' },
    { name: 'Software Development', href: '/services/Software-Development' },
    { name: 'Web & Mobile App Development', href: '/services/Web-Mobile-App' },
    { name: 'IT Consultancy & System Integration', href: '/services/IT-Consultancy' },
    { name: 'AI, ML & Process Automation (RPA)', href: '/services/AI-ML' },
    { name: 'Digital Marketing & SEO', href: '/services/Digital-Marketing' },
    { name: 'Training & Internship Programs', href: '/services/Training-Internship' }
  ];

  const pagesItems = [
    { name: 'Milk Matrix ERP', href: '/pages/dairy' },
    { name: 'Erp Next', href: '/pages/Erp-Next' },
    { name: 'Milk Trail', href: '/pages/Milk-Trail' },
    { name: 'Product 4', href: '/product' }
  ];

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className="space-y-1">
      <a href="/" className={baseClass} onClick={onLinkClick}>
        <span className="relative z-10">Home</span>
      </a>
      <a href="/AboutPage" className={baseClass} onClick={onLinkClick}>
        <span className="relative z-10">About</span>
      </a>

      {/* Services Mobile Dropdown */}
      <div>
        <button
          onClick={() => toggleMobileDropdown('services')}
          className={dropdownButtonClass}
        >
          <span className="relative z-10">Services</span>
          <ChevronDown className={`w-4 h-4 transition-all duration-300 transform ${mobileDropdowns.services ? 'rotate-180 scale-110' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${mobileDropdowns.services ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="ml-4 mt-1 space-y-1">
            {servicesItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`${baseClass} text-sm`}
                onClick={onLinkClick}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: mobileDropdowns.services ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Pages Mobile Dropdown */}
      <div>
        <button
          onClick={() => toggleMobileDropdown('pages')}
          className={dropdownButtonClass}
        >
          <span className="relative z-10">Pages</span>
          <ChevronDown className={`w-4 h-4 transition-all duration-300 transform ${mobileDropdowns.pages ? 'rotate-180 scale-110' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${mobileDropdowns.pages ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="ml-4 mt-1 space-y-1">
            {pagesItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`${baseClass} text-sm`}
                onClick={onLinkClick}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: mobileDropdowns.pages ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <a href="/Career" className={baseClass} onClick={onLinkClick}>
        <span className="relative z-10">Career</span>
      </a>
      <a href="/Contact" className={baseClass} onClick={onLinkClick}>
        <span className="relative z-10">Contact</span>
      </a>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}