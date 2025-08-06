import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Clock, ArrowRight, Linkedin } from 'lucide-react'; // Added Clock icon

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to a server
    // For now, we'll use a simple alert (though in a real app, use a modal)
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ // Clear form after submission
      name: '',
      email: '',
      phone: '',
      website: '',
      message: ''
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Newsletter subscription:', newsletterEmail);
    alert('Thank you for subscribing to our newsletter!');
    setNewsletterEmail('');
  };

  // Reordered and structured contact data to match the desired layout
  const addressCard = {
    icon: <MapPin className="w-6 h-6" />,
    title: "Our Address",
    content: "Aegitek Solutions Private Limited, Plot No 117, Pocket 4 Block B, Dwarka Sector 23, Opposite Pillar no 180 Yashobhoomi, New Delhi 110075"
  };

  const businessHoursCard = {
    icon: <Clock className="w-6 h-6" />,
    title: "Business Hours",
    content: (
      <>
        Monday - Friday: 10:00 AM - 6:00 PM<br />
        Saturday & Sunday: Closed
      </>
    )
  };

  const phoneCard = {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    content: "+91-9119995726"
  };

  const emailCard = {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    content: "info@aegitek.com"
  };


  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/bg-1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for text readability */}
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto drop-shadow-md">
            We're here to help. Reach out to our team for any inquiries or to start your next project.
          </p>
        </div>
      </section>

      {/* Main Contact Content Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Information Cards */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              Get in Touch
            </h2>
            <div className="space-y-6"> {/* Container for all contact cards */}
              {/* Address Card (Full Width) */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-4 mb-4">
                  <div className="flex-shrink-0 p-3 rounded-full text-white shadow-md" style={{ backgroundColor: '#189CD2' }}>
                    {addressCard.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{addressCard.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{addressCard.content}</p>
              </div>

              {/* Business Hours Card (Full Width) */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-4 mb-4">
                  <div className="flex-shrink-0 p-3 rounded-full text-white shadow-md" style={{ backgroundColor: '#189CD2' }}>
                    {businessHoursCard.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{businessHoursCard.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{businessHoursCard.content}</p>
              </div>

              {/* Phone and Email Cards (Two Columns) */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start space-x-4 mb-4">
                    <div className="flex-shrink-0 p-3 rounded-full text-white shadow-md" style={{ backgroundColor: '#189CD2' }}>
                      {phoneCard.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{phoneCard.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{phoneCard.content}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start space-x-4 mb-4">
                    <div className="flex-shrink-0 p-3 rounded-full text-white shadow-md" style={{ backgroundColor: '#189CD2' }}>
                      {emailCard.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{emailCard.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{emailCard.content}</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <a href="#" className="text-gray-600 hover:text-[#189CD2] transition-colors duration-200">
                  <Facebook className="w-7 h-7" />
                </a>
                <a href="https://www.linkedin.com/in/aegitek-solutions-82a1b9375/" className="text-gray-600 hover:text-[#189CD2] transition-colors duration-200">
                  <Linkedin className="w-7 h-7" />
                </a>
                <a href="https://www.instagram.com/aegitek_solutions/" className="text-gray-600 hover:text-[#189CD2] transition-colors duration-200">
                  <Instagram className="w-7 h-7" />
                </a>
                <a href="https://www.youtube.com/" className="text-gray-600 hover:text-[#189CD2] transition-colors duration-200">
                  <Youtube className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white p-8 mt-15 h-[650px] md:h-[550px]  rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#189CD2] focus:border-transparent outline-none transition-all duration-200"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your E-Mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#189CD2] focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#189CD2] focus:border-transparent outline-none transition-all duration-200"
                />
                <input
                  type="url"
                  name="website"
                  placeholder="Your Website (Optional)"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#189CD2] focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your message Here"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#189CD2] focus:border-transparent outline-none resize-none transition-all duration-200"
                required
              ></textarea>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundImage: 'linear-gradient(250deg, #4e95ed 0%, #189cd2 100%)' }}
              >
                Submit Now
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Us on the <span className="text-[#189CD2]">Map</span>
            </h2>
            <p className="text-lg text-gray-600">
              Visit our office or get directions using the map below.
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg border border-gray-100">
            {/* Updated Google Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1063.047184089114!2d77.04728095931355!3d28.558087101017314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b00609ae89b%3A0x542e45088cb8670e!2sAegitek%20Solutions!5e0!3m2!1sen!2sin!4v1753781462133!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}