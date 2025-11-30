import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 w-full">
      {/* LIMIT FOOTER TO 75% WIDTH FOR MAIN WEB LAYOUT */}
      <div className="mx-auto" style={{ width: "75%" }}>
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Content */}
          <p className="text-[10px] font-light mb-3">
            ©2025 | Sujay Sierra (Project RERA No.: P02200005325)
          </p>

          {/* Disclaimer */}
          <p className="text-[10px] text-gray-400 leading-relaxed mb-3">
            Disclaimer: The content on this website is for information purposes only.
            Prices are subject to change without notice & properties are subject to
            availability. Images used are for representational purposes only. This is NOT
            the official website — it belongs to an authorised sales partner. We may send
            updates to the registered mobile number/email ID.
          </p>

          {/* Links Section */}
          <div className="flex justify-center items-center space-x-3 mt-3">
            <Link
              to="/privacy-policy"
              className="text-[10px] text-white hover:underline"
            >
              Privacy Policy
            </Link>

            <span className="text-[10px] text-gray-500">|</span>

            <Link
              to="/terms-conditions"
              className="text-[10px] text-white hover:underline"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
