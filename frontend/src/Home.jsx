import React, { useEffect, useState } from "react";
import StudyAbroadForm from "./StudyAbroadForm";
import AdvantageSection from "./AdvantageSection";
import StudyAbroad from "./StudyAbroad";
import ProjectOverview from "./ProjectOverview";
import AmenitiesSection from "./AmenitiesSection";
import Banner from "./Banner";
import ConnectivitySection from "./ConnectivitySection";
import PricingSection from "./PricingSection";
import WhatsAppButton from "./WhatsAppButton";
import PopupForm from "./PopupForm";
import AttentionGrabberButton from "./AttentionGrabberButton";
import FloorPlans from "./FloorPlans";
import AmenitiesSlider from "./AmenitiesSlider";



const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
      <StudyAbroadForm />
      <AttentionGrabberButton/>
      <div id="project-overview">
        <h2 className="section-heading"></h2>
        <ProjectOverview />
      </div>
      
      <div id="amenities">
        <h2 className="section-heading"></h2>
        <AmenitiesSection />
      </div>
      <AmenitiesSlider/>
      <div id="pricing">
        <h2 className="section-heading"></h2>
        <PricingSection />
      </div>
      
        <FloorPlans/>
      
      <div id="nri-support">
        <h2 className="section-heading"></h2>
        <AdvantageSection />
      </div>
      <div id="banner-section">
        <Banner />
      </div>
      <div id="connectivity">
        <h2 className="section-heading"></h2>
        <ConnectivitySection />
      </div>
      <div id="about">
        <h2 className="section-heading"></h2>
        <StudyAbroad />
      </div>
      <WhatsAppButton />
      <PopupForm show={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Home;
