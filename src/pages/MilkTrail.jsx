import React, { useState } from 'react';
import { Star, Truck, Clock, Shield, MapPin } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const MilkTrailApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Whole Milk',
      price: 70,
      image: '🥛',
      category: 'milk',
      description: 'Fresh, creamy whole milk from local farms',
      rating: 4.8,
      inStock: true,
      unit: '1 Liter',
    },
    {
      id: 2,
      name: 'Paneer',
      price: 80,
      image: '🧀',
      category: 'dairy',
      description: 'Fresh homemade paneer, perfect for cooking',
      rating: 4.7,
      inStock: true,
      unit: '250g',
    },
    {
      id: 3,
      name: 'Ghee',
      price: 150,
      image: '🫙',
      category: 'dairy',
      description: 'Pure desi ghee made from cow milk',
      rating: 4.9,
      inStock: true,
      unit: '200ml',
    },
    {
      id: 4,
      name: 'Curd',
      price: 100,
      image: '🥣',
      category: 'dairy',
      description: 'Fresh yogurt, rich in probiotics',
      rating: 4.6,
      inStock: true,
      unit: '500g',
    },
    {
      id: 5,
      name: 'Butter',
      price: 80,
      image: '🧈',
      category: 'dairy',
      description: 'Creamy fresh butter, unsalted',
      rating: 4.5,
      inStock: true,
      unit: '200g',
    },
    {
      id: 6,
      name: 'Toned Milk',
      price: 60,
      image: '🥛',
      category: 'milk',
      description: 'Low-fat toned milk, healthy choice',
      rating: 4.4,
      inStock: true,
      unit: '1 Liter',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛒' },
    { id: 'milk', name: 'Milk', icon: '🥛' },
    { id: 'dairy', name: 'Dairy Products', icon: '🧀' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative min-w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                  Fresh Milk
                </h1>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    &amp;
                  </span>{' '}
                  More at
                </h1>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                  Your Doorstep
                </h1>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed max-w-xl font-medium">
                Order premium milk and dairy products from your local dairy, powered by Milk Matrix ERP.
                Fresh, pure, and delivered daily to your doorstep.
              </p>

              {/* Hero Stats */}
              <div className="grid grid-cols-3 gap-8 py-8">
                <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-3xl font-bold text-blue-400">10K+</div>
                  <div className="text-gray-600 text-sm font-medium">Happy Customers</div>
                </div>
                <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600 text-sm font-medium">Pure & Fresh</div>
                </div>
                <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-gray-600 text-sm font-medium">Service</div>
                </div>
              </div>

              {/* ✅ Book a Demo Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <RouterLink to="/Contact">
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-400 transition-colors">
                    Book a Demo
                  </button>
                </RouterLink>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:ml-8">
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/20">
                  <img
                    src="/assets/milktest.webp"
                    alt="MilkTrail App Preview"
                    className="rounded-2xl w-full h-auto max-w-md mx-auto shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features + Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Service Features */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose MilkTrail?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Free delivery on orders above ₹100</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Daily delivery at 6:00 AM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Quality guaranteed products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700">Local dairy partnerships</span>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🚚</div>
                <p className="text-gray-700 font-medium">Your friendly delivery partner</p>
                <p className="text-sm text-gray-600">Fresh products delivered with care</p>
              </div>
            </div>
          </div>

          {/* Right Panel - Products */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-auto max-w-md">
              <div className="bg-gray-50 p-4 border-b flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Products</h2>
                <div className="text-sm text-gray-600">8:31</div>
              </div>

              <div className="p-4 border-b bg-white">
                <div className="flex space-x-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                        selectedCategory === category.id
                          ? 'bg-blue-400 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span>{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto">
                <div className="divide-y divide-gray-100">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{product.image}</div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            {!product.inStock && (
                              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                Out of Stock
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{product.description}</p>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600">{product.rating}</span>
                            </div>
                            <span className="text-xs text-gray-500">• {product.unit}</span>
                          </div>
                          <div className="text-lg font-bold text-gray-800">₹{product.price.toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilkTrailApp;
