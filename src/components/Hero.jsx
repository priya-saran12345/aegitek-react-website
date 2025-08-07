import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SimpleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide data with images and text content
  const slides = [
    {
      image: '/assets/banner-img6.png',
      title: 'Dairy ERP & Industry Automation',
      description: 'Complete management system for dairy operations with real-time tracking and analytics'
    },
    {
      image: '/assets/banner-img3.png',
      title: 'Custom Software Development',
      description: 'Build powerful applications designed specifically for your unique business requirements'
    },
    {
      image: 'assets/bg-3.jpg',
      title: 'Web & Mobile App Development',
      description: 'Responsive web and mobile apps that deliver exceptional user experiences across all devices'
    },
    {
      image: 'assets/bg-4.jpeg',
      title: 'IT Consultancy & System Integration',
      description: 'Harness the power of AI to transform your business processes and decision-making'
    },
    {
      image: 'assets/bg-5.jpeg',
      title: 'Digital Marketing & SEO',
      description: 'Secure, reliable cloud services that grow with your business needs'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="relative h-full">
        {/* Main slider container */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image with filter to remove purple tints */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-full contrast-125"
              style={{
                filter: 'brightness(0.75) contrast(1.25) hue-rotate(-30deg) saturate(0.8)'
              }}
            />
            
            {/* Dark overlay - changed to remove purple tints */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-transparent"></div> */}
            
            {/* Animated Text Content */}
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="max-w-7xl mx-auto px-8 lg:px-16">
                <div className={`transform transition-all duration-1000 delay-300 ${
                  index === currentSlide 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}>
                 
                  
                  {/* Main Title */}
                  <h1 className={`text-4xl md:text-
                  
                  5xl lg:text-6xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-700 ${
                    index === currentSlide 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}>
                    <span className="text-shadow-lg/30">
                      {slide.title}
                    </span>
                  </h1>
                  
                  {/* Description */}
                  <p className={`text-lg md:text-xl text-gray-100 mb-8 max-w-4xl leading-relaxed transform transition-all duration-1000 delay-900 text-shadow-lg/30 ${
                    index === currentSlide 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}>
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/40 hover:bg-gray-900/60 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/40 hover:bg-gray-900/60 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleSlider;