import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "./assets/sujay-sierra-aerial-view.webp";
import img2 from "./assets/sujay-sierra-basket-bll.webp";
import img3 from "./assets/sujay-sierra-car-parkingl.webp";
import img4 from "./assets/sujay-sierra-car-parking.webp";
import img5 from "./assets/sujay-sierra-clubhouse-1.webp";
import img7 from "./assets/sujay-sierra-day-kidaplya-area.webp";
import img8 from "./assets/sujay-sierra-day-walking-area.webp";
import img9 from "./assets/sujay-sierra-entrance.webp";
import img10 from "./assets/sujay-sierra-fron-view.webp";
import img12 from "./assets/sujay-sierra-gymnastics.webp";
import img13 from "./assets/sujay-sierra-kidaplya-area-night.webp";
import img14 from "./assets/sujay-sierra-meditation-hall.webp";
import img15 from "./assets/sujay-sierra-night-walking-area.webp";
import img16 from "./assets/sujay-sierra-outdoor-games.webp";
import img17 from "./assets/sujay-sierra-party-lawn.webp";


const amenitiesData = [
  { img: img1, title: "Aerial View" },
  { img: img2, title: "Half Basketball Court" },
  { img: img3, title: "Parking Area" },
  { img: img4, title: "Parking Area Night View" },
  { img: img5, title: "Clubhouse" },
  { img: img7, title: "Kids Play Area" },
  { img: img8, title: "Outdoor Seating" },
  { img: img9, title: "Entrance" },
  { img: img10, title: "Front Elevation" },
  { img: img12, title: "GYM" },
  { img: img13, title: "Kids Play Area Night View" },
  { img: img14, title: "Yoga Deck" },
  { img: img15, title: "Party Lawn" },
  { img: img16, title: "Outdoor Games" },
  { img: img17, title: "Walking Area" },
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
    <section id="amenities-gallery" className="px-[8%] py-12 scroll-mt-10">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-3">
  Thoughtful Spaces, <span className="text-[#fea611]">Designed for You</span>
</h2>

<p className="text-gray-600 max-w-xl mx-auto">
  Explore a collection of modern lifestyle features crafted to enhance comfort, convenience, and everyday living.
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
