// components/AdminSidebar.jsx
import { useState } from "react";
import {
  Home,
  FolderKanban,
  CheckSquare,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  ChevronLast,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/admin", label: "Início", icon: Home },
    { to: "/admin/client", label: "Clientes", icon: FolderKanban },
    { to: "/admin/fornecedor", label: "Fornecedores", icon: CheckSquare },
    { to: "/admin/pages", label: "Páginas", icon: Users },
    { to: "/settings", label: "Definções", icon: Settings },
  ];

  const bottomItems = [
    { to: "/help", label: "Help & information", icon: HelpCircle },
    { to: "/logout", label: "Log out", icon: LogOut, danger: true },
  ];

  return (
    <>
      {/* Botão hamburger - só mobile, quando fechado */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 p-3 rounded-full bg-white shadow-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <ChevronLast size={24} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:w-64 lg:z-50 lg:shadow-none
          lg:fixed lg:inset-y-0 lg:left-0   /* ← aqui: fixo no desktop */
        `}
      >
        <div className="flex flex-col h-full relative">
          {/* Botão fechar - só mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden absolute top-4 right-4 z-60 p-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <X size={24} />
          </button>

          {/* Logo */}
          <div className="p-6 border-b border-gray-100 pt-16 lg:pt-6">
            <div className="flex items-center gap-3">
              <div className="w-20 h-10 bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                admin
              </div>
              <span className="text-xl font-semibold text-gray-800">
                GEOES42
              </span>
            </div>
          </div>

          {/* Navegação */}
          <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={20} />
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Bottom */}
          <div className="p-4 border-t border-gray-100 mt-auto">
            {bottomItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    item.danger
                      ? "text-red-600 hover:bg-red-50"
                      : isActive
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={20} />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </aside>

      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AdminSidebar;
