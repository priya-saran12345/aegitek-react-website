import React from 'react';
import {
  Search, // For SEO
  Share2, // For Social Media Marketing
  DollarSign, // For Google Ads
  FileText, // For Content Marketing
  Mail, // For Email Marketing
  Fingerprint, // For 'Get In Touch' button
  TrendingUp, // For Proven SEO Results
  Target, // For Data-driven targeting
  Palette, // For Creative Design
  Activity, // For Transparent Reporting
  Users, // For Dedicated Strategist
  CheckCircle, // For Use Cases
  PieChart, // For Analysis in Process
  Lightbulb, // For Strategy in Process
  PlaySquare, // For Execution in Process
  BarChart2, // For Optimization in Process
  Megaphone, // For new service: Reputation Management
  Handshake // For new feature: Client-Centric Approach
} from 'lucide-react';

export default function DigitalMarketingSEOPage() {
  const mainServices = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Search Engine Optimization (SEO)",
      description: "We optimize your website for search engines to improve your ranking, traffic, and authority. Whether it's demand forecasting, image recognition.",
      points: [
        "On-page SEO: Backlink building, content optimization, guest posting",
        "Off-page SEO: Technical SEO, keyword research, competitor analysis"
      ]
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social Media Marketing (SMM)",
      description: "Engage your audience and build brand loyalty on platforms like Facebook, Instagram, LinkedIn, and X (Twitter).",
      points: [
        "Social media strategy and content design",
        "Paid social media campaigns",
        "Community & reputation management"
      ]
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Google Ads & Paid Campaigns (PPC)",
      description: "Run highly targeted ad campaigns that convert visitors into leads and customers.",
      points: [
        "Keyword research & campaign setup",
        "Ad creative design & conversion analysis",
        "Bid management & budget optimization"
      ]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Content Marketing & Blogging",
      description: "Write compelling, SEO-rich content that positions your brand as an industry authority.",
      points: [
        "Website content & landing pages",
        "Blog posts & articles",
        "Infographics, eBooks, and more"
      ]
    },
    {
      icon: <Mail className="h-9 w-8 pb-2" />,
      title: "Email Marketing & Automation",
      description: "Email Marketing & Automation refers to the use of email campaigns and automated workflows to engage with customers, build relationships, and drive conversions. It involves sending personalized messages to a targeted audience, often using tools to schedule, track, and optimize emails. Automation allows businesses to set up triggers for responses based on customer behavior."
    },
    { // New card for "What We Offer"
      icon: <Megaphone className="h-8 w-8" />,
      title: "Online Reputation Management (ORM)",
      description: "Protect and enhance your brand's image across digital channels. We monitor online mentions, manage reviews, and address negative feedback to maintain a positive perception.",
      points: [
        "Review management & response",
        "Social media monitoring",
        "Crisis management"
      ]
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Proven SEO results",
      subtitle: "With traffic and ranking improvement"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Data-driven targeting",
      subtitle: "With demographic info"
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Creative design + content",
      subtitle: "Visuals that sell"
    },
    {
      icon: <Activity className="h-12 w-12" />,
      title: "Transparent reporting",
      subtitle: "With analytics dashboards & logs"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Dedicated strategist",
      subtitle: "For your brand"
    },
    { // New card for "Why Choose Aegitek"
      icon: <Handshake className="h-12 w-12" />,
      title: "Client-Centric Approach",
      subtitle: "Tailored strategies for unique business needs"
    }
  ];

  const industriesServed = [
    "FMCG & Retail",
    "Real Estate & E-Commerce",
    "Food & Beverages",
    "Healthcare & Education",
    "IT & SaaS",
    "B2B and B2C Enterprises"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analysis",
      description: "Market research and competitive analysis"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Content marketing plan and channel selection"
    },
    {
      step: "03",
      title: "Execution",
      description: "Campaign implementation and content creation"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Performance monitoring and continuous improvement"
    }
  ];

  // Animation CSS
  const animationStyle = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeInUp {
      opacity: 0; /* Start hidden */
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `;

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <style>{animationStyle}</style> {/* Added animation style */}

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden ">
        <img
          src="/assets/banner-img1.png"
          alt="banner"
          className="absolute inset-0 w-full h-100 object-full z-0"
        />
        <div className="max-w-6xl mx-auto text-center  ">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            Digital Marketing & <span className="text-[#189CD2]">SEO</span>
          </h1>
          <p className="text-lg lg:text-xl  max-w-4xl mx-auto mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            We help businesses grow online through powerful digital marketing strategies and result-driven SEO. From increasing your website visibility to engaging your target audience – we create digital experiences that drive traffic, leads, and revenue.
          </p>
          {/* Removed Get In Touch Button */}
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
              What We <span className="text-[#189CD2]">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
              Comprehensive digital marketing solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${600 + index * 100}ms` }} // Fixed string interpolation here
              >
                <div className="flex items-start space-x-6">
                  <div
                    className="flex-shrink-0 p-4 rounded-full text-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: '#189CD2' }}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    {service.points && (
                      <ul className="list-none space-y-2">
                        {service.points.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start text-gray-700">
                            <CheckCircle className="h-5 w-5 text-[#189CD2] mr-2 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Aegitek? Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp" style={{ animationDelay: `${600 + mainServices.length * 100}ms` }}>
              Why Choose <span className="text-[#189CD2]">Aegitek</span>?
            </h2>
            <p className="text-lg text-gray-600 animate-fadeInUp" style={{ animationDelay: `${700 + mainServices.length * 100}ms` }}>
              Results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center animate-fadeInUp"
                style={{ animationDelay: `${800 + mainServices.length * 100 + index * 100}ms` }}
              >
                <div
                  className="inline-flex p-4 rounded-full text-white mb-6 group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: '#189CD2' }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
