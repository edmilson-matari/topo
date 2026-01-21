// components/RecentClients.jsx
import { useState } from "react";
import { Eye, Circle } from "lucide-react";

const RecentClients = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  // Dados de exemplo – substitua por dados reais da API
  const clients = [
    {
      id: "C001",
      status: "In service",
      name: "Leslie Alexander",
      registrationDate: "15/03/2025",
      firstOrderDate: "23/08/2025 21:19",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      email: "leslie@example.com",
      phone: "+244 923 456 789",
      totalMaps: 8,
    },
    {
      id: "C002",
      status: "Pending",
      name: "Ronald Richards",
      registrationDate: "10/05/2025",
      firstOrderDate: "25/08/2025 11:15",
      avatar: null,
      email: "ronald@example.com",
      phone: null,
      totalMaps: 3,
    },
    {
      id: "C003",
      status: "Pending",
      name: "Cameron Williamson",
      registrationDate: "02/01/2025",
      firstOrderDate: "26/08/2025 11:54",
      avatar: null,
      email: "cameron@example.com",
      phone: "+244 912 345 678",
      totalMaps: 5,
    },
    // Adicione mais conforme necessário
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "In service":
        return "text-green-500";
      case "Pending":
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
          Clientes Recentes
        </h2>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <div>
            <span className="font-semibold text-indigo-600">5</span> novos esta
            semana
          </div>
          <div>
            <span className="font-semibold text-indigo-600">12</span> novos este
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
                Cliente ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nome do Cliente
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Data de Inscrição
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Primeiro Pedido
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {client.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Circle
                      className={`h-4 w-4 fill-current ${getStatusColor(client.status)}`}
                    />
                    <span className="text-sm text-gray-700">
                      {client.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      {client.avatar ? (
                        <img
                          src={client.avatar}
                          alt={client.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-gray-500 text-xs font-bold">
                          {client.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {client.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {client.registrationDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {client.firstOrderDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    onClick={() => setSelectedClient(client)}
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

      {/* Modal de detalhes */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Detalhes do Cliente
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden bg-gray-200">
                  {selectedClient.avatar ? (
                    <img
                      src={selectedClient.avatar}
                      alt={selectedClient.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-gray-600 font-bold text-xl">
                      {selectedClient.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {selectedClient.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    ID: {selectedClient.id}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Data de Inscrição:</span>
                  <span className="font-medium">
                    {selectedClient.registrationDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Primeiro Pedido de Mapa:
                  </span>
                  <span className="font-medium">
                    {selectedClient.firstOrderDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium break-all">
                    {selectedClient.email}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Contacto:</span>
                  <span className="font-medium">
                    {selectedClient.phone || "Não informado"}
                  </span>
                </div>
                <div className="pt-4 border-t border-gray-200 flex justify-between">
                  <span className="text-gray-600">
                    Total de Mapas Comprados:
                  </span>
                  <span className="font-bold text-indigo-600">
                    {selectedClient.totalMaps}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setSelectedClient(null)}
                className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Fechar
              </button>
              <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Contactar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentClients;
