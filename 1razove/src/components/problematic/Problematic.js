import React, { useEffect } from "react"
import "./Problematic.scss";
//import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
//import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
//import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

let initialized = false;
export default function Problematic({data}) {
  //ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // if(!initialized)
    //   return;

    // var controller = new ScrollMagic.Controller({
    //   globalSceneOptions: {
    //     triggerHook: 'onLeave',
    //     duration: "200%"
    //   }
    // });
  
    // var scrollAnimation = new TimelineMax();
    // scrollAnimation = scrollAnimation.set(document.getElementById('problematic-cards'), {autoAlpha: 1});
    // data.cards.forEach((val, index) => {
    //   console.log(index);
    //   if((data.cards.length - 1) > index)
    //     scrollAnimation = scrollAnimation.to(document.getElementById(`problematic-${index}`), 8, {y:'-200%', autoAlpha: 1, delay:2}, `trans${index}`);
    // })
    // let element = window.innerWidth <= 1200 ? "#problematic-text" : "#problematic";
    // var scene = new ScrollMagic.Scene({triggerElement: element, duration: 100})
    //   .setPin(element)
    //   .addTo(controller)
    //   .setTween(scrollAnimation);
      //scene.offset(400);

      setTimeout(() => {
        let animation = gsap.timeline({
          defaults: {duration: 1 },
          scrollTrigger: {
            trigger: window.innerWidth <= 1200 ? "#problematic-text" : "#problematic",
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true
          }
        });
        data.cards.forEach((val, index) => {
          if((data.cards.length - 1) > index)
            animation.to(`#problematic-${index}`,  { y: -700})
            .addLabel("color");
        });
      },500);

    initialized = true;
  })

  return (
    <section className="problematic" id="problematic">
        <div className="problematic__wrapper problematic__wrapper--main container container--padding0" id="problematic-cards">
          <div >
            <div className="problematic__wrapper problematic__wrapper--card" id="problematic-text">
            {
              data.cards.map((value,index) => {
                return <div key={index} id={`problematic-${index}`} className="problematic__card" style={{backgroundColor: value.backgroundColor, zIndex: (data.cards.length - index),top: (data.cards.length - index - 1)*40}}>
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
              })
            }
            
          </div>
          </div>
          <div className="problematic__description container">
            <h2 className="problematic__heading">{data.title}</h2>
            <p className="problematic__text">{data.text}</p>
          </div>
        </div>
    </section>
  )
}
