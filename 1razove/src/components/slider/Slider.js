import React, {useEffect} from "react";

import {tns} from 'tiny-slider/src/tiny-slider';
import "./Slider.scss";

import Slide from "../../images/slide.jpg";

export default function Slider({data}) {

  useEffect (
    () => {
      setTimeout (
        () => {
          var slider = tns({
            container: '.product__slider',
            items: 2,
            autoWidth: true,
            gutter: 10,
            controls: true,
            nav: false,
            autoplay: false,
            mouseDrag: true,
            arrowKeys: true,
            controlsContainer: '.product__toggls',
            prevButton: '.product__arrow--prev',
            nextButton: '.product__arrow--next',
            responsive: {
              900: {
                items: 4,
                gutter: 15
              }
            }
          });
        },
        1000
      )
    }
  );

  return (
    <div className="product__slides">
      <div className="product__wrapper container">
        <h2 className="product__heading product__heading--photos">{data.imgTitle}</h2>
        <div className="product__toggls">
          <div className="product__arrow product__arrow--prev">←</div>
          <div className="product__arrow product__arrow--next">→</div>
        </div>
      </div>
      <div className="container container--slider">
        <div className="product__slider">
          {
            data.images.map((value,index) => {
              return <div key={index} className="product__slide">
                <picture>
                  <source type="image/webp" srcSet={value.url} />
                  <img className="product__slideimg" src={value.url} alt={value.title} />
                </picture>
              </div>
            })
          }
          
        </div>
      </div>
    </div>
  )
}
