// layouts/AdminLayout.jsx
import AdminNavbar from "../../components/Admin/Navbar";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 w-full">
      {/* Sidebar fixa à esquerda */}
      <AdminSidebar />

      {/* Área principal: navbar NO TOPO + conteúdo abaixo */}
      <div className="flex-1 flex flex-col w-full">
        {/* Navbar ocupa toda a largura disponível */}
        <AdminNavbar />

        {/* Conteúdo das rotas (páginas admin) */}
        <main className="flex-1 overflow-auto bg-gray-50/50 lg:ml-64">
          <Outlet /> {/* ← aqui dentro! */}
        </main>
      </div>
    </div>
  );
}
