import React, { useState } from "react";

const MapCards = ({ title, description, image, gradient }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-72 h-96 overflow-hidden cursor-pointer shadow-lg"
      style={{ background: gradient }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image that slides down on hover */}
      <div
        className={`absolute top-0 left-0 w-full h-3/5 transition-transform duration-500 ease-out ${
          isHovered ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Text content that moves to bottom on hover */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center p-6 transition-all duration-500 ease-out ${
          isHovered ? "translate-y-[30%]" : "translate-y-0"
        }`}
      >
        <h3 className="text-2xl font-bold text-white mb-3 text-center">
          {title}
        </h3>
        <p className="text-white text-center text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MapCards;
