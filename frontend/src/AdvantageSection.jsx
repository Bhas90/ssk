import React from "react";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const leftAdvantages = [
  "Unit Selection Guidance",
  "Home Loan Support",
  "Hassle-Free Registration",
];

const rightAdvantages = [
  "High Appreciation Potential",
  "Flexible Payment Options",
  "Personal Assistance for NRIs",
];

const AdvantageSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#ffffff] via-[#faf7f2] to-[#fff5e4] px-12">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
          NRI Assistance <span className="text-[#fea611]">Made Easy</span> 
        </h2>
        <p className="text-gray-700 mt-3 text-lg max-w-2xl mx-auto">
          Exclusive support for overseas buyers — seamless guidance from booking to possession.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-[#fea611] rounded-full mx-auto mt-6 mb-10"></div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">

          {/* Left */}
          {leftAdvantages.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center p-4 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl border border-[#ffe7b6] hover:scale-[1.03] transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#fea611]/20">
                <FaCheckCircle className="text-[#fea611] text-xl" />
              </div>
              <span className="ml-4 text-lg font-medium text-gray-800">{item}</span>
            </div>
          ))}

          {/* Right */}
          {rightAdvantages.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center p-4 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl border border-[#ffe7b6] hover:scale-[1.03] transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#fea611]/20">
                <FaCheckCircle className="text-[#fea611] text-xl" />
              </div>
              <span className="ml-4 text-lg font-medium text-gray-800">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-14">

          {/* Call Button */}
          <a
            href="tel:+917207952288"
            className="px-8 py-3 bg-gradient-to-r from-[#0f355f] to-[#fea611] text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 font-semibold"
          >
            <FaPhoneAlt /> Call Us Today
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917207952288?text=Hello,%20I%20am%20interested%20in%20the%20Sujay%20Sierra%20.%20Please%20share%20all%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 font-semibold"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>

        {/* Note */}
        <p className="text-sm text-gray-500 mt-6">*Terms & Conditions Apply</p>

      </div>
    </section>
  );
};

export default AdvantageSection;
