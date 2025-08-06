import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Use this for navigation
import { CheckCircle, Star, Users, Shield, Settings, TrendingUp, Database, Clock, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function MilkMatrixERP() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Milk Matrix ERP
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-400 mb-8">
                Empowering the Dairy Value Chain
              </h2>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">End-to-end Dairy ERP System</h3>
                <p className="text-gray-600 mb-6">
                  Manage milk procurement, pricing, quality, sales & more with our comprehensive platform designed specifically for dairy operations.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Used by 20+ MPCs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Secure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Customizable</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <RouterLink to="/Contact">
                     <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-400 transition-colors">
                    Book a Demo
                  </button>
                </RouterLink>
                </div>
              </div>
            </div>
            
            {/* Illustration */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-4 shadow-2xl">
                <div className="mb-6">
                  <img src="/assets/milk-img.png" alt="" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce">
                <Award className="w-6 h-6 text-yellow-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Dairy Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to streamline your dairy operations from farm to market
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: "Milk Procurement Management",
                description: "Track milk collection from farmers, manage routes, and automate payment calculations based on quality parameters."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Dynamic Pricing Engine",
                description: "Set flexible pricing models based on fat content, SNF, quality grades, and market conditions with real-time adjustments."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Control System",
                description: "Comprehensive quality testing modules with FSSAI compliance, batch tracking, and quality certification management."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Farmer Management",
                description: "Complete farmer database with KYC, payment history, milk supply patterns, and performance analytics."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Real-time Monitoring",
                description: "Live dashboards showing collection centers, milk volumes, quality metrics, and operational KPIs."
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Inventory & Sales",
                description: "Manage finished products inventory, sales orders, distribution channels, and customer relationships."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-r from-blue-400 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Milk Matrix ERP?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your dairy operations with proven benefits
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "35%",
                title: "Cost Reduction",
                description: "Average operational cost savings through automation and optimization"
              },
              {
                number: "50%",
                title: "Time Savings",
                description: "Reduce manual processes and administrative overhead significantly"
              },
              {
                number: "99.9%",
                title: "Uptime",
                description: "Reliable cloud infrastructure ensures maximum system availability"
              },
              {
                number: "24/7",
                title: "Support",
                description: "Round-the-clock technical support and system monitoring"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-900 mb-2">{benefit.number}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Dairy Leaders
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "General Manager, ABC Dairy Co-op",
                quote: "Milk Matrix ERP has revolutionized our operations. We've seen a 40% improvement in efficiency and better farmer satisfaction."
              },
              {
                name: "Priya Sharma",
                role: "Operations Head, XYZ Milk Union",
                quote: "The quality control features are outstanding. We've achieved 100% FSSAI compliance and reduced quality issues by 60%."
              },
              {
                name: "Suresh Patel",
                role: "CEO, Modern Dairy Solutions",
                quote: "Implementation was smooth and the ROI was visible within 6 months. Highly recommend for any dairy business."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}