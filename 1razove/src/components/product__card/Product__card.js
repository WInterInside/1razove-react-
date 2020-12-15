import React from "react"
import "./Product__card.scss";

import Product__img from "../img/MaxVenturi-large.png";

import Product__indications from "../product__indications/Product__indications";
import Product__advantages from "../product__advantages/Product__advantages";
import Leaflet from "../leaflet/Leaflet";

export default function Product__card() {
  return (
    <div className="product__card">
      <div className="product__image product__image--desktop">
        <picture>
          <img className="product__img" src={Product__img} alt="Система назальної високопотокової оксигенотерапії MaxVenturi®" />
        </picture>
      </div>
      <div className="product__discriprion">
        <h1 className="product__name">MaxVenturi® Система назальної високопотокової оксигенотерапії</h1>
        <div className="product__image product__image--mobile">
          <picture>
            <img className="product__img" src={Product__img} alt="Система назальної високопотокової оксигенотерапії MaxVenturi®" />
          </picture>
        </div>
        <p className="product__text">Система назальної високопотокової оксигенотерапії MaxVenturi® – це інноваційний пристрій,
          який забезпечує подачу через назальну канюлю значного обсягу підігрітої та зволоженої повітряно-кисневої суміші,
          що знижує можливість розвитку запального процесу в дихальних шляхах, а також зменшує енергетичні втрати, особливо в умовах,
          коли спостерігається гостра дихальна недостатність.</p>
        <Product__indications />
        <p className="product__text">У маленьких дітей за допомогою системи оксигенотерапії MaxVenturi® лікують обструктивні бронхіти та бронхіоліти, а також помірно важкий респіраторний дистрес синдром.</p>

        <Product__advantages />
        <Leaflet />
      </div>
    </div>
  )
}
