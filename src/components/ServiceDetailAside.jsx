import { useState } from "react";
import { X } from "lucide-react";

export default function ServiceDetailAside({ product, isOpen, onClose }) {
  if (!product) return null;

  const [selectedType, setSelectedType] = useState("Papel Matte (Sem Moldura)");
  const [selectedSize, setSelectedSize] = useState("45x60 cm");
  const [quantity, setQuantity] = useState(1);

  const basePriceStr = product.price.replace(/[^0-9,.]/g, "").replace(",", ".");
  const basePrice = parseFloat(basePriceStr) || 0;

  return (
    <>
      {/* Backdrop (overlay escuro quando aberto) */}
      <div
        className={`
          fixed inset-0 bg-black/20 z-50 transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      />

      {/* Aside com animação de slide */}
      <div
        className={`
          fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl overflow-hidden
          transform transition-all duration-400 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="h-full overflow-y-auto overscroll-contain">
          {/* Botão fechar */}
          <div className="flex justify-end mr-5 mt-5">
            <button
              onClick={onClose}
              className="text-blue hover:text-black text-4xl font-light drop-shadow-lg transition-transform hover:scale-110"
            >
              <span>
                <X />
              </span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Imagem com overlay GRADIENTE corrigido */}
            <div className="relative overflow-hidden border border-gray-200 shadow-md aspect-[4/3] bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay gradiente – agora com !important se necessário em alguns casos */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent z-10 pointer-events-none" />

              {/* Opcional: texto sobre a imagem */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <h3 className="text-2xl font-semibold drop-shadow-lg line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-base mt-1 drop-shadow">{product.subtitle}</p>
              </div>
            </div>

            {/* Preço */}
            <div className="text-4xl font-bold text-[#17233a]">
              {basePrice.toLocaleString("pt-AO", {
                style: "currency",
                currency: "AOA",
                minimumFractionDigits: 3,
              })}
            </div>

            {/* Acabamento */}
            {/*<div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Acabamento
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Papel Matte (Sem Moldura)",
                  "Moldura Preta",
                  "Moldura Branca",
                  "Canvas",
                ].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                      selectedType === type
                        ? "bg-[#17233a] text-white border-[#17233a] shadow-sm"
                        : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>*/}

            {/* Tamanho */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tamanho
              </label>
              <div className="flex flex-wrap gap-2">
                {["45×60 cm", "60×90 cm", "90×120 cm"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2 text-sm rounded-full border transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-[#17233a] text-white border-[#17233a] shadow-sm"
                        : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Botão */}
            <button className="w-full py-4 px-6 bg-[#17233a] text-white font-semibold tracking-wide hover:bg-gray-800 transition-colors text-lg shadow-md">
              ADICIONAR AO CARRINHO
            </button>

            {/* Detalhes */}
            <div className="text-sm text-gray-700 space-y-3 pt-4 border-t border-gray-200">
              <h1>Another</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
