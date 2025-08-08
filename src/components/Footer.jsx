// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, ChevronUp } from 'lucide-react';

// const AegitekFooter = () => {
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   // Show/hide scroll to top button based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <footer className="relative py-10 px-6 bg-slate-100 overflow-hidden">
//       {/* Custom Background Image */}
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-6">
        
//           {/* Company Info Section */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-3">
//               <div>
//               </div>
//               <img src="../logoremovebg.png" alt="logo" width={130} />
//             </div>
//             <p className="text-gray-600 leading-relaxed">
//               Innovative technology solutions driving digital transformation. 
//               We deliver cutting-edge software and consulting services to help 
//               businesses thrive in the modern digital landscape.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors shadow-sm">
//                 <Facebook size={18} />
//               </a>
//               <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors shadow-sm">
//                 <Twitter size={18} />
//               </a>
//               <a href="https://www.linkedin.com/in/aegitek-solutions-82a1b9375/" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors shadow-sm">
//                 <Linkedin size={18} />
//               </a>
//               <a href="https://www.instagram.com/aegitek_solutions/" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors shadow-sm">
//                 <Instagram size={18} />
//               </a>
//             </div>
//           </div>

//           {/* IT Services Section */}
//           <div className="space-y-6">
//             <h4 className="text-xl font-semibold text-gray-800">Products</h4>
//             <ul className="space-y-3">
//               <li>
//                 <Link to="/products/milk-matrix-erp" className="text-gray-600 hover:text-blue-400 transition-colors">
//                   Milk Matrix ERP
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products/erp-next" className="text-gray-600 hover:text-blue-400 transition-colors">
//                   ERP Next
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products/milk-trail" className="text-gray-600 hover:text-blue-400 transition-colors">
//                 Fresh Milk & More at Your Doorstep
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services/consultancy" className="text-gray-600 hover:text-blue-400 transition-colors">
//                   IT Consultancy & System Integration
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services/ai-ml" className="text-gray-600 hover:text-blue-400 transition-colors">
//                   AI, ML & Process Automation (RPA)
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services/Dairy-ERP" className="text-gray-600 hover:text-blue-400 transition-colors">
//                   Dairy ERP & Industry Automation
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info Section */}
//           <div className="space-y-6">
//             <h4 className="text-xl font-semibold text-gray-800">Contact Info</h4>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
//                   <MapPin size={16} className="text-blue-400" />
//                 </div>
//                 <div>
//                   <p className="text-gray-600">
//                     Plot No. 117, Pocket 4, Block B,Opposite Pillar No. 390, Yashobhoomi, Dwarka-Sector 23,
//                     New Delhi - 110075
//                   </p>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Phone size={16} className="text-blue-400" />
//                 </div>
//                 <a href="tel:+91-9119995726" className="text-gray-600 hover:text-blue-400 transition-colors">
//                   (+91) 9119995726
//                 </a>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Mail size={16} className="text-blue-400" />
//                 </div>
//                 <a href="mailto:info@aegitek.com" className="text-gray-600 hover:text-blue-400 transition-colors">
//                   info@aegitek.com
//                 </a>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Clock size={16} className="text-blue-400" />
//                 </div>
//                 <p className="text-gray-600">
//                   Business Hours: 9:00 - 18:00
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Live Map Section */}
//           <div className="space-y-6">
//             <h4 className="text-xl font-semibold text-gray-800">Find Us</h4>
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1063.047184089114!2d77.04728095931355!3d28.558087101017314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b00609ae89b%3A0x542e45088cb8670e!2sAegitek%20Solutions!5e0!3m2!1sen!2sin!4v1753781462133!5m2!1sen!2sin"
//                 width="100%"
//                 height="230"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Aegitek Office Location"
//                 className="w-full"
//               ></iframe>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-200 pt-2">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="text-gray-600 text-sm">
//               © 2025 All Rights Reserved. Developed By{' '}
//               <a href="https://www.aegitek.com/" className="text-blue-400 hover:text-blue-700 font-medium">
//                 Aegitek
//               </a>
//             </div>
//             <nav className="flex flex-wrap items-center space-x-6">
//               <Link to="/" className="text-gray-600 hover:text-blue-400 text-sm transition-colors">
//                 Home
//               </Link>
//               <span className="text-gray-300">•</span>
//               <Link to="/AboutPage" className="text-gray-600 hover:text-blue-400 text-sm transition-colors">
//                 About
//               </Link>
//               <span className="text-gray-300">•</span>
//               <Link to="/services/Dairy-ERP" className="text-gray-600 hover:text-blue-400 text-sm transition-colors">
//                 Services
//               </Link>
//               <span className="text-gray-300">•</span>
//               <Link to="/career" className="text-gray-600 hover:text-blue-400 text-sm transition-colors">
//                 Career
//               </Link>
//               <span className="text-gray-300">•</span>
//               <Link to="/contact" className="text-gray-600 hover:text-blue-400 text-sm transition-colors">
//                 Contact
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       {showScrollTop && (
//         <button
//           style={{ backgroundImage: 'linear-gradient(250deg, #4e95ed, #189cd2)' }}
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 w-12 h-12 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 group"
//           aria-label="Scroll to top"
//         >
//           <ChevronUp 
//             size={20} 
//             className="transition-transform duration-300 group-hover:-translate-y-1" 
//           />
//         </button>
//       )}
//     </footer>
//   );
// };

// export default AegitekFooter;







import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, ChevronUp } from 'lucide-react';

const AegitekFooter = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-10 px-6 bg-slate-100 overflow-hidden">
      {/* Custom Background Image */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-6">
        
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div>
              </div>
              <img src="../logoremovebg.png" alt="logo" width={130} />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Innovative technology solutions driving digital transformation. 
              We deliver cutting-edge software and consulting services to help 
              businesses thrive in the modern digital landscape.
            </p>
            <div className="flex space-x-4">
              <Link to="/facebook" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors shadow-sm">
                <Facebook size={18} />
              </Link>
              <Link to="/twitter" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors shadow-sm">
                <Twitter size={18} />
              </Link>
              <Link to="https://www.linkedin.com/in/aegitek-solutions-82a1b9375/" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors shadow-sm">
                <Linkedin size={18} />
              </Link>
              <Link to="https://www.instagram.com/aegitek_solutions/" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors shadow-sm">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* IT Services Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-800">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products/milk-matrix-erp" className="text-gray-600 hover:text-blue-400 transition-colors">
                  Milk Matrix ERP
                </Link>
              </li>
              <li>
                <Link to="/products/erp-next" className="text-gray-600 hover:text-blue-400 transition-colors">
                  ERP Next
                </Link>
              </li>
              <li>
                <Link to="/products/milk-trail" className="text-gray-600 hover:text-blue-400 transition-colors">
                Fresh Milk & More at Your Doorstep
                </Link>
              </li>
              <li>
                <Link to="/services/IT-Consultancy" className="text-gray-600 hover:text-blue-400 transition-colors">
                  IT Consultancy & System Integration
                </Link>
              </li>
              <li>
                <Link to="/services/ai-ml" className="text-gray-600 hover:text-blue-400 transition-colors">
                  AI, ML & Process Automation (RPA)
                </Link>
              </li>
              <li>
                <Link to="/services/Dairy-ERP" className="text-gray-600 hover:text-blue-400 transition-colors">
                  Dairy ERP & Industry Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-800">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-600">
                    Plot No. 117, Pocket 4, Block B,Opposite Pillar No. 390, Yashobhoomi, Dwarka-Sector 23,
                    New Delhi - 110075
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-blue-400" />
                </div>
                <Link to="/contact" className="text-gray-600 hover:text-blue-400 transition-colors">
                  (+91) 9119995726
                </Link>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-blue-400" />
                </div>
                <Link to="/contact" className="text-gray-600 hover:text-blue-400 transition-colors">
                  info@aegitek.com
                </Link>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-blue-400" />
                </div>
                <p className="text-gray-600">
                  Business Hours: 9:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Live Map Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-800">Find Us</h4>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1063.047184089114!2d77.04728095931355!3d28.558087101017314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b00609ae89b%3A0x542e45088cb8670e!2sAegitek%20Solutions!5e0!3m2!1sen!2sin!4v1753781462133!5m2!1sen!2sin"
                width="100%"
                height="230"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aegitek Office Location"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              © 2025 All Rights Reserved. Developed By{' '}
              <Link to="/" className="text-blue-400 hover:text-blue-700 font-medium">
                Aegitek
              </Link>
            </div>
            <nav className="flex flex-wrap items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-400 text-sm transition-colors">
                Home
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/AboutPage" className="text-gray-600 hover:text-blue-400 text-sm transition-colors">
                About
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/services/Dairy-ERP" className="text-gray-600 hover:text-blue-400 text-sm transition-colors">
                Services
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/career" className="text-gray-600 hover:text-blue-400 text-sm transition-colors">
                Career
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/contact" className="text-gray-600 hover:text-blue-400 text-sm transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          style={{ backgroundImage: 'linear-gradient(250deg, #4e95ed, #189cd2)' }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 group"
          aria-label="Scroll to top"
        >
          <ChevronUp 
            size={20} 
            className="transition-transform duration-300 group-hover:-translate-y-1" 
          />
        </button>
      )}
    </footer>
  );
};

export default AegitekFooter;