import React from "react"
import Products__img from "../img/MaxVenturi.jpg";

export default function Products__card() {
  return (
    <div class="products__card">
      <h2 class="products__heading">MaxVenturi® Система назальної високопотокової оксигенотерапії</h2>
      <div class="products__wrapper products__wrapper--row">
        <a class="products__link" href="product-page.html">
          <picture>
            <img class="products__img" src={Products__img} alt="Система назальної високопотокової оксигенотерапії MaxVenturi®" />
          </picture>
        </a>
        <div class="products__discription">
          <p class="products__text">Система назальної високопотокової оксигенотерапії MaxVenturi® – це інноваційний пристрій,
            який забезпечує подачу через назальну канюлю значного обсягу підігрітої та зволоженої повітряно-кисневої суміші,
            що знижує можливість розвитку запального процесу в дихальних шляхах, а також зменшує енергетичні втрати, особливо в умовах,
            коли спостерігається гостра дихальна недостатність.</p>
          <a href="product-page.html" class="button">Дізнатись більше</a>
        </div>
      </div>
    </div>
  )
}
