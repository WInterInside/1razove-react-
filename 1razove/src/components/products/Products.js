import React from "react"
import "./Products.scss";
import { Link } from 'react-router-dom';
import dataStore from '../../stores/dataStore';
export default function Products({data}) {
  const lang = dataStore.getLang();
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
                  <Link className="products__link" to={`/${lang}/product/${value.url}`}>
                    <picture>
                      <img className="products__img" src={value.img} alt={value.title} width="228" height="317" />
                    </picture>
                  </Link>
                </div>
                <div className="products__description">
                  <p className="products__text">{value.text}</p>
                  <Link className="button button--products" to={`/${lang}/product/${value.url}`}>{value.btnText}</Link>
                </div>
              </div>
            </div>
          })
        }
        
      </div>
    </section>
  )
}
