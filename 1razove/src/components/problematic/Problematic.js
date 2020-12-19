import React, { useEffect } from "react"
import "./Problematic.scss";
import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
 


export default function Problematic({data}) {
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
  useEffect(() => {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: "200%" // this works just fine with duration 0 as well
        // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
        // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
      }
    });
  
    // get all slides
    var slides = document.querySelectorAll(".problematic__card");
  
    var scrollAnimation = new TimelineMax();
    scrollAnimation.set(document.getElementById('problematic-cards'), {autoAlpha: 1})
      .to(document.getElementById('problematic-0'), 8, {y:'200%', autoAlpha: 1, delay:2}, "trans1")
      .to(document.getElementById('problematic-1'), 8, {y:'200%', autoAlpha: 1, delay:2}, "trans2");
      //.to(document.getElementById('problematic-2'), 1, {y:'200%', autoAlpha: 1, delay:0.75}, "trans3");


    var scene = new ScrollMagic.Scene({triggerElement: "#problematic", duration: 100})
      .setPin("#problematic-cards")
      .addTo(controller)
      .setTween(scrollAnimation);
      //scene.offset(400);

    // create scene for every slide
    // for (var i=0; i<slides.length; i++) {
    //   new ScrollMagic.Scene({
    //       triggerElement: slides[i]
    //     })
    //     .setPin(slides[i], {pushFollowers: false})
    //     //.addIndicators() // add indicators (requires plugin)
    //     .addTo(controller)
    //     .setTween(scrollAnimation);
    // }
  })

  return (
    <section className="problematic" id="problematic">
        <div className="problematic__wrapper problematic__wrapper--main container container--padding0" id="problematic-cards">
          <div className="problematic__wrapper problematic__wrapper--card">
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
          <div className="problematic__description container">
            <h2 className="problematic__heading">{data.title}</h2>
            <p className="problematic__text">{data.text}</p>
          </div>
        </div>
    </section>
  )
}
