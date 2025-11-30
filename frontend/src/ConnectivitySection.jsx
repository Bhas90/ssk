import React, { useState } from "react";
import {
  GraduationCap,
  Hospital,
  Network,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";

const data = [
  {
    title: "Education",
    icon: <GraduationCap className="w-6 h-6 text-maroon-600" />,
    description:
      "Close to top international schools & universities",
    details: [
      "Silver Oaks International School – 3–5 mins",
      "Kennedy High The Global School – 5–10 mins",
      "Delhi Public School – 15 mins",
      "Oakridge International School – 10–12 mins",
      "JNTU Hyderabad – 8.7 km",
      "VNR Vignan Jyothi Institute – 5 mins",
    ],
  },
  {
    title: "Healthcare",
    icon: <Hospital className="w-6 h-6 text-maroon-600" />,
    description:
      "Quick access to renowned hospitals & wellness centers",
    details: [
      "Mamata Academy of Medical Sciences – 4–5 mins",
      "SLG Hospitals – 7–8 mins",
      "Usha Mullapudi Cardiac Centre – 15 mins",
      "Malla Reddy Narayana Hospital – 15 mins",
    ],
  },
  {
    title: "Business & IT Hubs",
    icon: <Network className="w-6 h-6 text-maroon-600" />,
    description:
      "Minutes away from Gachibowli, HITEC City, and Kokapet",
    details: [
      "HITEC City – 25–30 mins",
      "Gachibowli Financial District – 25–30 mins",
      "ORR Exit 5 – 10 mins",
      "Miyapur Metro Station – 10–15 mins",
      "Hafizpet Railway Station – 14 km",
      "RGIA Airport – 45–60 mins via ORR",
    ],
  },
  {
    title: "Connected Living",
    icon: <MapPin className="w-6 h-6 text-maroon-600" />,
    description:
      "Access to malls, dining, metro & cultural hubs",
    details: [
      "Pista House Bachupally – 2 mins",
      "JSR Mall – 8.3 km",
      "CMR Family Mall – 6 km",
      "Manjeera Mall – 9 km",
      "AMB Cinemas – nearby",
    ],
  },
];

const ConnectivitySection = () => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="bg-white py-20 px-2 md:px-16 lg:px-16">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-maroon-800">
          Live Close to Everything,{" "}
          <span style={{ color: "#fea611" }}>That Matters</span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          From reputed schools and premium hospitals to IT hubs and entertainment avenues, keeps you at the center of comfort, convenience, and growth.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* LEFT – Accordion */}
        <div className="space-y-2">
          {data.map((item, i) => (
            <div
              key={i}
              className="border bg-gradient-to-br from-white to-gray-50 shadow-md rounded-xl overflow-hidden"
            >
              {/* Header Row */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-4"
              >
                <div className="flex items-start gap-4">
                  {item.icon}
                  <div>
                    <h4 className="text-left text-lg font-semibold text-maroon-700">
                      {item.title}
                    </h4>
                    <p className="text-left text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>

                {open === i ? (
                  <Minus className="text-maroon-700" />
                ) : (
                  <Plus className="text-maroon-700" />
                )}
              </button>

              {/* Details */}
              <div
                className={`transition-all duration-300 px-6 ${
                  open === i ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
                }`}
              >
                <ul className="list-disc ml-4 text-gray-700 space-y-2 text-sm">
                  {item.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – Map Embed */}
        <div className="rounded-xl overflow-hidden shadow-xl w-full h-[400px]">
          <iframe
            title="Sujay Sierra Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15216.34663550681!2d78.36404239280488!3d17.55106034276134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d924d8cc083%3A0x2e2c7a96ce90494c!2sSUJAY%20SIERRA!5e0!3m2!1sen!2sin!4v1764492338597!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ConnectivitySection;
