
// import React, { useState } from 'react';
// import { Phone, Mail, MapPin, Link } from 'lucide-react';
// import { Link as RouterLink } from 'react-router-dom'; // Use this for navigation

// export default function BraintechContactSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     website: '',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="w-full">
//       {/* Contact Form Section */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left - Contact Card */}
//             <div className="text-white p-8 rounded-2xl  h-full" style={{
//               backgroundImage: 'linear-gradient(250deg, #4e95ed 0%, #189cd2 100%)'
//             }}>
//               <div className="mb-8 ">
//                 <span className="text-blue-200 text-sm font-medium">LET'S TALK</span>
//                 <h2 className=" font-bold mt-2 mb-6">
//                   We are here to help. Reach out to our team for any inquiries or to start your next project.
//                 </h2>
//               </div>

//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//                     <Phone className="w-5 h-5 text-blue-400" />
//                   </div>
//                   <div>
//                     <div className="font-medium">Call</div>
//                     <div className="text-blue-100">+91-9119995726</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//                     <Mail className="w-5 h-5 text-blue-400" />
//                   </div>
//                   <div>
//                     <div className="font-medium">E-Mail</div>
//                     <div className="text-blue-100">info@aegitek.com</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//                     <MapPin className="w-10 h-5 text-blue-400" />
//                   </div>
//                   <div>
//                     <div className="font-medium">Address</div>
//                     <div className="text-blue-100">Plot No 117, Pocket 4 Block B, Dwarka Sector 23, Yashobhoomi, New Delhi 110075</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right - Contact Form */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg">
//               <div className="mb-8">
//                 <span className="text-blue-600 text-sm font-medium">GET IN TOUCH</span>
//                 <h2 className="text-2xl font-bold text-gray-800 mt-2">
//                   Fill The Form Below
//                 </h2>
//               </div>

//               <div className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="E-Mail"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                   />
//                   <input
//                     type="url"
//                     name="website"
//                     placeholder="Your Website"
//                     value={formData.website}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                   />
//                 </div>

//                 <textarea
//                   name="message"
//                   placeholder="Your message Here"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
//                 ></textarea>

//                 {/* Use RouterLink here for navigation */}
//                 <RouterLink to="/Contact">
//                   <button
//                     onClick={handleSubmit}
//                     className="text-white px-8 py-3 rounded-4xl font-semibold hover:opacity-90 transition-all"
//                     style={{
//                       backgroundImage: 'linear-gradient(250deg, #4e95ed 0%, #189cd2 100%)'
//                     }}
//                   >
//                     Submit Now
//                   </button>
//                 </RouterLink>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function BraintechContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID',    // e.g., service_123xyz
        'YOUR_TEMPLATE_ID',   // e.g., template_abcd123
        formData,
        'YOUR_PUBLIC_KEY'     // e.g., sD9AbcdEfghIJkLmN
      )
      .then(
        (result) => {
          alert('Message Sent Successfully!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            website: '',
            message: ''
          });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="w-full">
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Contact Info Card */}
            <div className="text-white p-8 rounded-2xl h-full" style={{
              backgroundImage: 'linear-gradient(250deg, #4e95ed 0%, #189cd2 100%)'
            }}>
              <div className="mb-8">
                <span className="text-blue-200 text-sm font-medium">LET'S TALK</span>
                <h2 className="font-bold mt-2 mb-6">
                  We are here to help. Reach out to our team for any inquiries or to start your next project.
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium">Call</div>
                    <div className="text-blue-100">+91-9119995726</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium">E-Mail</div>
                    <div className="text-blue-100">info@aegitek.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-blue-100">
                      Plot No 117, Pocket 4 Block B, Dwarka Sector 23, Yashobhoomi, New Delhi 110075
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-8">
                  <span className="text-blue-600 text-sm font-medium">GET IN TOUCH</span>
                  <h2 className="text-2xl font-bold text-gray-800 mt-2">Fill The Form Below</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="url"
                    name="website"
                    placeholder="Your Website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your message here"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="text-white px-8 py-3 rounded-4xl font-semibold hover:opacity-90 transition-all"
                  style={{
                    backgroundImage: 'linear-gradient(250deg, #4e95ed 0%, #189cd2 100%)'
                  }}
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
