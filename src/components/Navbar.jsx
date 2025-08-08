

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { MapPin, Mail, Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

// Memoized ContactItem component for performance
const ContactItem = React.memo(({ icon, label, value, onClick }) => (
  <div 
    className="flex items-center space-x-3 cursor-pointer group transition-all duration-300 hover:scale-105 p-2 rounded-lg hover:bg-blue-50"
    onClick={onClick}
  >
    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
      {React.cloneElement(icon, { className: 'w-5 h-5 group-hover:scale-110 transition-transform duration-300', style: { color: '#189cd2' } })}
    </div>
    <div className="min-w-0">
      <div className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{label}</div>
      <div className="text-sm text-gray-600 break-words group-hover:text-blue-500 transition-colors duration-300">{value}</div>
    </div>
  </div>
));
ContactItem.displayName = 'ContactItem';

// Static navigation data for better performance
const NAVIGATION_DATA = {
  services: [
    { name: 'Dairy ERP & Industry Automation', href: '/services/Dairy-ERP', id: 'dairy-erp' },
    { name: 'Software Development', href: '/services/Software-Development', id: 'software-dev' },
    { name: 'Web & Mobile App Development', href: '/services/Web-Mobile-App', id: 'web-mobile' },
    { name: 'IT Consultancy & System Integration', href: '/services/IT-Consultancy', id: 'it-consultancy' },
    { name: 'AI, ML & Process Automation (RPA)', href: '/services/AI-ML', id: 'ai-ml' },
    { name: 'Digital Marketing & SEO', href: '/services/Digital-Marketing', id: 'digital-marketing' },
    { name: 'Training & Internship Programs', href: '/services/Training-Internship', id: 'training' }
  ],
  products: [
    { name: 'Milk Matrix ERP', href: '/products/milk-matrix-erp', id: 'milk-matrix' },
    { name: 'ERP Next', href: '/products/erp-next', id: 'erp-next' },
    { name: 'Milk Trail', href: '/products/milk-trail', id: 'milk-trail' },
  ]
};

// Memoized NavLink component with enhanced styling
const NavLink = React.memo(({ to, children, isActive, onClick, isScrolled, className = '' }) => {
  const baseClasses = `relative group transition-all duration-300 ease-in-out font-medium transform hover:scale-105 pb-2 overflow-hidden
    before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
    before:bg-gradient-to-r before:from-blue-500 before:to-blue-700 
    before:transition-all before:duration-300 before:ease-out
    hover:before:w-full
    ${isScrolled ? 'hover:text-blue-600' : 'hover:text-blue-200'}
    ${isActive ? (isScrolled ? 'text-blue-600 before:w-full' : 'text-blue-200 before:w-full') : ''}
    ${className}`;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={baseClasses}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
});
NavLink.displayName = 'NavLink';

// Memoized DropdownButton component
const DropdownButton = React.memo(({ 
  isActive, 
  onClick, 
  children, 
  ariaExpanded, 
  isScrolled 
}) => {
  const baseClasses = `relative group flex items-center space-x-1 transition-all duration-300 ease-in-out font-medium transform hover:scale-105 pb-2 overflow-hidden
    before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
    before:bg-gradient-to-r before:from-blue-500 before:to-blue-700 
    before:transition-all before:duration-300 before:ease-out
    hover:before:w-full
    focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded-sm
    ${isScrolled ? 'hover:text-blue-600' : 'hover:text-blue-200'}
    ${isActive ? (isScrolled ? 'text-blue-600 before:w-full' : 'text-blue-200 before:w-full') : ''}`;

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      aria-expanded={ariaExpanded}
      aria-haspopup="true"
    >
      <span className="relative z-10">{children}</span>
      <ChevronDown
        className={`w-4 h-4 transition-all duration-300 transform group-hover:scale-110 ${
          ariaExpanded ? 'rotate-180' : ''
        }`}
        aria-hidden="true"
      />
    </button>
  );
});
DropdownButton.displayName = 'DropdownButton';

// Memoized DropdownMenu component
const DropdownMenu = React.memo(({ items, onItemClick, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
      style={{
        opacity: 1,
        transform: 'translateY(0)',
        animation: 'dropdownFadeIn 0.3s ease-out forwards'
      }}
      role="menu"
    >
      {items.map((item, index) => (
        <Link
          key={item.id}
          to={item.href}
          onClick={onItemClick}
          className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-200 text-sm transform hover:translate-x-2"
          style={{ animationDelay: `${index * 50}ms` }}
          role="menuitem"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
});
DropdownMenu.displayName = 'DropdownMenu';

// Memoized MobileNavLink component
const MobileNavLink = React.memo(({ to, children, onClick, isActive }) => {
  const baseClasses = `block py-3 px-2 rounded-md transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-105 relative overflow-hidden
    before:absolute before:left-0 before:top-0 before:w-1 before:h-0 before:bg-gradient-to-b before:from-blue-500 before:to-indigo-600 
    before:transition-all before:duration-300 before:ease-out hover:before:h-full
    text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50
    ${isActive ? 'bg-blue-50 text-blue-600 before:h-full' : ''}`;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={baseClasses}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
});
MobileNavLink.displayName = 'MobileNavLink';

// Main Navbar Component
const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const dropdownRefs = useRef({});

  // Memoize current path for performance
  const currentPath = useMemo(() => location.pathname, [location.pathname]);

  // Enhanced scroll handler with the new threshold
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 80);
  }, []);

  // Setup scroll listener with passive option for better performance
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  // Enhanced route change handler with smooth scroll to top and menu cleanup
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileDropdowns({});
    
    // Use try-catch for window.scrollTo
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Optimized handlers
  const toggleMobileMenu = useCallback((e) => {
    if (e) {
      e.stopPropagation();
    }
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdownName) => {
    setActiveDropdown(prev => prev === dropdownName ? null : dropdownName);
  }, []);

  const toggleMobileDropdown = useCallback((dropdownName) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    }));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Helper function to check if path is active
  const isActivePath = useCallback((path) => {
    return currentPath === path;
  }, [currentPath]);

  // Helper functions for contact actions using only JavaScript (no href/anchor tags)
  const openMap = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Company coordinates: Aegitek Solutions, Dwarka Sector 23
    const latitude = 28.558087101017314;
    const longitude = 77.04728095931355;
    const companyName = "Aegitek Solutions";
    const address = "Plot No.117, Pocket 4, Dwarka Sector 23, Delhi, India";
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    let mapUrl;
    
    if (isIOS) {
      // iOS - Try Apple Maps first, fallback to Google Maps
      mapUrl = `maps://maps.google.com/maps?daddr=${latitude},${longitude}&amp;ll=`;
      
      // Fallback to Apple Maps native URL
      const appleMapsUrl = `http://maps.apple.com/?q=${encodeURIComponent(companyName)}&ll=${latitude},${longitude}`;
      
      try {
        // Try to open in Maps app
        window.location.href = mapUrl;
        
        // If that doesn't work, try Apple Maps
        setTimeout(() => {
          window.open(appleMapsUrl, '_blank');
        }, 500);
      } catch (error) {
        // Final fallback to Google Maps web
        window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, '_blank');
      }
      
    } else if (isAndroid) {
      // Android - Use Google Maps intent
      mapUrl = `intent://maps.google.com/maps?daddr=${latitude},${longitude}&amp;ll=#Intent;scheme=https;package=com.google.android.apps.maps;end`;
      
      try {
        window.location.href = mapUrl;
      } catch (error) {
        // Fallback to web Google Maps
        window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, '_blank');
      }
      
    } else {
      // Desktop - Use Google Maps web with precise coordinates
      mapUrl = `https://www.google.com/maps/place/Aegitek+Solutions/@${latitude},${longitude},17z/data=!3m1!4b1!4m6!3m5!1s0x390d1b00609ae89b:0x542e45088cb8670e!8m2!3d${latitude}!4d${longitude}!16s%2Fg%2F11qpwvnb_w`;
      
      try {
        window.open(mapUrl, '_blank', 'noopener,noreferrer');
      } catch (error) {
        // Final fallback - copy address to clipboard
        copyToClipboard(address, 'Address');
      }
    }
  }, []);

  const openEmail = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const email = "info@aegitek.com";
    const subject = "Inquiry from Website";
    const body = "Hello,\n\nI would like to inquire about your services.\n\nBest regards,";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    try {
      // Try multiple methods for better compatibility
      const opened = window.open(mailtoLink, '_self');
      if (!opened || opened.closed || typeof opened.closed === 'undefined') {
        // Fallback methods
        try {
          window.location.assign(mailtoLink);
        } catch (assignError) {
          copyToClipboard(email, 'Email address');
        }
      }
    } catch (error) {
      copyToClipboard(email, 'Email address');
    }
  }, []);

  const makeCall = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const phoneNumber = "+919119995726";
    const telLink = `tel:${phoneNumber}`;
    
    try {
      // Try multiple methods for better compatibility
      const opened = window.open(telLink, '_self');
      if (!opened || opened.closed || typeof opened.closed === 'undefined') {
        // Fallback methods
        try {
          window.location.assign(telLink);
        } catch (assignError) {
          copyToClipboard(phoneNumber, 'Phone number');
        }
      }
    } catch (error) {
      copyToClipboard(phoneNumber, 'Phone number');
    }
  }, []);

  // Helper function for clipboard fallback
  const copyToClipboard = useCallback(async (text, type) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        alert(`${type} copied to clipboard: ${text}`);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          alert(`${type} copied to clipboard: ${text}`);
        } catch (err) {
          alert(`${type}: ${text}`);
        } finally {
          document.body.removeChild(textArea);
        }
      }
    } catch (error) {
      alert(`${type}: ${text}`);
    }
  }, []);

  return (
    <>
      <header className="w-full z-50 relative">
        {/* Top Contact Bar - Desktop Only */}
        <div className="hidden xl:block bg-white py-4 px-6 shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" aria-label="Company Home" className="transition-transform duration-300 hover:scale-105">
                <img 
                  src="/logo.png" 
                  alt="Company Logo" 
                  className="w-24 h-12"
                  loading="eager"
                />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-8">
              <ContactItem
                icon={<MapPin />}
                label="Address"
                value="Plot No.117, Pocket 4, Dwarka Sector 23"
                onClick={openMap}
              />
              <ContactItem
                icon={<Mail />}
                label="E-mail"
                value="info@aegitek.com"
                onClick={openEmail}
              />
              <ContactItem
                icon={<Phone />}
                label="Phone"
                value="+91-9119995726"
                onClick={makeCall}
              />
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav 
          className={`py-4 px-4 md:px-6 transition-all duration-500 ease-in-out ${
            isScrolled 
              ? 'fixed top-0 left-0 right-0 bg-white shadow-lg text-black z-50' 
              : 'bg-blue-400 text-white'
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo - Mobile/Tablet */}
            <div className={`${isScrolled ? 'block' : 'xl:hidden'} flex items-center`}>
              <Link to="/" aria-label="Company Home" className="transition-transform duration-300 hover:scale-105">
                <img 
                  src="/logoremovebg.png" 
                  alt="Company Logo" 
                  className="w-20 h-10 px-2 md:w-24 md:h-12"
                  loading="eager"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 ml-auto">
              <NavLink 
                to="/AboutPage" 
                isActive={isActivePath('/AboutPage')} 
                isScrolled={isScrolled}
              >
                About
              </NavLink>

              {/* Services Dropdown */}
              <div className="relative dropdown-container" ref={(el) => (dropdownRefs.current.services = el)}>
                <DropdownButton
                  isActive={NAVIGATION_DATA.services.some(item => isActivePath(item.href))}
                  onClick={() => toggleDropdown('services')}
                  ariaExpanded={activeDropdown === 'services'}
                  isScrolled={isScrolled}
                >
                  Services
                </DropdownButton>

                <DropdownMenu
                  items={NAVIGATION_DATA.services}
                  onItemClick={closeDropdown}
                  isVisible={activeDropdown === 'services'}
                />
              </div>

              {/* Products Dropdown */}
              <div className="relative dropdown-container" ref={(el) => (dropdownRefs.current.products = el)}>
                <DropdownButton
                  isActive={NAVIGATION_DATA.products.some(item => isActivePath(item.href))}
                  onClick={() => toggleDropdown('products')}
                  ariaExpanded={activeDropdown === 'products'}
                  isScrolled={isScrolled}
                >
                  Products
                </DropdownButton>

                <DropdownMenu
                  items={NAVIGATION_DATA.products}
                  onItemClick={closeDropdown}
                  isVisible={activeDropdown === 'products'}
                />
              </div>

              <NavLink 
                to="/Career" 
                isActive={isActivePath('/Career')} 
                isScrolled={isScrolled}
              >
                Career
              </NavLink>

              <NavLink 
                to="/Contact" 
                isActive={isActivePath('/Contact')} 
                isScrolled={isScrolled}
              >
                Contact
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isScrolled ? 'top-16' : 'top-20'
        }`}>
          <div 
            className="absolute inset-0 bg-black bg-opacity-50" 
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div className="relative bg-white mx-4 mt-4 rounded-lg shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="space-y-1">
                <MobileNavLink 
                  to="/AboutPage" 
                  onClick={closeMobileMenu}
                  isActive={isActivePath('/AboutPage')}
                >
                  About
                </MobileNavLink>

                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown('services')}
                    className="flex items-center justify-between w-full py-3 px-2 rounded-md transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-105 relative overflow-hidden
                      before:absolute before:left-0 before:top-0 before:w-1 before:h-0 before:bg-gradient-to-b before:from-blue-500 before:to-indigo-600 
                      before:transition-all before:duration-300 before:ease-out hover:before:h-full
                      text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
                    aria-expanded={mobileDropdowns.services}
                  >
                    <span className="relative z-10">Services</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-all duration-300 transform ${
                        mobileDropdowns.services ? 'rotate-180 scale-110' : ''
                      }`} 
                      aria-hidden="true"
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdowns.services ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="ml-4 mt-1 space-y-1">
                      {NAVIGATION_DATA.services.map((item, index) => (
                        <Link
                          key={item.id}
                          to={item.href}
                          onClick={closeMobileMenu}
                          className="block py-3 px-2 rounded-md transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-105 relative overflow-hidden
                            before:absolute before:left-0 before:top-0 before:w-1 before:h-0 before:bg-gradient-to-b before:from-blue-500 before:to-indigo-600 
                            before:transition-all before:duration-300 before:ease-out hover:before:h-full
                            text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-sm"
                          style={{
                            animationDelay: `${index * 100}ms`
                          }}
                        >
                          <span className="relative z-10">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Products Dropdown */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown('products')}
                    className="flex items-center justify-between w-full py-3 px-2 rounded-md transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-105 relative overflow-hidden
                      before:absolute before:left-0 before:top-0 before:w-1 before:h-0 before:bg-gradient-to-b before:from-blue-500 before:to-indigo-600 
                      before:transition-all before:duration-300 before:ease-out hover:before:h-full
                      text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
                    aria-expanded={mobileDropdowns.products}
                  >
                    <span className="relative z-10">Products</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-all duration-300 transform ${
                        mobileDropdowns.products ? 'rotate-180 scale-110' : ''
                      }`} 
                      aria-hidden="true"
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdowns.products ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="ml-4 mt-1 space-y-1">
                      {NAVIGATION_DATA.products.map((item, index) => (
                        <Link
                          key={item.id}
                          to={item.href}
                          onClick={closeMobileMenu}
                          className="block py-3 px-2 rounded-md transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-105 relative overflow-hidden
                            before:absolute before:left-0 before:top-0 before:w-1 before:h-0 before:bg-gradient-to-b before:from-blue-500 before:to-indigo-600 
                            before:transition-all before:duration-300 before:ease-out hover:before:h-full
                            text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-sm"
                          style={{
                            animationDelay: `${index * 100}ms`
                          }}
                        >
                          <span className="relative z-10">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <MobileNavLink 
                  to="/Career" 
                  onClick={closeMobileMenu}
                  isActive={isActivePath('/Career')}
                >
                  Career
                </MobileNavLink>

                <MobileNavLink 
                  to="/Contact" 
                  onClick={closeMobileMenu}
                  isActive={isActivePath('/Contact')}
                >
                  Contact
                </MobileNavLink>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inline Styles for Better Compatibility */}
      <style>{`
        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
    </>
  );
};

export default Navbar;