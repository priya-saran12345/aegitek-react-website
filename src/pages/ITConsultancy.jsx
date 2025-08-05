import React from 'react';
import {
  ArrowRight,
  CheckCircle,
  Settings,
  Database,
  Monitor,
  Server,
  Zap,
  Cog,
  Link,
  Shield,
  Cloud,
  FileText
} from 'lucide-react';

export default function ITConsultancyPage() {
  const mainServices = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "IT Strategy & Infrastructure Consulting",
      description: "We assess your current IT landscape and design robust strategies to align your technology with business goals. Whether it's digital transformation, cloud migration, or modernization — we guide you every step of the way."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "System Integration Services",
      description: "We connect your enterprise systems to work as one. Our integration services cover ERPs, CRMs, custom apps, databases, payment gateways, SMS APIs, and more — ensuring smooth data flow and operational continuity."
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Cloud & Hybrid Deployments",
      description: "Leverage the power of the cloud with our deployment services on AWS, Azure, or GCP. We also offer on-premises and hybrid setups to support flexible workloads and secure operations."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Legacy System Modernization",
      description: "We help modernize and extend the life of existing legacy systems by integrating them with new platforms and interfaces — preserving your core logic while enabling innovation."
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Expertise across platforms",
      subtitle: "SAP, ERPNext, .NET, Java, REST, GraphQL"
    },
    {
      icon: <Link className="h-12 w-12" />,
      title: "API-first architecture",
      subtitle: "Ensures interoperability and scalability"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Secure integration",
      subtitle: "Role-based access, tokenized APIs, and encryption"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Real-time synchronization",
      subtitle: "For cross-departmental or multi-location data flow"
    },
    {
      icon: <Cog className="h-12 w-12" />,
      title: "Minimal downtime",
      subtitle: "Integration with zero or low disruption to ongoing operations"
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Scalable solutions",
      subtitle: "Future-proof architecture that grows with your business"
    }
  ];

  const useCases = [
    "ERP & CRM integration",
    "GST & payment gateway linking",
    "IoT device data integration",
    "SMS, email, and notification systems",
    "Centralized dashboards from distributed sources",
    "Third-party API integrations"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Current state analysis and gap identification"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Roadmap creation and technology selection"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Phased rollout with minimal disruption"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Performance tuning and continuous improvement"
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
          src="../src/assets/banner-img4.png"
          alt="banner"
          className="absolute inset-0 w-full h-100 object-full z-0"
        />
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold  mb-6 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            IT Consultancy & <span className="text-[#189CD2]">System Integration</span>
          </h1>
          <p className="text-lg lg:text-xl  max-w-4xl mx-auto mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            We help businesses transform their digital infrastructure by providing expert IT consultancy and
            seamless system integration services. From architecture planning to enterprise application
            connectivity, we ensure your IT ecosystem is secure, scalable, and future-ready.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
              What We <span className="text-[#189CD2]">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
              Comprehensive IT consulting and integration services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${500 + index * 100}ms` }} // Fixed animation delay
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
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Aegitek Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp" style={{ animationDelay: `${500 + mainServices.length * 100}ms` }}>
              Why Choose <span className="text-[#189CD2]">Aegitek</span>?
            </h2>
            <p className="text-lg text-gray-600 animate-fadeInUp" style={{ animationDelay: `${600 + mainServices.length * 100}ms` }}>
              Trusted expertise in IT transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center animate-fadeInUp"
                style={{ animationDelay: `${700 + mainServices.length * 100 + index * 100}ms` }} // Fixed animation delay
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

      {/* Integration Use Cases Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp" style={{ animationDelay: `${800 + (mainServices.length + whyChooseFeatures.length) * 100}ms` }}>
              Integration <span className="text-[#189CD2]">Use Cases</span>
            </h2>
            <p className="text-lg text-gray-600 animate-fadeInUp" style={{ animationDelay: `${900 + (mainServices.length + whyChooseFeatures.length) * 100}ms` }}>
              Common integration scenarios we handle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="border-2 rounded-lg p-6 shadow-sm hover:shadow-lg hover:bg-blue-50 transition-all duration-200 animate-fadeInUp"
                style={{
                  borderColor: '#189CD2',
                  animationDelay: `${1000 + (mainServices.length + whyChooseFeatures.length) * 100 + index * 50}ms` // Fixed animation delay
                }}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle
                    className="h-6 w-6 flex-shrink-0"
                    style={{ color: '#189CD2' }}
                  />
                  <span className="text-gray-800 font-medium">
                    {useCase}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Consulting Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp" style={{ animationDelay: `${1100 + (mainServices.length + whyChooseFeatures.length + useCases.length) * 50}ms` }}>
              Our Consulting <span className="text-[#189CD2]">Process</span>
            </h2>
            <p className="text-lg text-gray-600 animate-fadeInUp" style={{ animationDelay: `${1200 + (mainServices.length + whyChooseFeatures.length + useCases.length) * 50}ms` }}>
              Structured approach to IT transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${1300 + (mainServices.length + whyChooseFeatures.length + useCases.length) * 50 + index * 100}ms` }} // Fixed animation delay
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full text-white text-xl font-bold mb-6"
                  style={{ backgroundColor: '#189CD2' }}
                >
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
