import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Use this for navigation

// --- Reusable Icon Components ---
const BriefcaseIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
);
const GrowthIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
);
const HeartIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
);
const TeamIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6" /><path d="M23 11h-6" /></svg>
);
const MailIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
const BulbIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a7 7 0 0 0-7 7c0 3.07 1.28 5.83 3.34 7.75.5.48.91.93 1.25 1.32.35.4.6.85.76 1.33.15.46.25.96.25 1.47a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1c0-.5.1-1.01.25-1.47.16-.48.4-0.93.76-1.33.34-.39.75-.84 1.25-1.32A7.001 7.001 0 0 0 12 2z" /><path d="M8.5 14.5h7" /></svg>
);
const UsersIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6" /><path d="M23 11h-6" /></svg>
);
const TrophyIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21-.19.08-.39.19-.6.33-.21.14-.42.29-.63.46-.21.17-.42.34-.63.51c-.21.17-.42.35-.63.53H8.35" /><path d="M14 14.66V17c0 .55.47.98.97 1.21.19.08-.39.19-.6.33.21.14-.42.29-.63.46.21.17-.42.34-.63.51.21.17.42.35.63.53h1.65" /><path d="M9 4h6" /><path d="M12 4v1" /><path d="M6 11h12" /><path d="M6 13H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 13h1.5a2.5 2.5 0 0 0 0-5H18" /></svg>
);

// --- Main Page Component ---
export default function CareersPage() {
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

    const cultureItems = [
        { icon: BulbIcon, title: "Innovation", description: "We encourage curiosity and the pursuit of new ideas to solve complex challenges.", image: "https://placehold.co/600x400/e0f2fe/1e293b?text=Innovation" },
        { icon: UsersIcon, title: "Collaboration", description: "We believe the best results come from teamwork, open communication, and mutual respect.", image: "https://placehold.co/600x400/e0f2fe/1e293b?text=Collaboration" },
        { icon: TrophyIcon, title: "Excellence", description: "We are committed to the highest standards of quality, taking pride in the work we do.", image: "https://placehold.co/600x400/e0f2fe/1e293b?text=Excellence" },
    ];

    const [activeCulture, setActiveCulture] = useState(cultureItems[0]);

    return (
        <div className="bg-white font-sans">
            <style>{animationStyle}</style>

            {/* Hero Section */}
            <section className="relative h-100 flex items-center justify-center text-center text-white overflow-hidden">
                <img
                    src="../src/assets/bg-2.jpg"
                    alt="A modern office environment with a collaborative team"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <div className="relative z-20 container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                        Careers
                    </h1>
                    <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                        We're looking for passionate innovators and problem-solvers to join our mission. Explore our open roles and find your place with us.
                    </p>
                </div>
            </section>
            
            {/* Our Culture Section */}
            <section className="bg-sky-50 py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Culture</h2>
                        <p className="mt-3 text-gray-600">The values that drive us forward.</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                            <img src={activeCulture.image} alt={activeCulture.title} className="w-full h-full object-cover transition-all duration-500 ease-in-out" />
                        </div>
                        <div className="space-y-4">
                            {cultureItems.map((item, index) => (
                                <div 
                                    key={index}
                                    onMouseEnter={() => setActiveCulture(item)}
                                    className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border ${activeCulture.title === item.title ? 'bg-white shadow-md border-transparent' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                                >
                                    <div className="flex items-center">
                                        <div className={`p-3 rounded-full mr-4 transition-colors duration-300 ${activeCulture.title === item.title ? 'bg-[#189cd2]/10' : 'bg-gray-200'}`}>
                                            <item.icon className={`w-6 h-6 transition-colors duration-300 ${activeCulture.title === item.title ? 'text-[#189cd2]' : 'text-gray-600'}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Perks & Benefits Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Perks & Benefits</h2>
                        <p className="mt-3 text-gray-600">We invest in our team's success and well-being.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-8 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '100ms' }}><GrowthIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">Career Growth</h3><p className="text-gray-600">Opportunities for professional development and learning.</p></div>
                        <div className="text-center p-8 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '200ms' }}><HeartIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">Health & Wellness</h3><p className="text-gray-600">Comprehensive health insurance and wellness programs.</p></div>
                        <div className="text-center p-8 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '300ms' }}><BriefcaseIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">Flexible Work</h3><p className="text-gray-600">Support for remote and hybrid work arrangements.</p></div>
                        <div className="text-center p-8 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '400ms' }}><TeamIcon className="w-10 h-10 text-[#189cd2] mx-auto mb-4" /><h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3><p className="text-gray-600">A supportive and inclusive team environment.</p></div>
                    </div>
                </div>
            </section>

            {/* Join Our Talent Network Section */}
            <section className="bg-sky-50 py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-white p-12 rounded-lg border border-gray-200 shadow-lg text-center animate-fadeInUp">
                        <MailIcon className="w-16 h-16 text-[#189cd2] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Join Our Talent Network</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            We are always looking for talented individuals to join our team. If you don't see a role that fits your profile, we'd still love to hear from you. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <RouterLink to="/Contact">
                  <button
                    
                    className="text-white px-8 py-3 rounded-4xl font-semibold hover:opacity-90 transition-all"
                    style={{
                      backgroundImage: 'linear-gradient(250deg, #4e95ed 0%, #189cd2 100%)'
                    }}
                  >
                    Connect With Us
                  </button>
                </RouterLink>
                        {/* <div className="mt-8">
                            <a 
                                href="mailto:careers@aegitek.com" 
                                className="inline-block bg-[#189cd2] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
                            >
                                Connect With Us
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
}
