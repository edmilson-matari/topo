// components/MapCategories.jsx
import { useState } from "react";
import ServiceDetailAside from "./ServiceDetailAside";

const services = [
  {
    title: "LEVANTAMENTO TOPOGRÁFICO",
    subtitle: "Precisão para engenharia e construção",
    description:
      "Levantamentos de campo com alta precisão para projetos de engenharia, construção civil e planejamento territorial.",
    image:
      "https://elojr.com.br/wp-content/uploads/2020/10/Levantamento-topografico.jpg",
    images: [
      "https://px-web-images3.pixpa.com/...",
      "https://drone-aero-exemplo-2.jpg",
      "https://drone-aero-exemplo-3.jpg",
    ],
    link: "/services/levantamento-topografico",
  },
  {
    title: "LEVANTAMENTO TOPOGEODÉSICO",
    subtitle: "Posicionamento geográfico avançado",
    description:
      "Serviços especializados de posicionamento geográfico utilizando equipamentos de alta precisão e métodos geodésicos.",
    image:
      "https://www.levtop.com.br/imagens/informacoes/levantamento-topografico-georreferenciado-03.jpg",
    link: "/services/topogeodesia",
  },
  {
    title: "AEROFOTOGRAMETRIA COM DRONE",
    subtitle: "Imagens aéreas e modelos 3D",
    description:
      "Captura aérea de imagens de alta resolução e processamento de ortofotos, nuvens de pontos e modelos tridimensionais.",
    image:
      "https://px-web-images3.pixpa.com/tIPvUfQVyQl1DHcEETz7BYv7gzefD-8XUc4Na9UOaLY/rs:fit:640:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNzIzMDI5NDU5LWRyb25lLXBob3RvZ3JhcGh5LmpwZw==",
    link: "/services/aerofotogrametria",
  },
  {
    title: "PROCESSAMENTO DE DADOS EM SIG",
    subtitle: "Análise e tratamento geoespacial",
    description:
      "Análise, processamento e tratamento de dados em Sistemas de Informação Geográfica para apoio à tomada de decisão.",
    image:
      "https://s2.static.brasilescola.uol.com.br/be/2023/11/ilustracao-dos-dados-de-um-sistema-de-informacoes-geograficas.jpg",
    link: "/services/sig",
  },
  {
    title: "PRODUÇÃO DE MAPAS TEMÁTICOS",
    subtitle: "Visualização e análise territorial",
    description:
      "Criação de mapas temáticos para análise de uso do solo, declividade, hidrografia, infraestrutura e planejamento.",
    image:
      "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2021/06/Mapa.jpg?quality=70&strip=info&w=1024&crop=1",
    link: "/services/mapas-tematicos",
  },
  {
    title: "APOIO A PROJETOS",
    subtitle: "Suporte técnico especializado",
    description:
      "Apoio técnico para obras, mineração, exploração e planejamento territorial em Angola, com foco em precisão e eficiência.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    link: "/services/apoio-projetos",
  },
];

export default function ServicesCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden shadow-lg bg-white cursor-pointer max-w-[440px] max-h-[320px] w-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Imagem com zoom */}
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out
                    ${hoveredIndex === index ? "scale-110" : "scale-100"}`}
                />

                {/* Overlay escuro sutil no hover */}
                <div
                  className={`absolute inset-0 bg-black/30 transition-opacity duration-500
                  ${hoveredIndex === index ? "opacity-40" : "opacity-0"}`}
                />
              </div>

              {/* Conteúdo do texto */}
              <div className="absolute inset-0 flex flex-col p-6 text-white z-10">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight drop-shadow-lg">
                  {category.title}
                </h3>
                <p className="text-lg md:text-xl mt-2 opacity-90">
                  {category.subtitle}
                </p>

                {/* Botão que sobe de baixo */}
                <div
                  onClick={() => {
                    setSelectedService(category);
                    setIsAsideOpen(true);
                  }}
                  className={`mt-6 transform transition-all duration-500 ease-out
                    ${
                      hoveredIndex === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                >
                  <span
                    className="inline-block text-white bg-transparent border border-white font-semibold uppercase tracking-wider 
                      px-8 py-4 shadow-lg hover:bg-white hover:text-black hover:border-color-white transition-bg duration-300"
                  >
                    Solicitar Serviço
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Aside */}
      <ServiceDetailAside
        service={selectedService}
        isOpen={isAsideOpen}
        onClose={() => setIsAsideOpen(false)}
      />
    </section>
  );
}
