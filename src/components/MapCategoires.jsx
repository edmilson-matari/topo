// components/MapCategories.jsx
import { useState } from "react";

const categories = [
  {
    title: "ORTOFOTO",
    subtitle: "Drone e Aérea",
    image:
      "https://www.baseaerofoto.com.br/wp-content/uploads/2022/03/o-que-e-uma-ortofotografia.jpg",
    link: "/collections/best-sellers",
  },
  {
    title: "MDT",
    subtitle: "Modelo Digital do Terreno ",
    image:
      "https://www.baseaerofoto.com.br/wp-content/uploads/2022/10/o-modelo-digital-de-elevacao-mde-explicado.jpg",
    link: "/collections/new-arrivals",
  },
  {
    title: "CURVAS DE NÍVEL",
    subtitle: "",
    image:
      "https://www.infoescola.com/wp-content/uploads/2008/02/curva-de-nivel.jpg",
    link: "/collections/geology-maps",
  },

  {
    title: "MAPA TEMÁTICO",
    subtitle: "",
    image:
      "https://www.researchgate.net/profile/Nuno-Costa-19/publication/337398699/figure/fig6/AS:958830917726213@1605614513701/Esboco-Geografico-de-Angola-Agencia-Geral-das-Colonias-Escala-1-2-500-000-Lisboa.jpg",
    link: "/collections/geology-maps",
  },
  {
    title: "SHAPEFILE/GEODATABASE",
    subtitle: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Angola_Map.jpg/960px-Angola_Map.jpg",
    link: "/collections/geology-maps",
  },
];

export default function MapCategories() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Título superior */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            CONHEÇA NOSSA BIBLIOTECA
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6"></div>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden shadow-lg bg-white cursor-pointer"
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
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight drop-shadow-lg">
                  {category.title}
                </h3>
                <p className="text-lg md:text-xl mt-2 opacity-90">
                  {category.subtitle}
                </p>

                {/* Botão que sobe de baixo */}
                <div
                  className={`mt-6 transform transition-all duration-500 ease-out
                    ${
                      hoveredIndex === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                >
                  <a
                    href={category.link}
                    className="inline-block text-white bg-transparent border border-white font-semibold uppercase tracking-wider 
                      px-8 py-4 shadow-lg hover:bg-white hover:text-black hover:border-color-white transition-bg duration-300"
                  >
                    Ver Detalhes
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
