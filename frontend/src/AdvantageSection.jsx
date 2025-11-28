import React from "react";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const leftAdvantages = [
  "Unit Selection",
  "Home Loan Assistance",
  "Support in Registration",
];

const rightAdvantages = [
  "High Resale & Rental Value",
  "Just Pay 10% Scheme",
  "Dedicated Support from Sales Manager",
];

const AdvantageSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 via-white to-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 text-gray-900">
          Exclusive <span style={{ color: '#fea611' }}>NRI Support</span>
        </h2>

        <p className="text-xl text-gray-700 mb-8">Get Instant Help</p>
        <hr className="border-t border-gray-300 w-20 mx-auto mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <ul className="space-y-6 text-left">
            {leftAdvantages.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center p-5 bg-white/50 backdrop-blur-lg rounded-xl shadow-lg transition-transform transform hover:scale-105"
              >
                <FaCheckCircle style={{ color: '#fea611' }} />
                <span className="px-2 text-lg text-gray-800">{item}</span>
              </li>
            ))}
          </ul>

          <ul className="space-y-6 text-left">
            {rightAdvantages.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center p-5 bg-white/50 backdrop-blur-lg rounded-xl shadow-lg transition-transform transform hover:scale-105"
              >
                <FaCheckCircle style={{ color: '#fea611' }} />
                <span className="px-2 text-lg text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-4">
          
          {/* Call Button */}
          <a
            href="tel:+917899051883"
            className="blinking-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-md transition-all duration-300"
          >
            <FaPhoneAlt /> Call Us
          </a>

          {/* WhatsApp Button with Auto Message */}
          <a
            href="https://wa.me/917899051883?text=Hello,%20I%20am%20interested%20in%20your%20NRI%20Project%20Bhavya-Aspire%20Spaces%20Evora.%20Please%20share%20project%20details,%20pricing,%20and%20availability."
            target="_blank"
            rel="noopener noreferrer"
            className="blinking-button bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-md transition-all duration-300"
          >
            <FaWhatsapp /> Message Us
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">T&C apply</p>
      </div>
    </section>
  );
};

export default AdvantageSection;
