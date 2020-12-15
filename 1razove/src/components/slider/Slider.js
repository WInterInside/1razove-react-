import React from "react"
import "./Slider.scss";

import Slide from "../img/slide.jpg";


export default function Slider() {
  return (
    <div className="product__slides">
      <div className="product__wrapper container">
        <h2 className="product__heading product__heading--photos">Фото продукту</h2>
        <div className="product__toggls">
          <div className="product__arrow product__arrow--prev">←</div>
          <div className="product__arrow product__arrow--next">→</div>
        </div>
      </div>
      <div className="container container--slider">
        <div className="product__slider">
          <div className="product__slide">
            <picture>
              <source type="image/webp" srcSet={Slide} />
              <img className="product__slideimg" src={Slide} alt="Система назальної високопотокової оксигенотерапії MaxVenturi®" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}
