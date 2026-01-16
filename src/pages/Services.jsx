import React from "react";
import MapBanner from "../components/Banner";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <>
      <MapBanner
        title={"Serviços"}
        description={
          "Conheça os serviços especializados oferecidos pela TOPO GEOCENTER"
        }
        backgroundUrl={
          "https://carlotatopografia.com.br/wp-content/uploads/2019/02/levantamento-topografico-.jpg"
        }
      />
      <ServicesCard />
    </>
  );
};

export default Services;
