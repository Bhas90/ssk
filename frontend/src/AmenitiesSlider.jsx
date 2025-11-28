import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "./assets/gallery-1.webp";
import img2 from "./assets/gallery-2.webp";
import img3 from "./assets/gallery-3.webp";
import img4 from "./assets/gallery-4.webp";
import img5 from "./assets/gallery-5.webp";
import img6 from "./assets/gallery-6.webp";
import img7 from "./assets/gallery-7.webp";
import img8 from "./assets/gallery-8.webp";
import img9 from "./assets/gallery-9.webp";
import img10 from "./assets/gallery-10.webp";
import img11 from "./assets/gallery-11.webp";
import img12 from "./assets/gallery-12.webp";
import img13 from "./assets/gallery-13.webp";
import img14 from "./assets/gallery-14.webp";
import img15 from "./assets/gallery-15.webp";


const amenitiesData = [
  { img: img1, title: "Welcome Lounge" },
  { img: img2, title: "Indoor Games" },
  { img: img3, title: "Indoor Games" },
  { img: img4, title: "Multi-Purpose Hall" },
  { img: img5, title: "Clubhouse" },
  { img: img6, title: "Night View" },
  { img: img7, title: "Walking Path" },
  { img: img8, title: "Outdoor Seating" },
  { img: img9, title: "Mini Theatre" },
  { img: img10, title: "Creche" },
  { img: img11, title: "Day View" },
  { img: img12, title: "Coffee Shop" },
  { img: img13, title: "Yoga Deck" },
  { img: img14, title: "Swimming Pool" },
  { img: img15, title: "Yoga/Meditation" },
];

const AmenitiesSlider = () => {
  const sliderRef = useRef(null);

  const scrollByCard = (direction) => {
    if (!sliderRef.current) return;

    const cardWidth =
      sliderRef.current.firstChild?.getBoundingClientRect().width || 120;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="amenities-gallery" className="px-[8%] py-16 scroll-mt-10">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3">
          Experience the Luxury in <span className="text-[#fea611]">Pictures</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover the spaces and experiences that truly elevated lifestyle.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end mb-4 gap-2 pr-[5%]">
        <button
          onClick={() => scrollByCard("left")}
          className="p-2 border rounded-full hover:bg-gray-200 transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => scrollByCard("right")}
          className="p-2 border rounded-full hover:bg-gray-200 transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar px-[5%]"
        >
          {amenitiesData.map((item, index) => (
            <div
              key={index}
              className="relative min-w-[260px] max-w-[260px] rounded-xl overflow-hidden shadow-md border border-yellow-400 cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <p className="text-center py-3 text-white bg-black/40 absolute bottom-0 w-full font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSlider;
