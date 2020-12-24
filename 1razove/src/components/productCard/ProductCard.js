import React from "react"
import "./ProductCard.scss";

import ProductIndications from "../productIndications/ProductIndications";
import ProductAdvantages from "../productAdvantages/ProductAdvantages";
import Leaflet from "../leaflet/Leaflet";
import ProductNumbereditem from "../productNumbereditem/ProductNumbereditem";

export default function ProductCard({data}) {
  return (
    <div className="product__card">
      <div className="product__image product__image--desktop">
        <picture>
          <img className="product__img" src={data.images[0].url} alt={data.title} />
        </picture>
      </div>
      <div className="product__discriprion">
        <h1 className="product__name">{data.title}</h1>
        <div className="product__image product__image--mobile">
          <picture>
            <img className="product__img" src={data.images[0].url} alt={data.title} />
          </picture>
        </div>
        <p className="product__text">{data.text}</p>
        <ProductIndications data={data}/>
        <div dangerouslySetInnerHTML={{__html: data.textHtml}}></div>
        <Leaflet />
      </div>
    </div>
  )
}

