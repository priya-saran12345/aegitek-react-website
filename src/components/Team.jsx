import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const InfiniteTeamCarousel = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jai Narain",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      }
    },
    {
      id: 2,
      name: "Sunil Mishra",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      }
    },
    {
      id: 3,
      name: "Rajeev Gupta",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      }
    },
    {
      id: 4,
      name: "Aditya Kumar",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      }
    },
    {
      id: 5,
      name: "Nitin",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      }
    },
    {
      id: 6,
      name: "Gaurav",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      }
    }
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(50); // seconds for one complete cycle

  // Create multiple copies for seamless infinite effect
  const infiniteTeamMembers = [...teamMembers, ...teamMembers, ...teamMembers];
  const cardWidth = 350; // Width of each team card including margin

  const SocialIcon = ({ type }) => {
    const iconProps = { size: 18, className: "text-white" };
    
    switch(type) {
      case 'facebook':
        return <Facebook {...iconProps} />;
      case 'instagram':
        return <Instagram {...iconProps} />;
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      default:
        return <div className="w-4 h-4 bg-white rounded-full" />;
    }
  };

  return (
    
    <div className="relativ w-full py-20 px-4  overflow-hidden text-white"
    style={{ backgroundImage: "url('../src/assets/banner-img4.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
     >
      
      <div className="max-w-full mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">TEAM</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Expert IT Consultants
          </h1>
        </div>

        {/* Infinite Sliding Container */}
        <div className="relative overflow-hidden max-w-5xl mx-auto">
          <div 
            className="flex animate-infinite-slide"
            style={{
              width: `${infiniteTeamMembers.length * cardWidth}px`,
              animationDuration: `${animationSpeed}s`
            }}
          >
            {infiniteTeamMembers.map((member, index) => (
              <div 
                key={`${member.id}-${Math.floor(index / teamMembers.length)}`}
                className="flex-shrink-0 group cursor-pointer text-center px-4"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="team-card">
                  {/* Profile Image with Blob Background */}
                  <div className="relative mb-8 mx-auto w-fit">
                    {/* Blob Shape Background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="240" height="240" viewBox="0 0 240 240" className="text-blue-500 opacity-20">
                        <path
                          d="M120 20C150 20 170 50 185 85C200 120 185 155 150 170C120 185 90 170 75 135C60 100 75 65 105 50C110 45 115 20 120 20Z"
                          fill="currentColor"
                          className="group-hover:scale-105 transition-transform duration-500"
                        />
                      </svg>
                    </div>
                    
                    {/* Profile Image */}
                    <div className="relative z-10 w-40 h-40 mx-auto">
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-400 border-opacity-20 group-hover:border-opacity-40 transition-all duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 text-base mb-6 opacity-90">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {Object.entries(member.social).map(([platform, href]) => (
                      <a
                        key={platform}
                        href={href}
                        className="w-10 h-10 bg-blue-400 bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm border border-blue-500 border-opacity-20 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                      >
                        <SocialIcon type={platform} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${teamMembers.length * cardWidth}px);
          }
        }
        
        .animate-infinite-slide {
          animation: infinite-slide linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InfiniteTeamCarousel;