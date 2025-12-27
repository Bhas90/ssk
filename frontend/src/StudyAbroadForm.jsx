import React from "react";
import logo1 from "./assets/sujay-sierra-aerial-view.webp";
import { MapPin } from "lucide-react";

const StudyAbroadForm = () => {
  return (
    <div className="w-full relative"> 
      {/* FIX → Added top padding to avoid navbar overlap */}

      {/* MOBILE VIEW IMAGE */}
      <div
        className="md:hidden w-full h-[330px] bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${logo1})` }}
      ></div>

      {/* MOBILE VIEW CONTENT */}
      <div className="relative md:hidden w-full max-w-5xl mx-auto flex flex-col items-center justify-between space-y-4 z-10">
        <div className="m-0 p-10 text-white max-w-md text-start border bg-black bg-opacity-80 ">
          <h1 className="text-2xl font-bold leading-snug">
            Sierra by Sujay Infra <br />
            <span className="inline-flex text-left text-sm text-white rounded">
              <MapPin className="w-4 h-4 mr-2" />
              KVR Rainbow colony, Bachupally
            </span>
            <hr className="my-1" />
          </h1>

          <ul className="mt-2 space-y-1 text-md">
            {[
              "Grand Entrance Lobby",
              "Facing: East & West",
              "Type: 2 & 3 BHK",
              "Possession: Ready to Move in",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-xl mr-2" style={{ color: "#ffffff" }}>
                  ✔
                </span>
                {item}
              </li>
            ))}
          </ul>

          <hr className="my-4" />

          <div className="mt-4 flex justify-start">
            <div className="text-green-600 px-4 py-2 shadow-sm text-sm font-semibold">
              <a
                href="tel:+917207952288"
                className="blinking-button text-white px-4 py-2 rounded-full flex items-center gap-3 shadow-md transition-all duration-300"
                style={{ backgroundColor: "#d69003ff" }}
              >
                Starting Price: ₹85 Lacs*(All Incl)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div
        className="hidden md:flex w-full h-[550px] bg-cover bg-center bg-no-repeat relative  pt-8 md:pt-6"
        style={{
          backgroundImage: `url(${logo1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* LEFT FIXED CONTENT AREA */}
        <div
          className="
            relative z-10 
            bg-black/80 
            text-white 
            p-12 
            w-[38%]
            h-[526px]
            flex 
            flex-col 
            justify-center 
            items-start 
          "
        >
          <h1 className="text-3xl font-extrabold leading-tight">
            Sierra by Sujay Infra
          </h1>

          <span
            className="
              mt-3 
              inline-flex 
              items-center 
              text-sm 
              text-white 
              px-3 
              py-1 
              rounded 
              bg-white/10
            "
          >
            <MapPin className="w-4 h-4 mr-2" />
            KVR Rainbow colony, Bachupally
          </span>

          <hr className="my-2 border-gray-600 w-full" />

          <ul className="mt-2 space-y-3 text-lg">
            {[
              "Grand Entrance Lobby",
              "Facing: East & West",
              "2 & 3 BHK Triplex Villas",
              "Possession: Ready to Move in",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-2xl mr-2 text-[#fea611]">✔</span>
                {item}
              </li>
            ))}
          </ul>

          <hr className="my-2 border-gray-600 w-full" />

          <a
            href="tel:+917207952288"
            className="
              blinking-button 
              text-white 
              px-10 py-2 
              rounded-full 
              flex items-center 
              gap-3 
              shadow-lg 
              transition-all 
              duration-300 
              bg-gradient-to-r 
              from-[#d69003ff] 
              to-[#d69003ff] 
              hover:opacity-90 
              text-sm 
              font-semibold
            "
          >
            Starting Price: ₹78 Lacs* (All Incl)
          </a>

          <p className="mt-4 text-lg">RERA NO: P02200005325</p>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadForm;
