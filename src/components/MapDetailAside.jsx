import { useState, useEffect } from "react";
import { X, Loader2, Check } from "lucide-react";
import { useCart } from "./contexts/CartContext";

export default function MapDetailAside({ product, isOpen, onClose }) {
  // TODOS os hooks primeiro – sempre chamados, independentemente de product
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { addToCart } = useCart();
  // Novos estados para o botão
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [selectedType, setSelectedType] = useState("Papel Matte (Sem Moldura)");
  const [selectedSize, setSelectedSize] = useState("45x60 cm");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (index) => {
    if (isLoading || isSuccess) return; // evita cliques múltiplos

    setIsLoading(true);

    // Adiciona ao carrinho (síncrono)
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image: product.image,
      size: selectedSize,
    });

    // Simula um pequeno delay para ver o loading (remove se quiser imediato)
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);

      // Mostra o "done" por 1s e fecha
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1200);
    }, 800); // tempo do loading
  };

  // Resetar estados quando product muda (opcional mas recomendado)
  useEffect(() => {
    if (product) {
      setSelectedType("Papel Matte (Sem Moldura)");
      setSelectedSize("45x60 cm");
      setQuantity(1);
    }
  }, [product]);

  // Lógica de montagem/animação
  useEffect(() => {
    let timer;
    if (isOpen) {
      setIsMounted(true);
      timer = setTimeout(() => setIsVisible(true), 20);
    } else {
      setIsVisible(false);
      timer = setTimeout(() => setIsMounted(false), 400);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Agora sim: early return DEPOIS dos hooks
  if (!product || !isMounted) return null;

  // Parsing do preço (só executa se product existe)
  const basePriceStr = product.price;
  const basePrice = parseFloat(basePriceStr) || 0;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/20 z-50 transition-opacity duration-300 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl overflow-hidden transform transition-all duration-400 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto overscroll-contain">
          <div className="flex justify-end mr-5 mt-5">
            <button
              onClick={onClose}
              className="text-blue hover:text-black text-4xl font-light drop-shadow-lg transition-transform hover:scale-110 active:scale-95"
            >
              <X />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Imagem */}
            <div className="relative overflow-hidden border border-gray-200 shadow-md aspect-[4/3] bg-gray-100 rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <h3 className="text-2xl font-semibold drop-shadow-lg line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-base mt-1 drop-shadow">{product.subtitle}</p>
              </div>
            </div>

            {/* Preço */}
            <div className="text-4xl font-bold text-[#17233a]">{basePrice}</div>

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

            {/* Quantidade */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantidade
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100 transition-colors disabled:opacity-40"
                  disabled={quantity <= 1}
                >
                  –
                </button>
                <span className="text-xl font-semibold w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Botão adicionar (podes conectar ao CartContext aqui) */}
            <button
              onClick={() => handleAddToCart()}
              disabled={isLoading || isSuccess}
              className={`w-full py-4 px-6 font-semibold tracking-wide text-lg shadow-md rounded-lg transition-all duration-300 flex items-center justify-center gap-2
                ${
                  isSuccess
                    ? "bg-gray-500"
                    : isLoading
                      ? "bg-gray-500 cursor-wait"
                      : "bg-[#17233a] hover:bg-gray-800"
                } text-white`}
            >
              {isSuccess ? (
                <>
                  <Check size={24} /> Adicionado!
                </>
              ) : isLoading ? (
                <>
                  <Loader2 size={24} className="animate-spin" /> Adicionando...
                </>
              ) : (
                "ADICIONAR AO CARRINHO"
              )}
            </button>

            {/* Detalhes */}
            <div className="text-sm text-gray-700 space-y-3 pt-4 border-t border-gray-200">
              <p>
                <strong>Tipo:</strong> {product.type}
              </p>
              <p>
                <strong>Precisão:</strong> {product.precision}
              </p>
              <p>
                <strong>Data:</strong> {product.date}
              </p>
              <p>
                <strong>Fornecedor:</strong> {product.supplier}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
