import { useState, useEffect } from "react";
import MapDetailAside from "./MapDetailAside";

const maps = [
  {
    id: 0,
    title: "Ortofoto Urbana - Luanda Centro",
    type: "Ortofoto",
    subtitle: "Luanda, Bengo",
    precision: "Precisão milimétrica (5cm)",
    date: "15/01/2024",
    supplier: "TOPO GEOCENTER",
    price: 150000,
    image:
      "https://v0-geoes-42-platform-development.vercel.app/aerial-orthophoto-urban-map.jpg",
    link: "/mapas/ortofoto-luanda-centro",
  },
  {
    id: 1,
    title: "Modelo Digital do Terreno - Belas",
    type: "MDT",
    subtitle: "Belas, Luanda",
    precision: "Precisão centimétrica (2cm)",
    date: "20/11/2023",
    supplier: "TOPO GEOCENTER",
    price: 250000,
    image:
      "https://v0-geoes-42-platform-development.vercel.app/digital-elevation-model-terrain.jpg",
    link: "/mapas/mdt-belas",
  },
  {
    id: 2,
    title: "Curvas de Nível - Malanje",
    type: "Curvas de nível",
    subtitle: "Malanje",
    precision: "Precisão centimétrica (1cm)",
    date: "10/02/2024",
    supplier: "Parceiro Certificado",
    price: 180000,
    image:
      "https://v0-geoes-42-platform-development.vercel.app/contour-lines-elevation-map.jpg",
    link: "/mapas/curvas-nivel-malanje",
  },
  {
    id: 3,
    title: "Mapa de Uso do Solo - Huambo",
    type: "Mapa Temático",
    subtitle: "Huambo",
    precision: "Precisão centimétrica (25cm)",
    date: "05/10/2023",
    supplier: "Parceiro Certificado",
    price: 120000,
    image:
      "https://v0-geoes-42-platform-development.vercel.app/land-use-map-thematic.jpg",
    link: "/mapas/uso-solo-huambo",
  },
  {
    id: 4,
    title: "Dados Vetoriais SIG - Infraestrutura",
    type: "Shapefile/Geodatabase",
    subtitle: "Luanda",
    precision: "Precisão centimétrica",
    date: "30/01/2024",
    supplier: "TOPO GEOCENTER",
    price: 20000,
    image:
      "https://v0-geoes-42-platform-development.vercel.app/gis-vector-infrastructure.jpg",
    link: "/mapas/dados-vetoriais-infra",
  },
  {
    id: 4,
    title: "Mapa de Declividade - Cabinda",
    type: "Mapa Temático",
    subtitle: "Cabinda",
    precision: "Precisão milimétrica (5°)",
    date: "12/12/2023",
    supplier: "Parceiro Certificado",
    price: 40000,
    image:
      "https://v0-geoes-42-platform-development.vercel.app/slope-declivity-map.jpg",
    link: "/mapas/declividade-cabinda",
  },
];

export default function MapsMarketplaceGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isAsideOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isAsideOpen]);

  const locations = [
    "Luanda, Bengo",
    "Belas, Luanda",
    "Malanje",
    "Huambo",
    "Luanda",
    "Cabinda",
  ];

  const types = [
    "Ortofoto",
    "MDT",
    "Curvas de nível",
    "Mapa Temático",
    "Shapefile/Geodatabase",
  ];

  const filteredMaps = maps.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation =
      !selectedLocation || product.subtitle === selectedLocation;
    const matchesType = !selectedType || product.type === selectedType;
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filtros */}
        <div className="mb-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <input
            type="text"
            placeholder="Pesquisar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full sm:w-56 px-4 py-3 border border-gray-300 focus:ring-2 bg-[#17233a] text-white focus:ring-[#17233a] outline-none"
          >
            <option value="">Todas as localizações</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full sm:w-56 px-4 py-3 border border-gray-300 focus:ring-2 bg-[#17233a] text-white focus:ring-[#17233a] outline-none"
          >
            <option value="">Todos os tipos</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredMaps.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Imagem */}
              <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Conteúdo - flex-grow para ocupar espaço */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-black uppercase bg-blue-100">
                  {product.type}
                </span>

                <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-600 mb-3">{product.subtitle}</p>

                {/* Detalhes */}
                <div className="space-y-1.5 text-sm text-gray-700 mb-4 flex-grow">
                  <p>
                    <span className="font-medium">Precisão:</span>{" "}
                    {product.precision}
                  </p>
                  <p>
                    <span className="font-medium">Data:</span> {product.date}
                  </p>
                  <p>
                    <span className="font-medium">Fornecedor:</span>{" "}
                    {product.supplier}
                  </p>
                </div>

                {/* Preço */}
                <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 mt-auto">
                  {product.price.toLocaleString("pt-AO", {
                    style: "currency",
                    currency: "AOA",
                    minimumFractionDigits: 0,
                  })}
                </p>

                {/* Botão */}
                <div
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsAsideOpen(true);
                  }}
                  className={`
                    cursor-pointer
                    transition-all duration-500 mt-auto
                    ${hoveredIndex === index ? "opacity-100 translate-y-0" : "sm:opacity-0 sm:translate-y-8"}
                    opacity-100 translate-y-0   // sempre visível em mobile (< sm)
                  `}
                >
                  <span className="block w-full py-3.5 sm:py-4 px-6 text-center text-black border border-black font-semibold tracking-wide shadow-lg hover:bg-[#17233a] hover:text-white transition-all duration-300 text-sm sm:text-base">
                    Ver detalhes & Comprar
                  </span>
                </div>
                <MapDetailAside
                  product={selectedProduct}
                  isOpen={isAsideOpen}
                  onClose={() => setIsAsideOpen(false)}
                />
              </div>
            </div>
          ))}
        </div>

        {filteredMaps.length === 0 && (
          <p className="text-center text-gray-600 mt-12 text-lg">
            Nenhum mapa encontrado com os filtros selecionados.
          </p>
        )}
      </div>
    </section>
  );
}
