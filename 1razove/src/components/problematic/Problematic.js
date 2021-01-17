import React, { useEffect } from "react"
import "./Problematic.scss";
import {tns} from 'tiny-slider/src/tiny-slider';

let initialized = false;
export default function Problematic({data}) {

  useEffect(() => {

    if(window.innerWidth <= 1200){
      console.log('slider init');
      setTimeout(() => {
        if(!document.getElementById('problematic-text'))
          return;

        var slider = tns({
          container: '#problematic-text',
          items: 2,
          autoWidth: true,
          gutter: 10,
          controls: false,
          nav: false,
          autoplay: false,
          loop: false,
          swipeAngle: false,
          //mouseDrag: true,
          arrowKeys: false,
          //controlsContainer: '.product__toggls',
          //prevButton: '.product__arrow--prev',
          //nextButton: '.product__arrow--next',
          // responsive: {
          //   900: {
          //     items: 4,
          //     gutter: 15
          //   }
          // }
        });
      },500);
    } 

    initialized = true;
  })

  return (
    <section className="problematic" id="problematic">
        <div className="problematic__wrapper problematic__wrapper--main container container--padding0" id="problematic-cards">
          <div>
            <div className="problematic__wrapper problematic__wrapper--card" id="problematic-text">
            {
              data.cards.map((value,index) => {
                return <div key={index} className="problematic__card-wrapper">
                  <div id={`problematic-${index}`} className="problematic__card" style={{backgroundColor: value.backgroundColor, zIndex: (data.cards.length - index),top: (data.cards.length - index - 1)*40}}>
                    <h3 className="problematic__heading problematic__heading--card">{value.title}</h3>
                    <div className="problematic__wrapper problematic__wrapper--list">
                      <ul className="problematic__list">
                        {
                          value.text.split('|').map((val, k) => {
                            return <li key={k} className="problematic__item">{val}</li>
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              })
            }
            
          </div>
          </div>
          <div className="problematic__description container">
            <div className="problematic__sticky">
              <h2 className="problematic__heading">{data.title}</h2>
              <p className="problematic__text">{data.text}</p>             
            </div>
          </div>
        </div>
    </section>
  )
}
