import React from "react";

export default function MapBanner({ backgroundUrl, title, description }) {
  return (
    <div className="relative w-full h-100 overflow-hidden bg-gray-100">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundBlendMode: "multiply",
        }}
      >
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-black opacity-54"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center px-8 md:px-16 lg:px-24">
        <div className="max-w-md bg-white p-4">
          {/* Title with decorative underline */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-800 uppercase">
              {title}
            </h1>
            {/* Decorative underline */}
            <div className="w-12 h-0.5 bg-cyan-500"></div>
          </div>

          {/* Optional subtitle or description */}
          <p className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Optional decorative corner elements */}
      <div className="absolute bottom-4 right-4 w-24 h-24 border-r-2 border-b-2 border-gray-400/30"></div>
    </div>
  );
}
