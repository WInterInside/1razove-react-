import React from "react"
import "./Products.scss";
import ProductsImg from "../../images/MaxVenturi.jpg";

export default function Products({data}) {
  return (
    <section className="products container container--padding0">
      <h2 className="products__heading products__heading--h2">{data.uniqueTitle}</h2>
      <div className="products__wrapper products__wrapper--cards">
        {
          data.products.map((value,index) => {
            return <div key={index} className="products__card">
              <h2 className="products__heading products__heading--card">{value.title}</h2>
              <div className="products__wrapper products__wrapper--row">
                <div className="products__prev">
                  <a className="products__link" href="/product/12">
                    <picture>
                      <img className="products__img" src={value.img} alt={value.title} width="228" height="317" />
                    </picture>
                  </a>
                </div>
                <div className="products__discription">
                  <p className="products__text">{value.text}</p>
                  <a href={value.url} className="button button--products">{value.btnText}</a>
                </div>
              </div>
            </div>
          })
        }
        
      </div>
    </section>
  )
}
