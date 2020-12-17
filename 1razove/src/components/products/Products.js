import React from "react"
import "./Products.scss";
import ProductsImg from "../../images/MaxVenturi.jpg";

export default function Products() {
  return (
    <section className="products container container--padding0">
      <h2 className="products__heading products__heading--h2">Унікальні товари</h2>
      <div className="products__wrapper products__wrapper--cards">
        <div className="products__card">
          <h2 className="products__heading products__heading--card">MaxVenturi® Система назальної високопотокової оксигенотерапії</h2>
          <div className="products__wrapper products__wrapper--row">
            <div className="products__prev">
              <a className="products__link" href="product-page.html">
                <picture>
                  <img className="products__img" src={ProductsImg} alt="Система назальної високопотокової оксигенотерапії MaxVenturi®" width="228" height="317" />
                </picture>
              </a>
            </div>
            <div className="products__discription">
              <p className="products__text">Інжектор CT Motion – прогресивне обладнання,
                створене з використанням інноваційних німецьких технологій,
                використовується для дозованого введення контрастної речовини при обстеженні органів людини на комп'ютерному томографі.</p>
              <a href="product-page.html" className="button button--products">Дізнатись більше</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
