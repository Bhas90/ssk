import React from "react";
import {
  MapPin,
  Home,
  Ruler,
  Users,
  House,
  Layers,
} from "lucide-react";

const projectHighlights = [
  {
    icon: <MapPin className="w-8 h-8 text-[#fea611]" />,
    title: "Location",
    desc: "Vishaka, Ganpur Rd, Kollur",
  },
  {
    icon: <Home className="w-8 h-8 text-[#fea611]" />,
    title: "Size Range",
    desc: "3752 - 5900 Sq.Ft.",
  },
  {
    icon: <Ruler className="w-8 h-8 text-[#fea611]" />,
    title: "Total Area",
    desc: "43 Acres",
  },
  {
    icon: <House className="w-8 h-8 text-[#fea611]" />,
    title: "Type",
    desc: "Triplex Villas",
  },
  {
    icon: <Users className="w-8 h-8 text-[#fea611]" />,
    title: "No. of Villas",
    desc: "324",
  },
  {
    icon: <Layers className="w-8 h-8 text-[#fea611]" />,
    title: "Clubhouse",
    desc: "41,000 Sq.Ft",
  },
];

const ProjectOverview = () => {
  return (
    <section
      id="project-overview"
      className="w-full bg-white py-10 px-4 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 border-t border-b py-8">
          {projectHighlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-4 py-3 relative"
            >
              {/* Icon */}
              <div className="mb-3">{item.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              {item.desc && (
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              )}

              {/* Divider (hidden on mobile) */}
              {index < projectHighlights.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
