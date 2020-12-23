import React, {useEffect, useState} from "react";

import {tns} from 'tiny-slider/src/tiny-slider';
import "./Slider.scss";
import Overlay from '../overlay/Overlay';

let initialized = false;
let imgIndex = 0;
export default function Slider({data}) {
  let [selectedImg, setSelectedImage] = useState('');
  let [showPopup, setShowPopup] = useState(false);

  function openOverlay(url, index){
    setSelectedImage(url);
    imgIndex = index;
    setShowPopup(true);
  }

  function closePopup(){
    setShowPopup(false);
  }

  function moveSlides(e, increment){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if(!isAvailable(increment))
      return;

    imgIndex += increment;
    setSelectedImage(data.images[imgIndex].url, imgIndex);
  }

  function isAvailable(increment){
    return ((imgIndex + increment) < data.images.length) && ((imgIndex + increment) >= 0);
  }

  useEffect (() => {
    if(initialized)
      return;

    setTimeout (() => {
      var slider = tns({
        container: '.product__slider',
        items: 2,
        autoWidth: true,
        gutter: 10,
        controls: true,
        nav: false,
        autoplay: false,
        loop: false,
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
      initialized = true;
    }, 200)
  });

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
              return <div key={index} className="product__slide" onClick={() => openOverlay(value.url, index)}>
                <picture>
                  <source type="image/webp" srcSet={value.url} />
                  <img className="product__slideimg" src={value.url} alt={value.title} />
                </picture>
              </div>
            })
          }
        </div>
      </div>
      {
        showPopup && <Overlay closePopup={() => closePopup()}>
          <div className="slider__popup">
            <div className="slider__popup-left" onClick={(e) => moveSlides(e, -1)}></div>
            <div className="slider__popup-right" onClick={(e) => moveSlides(e, 1)}></div>
            <div className="wrapper__popup">
              <picture>
                <img className="product__slideimg" src={selectedImg} />
              </picture>
              <div className="close" onClick={() => closePopup()}></div>
            </div>
          </div>

        </Overlay>
      }
    </div>
  )
}
