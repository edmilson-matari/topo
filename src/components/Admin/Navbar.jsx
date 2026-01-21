// components/AdminNavbar.jsx
import { useState } from "react";
import { Bell, MessageSquare, Search, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Mapeamento de rotas → títulos (ajusta conforme as tuas rotas reais)
  const pageTitles = {
    "/admin": "Home",
    "/admin/clientes": "Clientes",
    "/admin/fornecedores": "Fornecedores",
    "/admi/paginas": "Páginas",
    "/admin/settings": "Definições",
    "/admin/ajuda": "Ajuda",
    // adiciona mais rotas aqui se necessário
  };

  const currentPageTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-30 w-full lg:pl-64">
      <div className="px-4 sm:px-6 lg:px-8 w-full max-w-none">
        <div className="relative flex items-center justify-between h-16">
          {/* Esquerda - Apenas em desktop: Foto + Nome + Cargo + Data */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-indigo-100 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
                alt="Perfil"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-lg font-semibold text-gray-900">
                Margaret Fletcher
              </h1>
              <p className="text-xs text-gray-500">Project Manager</p>
            </div>

            <div className="hidden md:block ml-6">
              <span className="text-sm text-gray-500">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Centro - Mobile: Título da página atual */}
          <div className="sm:hidden absolute left-1/2 -translate-x-1/2 text-base font-medium text-gray-900">
            {currentPageTitle}
          </div>

          {/* Direita: Ícones desktop + Hamburger sempre à direita */}
          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            {/* Busca + ícones - só desktop */}
            <div className="hidden sm:flex items-center gap-6">
              <div className="relative w-64 lg:w-72 xl:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  placeholder="Search maps, users..."
                  className="
                    block w-full pl-10 pr-4 py-2
                    border border-gray-200 rounded-lg
                    text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500
                    bg-gray-50 transition
                  "
                />
              </div>

              <button
                className="p-2 text-gray-500 hover:text-indigo-600 rounded-full hover:bg-gray-100 transition"
                aria-label="Notifications"
              >
                <Bell className="h-6 w-6" />
              </button>
            </div>

            {/* Hamburger - sempre à direita, visível só em mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu dropdown mobile */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-200 bg-white w-full">
          <div className="px-4 py-5 space-y-5">
            {/* Perfil completo no dropdown mobile */}
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-indigo-100">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
                  alt="Perfil"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-medium text-gray-900">Margaret Fletcher</h2>
                <p className="text-sm text-gray-500">Project Manager</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Busca no mobile */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Ícones rápidos no mobile */}
            <div className="flex justify-around pt-3">
              <button className="flex flex-col items-center text-gray-600 hover:text-indigo-600">
                <Bell className="h-7 w-7" />
                <span className="text-xs mt-1.5">Notificações</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
