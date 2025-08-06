import React from 'react';
import { 
  Building,
  Code,
  Megaphone,
  GraduationCap,
  Sparkle,
  Lightbulb,
  Palette,
  PlaySquare,
  CheckCircle
} from 'lucide-react';

export default function OurStoryPage() {
  const specializationPoints = [
    {
      icon: <Building className="h-5 w-5 text-[#189CD2] mr-2 flex-shrink-0" />,
      text: "ERP & Industry Automation through our Flagship solutions: Milk Mantra ERP, Dairy ERP"
    },
    {
      icon: <Code className="h-5 w-5 text-[#189CD2] mr-2 flex-shrink-0" />,
      text: "Custom Software Development for Web/Mobile and SaaS"
    },
    {
      icon: <Code className="h-5 w-5 text-[#189CD2] mr-2 flex-shrink-0" />,
      text: "Web & Mobile App Development using Modern frameworks like React, Next.js, and Flutter"
    },
    {
      icon: <Building className="h-5 w-5 text-[#189CD2] mr-2 flex-shrink-0" />,
      text: "AI, ML, & Process Automation for Intelligent Automation"
    },
    {
      icon: <Megaphone className="h-5 w-5 text-[#189CD2] mr-2 flex-shrink-0" />,
      text: "Digital Marketing & SEO to drive traffic, leads, and online presence"
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-[#189CD2] mr-2 flex-shrink-0" />,
      text: "Training & Mentorship Programs for the next generation of developers and tech professionals"
    }
  ];

  const approachSteps = [
    {
      step: "1",
      icon: <Lightbulb className="h-12 w-12 text-[#189CD2]" />,
      title: "Discover",
      description: "Understand your business, challenges, and goals through in-depth analysis and workshop research."
    },
    {
      step: "2",
      icon: <Palette className="h-12 w-12 text-[#189CD2]" />,
      title: "Design",
      description: "Craft a comprehensive solution that addresses your specific needs, combining innovative technologies and best practices."
    },
    {
      step: "3",
      icon: <PlaySquare className="h-12 w-12 text-[#189CD2]" />,
      title: "Deliver",
      description: "Implement solutions with precision and care, ensuring quality, performance, and alignment with your goals."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] md:h-[400px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/assets/banner-img3.png)"}}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto drop-shadow-md">
            Driving Digital Transformation with Innovation and Expertise
          </p>
        </div>
      </section>

      {/* Our Story Content Section - Part 1: About Us Text (Left) & Our Team Image (Right) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Column for Our Story Text */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-[#189CD2]">About</span> Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Aegitek Solutions Pvt. Ltd., our journey began with a simple yet powerful vision: to empower businesses with intelligent digital solutions that drive growth and efficiency in a rapidly evolving technological landscape. Founded on the principle of transforming complex IT challenges into streamlined, smart business solutions, we strive to be a catalyst for digital transformation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a dynamic and innovative technology startup, we are fueled by a team of passionate professionals who bring years of combined experience in software development, ERP solutions, automation, and enterprise consulting. We are committed to pushing the boundaries of what's possible, delivering cutting-edge solutions that help our clients thrive in the digital era.
            </p>
          </div>

          {/* Right Column for "Our Team" Image */}
          <div className="lg:col-span-1 flex justify-center">
            <img
              src="/assets/banner-img4.png"
              alt="Our Team"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story Content Section - Part 2: Specialization Image (Left) & Specialization Text (Right) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column for Specialization Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <img
              src="/assets/banner-img6.png"
              alt="Specialization Icon"
              className="w-full h-auto rounded-lg shadow-md object-cover max-w-[300px] lg:max-w-full mt-20"
            />
          </div>

          {/* Right Column for "We specialize in:" text and subsequent paragraphs */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We <span className="text-[#189CD2]">specialize</span> in:
            </h3>
            <ul className="list-none space-y-3 mb-6">
              {specializationPoints.map((point, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  {point.icon}
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              In Aegitek, we may be new, but we are ambitious, committed, and client-focused. Our goal is to build long-term partnerships by delivering solutions that are not just technically sound but also strategically aligned with our clients' growth.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are actively collaborating with partners, expanding our footprint, and looking forward to building our client base across industries — one successful project at a time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Join us on this journey! Whether you're a business looking for a technology partner or a young professional seeking real-world experience – Aegitek Solutions Pvt. Ltd. is here to grow with you.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#189CD2]">Approach</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We take a consultative approach to every project, working closely with our clients to understand their unique challenges and objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {approachSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100"
              >
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full text-white text-xl font-bold mb-6"
                  style={{ backgroundColor: 'rgba(24, 156, 210, 0.1)' }}
                >
                  {step.icon}
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