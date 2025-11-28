import React from "react";
import logo1 from "./assets/banner_1.webp";
import { MapPin } from "lucide-react";

const StudyAbroadForm = () => {
  return (
    <div className="w-full relative">
      {/* MOBILE VIEW IMAGE */}
      <div className="md:hidden w-full h-[300px] bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${logo1})` }}></div>

      {/* MOBILE VIEW CONTENT */}
      <div className="relative md:hidden w-full max-w-6xl mx-auto px-2 flex flex-col items-center justify-between space-y-6 z-10">
        <div className="p-4 text-white max-w-md text-start border bg-black bg-opacity-80 rounded-xl">
          <h1 className="text-2xl font-bold leading-snug">
            Bhavya Aspire Evora <br />
            <span
              className="inline-flex text-left text-sm text-white px-3 py-1 rounded">
              <MapPin className="w-4 h-4 mr-2" />
              Vishaka, Ganpur Road, Kollur
            </span>

            <hr className="my-2" />
          </h1>

          <ul className="mt-4 space-y-2 text-md">
            {[
              "Grand Entrance Lobby",
              "Facing: East, West & North",
              "4 & 5 BHK Triplex Villas",
              "Possession : April 2029",             
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-xl mr-2" style={{ color: '#ffffff' }}>✔</span>
                {item}
              </li>
            ))}
          </ul>

          <hr className="my-4" />

          <div className="mt-4 flex justify-center">
            <div className="text-green-600 px-4 py-2 shadow-sm text-sm font-semibold">
              <a
              href="tel:+917899051883"
              className="blinking-button text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-md transition-all duration-300"
              style={{
                backgroundColor: '#d69003ff'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4f1021cc')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4f1021cc')}
            >
              Starting Price: ₹4.5 Cr*  Onwards
            </a>

            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div
  className="hidden md:flex w-full h-[650px] bg-cover bg-center bg-no-repeat relative"
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
      w-[33%]           /* Content width on desktop */
      h-[650px]      /* Full height */
      flex 
      flex-col 
      justify-center    /* Vertically centered text */
      items-start       /* Left aligned */
    "
  >
    <h1 className="text-4xl font-extrabold leading-tight">
      Bhavya Aspire Evora
    </h1>

    <span
      className="
        mt-3 
        inline-flex 
        items-center 
        text-sm 
        text-white 
        px-3 py-1 
        rounded 
        bg-white/10
      "
    >
      <MapPin className="w-4 h-4 mr-2" />
      Vishaka, Ganpur Road, Kollur
    </span>

    <hr className="my-4 border-gray-600 w-full" />

    <ul className="mt-2 space-y-3 text-lg">
      {[
        "Grand Entrance Lobby",
        "Facing: East, West & North",
        "4 & 5 BHK Triplex Villas",
        "Possession: April 2029",
      ].map((item, index) => (
        <li key={index} className="flex items-center">
          <span className="text-2xl mr-2 text-[#fea611]">✔</span>
          {item}
        </li>
      ))}
    </ul>

    <hr className="my-6 border-gray-600 w-full" />

    <a
      href="tel:+917899051883"
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
        text-lg 
        font-semibold
      "
    >
      Starting Price: ₹4.5 Cr* Onwards
    </a>
   <p className="mt-4 space-y-3 text-lg">RERA NO: P01100006350</p> 
  </div>
</div>

    </div>
  );
};

export default StudyAbroadForm;
