import React from "react";
import { Link } from "react-router-dom";

export default function MapCTA() {
  return (
    <div className="relative bg-[#1D293D] p-12 md:p-16 shadow-2xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 translate-y-32 -translate-x-32"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pronto para explorar Geodados de Angola?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-8">
          Acesse nossa biblioteca completa e encontre os dados que você precisa
        </p>
        <Link to={"/biblioteca_de_geodados"}>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Acessar Biblioteca de Geodados
          </button>
        </Link>
      </div>
    </div>
  );
}
