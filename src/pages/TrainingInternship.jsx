import React from 'react';

// --- Reusable Icon Components ---
const CheckCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);
const MentorshipIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6" /><path d="M23 11h-6" /></svg>
);
const ProjectIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
);
const CertificationIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
);
const FormatsIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
);
const PipelineIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 3h5v5" /><path d="M4 20L21 3" /><path d="M20 16v5h-5" /><path d="M15 15l5.5 5.5" /><path d="M4 4l5 5" /></svg>
);
// --- NEW ICON ---
const CareerGrowthIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
);


// --- Main Page Component ---
export default function TrainingInternshipPage() {
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

    const whatWeOffer = {
        training: { title: "Industry-Oriented Training", items: ["Mentorship from experienced professionals", "Curriculum aligned with industry demands", "Full-Stack & Mobile App Development", "Enterprise Tech (SAP, .NET)", "Data Science & Quality Assurance"] },
        internship: { title: "Internship Opportunities", items: ["In-office and remote options available", "Work on real-world client projects", "Build a professional portfolio", "Gain experience in various tech roles", "Collaborate with agile teams"] },
        certification: { title: "Certification & Placement Support", items: ["Receive an official experience certificate", "Career guidance and counseling", "Resume building workshops", "Mock interview sessions", "Job opportunities with Aegitek & partners"] },
    };

    const whoCanApply = [
        "B.Tech / BCA / MCA / M.Tech / MBA students",
        "Final year students looking for project internships",
        "Recent graduates seeking practical IT experience",
        "Digital marketing and business development aspirants",
    ];

    return (
        <div className="bg-white font-sans">
            <style>{animationStyle}</style>

            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden ">
                <img
                    src="../src/assets/bg-2.jpg"
                    alt="banner"
                    className="absolute inset-0 w-full h-100 object-cover z-0"
                />

                <div className="container mx-auto px-6 py-24 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold  leading-tight animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                        Training & Internship Programs
                    </h1>
                    <p className="mt-4 text-lg  max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                        We believe in empowering the next generation of tech talent through hands-on training and real-world project experience. Our programs are designed to bridge the gap between academic knowledge and industry expectations — equipping young professionals with the skills they need to thrive.
                    </p>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Offer</h2>
                        <p className="mt-3 text-gray-600">Comprehensive training and internship opportunities.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Object.values(whatWeOffer).map((offer, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: `${100 + index * 100}ms` }}>
                                <h3 className="text-xl font-semibold text-gray-800 mb-6">{offer.title}</h3>
                                <ul className="space-y-4 text-left">
                                    {offer.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start">
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Aegitek Section */}
            <section className="bg-sky-50 py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Aegitek?</h2>
                        <p className="mt-3 text-gray-600">Launching careers with practical skills.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '100ms' }}><MentorshipIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Expert mentorship</h3><p className="text-sm text-gray-600">From industry practitioners.</p></div>
                        <div className="bg-white p-6 rounded-lg text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '200ms' }}><ProjectIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Real-time project exposure</h3><p className="text-sm text-gray-600">Hands-on learning experience.</p></div>
                        <div className="bg-white p-6 rounded-lg text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '300ms' }}><CertificationIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Recognized certification</h3><p className="text-sm text-gray-600">Industry-acknowledged credentials.</p></div>
                        <div className="bg-white p-6 rounded-lg text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '400ms' }}><FormatsIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Flexible formats</h3><p className="text-sm text-gray-600">Online/offline learning options.</p></div>
                        <div className="bg-white p-6 rounded-lg text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '500ms' }}><PipelineIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Internship-to-job pipeline</h3><p className="text-sm text-gray-600">For top performers.</p></div>
                        <div className="bg-white p-6 rounded-lg text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '600ms' }}><CareerGrowthIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-3" /><h3 className="font-semibold mb-1">Career Growth</h3><p className="text-sm text-gray-600">A stepping stone to your tech career.</p></div>
                    </div>
                </div>
            </section>

            {/* Who Can Apply Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who Can Apply?</h2>
                        <p className="mt-3 text-gray-600">Open to aspiring tech professionals.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {whoCanApply.map((who, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 flex items-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: `${100 + index * 100}ms` }}>
                                <CheckCircleIcon className="w-6 h-6 text-[#189cd2] mr-4 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{who}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Highlights Section */}
            <section className="bg-sky-50 py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Program Highlights</h2>
                        <p className="mt-3 text-gray-600">Flexible and comprehensive learning experience.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '100ms' }}><div className="bg-[#189cd2] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div><h3 className="text-xl font-semibold mb-2">Duration</h3><p className="text-gray-600">4 to 12 weeks (customizable)</p></div>
                        <div className="bg-white p-8 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '200ms' }}><div className="bg-[#189cd2] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div><h3 className="text-xl font-semibold mb-2">Format</h3><p className="text-gray-600">Online / Onsite</p></div>
                        <div className="bg-white p-8 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '300ms' }}><div className="bg-[#189cd2] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div><h3 className="text-xl font-semibold mb-2">Schedule</h3><p className="text-gray-600">Weekday / Weekend batches</p></div>
                    </div>
                </div>
            </section>

            {/* Application Process Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Application Process</h2>
                        <p className="mt-3 text-gray-600">Simple steps to start your journey.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-lg border border-gray-200 text-center transition-all duration-300 hover:shadow-lg hover:border-[#189cd2] animate-fadeInUp" style={{ animationDelay: '100ms' }}><div className="text-[#189cd2] font-bold text-2xl mb-2">01</div><h3 className="text-xl font-semibold mb-2">Apply</h3><p className="text-gray-600">Submit your CV and cover letter below.</p></div>
                        <div className="bg-white p-8 rounded-lg border border-gray-200 text-center transition-all duration-300 hover:shadow-lg hover:border-[#189cd2] animate-fadeInUp" style={{ animationDelay: '200ms' }}><div className="text-[#189cd2] font-bold text-2xl mb-2">02</div><h3 className="text-xl font-semibold mb-2">Review</h3><p className="text-gray-600">Our team reviews your application.</p></div>
                        <div className="bg-white p-8 rounded-lg border border-gray-200 text-center transition-all duration-300 hover:shadow-lg hover:border-[#189cd2] animate-fadeInUp" style={{ animationDelay: '300ms' }}><div className="text-[#189cd2] font-bold text-2xl mb-2">03</div><h3 className="text-xl font-semibold mb-2">Interview</h3><p className="text-gray-600">Brief discussion about your goals.</p></div>
                        <div className="bg-white p-8 rounded-lg border border-gray-200 text-center transition-all duration-300 hover:shadow-lg hover:border-[#189cd2] animate-fadeInUp" style={{ animationDelay: '400ms' }}><div className="text-[#189cd2] font-bold text-2xl mb-2">04</div><h3 className="text-xl font-semibold mb-2">Start</h3><p className="text-gray-600">Begin your learning journey.</p></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
