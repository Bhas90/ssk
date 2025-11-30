import React from "react";
import {
  MapPin,
  Ruler,
  Home,
  Users,
  Layers,
  Building2,
} from "lucide-react";

const projectHighlights = [
  {
    icon: <MapPin className="w-8 h-8 text-[#fea611]" />,
    title: "Location",
    desc: "KVR Rainbow colony, Bachupally",
  },
  {
    icon: <Home className="w-8 h-8 text-[#fea611]" />,
    title: "Size Range",
    desc: "1265 - 1790 Sq.Ft.",
  },
  {
    icon: <Ruler className="w-8 h-8 text-[#fea611]" />,
    title: "Total Area",
    desc: "2.35 Acres",
  },
  {
    icon: <Users className="w-8 h-8 text-[#fea611]" />,
    title: "No. of Units",
    desc: "224",
  },
  {
    icon: <Layers className="w-8 h-8 text-[#fea611]" />,
    title: "Clubhouse",
    desc: "12,000 Sq.Ft | G+5 Floors",
  },
  {
    icon: <Building2 className="w-8 h-8 text-[#fea611]" />,
    title: "No. of Floors",
    desc: "G+8 Floors",
  },
];

const ProjectOverview = () => {
  return (
    <section
      id="project-overview"
      className="w-full bg-white py-8 px-4 md:px-10 lg:px-16 shadow-md"
    >
      <div className="max-w-6xl mx-auto">
        <hr className="my-2 border-gray-300 w-full" />

        {/* ================================
              ONE SINGLE ROW — CENTERED
          ================================ */}
        <div
          className="
            flex 
            justify-center 
            items-center 
            gap-10 
            overflow-x-auto 
            py-10
            no-scrollbar
          "
        >
          {projectHighlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center min-w-[140px]"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* hide scrollbar style */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectOverview;
