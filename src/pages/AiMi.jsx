import React from 'react';
import {
  Brain, // For AI & Machine Learning
  Bot, // For RPA and Chatbots
  BarChart, // For Predictive Analytics and Transparent Reporting
  FileText, // For Intelligent Document Processing and general text
  Fingerprint, // For 'Get In Touch' button
  Layers, // For Domain-specific models
  Workflow, // For End-to-end automation
  ShieldCheck, // For Enterprise-grade security
  Link, // For Seamless integration
  Activity, // For Transparent reporting
  CheckCircle, // For Use Cases
  Cpu, // Alternative for AI/ML
  ScanText, // Alternative for IDP
  MessageSquare, // Alternative for Chatbots
  ClipboardCheck, // For Invoice processing
  Factory, // For Quality defect detection
  Truck, // For Route optimization
  Users, // For Employee onboarding, and also for Dedicated Support
  DollarSign, // For Sales forecasting
  FileStack, // For Document classification
  Monitor // For Data Analytics & Visualization
} from 'lucide-react';

export default function AIMLRPAPage() {
  const mainServices = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Machine Learning Solutions",
      description: "We develop custom AI/ML models that learn from your data and enhance decision-making. Whether it's demand forecasting, image recognition, or natural language processing, we drive real value with your business."
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Robotic Process Automation (RPA)",
      description: "Automate high-volume repetitive tasks such as invoice processing, data entry, report generation, and email responses using software robots. Our RPA solutions boost productivity and minimize human error."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Predictive & Prescriptive Analytics",
      description: "Turn raw data into actionable insights. We help you forecast trends, detect anomalies, and optimize outcomes using data science techniques and machine learning algorithms."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Intelligent Document Processing (IDP)",
      description: "Use AI-powered systems to extract, classify, and validate data from invoices, forms, and other scanned documents – minimizing manual input and turnaround time."
    },
    {
      icon: <Bot className="h-8 w-8" />, // Reusing Bot for Chatbots
      title: "Chatbots & Virtual Assistants",
      description: "Deploy smart conversational agents to automate customer support, employee onboarding, and personalized interactions – enhancing user experience while reducing workload."
    },
    {
      icon: <Monitor className="h-8 w-8" />, // New service point
      title: "Data Analytics & Visualization",
      description: "Transform raw data into interactive dashboards and reports. We help you uncover insights, track KPIs, and make data-driven decisions through advanced analytics and compelling visualizations."
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <Layers className="h-12 w-12" />,
      title: "Domain-specific models",
      subtitle: "Trained on your business data"
    },
    {
      icon: <Workflow className="h-12 w-12" />,
      title: "End-to-end automation",
      subtitle: "From input capture to task completion"
    },
    {
      icon: <ShieldCheck className="h-12 w-12" />,
      title: "Enterprise-grade security",
      subtitle: "With encryption & audit trails"
    },
    {
      icon: <Link className="h-12 w-12" />,
      title: "Seamless integration",
      subtitle: "With ERPs, CRMs, databases, and cloud platforms"
    },
    {
      icon: <Activity className="h-12 w-12" />,
      title: "Transparent reporting",
      subtitle: "With analytics dashboards & logs"
    },
    {
      icon: <Users className="h-12 w-12" />, // New feature point
      title: "Dedicated Support",
      subtitle: "Ongoing maintenance and optimization for peak performance"
    }
  ];

  const useCases = [
    { text: "Invoice processing automation", icon: <ClipboardCheck className="h-6 w-6 flex-shrink-0" /> },
    { text: "Quality defect detection in manufacturing", icon: <Factory className="h-6 w-6 flex-shrink-0" /> },
    { text: "Route optimization and logistics prediction", icon: <Truck className="h-6 w-6 flex-shrink-0" /> },
    { text: "Employee onboarding & offboarding automation", icon: <Users className="h-6 w-6 flex-shrink-0" /> },
    { text: "Sales forecasting & customer segmentation", icon: <DollarSign className="h-6 w-6 flex-shrink-0" /> },
    { text: "Document classification & data extraction", icon: <FileStack className="h-6 w-6 flex-shrink-0" /> }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "Requirement analysis and feasibility study"
    },
    {
      step: "02",
      title: "Model Design",
      description: "Data preparation, model training, and validation"
    },
    {
      step: "03",
      title: "Integration",
      description: "Seamless deployment and API integration"
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
          src="../src/assets/banner-img3.png"
          alt="banner"
          className="absolute inset-0 w-full h-100 object-full z-0"
        />
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold  mb-6 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            AI, ML & <span className="text-[#189CD2]">Process Automation (RPA)</span>
          </h1>
          <p className="text-lg lg:text-xl  max-w-4xl mx-auto mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            We harness the power of Artificial Intelligence (AI), Machine Learning (ML), and Robotic Process Automation (RPA) to help businesses unlock efficiency, accuracy, and intelligent decision-making. From automating repetitive tasks to predicting outcomes, we drive smarter operations at every level.
          </p>
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
              Comprehensive AI and Automation solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${600 + index * 100}ms` }} // Fixed animation delay
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
              Leveraging AI capabilities for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center animate-fadeInUp"
                style={{ animationDelay: `${800 + mainServices.length * 100 + index * 100}ms` }} // Fixed animation delay
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

      {/* Use Cases We Serve Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp" style={{ animationDelay: `${900 + (mainServices.length + whyChooseFeatures.length) * 100}ms` }}>
              Use Cases We <span className="text-[#189CD2]">Serve</span>
            </h2>
            <p className="text-lg text-gray-600 animate-fadeInUp" style={{ animationDelay: `${1000 + (mainServices.length + whyChooseFeatures.length) * 100}ms` }}>
              Real-world applications of AI and Automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="border-2 rounded-lg p-6 shadow-sm hover:shadow-lg hover:bg-blue-50 transition-all duration-200 animate-fadeInUp"
                style={{
                  borderColor: '#189CD2',
                  animationDelay: `${1100 + (mainServices.length + whyChooseFeatures.length) * 100 + index * 50}ms` // Fixed animation delay
                }}
              >
                <div className="flex items-center space-x-3">
                  {useCase.icon}
                  <span className="text-gray-800 font-medium">
                    {useCase.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our AI Implementation Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp" style={{ animationDelay: `${1200 + (mainServices.length + whyChooseFeatures.length + useCases.length) * 50}ms` }}>
              Our AI Implementation <span className="text-[#189CD2]">Process</span>
            </h2>
            <p className="text-lg text-gray-600 animate-fadeInUp" style={{ animationDelay: `${1300 + (mainServices.length + whyChooseFeatures.length + useCases.length) * 50}ms` }}>
              From concept to intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${1400 + (mainServices.length + whyChooseFeatures.length + useCases.length) * 50 + index * 100}ms` }} // Fixed animation delay
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
