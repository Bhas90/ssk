import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
import Home from "./Home";

const AppContent = () => {
  const location = useLocation();

  // Pages where NAVBAR should be hidden
  const hideNavbarOn = ["/privacy-policy", "/terms-conditions"];
  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  // Pages where RIGHT PANEL must be completely removed
  const hideRightPanelOn = ["/privacy-policy", "/terms-conditions"];
  const shouldHideRightPanel = hideRightPanelOn.includes(location.pathname);

  return (
    <>
      {/* Show Navbar only on project pages */}
      {!shouldHideNavbar && <Navbar />}

      <div className="flex w-full min-h-screen">

        {/* LEFT column — full width on mobile, 75% on Desktop */}
        <div
          className={`overflow-auto ${
            shouldHideRightPanel ? "w-full" : "w-full md:w-[75%]"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
          </Routes>
        </div>

        {/* RIGHT column — visible ONLY on Desktop & ONLY for HOME */}
        {!shouldHideRightPanel && (
          <div className="hidden md:block w-[25%] fixed right-0 top-0 h-screen overflow-hidden bg-white shadow-xl">
            <div id="right-banner-container"></div>
          </div>
        )}

      </div>
    </>
  );
};

export default AppContent;
