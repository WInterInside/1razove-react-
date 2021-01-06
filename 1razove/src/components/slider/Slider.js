import React, {useEffect, useState} from "react";

import {tns} from 'tiny-slider/src/tiny-slider';
import "./Slider.scss";
import Overlay from '../overlay/Overlay';

//let initialized = false;
let imgIndex = 0;
var mainSlider = null;
var overlaySlider = null;
export default function Slider({data}) {
  let [showPopup, setShowPopup] = useState(false);

  function openOverlay(e, url, index){
    imgIndex = index;
    setTimeout(() => overlaySlider.goTo(index), 300);
    setShowPopup(true);
  }

  function closePopup(){
    setShowPopup(false);
  }

  function preventClose(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  useEffect (() => {
    
    //debugger;
    setTimeout (() => {
      if(!document.querySelector('.product__slider'))
        return;

      mainSlider = tns({
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
      //initialized = true;
    }, 200);

    setTimeout (() => {
      if(!document.getElementById('overlay-slider'))
        return;

      overlaySlider = tns({
        container: '#overlay-slider',
        items: 1,
        //autoWidth: true,
        //gutter: 10,
        controls: false,
        nav: false,
        autoplay: false,
        loop: false,
        mouseDrag: true,
        arrowKeys: true,
        // controlsContainer: '.slider__popup--absolute',
        // prevButton: '.slider__popup-left',
        // nextButton: '.slider__popup-right',
        // responsive: {
        //   900: {
        //     items: 4,
        //     gutter: 15
        //   }
        // }
      });
      //initialized = true;
    }, 200);
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
              return <div key={index} className="product__slide" onClick={(e) => openOverlay(e, value.url, index)}>
                <picture>
                  <source type="image/webp" srcSet={value.url} />
                  <img className="product__slideimg" src={value.url} alt={value.title} />
                </picture>
              </div>
            })
          }
        </div>
      </div>
      <div className={`overlay-wrapper ${showPopup ? '' : 'hide'}`} onClick={preventClose}>
        <Overlay closePopup={() => closePopup()}>
          <div className="slider__popup">
            {/* <div className="slider__popup slider__popup--absolute" onClick={preventClose}>
              <div className="slider__popup-left"></div>
              <div className="slider__popup-right"></div>
            </div> */}
            <div>
              <div id="overlay-slider">
                {
                  data.images.map((value,index) => {
                    return <div  key={index} className="slide__wrapper">
                      <div className="slideimg__wrapper" onClick={preventClose}>
                        <picture>
                          <img className="product__slideimg--opened" src={value.url} />
                        </picture>
                        <div className="close" onClick={() => closePopup()}></div>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
            <div className="close close--mobile" onClick={() => closePopup()}></div>
          </div>

        </Overlay>
      </div>
      
    </div>
  )
}