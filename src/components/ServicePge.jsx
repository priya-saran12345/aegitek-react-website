import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Globe, Lightbulb, Cloud, Palette, Database, ArrowRight, Link } from 'lucide-react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // ✅ React Router navigation

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
     window.scrollTo(0, 0);
  };
 

  const services = [
    {
      icon: <Database className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Dairy ERP & Industry Automation",
      slug: "Dairy-ERP",
      shortDescription: "We deliver end-to-end digital transformation for the dairy sector through Milk Matrix ERP and automation."
    },
    {
      icon: <Code className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Software Development",
      slug: "Software-Development",
      shortDescription: "We build custom software solutions tailored to your needs — from enterprise to startup."
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Web & Mobile App Development",
      slug: "Web-Mobile-App",
      shortDescription: "We craft fast, reliable, and visually stunning web and mobile applications."
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "IT Consultancy & System Integration",
      slug: "IT-Consultancy",
      shortDescription: "We offer expert IT consultancy and seamless digital system integration."
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "AI, ML & Process Automation (RPA)",
      slug: "AI-ML", // ✅ Make sure your route matches this slug
      shortDescription: "We use AI, ML, and RPA to improve workflow automation and operational efficiency."
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
      title: "Digital Marketing & SEO",
      slug: "Digital-Marketing",
      shortDescription: "We grow your online presence through strategic digital marketing and SEO."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`text-blue-400 text-sm font-semibold uppercase mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            SERVICES
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We Are Offering All Kinds of <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              IT Solutions Services
            </span>
          </h1>
          <div className={`w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-400 mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-500 text-center group cursor-pointer transform hover:-translate-y-2 hover:scale-105 relative ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
              onClick={() => handleServiceClick(service.slug)}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 group-hover:shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-400/20 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative z-10">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">{service.shortDescription}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleServiceClick(service.slug);
                }}
                className="inline-flex items-center gap-2 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden group/btn"
                style={{ backgroundImage: 'linear-gradient(250deg, #4e95ed, #189cd2)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="relative z-10">View More</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-900/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Info Box */}
       
      </div>
    </div>
  );
};

export default ServicesPage;
