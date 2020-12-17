import React from "react"

import "../productCard/ProductCard.scss";

export default function ProductItem() {
  return (
    <li className="product__item product__item--advantages">
      <h3 className="product__heading product__heading--advantages">Lorum</h3>
      <p className="product__text product__text--advantages">Ipsum dolor set amet</p>
    </li>
  )
}
