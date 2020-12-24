import React from "react"

import "../productCard/ProductCard.scss";


export default function ProductIndications({data}) {
  return (
    <div className="product__indications">
      <h2 className="product__heading">{data.title2}</h2>
      <p className="product__text">{data.text2}</p>
    </div>
  )
}
