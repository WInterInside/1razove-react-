import React from "react"
// import  from "../components//";

import BrandDescription from "../components/brandDescription/BrandDescription";
import ProductsCard from "../components/productsCard/ProductsCard";
import WhiteHeader from "../components/header/WhiteHeader";
export default function BrandPage(props) {

  console.log(props.match.params.id);

  return (
    <div className="brand">
      <WhiteHeader />
      <BrandDescription />
      <div className="products">
        <h2 className="products__heading products__heading--h2">Унікальні товари</h2>
      <ProductsCard />
      </div>
    </div>
  )
}
