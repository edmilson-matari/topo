import { useEffect } from "react";
import { X } from "lucide-react";

export default function ProductDetailAside({ product, isOpen, onClose }) {
  // Bloqueia/restaura scroll do body
  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/40 z-40 transition-opacity duration-500 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      />

      {/* Aside */}
      <aside
        className={`
          fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-white shadow-2xl
          transition-all duration-500 ease-in-out transform
          ${
            isOpen
              ? "translate-x-0 opacity-100 pointer-events-auto"
              : "translate-x-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="h-full overflow-y-auto overscroll-contain relative">
          {/* Botão fechar */}
          <div className="absolute top-5 right-5 z-20">
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-white/90 hover:bg-gray-100 transition-colors shadow-md"
              aria-label="Fechar"
            >
              <X size={28} className="text-gray-800" />
            </button>
          </div>

          <div className="px-6 pt-20 pb-10 space-y-8">
            {/* Imagem com overlay gradiente */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-100">
              <img
                src={product?.image || product?.previewImage}
                alt={product?.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-8 left-6 right-6 z-10 text-white">
                <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
                  {product?.title}
                </h2>
                <p className="text-xl mt-3 drop-shadow-md opacity-95">
                  {product?.subtitle}
                </p>
              </div>
            </div>

            {/* Tipo do produto */}
            <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider uppercase text-white bg-[#17233a] rounded-full">
              {product?.type || "Produto"}
            </span>

            {/* Descrição completa */}
            <div className="prose prose-lg text-gray-700 max-w-none leading-relaxed">
              <p>{product?.description}</p>
            </div>

            {/* Vantagens / Destaques (adaptado para cursos/manuais) */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                O que vais aprender / receber
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#17233a] text-2xl font-bold">•</span>
                  Conteúdo prático e atualizado
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#17233a] text-2xl font-bold">•</span>
                  Exemplos reais e exercícios
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#17233a] text-2xl font-bold">•</span>
                  Acesso vitalício ou material para download
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#17233a] text-2xl font-bold">•</span>
                  Suporte e dúvidas respondidas
                </li>
              </ul>
            </div>

            {/* Botão de ação */}
            <button className="w-full py-5 px-8 bg-[#17233a] text-white font-semibold text-lg rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] duration-300">
              COMPRAR / INSCREVER-SE AGORA
            </button>

            <p className="text-center text-gray-600 text-sm pt-4">
              Pagamento seguro • Acesso imediato após confirmação
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
