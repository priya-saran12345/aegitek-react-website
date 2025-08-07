import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Make sure this is imported

const TechCompanyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState({});
  const navigate = useNavigate(); // ✅ Use navigate hook inside component

  const floatingAnimation = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }
    @keyframes slideInUp {
      from { transform: translateY(50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;

  useEffect(() => {
    // Inject CSS for animations
    const style = document.createElement('style');
    style.textContent = floatingAnimation;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);

    const services = [
      'milk-matrix-erp',
      'milk-trail',
      'erp-next',
      'social-media-tracking',
      'voice-cloning',
      'fake-voice-detector'
    ];

    services.forEach((service, index) => {
      setTimeout(() => {
        setAnimatedCards(prev => ({ ...prev, [service]: true }));
      }, 300 + index * 150);
    });
  }, []);

  // ✅ FIXED: handleProductClick with navigate and scrollTo
  const handleProductClick = (slug) => {
    if (slug) {
      navigate(`/products/${slug}`);
      window.scrollTo(0, 0);
    } else {
      console.log(`Navigate to: /products/${slug}`);
    }
  };

  const servicesData = [
    {
      name: 'Milk Matrix ERP',
      slug: 'milk-matrix-erp',
      icon: '🐄',
      description: 'End-to-end Dairy ERP System empowering the dairy value chain',
      features: ['Milk Procurement Management', 'Quality & Pricing Control', 'Sales & Distribution', 'Real-time Analytics'],
      category: 'ERP Solutions',
      gradient: 'from-blue-400 to-blue-500'
    },
    {
      name: 'MilkTrail',
      slug: 'milk-trail',
      icon: '📱',
      description: 'Fresh milk and dairy products delivery app for your doorstep convenience',
      features: ['Order Milk & Dairy Products', 'Local Dairy Integration', 'Doorstep Delivery', 'Real-time Tracking'],
      category: 'Mobile App',
      gradient: 'from-blue-400 to-blue-500'
    },
    {
      name: 'ERP Next',
      slug: 'erp-next',
      icon: '📊',
      description: 'Flexible, open-source ERP solution for comprehensive business management',
      features: ['CRM & Inventory Management', 'HR & Accounting', 'Customizable & Modular', 'Cost-Effective Solution'],
      category: 'ERP Solutions',
      gradient: 'from-blue-400 to-blue-500'
    },
    {
      name: 'Social Media Content Tracking',
      slug: 'social-media-tracking',
      icon: '🤖',
      description: 'AI-powered social media monitoring and content analysis platform',
      features: ['Real-time Content Monitoring', 'Sentiment Analysis', 'Trend Detection', 'Brand Safety Protection'],
      category: 'AI Solutions',
      gradient: 'from-blue-400 to-blue-500'
    },
    {
      name: 'Multilingual Voice Cloning',
      slug: 'voice-cloning',
      icon: '🎙️',
      description: 'Advanced AI voice synthesis for Indian languages with natural speech generation',
      features: ['Multi-language Support', 'Voice Customization', 'High-Quality Synthesis', 'Real-time Processing'],
      category: 'AI Solutions',
      gradient: 'from-blue-400 to-blue-500'
    },
    {
      name: 'Fake Voice Detector',
      slug: 'fake-voice-detector',
      icon: '🔍',
      description: 'AI-powered system to detect and verify authentic voices from synthetic ones',
      features: ['Advanced Audio Analysis', 'Instant Detection', 'Multiple Format Support', 'High Accuracy Results'],
      category: 'AI Solutions',
      gradient: 'from-blue-400 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 p-6 sm:p-8 lg:p-12">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full hover:w-20 transition-all duration-500"></div>
              <span className="mx-4 text-blue-400 font-bold text-sm tracking-wider uppercase hover:text-blue-500 transition-colors duration-300">
                Our Solutions
              </span>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full hover:w-20 transition-all duration-500"></div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Businesses Through
              <span className="block bg-gradient-to-r from-blue-400 via-blue-00 to-blue-500 bg-clip-text text-transparent">
                Innovative Technology
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Over 25 years of expertise in IT services, developing cutting-edge software applications,
              AI solutions, and mobile apps for clients worldwide.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={service.slug}
                onClick={() => handleProductClick(service.slug)}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/50 cursor-pointer ${
                  animatedCards[service.slug] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold bg-white/90 text-gray-700 rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative p-8">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl group-hover:scale-125 transition-transform duration-500">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed group-hover:text-gray-700">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mt-2"></div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-800">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className={`h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCompanyPage;


