import React from "react"

import Slider  from "../components/slider/Slider";
import Product__card from "../components/productCard/ProductCard";
import WhiteHeader from "../components/header/WhiteHeader";
export default function ProductPage() {
  return (
    <div className="product">
      <WhiteHeader />
      <div className="container">
        <Product__card />
      </div>
      <Slider />
    </div>
  )
}
