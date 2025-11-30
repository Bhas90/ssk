import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import StudyAbroadForm from "./StudyAbroadForm";
import AdvantageSection from "./AdvantageSection";
import StudyAbroad from "./StudyAbroad";
import ProjectOverview from "./ProjectOverview";
import AmenitiesSection from "./AmenitiesSection";
import ConnectivitySection from "./ConnectivitySection";
import PricingSection from "./PricingSection";
import WhatsAppButton from "./WhatsAppButton";
import PopupForm from "./PopupForm";
import AttentionGrabberButton from "./AttentionGrabberButton";
import FloorPlans from "./FloorPlans";
import AmenitiesSlider from "./AmenitiesSlider";
import Banner from "./Banner";
import BannerForm from "./BannerForm";
import Footer from "./Footer";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Inject Banner into RIGHT fixed panel (desktop only)
  useEffect(() => {
    if (window.innerWidth >= 768) {
      const container = document.getElementById("right-banner-container");
      if (container) {
        ReactDOM.render(<Banner />, container);
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const isMobile = window.innerWidth < 768;

  return (
    <>
      <StudyAbroadForm />
      <AttentionGrabberButton />

      <div id="project-overview">
        <ProjectOverview />
      </div>

      <div id="amenities">
        <AmenitiesSection />
      </div>

      <AmenitiesSlider />

      <div id="pricing">
        <PricingSection />
      </div>

      <FloorPlans />

      <div id="nri-support">
        <AdvantageSection />
      </div>

      <div id="connectivity">
        <ConnectivitySection />
      </div>

      <div id="about">
        <StudyAbroad />
      </div>
      {/* MOBILE ONLY: BannerForm */}
      {isMobile && <BannerForm />}
      <WhatsAppButton />
      <PopupForm show={showPopup} onClose={() => setShowPopup(false)} />
        <Footer/>
    </>
  );
};

export default Home;
