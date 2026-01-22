import { useCart } from "./contexts/CartContext";
import { X, Plus, Minus, Trash2, ShoppingCart, Check } from "lucide-react";

export default function CartDrawer() {
  const { state, isCartOpen, setIsCartOpen, removeItem, updateQuantity } =
    useCart();
  let subtotal = 0;
  state.items.map((item) => {
    subtotal += parseFloat(item.price);
  });

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-400 ease-in-out ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer principal */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-lg bg-gradient-to-b from-[#f8faff] to-[#f0f4ff] border-l border-gray-200/80 z-50
          transition-all duration-500 ease-out transform shadow-2xl flex flex-col
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header fixo */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white/70 backdrop-blur-md flex-shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingCart
              size={28}
              className="text-[#17233a]"
              strokeWidth={1.6}
            />
            <h2 className="text-2xl font-bold text-[#17233a]">Carrinho</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Fechar carrinho"
          >
            <X size={28} className="text-gray-700 hover:text-[#17233a]" />
          </button>
        </div>

        {/* Conteúdo rolável + footer fixo no fundo */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Lista de itens (rola quando necessário) */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 py-20">
                <ShoppingCart
                  size={80}
                  strokeWidth={1.2}
                  className="mb-6 opacity-30 text-gray-400"
                />
                <p className="text-xl font-semibold text-gray-700">
                  Seu carrinho está vazio
                </p>
                <p className="text-sm mt-3 max-w-xs">
                  Explore nossa coleção de mapas geológicos, vintage e
                  temáticos!
                </p>
              </div>
            ) : (
              state.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-5 bg-white p-5 border border-gray-200 hover:shadow-md transition-all duration-300 group"
                >
                  {/* Imagem */}
                  <div className="flex-shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-cover border border-gray-100 shadow-sm"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        <ShoppingCart size={32} className="text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Detalhes */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-[#17233a] transition-colors">
                      {item.title}
                    </h3>

                    <div className="text-sm text-gray-600 mt-1 space-y-0.5">
                      {item.size && <p>Tamanho: {item.size}</p>}
                      {item.type && <p>Acabamento: {item.type}</p>}
                    </div>

                    <div className="mt-3 flex flex-col gap-2">
                      <p className="text-base sm:text-lg font-semibold text-[#17233a]">
                        {item.price.toLocaleString("pt-AO", {
                          style: "currency",
                          currency: "AOA",
                          minimumFractionDigits: 0,
                        })}
                      </p>

                      <div className="flex items-center w-fit rounded-full border border-gray-300 bg-white shadow-sm">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          className="
                                flex items-center justify-center
                                w-9 h-9 sm:w-8 sm:h-8
                                rounded-full
                                hover:bg-gray-100 active:scale-95
                                disabled:opacity-40 disabled:cursor-not-allowed
                                transition
                                text-gray-700
                            "
                        >
                          <Minus size={12} />
                        </button>

                        <span
                          className="
                                min-w-[40px]
                                text-center
                                text-sm sm:text-base
                                font-semibold
                                text-gray-800
                            "
                        >
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="
                                flex items-center justify-center
                                w-9 h-9 sm:w-8 sm:h-8
                                rounded-full
                                hover:bg-gray-100 active:scale-95
                                transition
                                text-gray-700
                            "
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-2 text-sm text-red-600 hover:text-red-800 flex items-center gap-1 transition-colors"
                    >
                      <Trash2 size={16} />
                      Remover
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer sempre fixo no fundo */}
          {state.items.length > 0 && (
            <div className="p-6 bg-white/90">
              <div className="flex justify-between items-center text-xl text-gray-900 mb-5">
                <span>Subtotal</span>
                <span>
                  {subtotal.toLocaleString("pt-AO", {
                    style: "currency",
                    currency: "AOA",
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="py-4 px-6 border border-[#17233a] text-[#17233a] font-medium hover:bg-[#17233a]/5 transition-colors"
                >
                  Ver Carrinho
                </button>
                <button className="py-4 px-6 sm:px-0 bg-[#17233a] text-white font-semibold hover:bg-[#0f172a] transition-colors shadow-md active:scale-98 flex items-center justify-center gap-2">
                  Finalizar Compra
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
