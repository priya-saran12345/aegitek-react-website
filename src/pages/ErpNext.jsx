import React from 'react';
import { 
  Users, 
  Settings, 
  Handshake, 
  Package, 
  Calculator, 
  UserCheck, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Star,
  Building,
  Smartphone,
  Cloud
} from 'lucide-react';

export default function ERPNextLanding() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "CRM & Sales",
      description: "Manage leads, opportunities, and customer relationships with integrated sales pipeline tracking."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory Management",
      description: "Real-time stock tracking, warehouse management, and automated reorder points."
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Accounting & Finance",
      description: "Complete financial management with invoicing, payments, and comprehensive reporting."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Human Resources",
      description: "Employee management, payroll processing, attendance tracking, and performance reviews."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reports",
      description: "Powerful business intelligence with customizable dashboards and real-time insights."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Manufacturing",
      description: "Production planning, work orders, quality control, and supply chain optimization."
    }
  ];

  const benefits = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "100% Open Source & Customizable" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "No Per-User Licensing Fees" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Cloud or On-Premise Deployment" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Mobile-First Responsive Design" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Multi-Language & Multi-Currency" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Advanced Role-Based Permissions" }
  ];

  const stats = [
    { number: "10,000+", label: "Active Installations" },
    { number: "100+", label: "Countries Served" },
    { number: "15+", label: "Integrated Modules" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "TechStart Inc.",
      content: "ERPNext transformed our business operations. The integrated approach saved us countless hours and significantly improved our efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Finance Director", 
      company: "Global Manufacturing",
      content: "The cost savings from switching to ERPNext were immediate. We got enterprise-level features without the enterprise price tag.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                ERPNext
                <span className="block text-blue-400">Flexible, Open-Source ERP</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Implement CRM, inventory, HR, accounting and more with a streamlined ERP solution designed for modern businesses. Scale efficiently without vendor lock-in.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Customizable</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Cost-Effective</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Modular</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Scalable</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-400 transition-all duration-300">
                  Book a Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              {/* Image Container */}
              <div className="bg-white rounded-3xl shadow-2xl p-4 transform hover:scale-105 transition-all duration-500">
                <img 
                  src="../src/assets/ERPNext.png" 
                  alt="ERPNext img" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Business Management Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ERPNext provides all the tools you need to run your business efficiently, from customer management to financial reporting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose ERPNext?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Built for the modern enterprise, ERPNext delivers enterprise-grade functionality without the enterprise price tag.
              </p>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-green-400">{benefit.icon}</div>
                    <span className="text-lg">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Shield className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-blue-100">Enterprise-grade security with regular updates and monitoring.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fast Performance</h3>
                <p className="text-blue-100">Optimized for speed with modern web technologies.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Global Ready</h3>
                <p className="text-blue-100">Multi-currency, multi-language, and multi-company support.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Smartphone className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Mobile First</h3>
                <p className="text-blue-100">Fully responsive design for all devices and screen sizes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about their ERPNext experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                  <div className="text-blue-400 font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}