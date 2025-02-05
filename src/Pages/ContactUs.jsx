import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must be numeric.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      // Reset form after successful submission
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-red-300 via-yellow-50 ">
      {/* Hero Section */}
      <div className="py-16 text-white bg-gradient-to-r from-blue-900 to-red-600">
        <div className="container px-4 mx-auto">
          <h1 className="mb-4 text-4xl font-bold text-center md:text-5xl">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-center">
            Get in touch with us for professional security services and
            solutions
          </p>
        </div>
      </div>

      
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div className="max-h-screen p-4 bg-gray-100 rounded-lg shadow-lg md:p-6">
            <h2 className="mb-4 text-2xl font-bold text-red-900">
              Send Us a Message
            </h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-gray-900" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  placeholder="Your name"
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-gray-900" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  placeholder="your@email.com"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-gray-900" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  placeholder="Your phone number"
                  required
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-gray-900" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  placeholder="Your message"
                  required
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-800"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Map */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-red-900">
                Our Location
              </h2>
              <div className="w-full h-64 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.035646160752!2d85.32460077505968!3d27.71258872541254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1902979e85e5%3A0x8f60e9d8f5aef9ef!2sKathmandu%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1707057056784!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Details */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-red-900">
                Contact Information
              </h2>
              <div className="space-y-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-gray-900 hover:text-blue-600"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a
                  href="mailto:info@proguardservices.com"
                  className="flex items-center text-gray-900 hover:text-blue-600"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  <span>info@proguardservices.com</span>
                </a>
                <div className="flex items-center text-gray-900">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Near Shrestha Mobile, Amda Road, Damak, Nepal</span>
                </div>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-900 hover:text-green-600"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-red-900">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
