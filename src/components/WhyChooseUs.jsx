import React, { useState, useEffect, useCallback } from 'react';

// --- Custom Hook for Typewriter Effect ---
const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState('');
    useEffect(() => {
        setDisplayText('');
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);
        return () => clearInterval(typingInterval);
    }, [text, speed]);
    return displayText;
};

// --- Helper Icon Components (Inline SVG) ---
const Code = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m10 16.5 6-4.5-6-4.5" /><path d="M2 12h20" /></svg>
);
const ShieldCheck = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);
const BrainCircuit = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5a3 3 0 1 0-5.993.142" /><path d="M18 5a3 3 0 1 0-5.993.142" /><path d="M12 12a3 3 0 1 0-5.993.142" /><path d="M18 12a3 3 0 1 0-5.993.142" /><path d="M12 19a3 3 0 1 0-5.993.142" /><path d="M18 19a3 3 0 1 0-5.993.142" /><path d="M12 5a3 3 0 1 1 5.993.142" /><path d="M12 12a3 3 0 1 1 5.993.142" /><path d="M12 19a3 3 0 1 1 5.993.142" /><path d="M12 5v0a3 3 0 1 0 0 6v0" /><path d="M12 12v0a3 3 0 1 0 0 6v0" /><path d="M18 5v0a3 3 0 1 0 0 6v0" /><path d="M6 5v0a3 3 0 1 0 0 6v0" /><path d="M6 12v0a3 3 0 1 0 0 6v0" /><path d="M18 12v0a3 3 0 1 0 0 6v0" /></svg>
);
const Target = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
);
const Users = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6" /><path d="M23 11h-6" /></svg>
);
const TrendingUp = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
);
const Layers = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
);

// --- Main Component ---
export default function App() {
    const features = [
        { icon: Code, title: "Tailored Software Solutions", description: "We don't believe in one-size-fits-all. Our team specializes in building custom software and applications that are precisely tailored to your unique business needs and objectives." },
        { icon: ShieldCheck, title: "Proven Industry Expertise", description: "With deep experience in sectors like dairy and manufacturing, we deliver solutions that understand your world, from complex ERP implementations to specialized automation." },
        { icon: BrainCircuit, title: "Future-Ready Technology", description: "We harness the power of AI, ML, and RPA to build intelligent, efficient, and scalable solutions that give you a competitive edge in the digital age." },
        { icon: Target, title: "End-to-End Partnership", description: "From initial consultation and strategic planning to development, implementation, and support, we are your dedicated partners in digital transformation." },
        { icon: Users, title: "Client-Centric Approach", description: "Your success is our ultimate metric. We prioritize clear communication, transparency, and a collaborative process to ensure we deliver results that truly matter to you." },
        { icon: TrendingUp, title: "Data-Driven Growth", description: "Leverage our digital marketing and SEO expertise to not only build your online presence but also to drive measurable growth, turning targeted outreach into tangible results." },
        { icon: Layers, title: "Scalable & Secure", description: "We build robust, scalable architectures designed for growth and security. Your application will be ready to handle future demands while keeping your data protected." },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const [firstWord, setFirstWord] = useState('');
    const [restOfText, setRestOfText] = useState('');

    useEffect(() => {
        const fullDescription = features[currentIndex].description;
        const firstSpaceIndex = fullDescription.indexOf(' ');
        if (firstSpaceIndex === -1) {
            setFirstWord(fullDescription);
            setRestOfText('');
        } else {
            setFirstWord(fullDescription.substring(0, firstSpaceIndex));
            setRestOfText(fullDescription.substring(firstSpaceIndex));
        }
    }, [currentIndex, features]);

    const typedDescription = useTypewriter(restOfText, 20);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % features.length);
    }, [features.length]);

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 8000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    const animationStyle = `
    @keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
    .animate-fadeIn { animation: fadeIn 0.5s ease-in-out forwards; }
    @keyframes blink { 50% { border-color: transparent; } }
    .typing-cursor::after { content: '|'; display: inline-block; margin-left: 4px; animation: blink 1s infinite; color: #189cd2; }
  `;

    return (
        <div className="bg-white text-gray-800 min-h-screen font-sans flex flex-col justify-center">
            <style>{animationStyle}</style>
            <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">

                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                        Why Partner with <span className="text-[#189cd2]">Aegitek?</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        We are more than just a software company. We are your strategic partner in innovation, dedicated to building the technology that powers your success.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-sky-50/70 backdrop-blur-sm rounded-2xl border border-sky-200 shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-12 min-h-[500px]">

                        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-sky-200 flex md:flex-col md:justify-center overflow-x-auto">
                            {features.map((feature, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`flex-shrink-0 md:flex-shrink w-full text-left p-4 transition-colors duration-200 relative group ${currentIndex === index ? 'bg-sky-100' : 'hover:bg-sky-100/50'
                                        }`}
                                >
                                    <div className={`absolute left-0 top-0 h-full w-1 bg-[#189cd2] transition-transform duration-300 ease-out ${currentIndex === index ? 'scale-y-100' : 'scale-y-0'
                                        }`}></div>
                                    <div className="flex items-center">
                                        <feature.icon className={`w-6 h-6 mr-4 transition-colors duration-200 ${currentIndex === index ? 'text-[#189cd2]' : 'text-gray-400 group-hover:text-[#189cd2]'}`} />
                                        <span className={`font-semibold whitespace-nowrap ${currentIndex === index ? 'text-[#189cd2]' : 'text-gray-600'}`}>{feature.title}</span>

                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center">
                            <div key={currentIndex} className="animate-fadeIn">
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{features[currentIndex].title}</h3>
                                <p className="text-gray-700 leading-relaxed min-h-[150px] text-lg">
                                    <strong className="font-bold text-gray-800">{firstWord}</strong>
                                    <span className="typing-cursor">{typedDescription}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}