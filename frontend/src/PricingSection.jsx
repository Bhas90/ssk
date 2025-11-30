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
    <section className="bg-white py-20 px-4 md:px-16 lg:px-24 text-center">

      <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-3 text-gray-900">
  Pricing & <span style={{ color: '#fea611' }}>Plans</span>
</h2>

<p className="text-gray-600 max-w-xl mx-auto text-center mb-8">
  Explore flexible pricing options crafted to suit your lifestyle and investment goals.
</p>
      
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-yellow-800 pb-3 text-left">
          <p className="font-semibold text-black">Type:</p>
          <p className="font-semibold text-black">Sizes:</p>
          <p className="font-semibold text-black">Base Price:</p>
        </div>

        {/* 2 BHK */}
        <div className="flex justify-between pt-4 text-left">
          <p className="text-black">2 BHK</p>
          <p className="text-black">1265-1330 SFT</p><button
            onClick={openPopup}
            className="text-white px-2.5 py-1 rounded bg-[#002954] hover:bg-[#fea611] transition"
          >
            Request Price
          </button>
        </div>

        {/* 3 BHK – PRICE ON REQUEST BUTTON */}
        <div className="flex justify-between pt-4 text-left">
          <p className="text-black">3 BHK</p>
          <p className="text-black">1610-1790 SFT</p>
          
          <button
            onClick={openPopup}
            className="text-white px-2.5 py-1 rounded bg-[#002954] hover:bg-[#fea611] transition"
          >
            Request Price
          </button>
        </div>
       </div>

      {/* Popup Form Component */}
      <PopupForm show={showPopup} onClose={closePopup} />
    </section>
  );
};

export default PricingSection;
