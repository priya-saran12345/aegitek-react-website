import React from 'react';

// --- Reusable Icon Components ---
const CheckCircle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const BenefitIcon1 = (props) => ( // Reduced manual dependency
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20h.01" /><path d="M17.6 11.9c.2-.2.3-.5.3-.8s-.1-.6-.3-.8l-4.2-4.2c-.4-.4-1-.4-1.4 0l-4.2 4.2c-.2.2-.3.5-.3.8s.1.6.3.8l4.2 4.2c.4.4 1 .4 1.4 0l4.2-4.2z" /><path d="M6.4 11.9c-.2-.2-.3-.5-.3-.8s.1-.6.3-.8l4.2-4.2c.4-.4 1-.4-1.4 0L19 11.1" /></svg>
);
const BenefitIcon2 = (props) => ( // Real-time monitoring
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21.4 12c-.2-1.8-1-3.5-2.4-4.8s-3-2.2-4.8-2.4" /><path d="M2.6 12c.2-1.8 1-3.5 2.4-4.8s3-2.2 4.8-2.4" /><path d="M12 2.6c1.8.2 3.5 1 4.8 2.4s2.2 3 2.4 4.8" /><path d="M12 21.4c-1.8-.2-3.5-1-4.8-2.4s-2.2-3-2.4-4.8" /><circle cx="12" cy="12" r="1" /></svg>
);
const BenefitIcon3 = (props) => ( // Error-free billing
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
);
const BenefitIcon4 = (props) => ( // Actionable insights
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 3v18h18" /><path d="M18.7 8a2 2 0 0 1 0 2.8l-6 6a2 2 0 0 1-2.8 0l-4-4a2 2 0 0 1 0-2.8l6-6a2 2 0 0 1 2.8 0Z" /></svg>
);
const BenefitIcon5 = (props) => ( // Centralized control
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22v-6" /><path d="M12 8V2" /><path d="M22 12h-6" /><path d="M8 12H2" /><path d="m16.2 7.8 4-4" /><path d="m3.8 20.2 4-4" /><path d="m7.8 3.8-4 4" /><path d="m20.2 20.2-4-4" /></svg>
);
const BenefitIcon6 = (props) => ( // Compliance & Reporting
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="m9 15 2 2 4-4" /></svg>
);


// --- Reusable Feature List Component ---
const FeatureList = ({ title, features, animationDelay }) => (
  <div
    className="bg-white p-6 rounded-lg border border-gray-200 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp"
    style={{ animationDelay }}
  >
    <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

// --- Reusable Benefit Card Component ---
const BenefitCard = ({ icon, title, description, animationDelay }) => (
  <div
    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center animate-fadeInUp"
    style={{ animationDelay }}
  >
    <div className="inline-block bg-sky-100 text-[#189cd2] p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// --- Hero Component with Placeholder Image ---
const Hero = () => (
  <section className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden">
    <img
      src="/assets/banner-img6.png"
      alt="banner"
      className="absolute inset-0 w-full h-full object-full z-0"
    />
    <div className="absolute inset-0 bg-black/50 z-10"></div>
    <div className="relative z-20 container mx-auto px-6">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fadeInUp" style={{ animationDelay: '100ms' }}>
        Dairy ERP & Industry Automation
      </h1>
      <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
        Improving the Dairy Value Chain with Intelligence, Efficiency & Control. From procurement to production and distribution, our integrated platform optimizes every node of the dairy supply chain.
      </p>
    </div>
  </section>
);


// --- Main Page Component ---
export default function DairyERPPage() {
  const keyFeatures = {
    procurement: { title: "Milk Procurement Automation", items: ["Member-wise milk data capture (SNF, FAT, quantity)", "Route-wise milk collection and scheduling", "Transporter-wise billing & payment"] },
    operations: { title: "Milk Pooling Point (MPP) & BMC Operations", items: ["Temperature monitoring & chilling center control", "Real-time visibility of milk quantity", "Tank-wise stock management"] },
    billing: { title: "Payments & Billing", items: ["Farmer billing and payment generation", "Transporter-wise payment reports", "Rate chart management based on quality"] },
    inventory: { title: "Inventory & Plant Operations", items: ["SRN, stock entry, and location transfer", "Batch tracking and lot-wise costing", "Product-wise dispatch and invoicing"] },
    analytics: { title: "Dashboards & Analytics", items: ["Centralized dashboards for union, federation, and plant", "Role-based MIS reports", "Analysis on quality, variance, and pricing"] },
    quality: { title: "Quality Assurance & Control", items: ["Lab testing integration for quality parameters", "Automated alerts for non-compliant milk", "Quality-based rate calculation"] },
  };

  const benefits = [
    { icon: <BenefitIcon1 className="w-8 h-8" />, title: "Reduced manual dependency", description: "Integrated IoT devices eliminate paper-based entries" },
    { icon: <BenefitIcon2 className="w-8 h-8" />, title: "Real-time monitoring", description: "Track milk from source to plant across shifts" },
    { icon: <BenefitIcon3 className="w-8 h-8" />, title: "Error-free billing", description: "Auto-calculations based on actual parameters" },
    { icon: <BenefitIcon4 className="w-8 h-8" />, title: "Actionable insights", description: "Visual reports for management decision-making" },
    { icon: <BenefitIcon5 className="w-8 h-8" />, title: "Centralized control", description: "Sync all MPPs, BMCs, and trucks in real-time" },
    { icon: <BenefitIcon6 className="w-8 h-8" />, title: "Compliance & Reporting", description: "Generate automated reports for regulatory compliance" },
  ];

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
    <div className="bg-gray-50 font-sans">
      <style>{animationStyle}</style>
      <Hero />

      {/* Key Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Key Features of Our Dairy ERP Solution</h2>
            <p className="mt-3 text-gray-600">Comprehensive modules designed for the dairy industry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(keyFeatures).map((feature, index) => (
              <FeatureList
                key={index}
                title={feature.title}
                features={feature.items}
                animationDelay={`${100 + index * 100}ms`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Dairy Industry Automation Benefits</h2>
            <p className="mt-3 text-gray-600">Transform your operations with intelligent automation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                {...benefit}
                animationDelay={`${100 + index * 100}ms`}
              />
            ))}
          </div>
        </div>
      </section>
      </div>
  );
}
