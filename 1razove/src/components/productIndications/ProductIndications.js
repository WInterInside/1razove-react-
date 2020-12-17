import React from "react"

import "../productCard/ProductCard.scss";
import ProductNumbereditem from "../productNumbereditem/ProductNumbereditem";

export default function ProductIndications() {
  return (
    <div className="product__indications">
      <h2 className="product__heading">Показання до застосування системи</h2>
      <p className="product__text">Система оксигенотерапії використовується для пацієнтів з гіпоксемичною дихальною недостатністю. У клінічній практиці пристрій необхідно застосовувати у наступних випадках:</p>
      <ol className="product__numberedlist">
        <ProductNumbereditem />
      </ol>
    </div>
  )
}
