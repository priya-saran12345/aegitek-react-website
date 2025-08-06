import React from 'react';

// --- Reusable Icon Components ---
const CodeIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);
const SmartphoneIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
);
const ZapIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);
const DomainIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const FullstackIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h20" /><path d="M2 8h20" /><path d="M2 13h20" /><path d="M2 18h20" /></svg>
);
const AgileIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 2-7 20 20-4-5-11-4 5-4-10z" /></svg>
);
const SecurityIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
);
const SupportIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 17a5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 3.9 6 10 6 10s6-6.1 6-10" /><path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>
);
const DiscoveryIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
);
const DesignIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
);
const DevelopmentIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
);
const DeploymentIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" /><path d="M12 12h10" /></svg>
);
const CommunicationIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
);

// --- Hero Component ---
const Hero = () => (
    <section className="relative h-100 flex items-center justify-center text-center text-white overflow-hidden">
        <img
            src="/assets/banner-img5.png"
            alt="Abstract technology background"
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                Custom Software Development
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                We specialize in building custom software solutions that are tailored to your business needs to help you scale faster.
            </p>
        </div>
    </section>
);


// --- Main Page Component ---
export default function CustomSoftwarePage() {
    const animationStyle = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeInUp {
      opacity: 0;
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `;

    const technologies = ["React", "Node.js", ".NET", "Python", "Java", "Flutter", "SQL", "MongoDB", "AWS"];

    return (
        <div className="bg-white font-sans">
            <style>{animationStyle}</style>

            <Hero />

            {/* What We Offer Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Offer</h2>
                        <p className="mt-3 text-gray-600">Comprehensive custom software development services.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '100ms' }}><CodeIcon className="w-12 h-12 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">Enterprise Software Solutions</h3><p className="text-gray-600">We design and develop enterprise-level solutions including custom ERP, CRM, HRMS, inventory, billing, and supply chain systems that align perfectly with your operational processes.</p></div>
                        <div className="text-center p-8 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '200ms' }}><SmartphoneIcon className="w-12 h-12 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">Web & Mobile App Development</h3><p className="text-gray-600">We develop web portals, mobile apps (Android & iOS), and progressive dashboards. We focus on clean UI/UX and robust backend services to ensure optimal performance across all platforms.</p></div>
                        <div className="text-center p-8 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '300ms' }}><ZapIcon className="w-12 h-12 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">API Development & System Integration</h3><p className="text-gray-600">Seamlessly connect your systems with third-party services. We build robust, secure APIs, payment gateways, SMS systems, GST services, or legacy software for robust and secure data exchange.</p></div>
                    </div>
                </div>
            </section>

            {/* Why Choose Aegitek Section */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Aegitek?</h2>
                        <p className="mt-3 text-gray-600">Our commitment to excellence in every project.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '100ms' }}><DomainIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Domain-driven design</h3><p className="text-sm text-gray-600">We develop based on your business logic, not just code.</p></div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '200ms' }}><FullstackIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Full-stack development</h3><p className="text-sm text-gray-600">From UI to backend to database — all in one team.</p></div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '300ms' }}><AgileIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Agile & scalable</h3><p className="text-sm text-gray-600">Rapid development cycles with room for future expansion.</p></div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '400ms' }}><SecurityIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Security-first</h3><p className="text-sm text-gray-600">Secure coding practices and data protection by design.</p></div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '500ms' }}><SupportIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Post-launch support</h3><p className="text-sm text-gray-600">Ongoing maintenance, updates, and optimizations.</p></div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '600ms' }}><CommunicationIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Transparent Communication</h3><p className="text-sm text-gray-600">We maintain clear and constant communication throughout the project lifecycle.</p></div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Work With</h2>
                    <p className="text-gray-600 mb-12">And more cutting-edge technologies to meet your specific needs.</p>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {technologies.map((tech, index) => (
                            <div key={index} className="bg-gray-100 text-gray-700 font-medium py-2 px-5 rounded-full transition-colors duration-200 hover:bg-gray-200">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- UPDATED: Development Process Section --- */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Development Process</h2>
                        <p className="mt-3 text-gray-600">From concept to deployment and beyond.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '100ms' }}><DiscoveryIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">01. Discovery</h3><p className="text-gray-600">Understanding your business requirements and goals.</p></div>
                        <div className="bg-white p-8 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '200ms' }}><DesignIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">02. Design</h3><p className="text-gray-600">Creating user-centric designs and system architecture.</p></div>
                        <div className="bg-white p-8 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '300ms' }}><DevelopmentIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">03. Development</h3><p className="text-gray-600">Agile development with regular feedback loops.</p></div>
                        <div className="bg-white p-8 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '400ms' }}><DeploymentIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">04. Deployment</h3><p className="text-gray-600">Seamless launch and ongoing support and maintenance.</p></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
