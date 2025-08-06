import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TechCompanyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState({});
  const navigate = useNavigate();

  const floatingAnimation = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
  `;

  useEffect(() => {
    // Inject CSS for floating animation
    const style = document.createElement('style');
    style.textContent = floatingAnimation;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);

    const services = ['milk-trail', 'erp-next', 'milk-matrix-erp', 'web'];
    services.forEach((service, index) => {
      setTimeout(() => {
        setAnimatedCards(prev => ({ ...prev, [service]: true }));
      }, 500 + index * 200);
    });
  }, []);

  const handleproductClick = (slug) => {
    navigate(`/products/${slug}`);
    window.scrollTo(0, 0);
  };

  const servicesData = [
    { 
      name: 'Milk Matrix ERP', 
      slug: 'milk-matrix-erp',
      icon: '🐄',
      description: 'End-to-end Dairy ERP System empowering the dairy value chain',
      features: ['Milk Procurement Management', 'Quality & Pricing Control', 'Sales & Distribution']
    },

    { 
      name: 'MilkTrail', 
      slug: 'milk-trail',
      icon: '📱',
      description: 'Fresh milk and dairy products delivery app for your doorstep convenience',
      features: ['Order Milk & Dairy Products', 'Local Dairy Integration', 'Doorstep Delivery', 'Real-time Tracking']
    },
    { 
      name: 'ERP Next', 
      slug: 'erp-next',
      icon: '📊',
      description: 'Flexible, open-source ERP solution for comprehensive business management',
      features: ['CRM & Inventory Management', 'HR & Accounting', 'Customizable & Modular', 'Cost-Effective Solution']
    },
    // { 
    //   name: 'Software Development', 
    //   slug: 'software',
    //   icon: '💻',
    //   description: 'Custom software solutions tailored to your business needs',
    //   features: ['Web Applications', 'Desktop Software', 'API Development']
    // },
    // { 
    //   name: 'ERP & Industry Automation', 
    //   slug: 'erp',
    //   icon: '⚙️',
    //   description: 'Streamline your business processes with automated solutions',
    //   features: ['Process Automation', 'Workflow Management', 'System Integration']
    // },
    { 
      name: 'Web Development', 
      slug: 'web',
      icon: '🌐',
      description: 'Modern, responsive websites that drive business growth',
      features: ['Responsive Design', 'E-commerce', 'Progressive Web Apps']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 mt-20 transition-transform duration-500 group">
              <img 
                src="https://i.pinimg.com/736x/40/3c/ba/403cba06e3912f43914aa661adfbb08d.jpg"
                alt="Professional team working together"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div className="w-full h-80 flex items-center justify-center" style={{ display: 'none', backgroundImage: 'linear-gradient(250deg, #4e95ed, #189cd2)' }}>
                <div className="text-center text-gray-100">
                  <div className="text-4xl mb-2">👥</div>
                  <div className="text-sm">Professional Team</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-1 bg-blue-400 rounded-full transform hover:w-12 transition-all duration-300"></div>
                <span className="text-blue-400 font-semibold text-sm tracking-wide uppercase hover:text-blue-700 transition-colors duration-200">
                  About Us
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight hover:text-blue-400 transition-colors duration-300">
                Empowering businesses through innovative technology solutions since 2010
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed hover:text-gray-700 transition-colors duration-200">
                Over 25 years working in IT services developing software applications 
                and mobile apps for clients all over the world.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicesData.map((service, index) => (
                <div 
                  key={service.slug}
                  onClick={() => handleproductClick(service.slug)}
                  className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 ${
                    animatedCards[service.slug] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="p-6 relative">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-400 transition-colors duration-300">
                        {service.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-200">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-500 transition-colors duration-200"></div>
                          <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-blue-300 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating animation bubbles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-60" 
               style={{ animation: 'float 6s ease-in-out infinite' }}></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-40" 
               style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-indigo-400 rounded-full opacity-50" 
               style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TechCompanyPage;

// import React, { useState, useEffect } from 'react';

// const TechCompanyPage = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [animatedCards, setAnimatedCards] = useState({});

//   const floatingAnimation = `
//     @keyframes float {
//       0%, 100% { transform: translateY(0px) rotate(0deg); }
//       50% { transform: translateY(-20px) rotate(180deg); }
//     }
//   `;

//   useEffect(() => {
//     // Inject CSS for floating animation
//     const style = document.createElement('style');
//     style.textContent = floatingAnimation;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   useEffect(() => {
//     setIsVisible(true);

//     const services = ['milk-matrix-erp', 'milktrail', 'erpnext', 'web'];
//     services.forEach((service, index) => {
//       setTimeout(() => {
//         setAnimatedCards(prev => ({ ...prev, [service]: true }));
//       }, 500 + index * 200);
//     });
//   }, []);
// const handleproductClick = (slug) => {
//     navigate(`/products/${slug}`);
//     window.scrollTo(0, 0);
//    };

//   const servicesData = [
//     { 
//       name: 'Milk Matrix ERP', 
//       slug: 'milk-matrix-erp',
//       icon: '🐄',
//       description: 'End-to-end Dairy ERP System empowering the dairy value chain',
//       features: ['Milk Procurement Management', 'Quality & Pricing Control', 'Sales & Distribution']
//     },
//     { 
//       name: 'MilkTrail', 
//       slug: 'milk-trail',
//       icon: '📱',
//       description: 'Fresh milk and dairy products delivery app for your doorstep convenience',
//       features: ['Order Milk & Dairy Products', 'Local Dairy Integration', 'Doorstep Delivery', 'Real-time Tracking']
//     },
//     { 
//       name: 'ERP Next', 
//       slug: 'erp-next',
//       icon: '📊',
//       description: 'Flexible, open-source ERP solution for comprehensive business management',
//       features: ['CRM & Inventory Management', 'HR & Accounting', 'Customizable & Modular', 'Cost-Effective Solution']
//     },
//     { 
//       name: 'Web Development', 
//       slug: 'web',
//       icon: '🌐',
//       description: 'Modern, responsive websites that drive business growth',
//       features: ['Responsive Design', 'E-commerce', 'Progressive Web Apps']
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
//       <div className={`max-w-7xl mx-auto transition-all duration-1000 transform ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//       }`}>
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
          
//           {/* Left Side - Image */}
//           <div className="relative">
//             <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 mt-30 transition-transform duration-500 group">
//               <img 
//                 src="https://i.pinimg.com/736x/40/3c/ba/403cba06e3912f43914aa661adfbb08d.jpg"
//                 alt="Professional team working together"
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextElementSibling.style.display = 'flex';
//                 }}
//               />
//               {/* Fallback */}
//               <div className="w-full h-80 flex items-center justify-center" style={{ display: 'none', backgroundImage: 'linear-gradient(250deg, #4e95ed, #189cd2)' }}>
//                 <div className="text-center text-gray-100">
//                   <div className="text-4xl mb-2">👥</div>
//                   <div className="text-sm">Professional Team</div>
//                 </div>
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
//           </div>

//           {/* Right Side - Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-1 bg-blue-400 rounded-full transform hover:w-12 transition-all duration-300"></div>
//                 <span className="text-blue-400 font-semibold text-sm tracking-wide uppercase hover:text-blue-700 transition-colors duration-200">
//                   About Us
//                 </span>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 leading-tight hover:text-blue-400 transition-colors duration-300">
//                 Empowering businesses through innovative technology solutions since 2010
//               </h3>
//               <p className="text-gray-600 text-lg leading-relaxed hover:text-gray-700 transition-colors duration-200">
//                 Over 25 years working in IT services developing software applications 
//                 and mobile apps for clients all over the world.
//               </p>
//             </div>

//             {/* Service Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {servicesData.map((service, index) => (
//                 <div 
//                   key={service.slug}
//                   onClick={() => handleproductClick(service.slug)}
//                   className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-pointer ${
//                     animatedCards[service.slug] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                   }`}
//                   style={{ transitionDelay: `${index * 200}ms` }}
//                 >
//                   <div className="p-6 relative">
//                     <div className="flex items-center space-x-4 mb-4">
//                       <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
//                         {service.icon}
//                       </div>
//                       <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-400 transition-colors duration-300">
//                         {service.name}
//                       </h4>
//                     </div>
//                     <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-200">
//                       {service.description}
//                     </p>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                       {service.features.map((feature, featureIndex) => (
//                         <div key={featureIndex} className="flex items-center space-x-2">
//                           <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-500 transition-colors duration-200 flex-shrink-0"></div>
//                           <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
//                             {feature}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                     <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                   </div>
//                   <div className="h-1 bg-gradient-to-r from-blue-300 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Floating animation bubbles */}
//         <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
//           <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-60" 
//                style={{ animation: 'float 6s ease-in-out infinite' }}></div>
//           <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-40" 
//                style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}></div>
//           <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-indigo-400 rounded-full opacity-50" 
//                style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '2s' }}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechCompanyPage; 