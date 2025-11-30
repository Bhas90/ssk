// React component with Master Plan (single image) and Unit Plans (manual slider)
import React, { useState, useRef } from "react";

// MASTER PLAN
import MasterPlanImg from "./assets/sujay-sierra-master.webp";

// UNIT PLAN IMAGES
import villa1 from "./assets/1265.webp";
import villa2 from "./assets/1330.webp";
import villa3 from "./assets/1610.webp";
import villa4 from "./assets/1715.webp";
import villa5 from "./assets/1780.webp";
import villa6 from "./assets/1790.webp";

// unit plan array
const unitPlanImages = [villa1, villa2, villa3, villa4, villa5, villa6];

// Lightbox component
const Lightbox = ({ images, index, onClose, onNext, onPrev }) => (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]">
    <button className="absolute top-4 right-4 text-white text-3xl" onClick={onClose}>×</button>
    <button className="absolute left-4 text-white text-4xl" onClick={onPrev}>‹</button>

    <img
      src={images[index]}
      alt="view"
      className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
    />

    <button className="absolute right-4 text-white text-4xl" onClick={onNext}>›</button>
  </div>
);

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState("Master Plan");

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const unitSliderRef = useRef(null);

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const scrollByImage = (ref, direction) => {
    if (!ref.current) return;
    const imgWidth = ref.current.firstChild?.clientWidth || 300;
    ref.current.scrollBy({
      left: direction === "left" ? -imgWidth : imgWidth,
      behavior: "smooth",
    });
  };

  const tabs = ["Master Plan", "Floor Plans"];

  return (
    <section className="scroll-mt-10 py-12 px-[5%] bg-white" id="master">

      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-3 text-gray-900">
          Designed to Blend With the <span style={{ color: "#fea611" }}>Natural Canvas</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Sujay Sierra’s beautifully planned blocks, offering stunning vistas that enrich your daily living experience.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-medium px-4 py-2 border-b-2 ${
              activeTab === tab
                ? "text-[#4f1021] border-[#4f1021]"
                : "text-gray-600 border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* MASTER PLAN */}
{activeTab === "Master Plan" && (
  <div className="flex flex-col items-center">
    <img
      src={MasterPlanImg}
      alt="Master Plan"
      className="
        w-[95%]           /* Mobile: almost full width */
        sm:w-[80%]        /* Tablet: 80% width */
        md:max-w-3xl      /* Desktop: same limit as before */
        rounded-lg 
        shadow 
        cursor-pointer 
        transition 
        duration-300 
        hover:scale-[1.02]
      "
      onClick={() => openLightbox([MasterPlanImg])}
    />
  </div>
)}


      {/* UNIT PLANS */}
{activeTab === "Floor Plans" && (
  <div className="relative mt-10">

    {/* Left arrow */}
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 z-20 rounded-full"
      onClick={() => scrollByImage(unitSliderRef, "left")}
    >
      ‹
    </button>

    {/* SLIDER */}
    <div
      ref={unitSliderRef}
      className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth overflow-hidden"
    >
      {unitPlanImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`unit-${idx}`}
          className="
            w-[90%]        /* Mobile: Almost full width */
            sm:w-1/2       /* Tablet: 2 images */
            md:w-1/3       /* Desktop: 3 images */
            rounded-lg 
            shadow 
            cursor-pointer 
            flex-shrink-0
          "
          onClick={() => openLightbox(unitPlanImages, idx)}
        />
      ))}
    </div>

    {/* Right arrow */}
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 z-20 rounded-full"
      onClick={() => scrollByImage(unitSliderRef, "right")}
    >
      ›
    </button>
  </div>
)}

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setLightboxIndex((i) => (i + 1) % lightboxImages.length)
          }
          onPrev={() =>
            setLightboxIndex((i) => (i - 1 + lightboxImages.length) % lightboxImages.length)
          }
        />
      )}
    </section>
  );
};

export default FloorPlans;
