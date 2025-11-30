import React, { useState } from "react";
import {
  Trees,
  Flower2,
  Activity,
  Dog,
  Hop,
  Baby,
  Home,
  Dumbbell,
  Users,
  Store,
  Coffee,
  Theater,
  Bike,
  Disc,
  Flag,
  Trash2,
  ShieldCheck,
} from "lucide-react";

const amenities = [
  { icon: <Trees size={34} />, label: "Yoga Garden" },
  { icon: <Flower2 size={34} />, label: "Zen Garden" },
  { icon: <Activity size={34} />, label: "Acupressure Pathways" },
  { icon: <Dog size={34} />, label: "Dog Park" },
  { icon: <Hop size={34} />, label: "Bounce Park" },
  { icon: <Baby size={34} />, label: "Children Play" },
  { icon: <Home size={34} />, label: "Pergola" },
  { icon: <Dumbbell size={34} />, label: "Fitness Zone" },
  { icon: <Users size={34} />, label: "Party Lawn" },
  { icon: <Users size={34} />, label: "Senior Citizens Sitout" },
  { icon: <Store size={34} />, label: "Weekend Markets" },
  { icon: <Coffee size={34} />, label: "Café Pavilion" },
  { icon: <Theater size={34} />, label: "Amphitheater" },
  { icon: <Bike size={34} />, label: "Cycling Lanes" },
  { icon: <Disc size={34} />, label: "Squash Court" },
  { icon: <Flag size={34} />, label: "Mini Golf" },
  { icon: <Trash2 size={34} />, label: "Waste Management" },
  { icon: <ShieldCheck size={34} />, label: "24/7 Security" },
];

const AmenitiesSection = () => {
  const [showMore, setShowMore] = useState(false);

  // Show only first 8 items (2 rows) when collapsed
  const visibleAmenities = showMore ? amenities : amenities.slice(0, 8);

  return (
    <section id="amenities" className="py-20 px-6 text-gray-900">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-3">
        Inspired Amenities for <span className="text-[#fea611]">Every Lifestyle</span>
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto">
        A perfect blend of wellness, greenery, and recreation—crafted to enrich everyday living.
      </p>
      </div>

      {/* Amenities Grid: 4 Columns */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {visibleAmenities.map((item, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center text-center
              bg-white rounded-xl p-3 
              shadow-md 
              transition-all duration-300 
              hover:shadow-xl 
              hover:scale-105 
              cursor-pointer
            "
          >
            <div className="text-[#fea611] transition-all duration-300 hover:text-[#ffbd42]">
              {item.icon}
            </div>
            <p className="text-sm tracking-wide font-medium">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="
            px-8 py-3 
            rounded-full 
            bg-[#fea611] 
            text-white font-semibold 
            shadow-md 
            hover:bg-[#ffbd42] 
            transition-all duration-300
          "
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default AmenitiesSection;
