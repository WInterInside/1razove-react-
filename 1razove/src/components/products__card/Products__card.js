import React from "react"
import Products__img from "../img/MaxVenturi.jpg";

export default function Products__card() {
  return (
    <div className="products__card">
      <h2 className="products__heading">MaxVenturi® Система назальної високопотокової оксигенотерапії</h2>
      <div className="products__wrapper products__wrapper--row">
        <a className="products__link" href="product-page.html">
          <picture>
            <img className="products__img" src={Products__img} alt="Система назальної високопотокової оксигенотерапії MaxVenturi®" />
          </picture>
        </a>
        <div className="products__discription">
          <p className="products__text">Система назальної високопотокової оксигенотерапії MaxVenturi® – це інноваційний пристрій,
            який забезпечує подачу через назальну канюлю значного обсягу підігрітої та зволоженої повітряно-кисневої суміші,
            що знижує можливість розвитку запального процесу в дихальних шляхах, а також зменшує енергетичні втрати, особливо в умовах,
            коли спостерігається гостра дихальна недостатність.</p>
          <a href="product-page.html" className="button">Дізнатись більше</a>
        </div>
      </div>
    </div>
  )
}
