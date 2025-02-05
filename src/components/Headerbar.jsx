import React from "react";
import facebook from "../assets/facebook.svg";
import whatsapp from "../assets/whatsapp.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import Language from "./Language";

const Headerbar = () => {
  const icons = [
    { src: facebook, name: "Facebook", link: "https://www.facebook.com" },
    { src: whatsapp, name: "Whatsapp", link: "https://www.whatsapp.com" },
    { src: instagram, name: "Instagram", link: "https://www.instagram.com" },
    { src: linkedin, name: "LinkedIn", link: "https://www.linkedin.com" },
  ];

  return (
    <div className="flex flex-wrap items-center h-12 px-6 bg-blue-600">
      
      <div className="flex-1 text-sm italic font-bold text-yellow-400 sm:text-base">
        Safeguarding what you value most.
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-1 sm:space-x-3">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`relative group ${index === 0 ? "ml-3 sm:ml-0" : ""}`} 
          >
            <img
              src={icon.src}
              alt={icon.name}
              className="w-4 h-4 transition-transform duration-300 sm:w-6 sm:h-6 hover:scale-110"
            />
            <span className="absolute px-2 py-1 mt-2 text-xs text-white transition-opacity duration-300 -translate-x-1/2 bg-gray-800 rounded-md opacity-0 left-1/2 group-hover:opacity-100 whitespace-nowrap">
              {icon.name}
            </span>
          </div>
        ))}
      </div>

      
      <Language />
    </div>
  );
};

export default Headerbar;
