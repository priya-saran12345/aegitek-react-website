import React, { useMemo, useState } from 'react';
import {
  Phone, Mail, MapPin, Facebook, Instagram, Youtube, Clock,
  ArrowRight, Linkedin, CheckCircle, AlertCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

/** EmailJS IDs (move to env vars in prod) */
const SERVICE_ID = 'service_wis93ab';
const TEMPLATE_ID = 'template_fkarr4i';
const PUBLIC_KEY  = 'bK7GMdr_55GNnbreb';

/** Dynamic form fields (website removed, title added first) */
const FIELDS = [
  { name: 'title',  label: 'Subject',      type: 'text',     required: false },
  { name: 'name',   label: 'Name',         type: 'text',     required: true  },
  { name: 'email',  label: 'E-Mail',       type: 'email',    required: true  },
  { name: 'number', label: 'Phone Number', type: 'tel',      required: false },
  { name: 'message',label: 'Message',      type: 'textarea', required: true  },
];

export default function ContactPage() {
  // ----- Left column data (unchanged) -----
  const addressCard = {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Our Address',
    content:
      'Aegitek Solutions Private Limited, Plot No 117, Pocket 4 Block B, Dwarka Sector 23, Opposite Pillar no 180 Yashobhoomi, New Delhi 110075'
  };
  const businessHoursCard = {
    icon: <Clock className="w-6 h-6" />,
    title: 'Business Hours',
    content: (
      <>
        Monday - Friday: 10:00 AM - 6:00 PM<br />
        Saturday &amp; Sunday: Closed
      </>
    )
  };
  const phoneCard = { icon: <Phone className="w-6 h-6" />, title: 'Phone', content: '+91-9119995726' };
  const emailCard = { icon: <Mail className="w-6 h-6" />, title: 'Email', content: 'info@aegitek.com' };

  // ----- Dynamic form state/handlers -----
  const initialState = useMemo(
    () => FIELDS.reduce((acc, f) => ({ ...acc, [f.name]: '' }), {}),
    []
  );
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // validate required fields from config
    const missing = FIELDS.filter(f => f.required && !String(formData[f.name]).trim()).map(f => f.label);
    if (missing.length) {
      toast.error(`Please fill: ${missing.join(', ')}`);
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        ...formData,                              // title, name, email, number, message
        phone: formData.number || '',             // alias if EmailJS template uses {{phone}}
        reply_to: formData.email,
        to_name: 'Aegitek Team',
        from_name: formData.name,
        from_email: formData.email,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSubmitStatus('success');
      toast.success('Message sent successfully!');
      setFormData(initialState);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setSubmitStatus('error');
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const renderField = (f) => {
    const baseProps = {
      name: f.name,
      value: formData[f.name],
      onChange: handleInputChange,
      required: !!f.required,
      placeholder: `${f.label}${f.required ? ' *' : ''}`,
      className:
        'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#189CD2] focus:border-transparent outline-none transition-all duration-200',
      autoComplete:
        f.type === 'email' ? 'email' :
        f.type === 'tel'   ? 'tel'   :
        f.name === 'name'  ? 'name'  : 'off',
    };

    if (f.type === 'textarea') {
      return (
        <textarea
          key={f.name}
          rows={5}
          className={`${baseProps.className} resize-none`}
          {...baseProps}
        />
      );
    }
    return <input key={f.name} type={f.type || 'text'} {...baseProps} />;
  };

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Toaster position="top-right" />

      {/* Hero */}
      <section
        className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/bg-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto drop-shadow-md">
            We're here to help. Reach out to our team for any inquiries or to start your next project.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left: info cards (unchanged) */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">Get in Touch</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-4 mb-4">
                  <div className="flex-shrink-0 p-3 rounded-full text-white shadow-md" style={{ backgroundColor: '#189CD2' }}>
                    {addressCard.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{addressCard.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{addressCard.content}</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-4 mb-4">
                  <div className="flex-shrink-0 p-3 rounded-full text-white shadow-md" style={{ backgroundColor: '#189CD2' }}>
                    {businessHoursCard.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{businessHoursCard.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{businessHoursCard.content}</p>
              </div>

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

          {/* Right: REPLACED FORM */}
          <div className="bg-white p-8 mt-15 h-[650px] md:h-[550px] rounded-xl shadow-lg border border-gray-100 overflow-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-green-800 font-medium">Message sent successfully!</p>
                  <p className="text-green-600 text-sm">We’ll get back to you as soon as possible.</p>
                </div>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-red-800 font-medium">Something went wrong!</p>
                  <p className="text-red-600 text-sm">Please check your information and try again.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* grid for non-textarea fields */}
              <div className="grid md:grid-cols-2 gap-4">
                {FIELDS.filter(f => f.type !== 'textarea').map((f) => {
                  const common =
                    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#189CD2] focus:border-transparent outline-none transition-all duration-200';
                  const props = {
                    name: f.name,
                    value: formData[f.name],
                    onChange: handleInputChange,
                    required: f.required,
                    placeholder: `${f.label}${f.required ? ' *' : ''}`,
                    autoComplete:
                      f.type === 'email' ? 'email' :
                      f.type === 'tel'   ? 'tel'   :
                      f.name === 'name'  ? 'name'  : 'off',
                    className: common,
                  };
                  return <input key={f.name} type={f.type || 'text'} {...props} />;
                })}
              </div>

              {/* textarea full width */}
              <div>
                {FIELDS.filter(f => f.type === 'textarea').map((f) => {
                  const common =
                    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#189CD2] focus:border-transparent outline-none transition-all duration-200';
                  return (
                    <textarea
                      key={f.name}
                      name={f.name}
                      value={formData[f.name]}
                      onChange={handleInputChange}
                      required={f.required}
                      rows={5}
                      placeholder={`${f.label}${f.required ? ' *' : ''}`}
                      className={`${common} resize-none`}
                    />
                  );
                })}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundImage: 'linear-gradient(250deg, #4e95ed 0%, #189cd2 100%)' }}
              >
                {isSubmitting ? 'Sending...' : 'Submit Now'}
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Us on the <span className="text-[#189CD2]">Map</span>
            </h2>
            <p className="text-lg text-gray-600">Visit our office or get directions using the map below.</p>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1063.047184089114!2d77.04728095931355!3d28.558087101017314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b00609ae89b%3A0x542e45088cb8670e!2sAegitek%20Solutions!5e0!3m2!1sen!2sin!4v1753781462133!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
