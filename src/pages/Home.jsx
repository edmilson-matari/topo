import MapSlider from "../components/MapSlider";
import MapCategories from "../components/MapCategoires";
import MapCard from "../components/MapCards";
import MapCTA from "../components/MapCTA";

const gradiente = "linear-gradient(135deg, #767676ff 0%, #76a8ffff 100%)";
const mapTypes = [
  {
    title: "Modelo Digital do Terreno (MDT)",
    description:
      "Representação digital da superfície do terreno sem objetos naturais ou construídos",
    image:
      "https://www.baseaerofoto.com.br/wp-content/uploads/2022/10/o-modelo-digital-de-elevacao-mde-explicado.jpg",
    gradient: gradiente,
  },
  {
    title: "Modelo Digital de Elevação (MDE)",
    description:
      "Modelo tridimensional que representa as altitudes da superfície terrestre",
    image:
      "https://adenilsongiovanini.com.br/blog/wp-content/uploads/2019/12/modelo-digital-de-eleva%C3%A7%C3%A3o-e-modelo-digital-do-terreno-780x559.jpg",
    gradient: gradiente,
  },
  {
    title: "Modelo Digital de Superfície (MDS)",
    description:
      "Inclui todas as características naturais e artificiais sobre o terreno",
    image:
      "https://aeromappingeng.com.br/wp-content/uploads/2022/06/fototopo-2-1024x575.jpeg",
    gradient: gradiente,
  },
  {
    title: "Curvas de nível",
    description:
      "Linhas que conectam pontos de mesma altitude para representar relevo",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop",
    gradient: gradiente,
  },
  {
    title: "Ortofotos",
    description: "Imagens aéreas ou de drone geometricamente corrigidas",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
    gradient: gradiente,
  },
  {
    title: "Mapas topográficos",
    description:
      "Representação detalhada do terreno com elementos naturais e artificiais",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=300&fit=crop",
    gradient: gradiente,
  },
  {
    title: "Mapas temáticos",
    description: "Representam distribuição espacial de fenômenos específicos",
    image:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&h=300&fit=crop",
    gradient: gradiente,
  },
  {
    title: "Dados vetoriais SIG",
    description:
      "Informações geográficas em formato de pontos, linhas e polígonos",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop",
    gradient: gradiente,
  },
  {
    title: "Mapas isométricos",
    description:
      "Visualização 3D com perspectiva para melhor compreensão do terreno",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    gradient: gradiente,
  },
];

export default function Home() {
  return (
    <>
      <MapSlider />
      <MapCategories />
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Tipos de Geodados Disponíveis
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {mapTypes.map((map, index) => (
              <MapCard
                key={index}
                title={map.title}
                description={map.description}
                image={map.image}
                gradient={map.gradient}
              />
            ))}
          </div>
        </div>
      </div>
      <MapCTA />
    </>
  );
}
