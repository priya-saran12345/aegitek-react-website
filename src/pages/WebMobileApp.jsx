import React from 'react';

// --- Reusable Icon Components ---
const ResponsiveIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4" /><path d="m18 18 4 4" /><path d="m22 18-4 4" /></svg>
);
const MobileIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
);
const HybridIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2l7 7-7 7-7-7 7-7z" /><path d="M2 12l7 7-7 7" /><path d="M12 22l7-7-7-7" /></svg>
);
const UiUxIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
);
const CrossPlatformIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 3h5v5" /><path d="M4 20L21 3" /><path d="M20 16v5h-5" /><path d="M15 15l5.5 5.5" /><path d="M4 4l5 5" /></svg>
);
const AgileIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 2-7 20 20-4-5-11-4 5-4-10z" /></svg>
);
const ScalableIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
);
const CloudIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
);
const SecurityIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
);
const StrategyIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v6l4 2" /></svg>
);
const DesignIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
);
const DevelopmentIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
);
const LaunchIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" /><path d="M12 12h10" /></svg>
);

// --- Hero Component ---
const Hero = () => (
    <section className="relative h-100 flex items-center justify-center text-center text-white overflow-hidden">
        <img
            src="/assets/bg-2.jpg"
            alt="Abstract background showing web and mobile app development concepts"
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                Web & Mobile App Development
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                We craft fast, reliable, and visually stunning web and mobile applications that bring your digital ideas to life. Whether you're building a customer-facing app, an internal dashboard, or a next-gen product — we deliver scalable solutions that run smoothly on every device.
            </p>
        </div>
    </section>
);

// --- Main Page Component ---
export default function WebMobileAppPage() {
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

    const industries = ["E-commerce & Retail", "Healthcare & Pharma", "Dairy & Agriculture", "Logistics & Transportation", "Education & E-learning", "Fintech & Insurance"];
    const technologies = ["React", "Next.js", "React Native", "Android (Kotlin/Java)", "iOS (Swift)", "Firebase", "Node.js", "MongoDB", "MySQL", "REST APIs"];

    return (
        <div className="bg-white font-sans">
            <style>{animationStyle}</style>

            <Hero />

            {/* What We Offer Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Offer</h2>
                        <p className="mt-3 text-gray-600">Comprehensive web and mobile development services.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '100ms' }}><ResponsiveIcon className="w-12 h-12 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">Responsive Web Applications</h3><p className="text-gray-600">From dynamic business websites to enterprise portals and PWAs (Progressive Web Apps), we build fast, secure solutions — SEO-optimized and tailored to meet your brand's vision and business goals.</p></div>
                        <div className="text-center p-8 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '200ms' }}><MobileIcon className="w-12 h-12 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">Android & iOS Mobile Apps</h3><p className="text-gray-600">We build native and cross-platform mobile applications with intuitive UI and seamless performance. Our apps are designed to look and work flawlessly across devices, screen sizes, and operating systems.</p></div>
                        <div className="text-center p-8 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '300ms' }}><HybridIcon className="w-12 h-12 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">Hybrid & Cross-Platform Solutions</h3><p className="text-gray-600">Using technologies like Flutter and React Native, we deliver single-codebase apps that work across both iOS and Android, saving you development time and money without compromising performance.</p></div>
                    </div>
                </div>
            </section>

            {/* Why Choose Aegitek Section */}
            <section className="bg-sky-50 py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Aegitek?</h2>
                        <p className="mt-3 text-gray-600">Excellence in every pixel and line of code.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '100ms' }}><UiUxIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">UI/UX Excellence</h3><p className="text-sm text-gray-600">Clean, modern, user-friendly designs.</p></div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '200ms' }}><CrossPlatformIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Cross-platform Expertise</h3><p className="text-sm text-gray-600">Native, hybrid, and PWA solutions.</p></div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '300ms' }}><AgileIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Agile Development</h3><p className="text-sm text-gray-600">Fast iteration with user feedback loops.</p></div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '400ms' }}><ScalableIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Scalable Architecture</h3><p className="text-sm text-gray-600">Apps built to grow with your business.</p></div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '500ms' }}><CloudIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Cloud-Ready</h3><p className="text-sm text-gray-600">Integrated with AWS, Google Cloud, Azure & more.</p></div>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '600ms' }}><SecurityIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Secure & Performant</h3><p className="text-sm text-gray-600">Built with security and speed as top priorities.</p></div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve Section */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Industries We Serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {industries.map((industry, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4 text-center transition-all duration-300 hover:border-[#189cd2] hover:bg-sky-50">
                                <span className="font-medium text-gray-700">{industry}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies We Use Section */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
                    <p className="text-gray-600 mb-12">Modern tools for modern solutions.</p>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {technologies.map((tech, index) => (
                            <div key={index} className="bg-white border border-gray-200 text-gray-700 font-medium py-2 px-5 rounded-full transition-colors duration-200 hover:bg-gray-100">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Development Process</h2>
                        <p className="mt-3 text-gray-600">From idea to app store and beyond.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '100ms' }}><StrategyIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">01. Strategy</h3><p className="text-gray-600">User research, wireframing, and technical feasibility.</p></div>
                        <div className="bg-white p-8 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '200ms' }}><DesignIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">02. Design</h3><p className="text-gray-600">UI/UX design with prototyping and user testing.</p></div>
                        <div className="bg-white p-8 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '300ms' }}><DevelopmentIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">03. Development</h3><p className="text-gray-600">Agile development with continuous integration.</p></div>
                        <div className="bg-white p-8 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '400ms' }}><LaunchIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">04. Launch</h3><p className="text-gray-600">App store deployment and ongoing support.</p></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
