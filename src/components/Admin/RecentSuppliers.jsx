// components/RecentSuppliers.jsx
import { useState } from "react";
import { Eye, Circle } from "lucide-react";

const RecentSuppliers = () => {
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  // Dados de exemplo – substitua por API real
  const suppliers = [
    {
      id: "F001",
      status: "Active",
      name: "GeoMap Angola",
      registrationDate: "10/02/2025",
      firstPublishRequestDate: "18/08/2025 14:30",
      email: "geomap@angola.co.ao",
      phone: "+244 923 111 222",
      totalMapsPublished: 45,
      avatar: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400", // logo ou foto representativa
    },
    {
      id: "F002",
      status: "Pending Approval",
      name: "Cartografia Luanda",
      registrationDate: "05/06/2025",
      firstPublishRequestDate: "24/08/2025 09:15",
      email: "cartografia.luanda@gmail.com",
      phone: null,
      totalMapsPublished: 0,
      avatar: null,
    },
    {
      id: "F003",
      status: "Active",
      name: "Mapas Premium LD",
      registrationDate: "20/04/2025",
      firstPublishRequestDate: "26/08/2025 16:45",
      email: "premium@mapas.ao",
      phone: "+244 912 777 888",
      totalMapsPublished: 28,
      avatar: null,
    },
    // adicione mais conforme necessário
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-green-500";
      case "Pending Approval":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Cabeçalho com resumo */}
      <div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Fornecedores Recentes
        </h2>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <div>
            <span className="font-semibold text-indigo-600">8</span> novos esta
            semana
          </div>
          <div>
            <span className="font-semibold text-indigo-600">21</span> novos este
            mês
          </div>
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fornecedor ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nome do Fornecedor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Data de Inscrição
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pedido de Publicação de Mapa
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {supplier.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Circle
                      className={`h-4 w-4 fill-current ${getStatusColor(supplier.status)}`}
                    />
                    <span className="text-sm text-gray-700">
                      {supplier.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      {supplier.avatar ? (
                        <img
                          src={supplier.avatar}
                          alt={supplier.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-gray-500 text-xs font-bold">
                          {supplier.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {supplier.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {supplier.registrationDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {supplier.firstPublishRequestDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    onClick={() => setSelectedSupplier(supplier)}
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center gap-1 ml-auto"
                  >
                    <Eye size={16} />
                    Ver detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de detalhes do fornecedor */}
      {selectedSupplier && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Detalhes do Fornecedor
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden bg-gray-200">
                  {selectedSupplier.avatar ? (
                    <img
                      src={selectedSupplier.avatar}
                      alt={selectedSupplier.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-gray-600 font-bold text-xl">
                      {selectedSupplier.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {selectedSupplier.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    ID: {selectedSupplier.id}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Data de Inscrição:</span>
                  <span className="font-medium">
                    {selectedSupplier.registrationDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Primeiro Pedido de Publicação:
                  </span>
                  <span className="font-medium">
                    {selectedSupplier.firstPublishRequestDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium break-all">
                    {selectedSupplier.email}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Contacto:</span>
                  <span className="font-medium">
                    {selectedSupplier.phone || "Não informado"}
                  </span>
                </div>
                <div className="pt-4 border-t border-gray-200 flex justify-between">
                  <span className="text-gray-600">
                    Total de Mapas Publicados:
                  </span>
                  <span className="font-bold text-indigo-600">
                    {selectedSupplier.totalMapsPublished}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setSelectedSupplier(null)}
                className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Fechar
              </button>
              <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Contactar Fornecedor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentSuppliers;
