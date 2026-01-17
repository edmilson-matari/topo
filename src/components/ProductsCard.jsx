// components/ProductsGrid.jsx
import { useState } from "react";

const products = [
  {
    title: "Mini-curso de Topografia Básica",
    subtitle: "Introdução aos conceitos fundamentais",
    description:
      "Aprenda os princípios básicos de topografia e técnicas de levantamento de dados de forma prática e objetiva.",
    type: "Curso",
    image:
      "https://static.wixstatic.com/media/63a9a3_91a3c980e2744e58ad101fa92f60fcb1~mv2.jpg/v1/fill/w_2500,h_1666,al_c/63a9a3_91a3c980e2744e58ad101fa92f60fcb1~mv2.jpg",
    previewImage:
      "https://static.wixstatic.com/media/63a9a3_91a3c980e2744e58ad101fa92f60fcb1~mv2.jpg/v1/fill/w_2500,h_1666,al_c/63a9a3_91a3c980e2744e58ad101fa92f60fcb1~mv2.jpg", // imagem alternativa para hover
    link: "/products/mini-curso-topografia-basica",
  },
  {
    title: "Curso Completo de SIG",
    subtitle: "Domine QGIS e ArcGIS",
    description:
      "Formação completa em Sistemas de Informação Geográfica com foco nas ferramentas mais utilizadas no mercado.",
    type: "Curso",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    previewImage:
      "https://images.unsplash.com/photo-1551288049-b1f4c19ed805?w=800",
    link: "/products/curso-completo-sig",
  },
  {
    title: "Cartografia Digital Aplicada",
    subtitle: "Técnicas modernas de mapas temáticos",
    description:
      "Domine as principais ferramentas e técnicas atuais para criação e visualização profissional de cartografia digital.",
    type: "Curso",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwyqZHPd67YPnAuppYhjXA3bmfE6fEmUjNg&s",
    previewImage:
      "https://images.unsplash.com/photo-1594381898411-846e2c0e3e42?w=800",
    link: "/products/cartografia-digital-aplicada",
  },
  {
    title: "Processamento de Ortofotos com Drone",
    subtitle: "Guia prático e completo",
    description:
      "Passo a passo para captura, processamento e geração de ortofotos e modelos 3D com drones.",
    type: "Manual",
    image:
      "https://adenilsongiovanini.com.br/blog/wp-content/uploads/2019/12/processamento-imagens-drone-780x585.png",
    previewImage:
      "https://images.unsplash.com/photo-1473968518564-9d9e2b9e8f84?w=800",
    link: "/products/processamento-ortofotos-drone",
  },
  {
    title: "Normas Angolanas para Dados Geoespaciais",
    subtitle: "Padrões e documentação técnica",
    description:
      "Compilação atualizada das normas, especificações técnicas e padrões de referência em vigor em Angola.",
    type: "Artigo Técnico",
    image:
      "https://storage.googleapis.com/spatialnodefiles/projects/b3afe30c-e33c-4fe7-a684-bc5453b2b27aWhatsAppImage20230406at20.jpeg",
    previewImage:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
    link: "/products/normas-angolanas-geodados",
  },
  {
    title: "Integração de Dados SIG para Planejamento",
    subtitle: "Metodologias práticas",
    description:
      "Técnicas e fluxos de trabalho para integrar diferentes fontes de dados geoespaciais em projetos reais.",
    type: "Artigo Técnico",
    image:
      "https://static.wixstatic.com/media/89cbd0_0cf819ce47c145539d8c10a057e433c7~mv2.png/v1/fill/w_568,h_502,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/89cbd0_0cf819ce47c145539d8c10a057e433c7~mv2.png",
    previewImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff338c?w=800",
    link: "/products/integracao-dados-sig-planejamento",
  },
];

export default function ProductsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Grid de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Imagem principal + transição para preview */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Conteúdo */}
              <div className="p-6 pb-8 relative">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-black uppercase bg-blue-100">
                  {product.type}
                </span>

                <h3 className="text-2xl font-light text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-2 min-h-[3rem]">
                  {product.subtitle}
                </p>

                {/* Botão que aparece no hover */}
                <div
                  className={`absolute bottom-6 left-6 right-6 transform transition-all duration-500 ${
                    hoveredIndex === index
                      ? "translate-y-2 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <a
                    href={product.link}
                    className="block w-full py-4 px-6 text-center text-black border border-black font-semibold tracking-wide shadow-lg hover:bg-[#17233a] hover:text-white transition-all duration-300"
                  >
                    Ver detalhes & Comprar
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
