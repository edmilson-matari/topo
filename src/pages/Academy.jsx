import React from "react";
import MapBanner from "../components/Banner";
import ProductsGrid from "../components/ProductsCard";

export default function Academy() {
  return (
    <>
      <MapBanner
        title={"Academia Digital"}
        description={"Recursos educacionais e técnicos sobre geoespacialidade"}
        backgroundUrl={
          "https://static.vecteezy.com/system/resources/thumbnails/071/063/341/small/antique-world-globe-with-detailed-cartography-featuring-africa-and-europe-free-photo.jpg"
        }
      />
      <ProductsGrid />
    </>
  );
}
