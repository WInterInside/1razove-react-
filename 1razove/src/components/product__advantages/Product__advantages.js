import React from "react"

import "../product__card/Product__card.scss";
import Product__item from "../product__item/Product__item";

export default function Product__advantages() {
  return (
    <div className="product__advantages">
      <h2 className="product__heading">Переваги системи оксигенотерапії MaxVenturi®</h2>
      <p className="product__text">Система назальної високопотокової оксигенотерапії MaxVenturi® має кілька істотних переваг перед класичними пристроями, а саме:</p>
      <ul className="product__list product__list----advantages">
        <Product__item />
      </ul>
    </div>
  )
}
