import React from "react"

import Slider  from "../components/slider/Slider";
import Product__card from "../components/product__card/Product__card";

export default function ProductPage() {
  return (
    <div className="product">
      <div className="container">
        <Product__card />
      </div>
      <Slider />
    </div>
  )
}
