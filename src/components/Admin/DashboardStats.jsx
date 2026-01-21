// components/DashboardStats.jsx
import { Map, UserStar, Users, ShoppingCart, DollarSign } from "lucide-react";

const DashboardStats = () => {
  // Valores placeholders - substitui por dados reais (ex: useQuery, props, etc.)
  const stats = [
    {
      title: "Total de Mapas / Geodados",
      value: "1.248",
      icon: Map,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      trend: "+12% este mês",
    },
    {
      title: "Total de Fornecedores",
      value: "87",
      icon: UserStar,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      trend: "+5 novos",
    },
    {
      title: "Total de Clientes",
      value: "3.420",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      trend: "+18% este ano",
    },
    {
      title: "Total de Vendas",
      value: "R$ 284.500",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      trend: "+22% este mês",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="
            bg-white border border-gray-200 rounded-xl p-6 
            shadow-sm hover:shadow-md transition-shadow duration-200
            flex flex-col gap-4
          "
        >
          {/* Ícone + Título */}
          <div className="flex items-center justify-between">
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <span className="text-xs font-medium text-gray-500">
              {stat.trend}
            </span>
          </div>

          {/* Valor principal */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
