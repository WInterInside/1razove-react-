import React from "react"
import "./ProductCard.scss";

import ProductImg from "../../images/MaxVenturi-large.png";

import ProductIndications from "../productIndications/ProductIndications";
import ProductAdvantages from "../productAdvantages/ProductAdvantages";
import Leaflet from "../leaflet/Leaflet";

export default function ProductCard() {
  return (
    <div className="product__card">
      <div className="product__image product__image--desktop">
        <picture>
          <img className="product__img" src={ProductImg} alt="Система назальної високопотокової оксигенотерапії MaxVenturi®" />
        </picture>
      </div>
      <div className="product__discriprion">
        <h1 className="product__name">MaxVenturi® Система назальної високопотокової оксигенотерапії</h1>
        <div className="product__image product__image--mobile">
          <picture>
            <img className="product__img" src={ProductImg} alt="Система назальної високопотокової оксигенотерапії MaxVenturi®" />
          </picture>
        </div>
        <p className="product__text">Система назальної високопотокової оксигенотерапії MaxVenturi® – це інноваційний пристрій,
          який забезпечує подачу через назальну канюлю значного обсягу підігрітої та зволоженої повітряно-кисневої суміші,
          що знижує можливість розвитку запального процесу в дихальних шляхах, а також зменшує енергетичні втрати, особливо в умовах,
          коли спостерігається гостра дихальна недостатність.</p>
        <ProductIndications />
        <p className="product__text">У маленьких дітей за допомогою системи оксигенотерапії MaxVenturi® лікують обструктивні бронхіти та бронхіоліти, а також помірно важкий респіраторний дистрес синдром.</p>

        <ProductAdvantages />
        <Leaflet />
      </div>
    </div>
  )
}
