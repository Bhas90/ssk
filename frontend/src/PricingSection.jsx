import React, { useState } from "react";
import PopupForm from "./PopupForm"; 

const PricingSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const scrollToBanner = () => {
    const bannerSection = document.getElementById("banner-section");
    if (bannerSection) {
      bannerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-24 text-center">

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 text-gray-900">
        Pricing & <span style={{ color: '#fea611' }}>Plans</span>
      </h2>

      <hr className="border-t-2 border-yellow-800 w-24 mx-auto mb-8" />

      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-yellow-800 pb-3 text-left">
          <p className="font-semibold text-black">SQ.YDS:</p>
          <p className="font-semibold text-black">SIZES:</p>
          <p className="font-semibold text-black">Base Price:</p>
        </div>

        {/* 2 BHK */}
        <div className="flex justify-between pt-4 text-left">
          <p className="text-black">267</p>
          <p className="text-black">3752 SFT</p>
          <p className="text-white px-2.5 py-1 rounded bg-[#002954] hover:bg-[#fea611] transition">₹4.50 Cr*</p>
        </div>

        {/* 3 BHK – PRICE ON REQUEST BUTTON */}
        <div className="flex justify-between pt-4 text-left">
          <p className="text-black">317</p>
          <p className="text-black">4094 SFT</p>
          
          <button
            onClick={openPopup}
            className="text-white px-2.5 py-1 rounded bg-[#002954] hover:bg-[#fea611] transition"
          >
            Request Price
          </button>
        </div>
        <div className="flex justify-between pt-4 text-left">
          <p className="text-black">357</p>
          <p className="text-black">4904 SFT</p>
          
          <button
            onClick={openPopup}
            className="text-white px-2.5 py-1 rounded bg-[#002954] hover:bg-[#fea611] transition"
          >
            Request Price
          </button>
        </div>
        <div className="flex justify-between pt-4 text-left">
          <p className="text-black">440</p>
          <p className="text-black">5900 SFT</p>
          
          <button
            onClick={openPopup}
            className="text-white px-2.5 py-1 rounded bg-[#002954] hover:bg-[#fea611] transition"
          >
            Request Price
          </button>
        </div>
      </div>

      <div className="mt-6 py-3 font-semibold text-black text-lg">
        For Presentations & Site Visit, Contact - {" "}
        <a href="tel:+917899051883" className="text-blue-600 underline">
          +91-7899051883
        </a>
      </div>

      <button
        onClick={scrollToBanner}
        className="mt-6 text-white px-6 py-3 rounded shadow blinking-button 
                transition bg-gradient-to-r from-[#002954] to-[#fea611] hover:opacity-90"
      >
        Price Breakup & Payment Plan
      </button>

      {/* Popup Form Component */}
      <PopupForm show={showPopup} onClose={closePopup} />
    </section>
  );
};

export default PricingSection;
