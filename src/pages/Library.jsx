import React from "react";
import MapBanner from "../components/Banner";
import MapsMarketplaceGrid from "../components/MapsMarketplaceGrid";

const Library = () => {
  return (
    <>
      <MapBanner
        title={"Biblioteca de Geodados"}
        description={"Explore, filtre e encontre os geodados que você precisa"}
        backgroundUrl={
          "https://offloadmedia.feverup.com/barcelonasecreta.com/wp-content/uploads/2024/02/08124343/biblioteca-arus-barcelona-1024x683.jpg"
        }
      />
      <MapsMarketplaceGrid />
    </>
  );
};

export default Library;
