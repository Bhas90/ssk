import React from "react";
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
  return (
    <section id="amenities" className="py-12 px-6 text-gray-900">
      
      {/* Title + Caption */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3">
          Exclusive Lifestyle <span className="text-[#fea611]">Amenities</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Thoughtfully designed spaces to elevate your everyday lifestyle.
        </p>
      </div>

      {/* Amenities Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center text-center gap-3 
              bg-white rounded-xl p-4 
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
    </section>
  );
};

export default AmenitiesSection;
