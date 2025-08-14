import React, { useMemo, useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

/** 🔧 Edit these IDs or move to env vars */
const SERVICE_ID = "service_wis93ab";
const TEMPLATE_ID = "template_fkarr4i";
const PUBLIC_KEY  = "bK7GMdr_55GNnbreb";

/** 🧱 Dynamic field config — title added first, website removed */
const FIELDS = [
  { name: "title",  label: "Subject",         type: "text",    required: false },
  { name: "name",   label: "Name",          type: "text",    required: true  },
  { name: "email",  label: "E-Mail",        type: "email",   required: true  },
  { name: "number", label: "Phone Number",  type: "tel",     required: false },
  { name: "message",label: "Message",       type: "textarea",required: true  },
];

export default function BraintechContactSection() {
  // build initial state dynamically from FIELDS
  const initialState = useMemo(
    () => FIELDS.reduce((acc, f) => ({ ...acc, [f.name]: "" }), {}),
    []
  );
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate only fields marked required in config
    const missing = FIELDS
      .filter(f => f.required && !String(formData[f.name]).trim())
      .map(f => f.label);
    if (missing.length) {
      toast.error(`Please fill: ${missing.join(", ")}`);
      setIsSubmitting(false);
      return;
    }

    try {
      // Send ALL dynamic fields; EmailJS will use what exists in the template
      const templateParams = {
        ...formData, // includes title, name, email, number, message
        // compatibility alias if your template expects "phone"
        phone: formData.number || formData.phone || "",
        reply_to: formData.email,
        to_name: "Aegitek Team",
        from_name: formData.name,
        from_email: formData.email,
      };

      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log("EmailJS Success:", result);
      setSubmitStatus("success");
      toast.success("Message sent successfully!");

      // reset all dynamic fields to empty strings
      setFormData(initialState);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      toast.error("Something went wrong. Please try again.");
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
      className:
        "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none",
      placeholder: `${f.label}${f.required ? " *" : ""}`,
      autoComplete:
        f.type === "email" ? "email" :
        f.type === "tel" ? "tel" :
        f.name === "name" ? "name" : "off",
    };

    if (f.type === "textarea") {
      return (
        <textarea
          key={f.name}
          {...baseProps}
          rows={4}
          className={`${baseProps.className} resize-none`}
        />
      );
    }

    return <input key={f.name} type={f.type || "text"} {...baseProps} />;
  };

  return (
    <div className="w-full">
      <Toaster position="top-right" />
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Contact Info Card */}
            <div
              className="text-white p-8 rounded-2xl h-full"
              style={{ backgroundImage: "linear-gradient(250deg, #4e95ed 0%, #189cd2 100%)" }}
            >
              <div className="mb-8">
                <span className="text-blue-200 text-sm font-medium">LET'S TALK</span>
                <h2 className="text-2xl lg:text-3xl font-bold mt-2 mb-6 leading-snug">
                  We are here to help. Reach out to our team for any inquiries or to start your next project.
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-100" />
                  </div>
                  <div>
                    <div className="font-medium">Call</div>
                    <div className="text-blue-100">+91-9119995726</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-100" />
                  </div>
                  <div>
                    <div className="font-medium">E-Mail</div>
                    <div className="text-blue-100">info@aegitek.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-100" />
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
              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-red-800 font-medium">Something went wrong!</p>
                    <p className="text-red-600 text-sm">Please check your information and try again.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="mb-2">
                  <span className="text-blue-600 text-sm font-medium">GET IN TOUCH</span>
                  <h2 className="text-2xl font-bold text-gray-800 mt-2">Fill The Form Below</h2>
                </div>

                {/* Layout: non-textarea fields in grid, textarea full width */}
                <div className="grid md:grid-cols-2 gap-4">
                  {FIELDS.filter(f => f.type !== "textarea").map(renderField)}
                </div>
                <div>{FIELDS.filter(f => f.type === "textarea").map(renderField)}</div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`text-white px-8 py-3 rounded-lg font-semibold transition-all ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
                  }`}
                  style={{ backgroundImage: "linear-gradient(250deg, #4e95ed 0%, #189cd2 100%)" }}
                >
                  {isSubmitting ? "Sending..." : "Submit Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
