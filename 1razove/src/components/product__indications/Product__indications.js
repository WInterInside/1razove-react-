import React from "react"

import "../product__card/Product__card.scss";
import Product__numbereditem from "../product__numbereditem/Product__numbereditem";

export default function Product__indications() {
  return (
    <div className="product__indications">
      <h2 className="product__heading">Показання до застосування системи</h2>
      <p className="product__text">Система оксигенотерапії використовується для пацієнтів з гіпоксемичною дихальною недостатністю. У клінічній практиці пристрій необхідно застосовувати у наступних випадках:</p>
      <ol className="product__numberedlist">
        <Product__numbereditem />
      </ol>
    </div>
  )
}
