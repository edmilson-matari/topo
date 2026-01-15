// components/MapSlider.jsx
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Imagens reais de exemplo (substitua pelas suas URLs reais)
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1717343824623-06293a62a70d?q=80&w=1221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "TOPOGRAPHIC MAPS",
    description:
      "Browse our wide selection of maps covering countries and regions all over the world. Proudly display your home or places you visited.",
    buttonText: "SHOP TOPO SERIES",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "VINTAGE COLLECTION",
    description:
      "Discover beautifully aged topographic maps with authentic historical details and classic cartographic style.",
    buttonText: "EXPLORE VINTAGE",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1712832299675-de3d282b904a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "MODERN LIDAR SERIES",
    description:
      "High-precision relief maps created with the latest LiDAR technology. Perfect for adventurers and geography enthusiasts.",
    buttonText: "VIEW LIDAR MAPS",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1712828731398-ad18ac5a9748?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "COASTAL & ISLAND MAPS",
    description:
      "Detailed maps of coastlines, islands and archipelagos with stunning bathymetric and topographic representation.",
    buttonText: "DISCOVER COASTAL",
  },
];

export default function MapSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Reset animation flag after transition
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 900);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto advance (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full bg-gray-100 overflow-hidden">
      {/* Imagem de fundo com efeito parallax leve */}
      <div
        className={`absolute inset-0 animation-zoom-in`}
        style={{
          backgroundImage: `url(${currentSlide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.75)",
        }}
      />

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

      {/* Conteúdo principal */}
      <div className="relative z-20 min-h-[70vh] md:min-h-[85vh] flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl w-full text-center md:text-left">
          {/* Título com animação */}
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
            key={`title-${currentIndex}`}
          >
            {currentSlide.title}
            <span className="block h-1.5 w-20 bg-cyan-400 mt-4 mx-auto md:mx-0"></span>
          </h2>

          {/* Descrição com animação */}
          <p
            className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
            key={`desc-${currentIndex}`}
          >
            {currentSlide.description}
          </p>

          {/* Botão */}
          <a
            href="#"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-wider px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
            key={`btn-${currentIndex}`}
          >
            {currentSlide.buttonText}
          </a>
        </div>
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicadores (dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-cyan-400 w-10"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
