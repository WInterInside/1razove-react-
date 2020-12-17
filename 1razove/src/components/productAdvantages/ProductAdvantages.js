import React from "react"

import "../productCard/ProductCard.scss";
import ProductItem from "../productItem/ProductItem";

export default function ProductAdvantages() {
  return (
    <div className="product__advantages">
      <h2 className="product__heading">Переваги системи оксигенотерапії MaxVenturi®</h2>
      <p className="product__text">Система назальної високопотокової оксигенотерапії MaxVenturi® має кілька істотних переваг перед класичними пристроями, а саме:</p>
      <ul className="product__list product__list----advantages">
        <ProductItem />
      </ul>
    </div>
  )
}
