import React, { useEffect } from "react"
import ScrollMagic from 'scrollmagic';
import "./Decision.scss";

export default function Decision({data}) {

  useEffect(() => {
    if(window.innerWidth <= 950)
      return;

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({triggerElement: "#moving-logo-trigger", duration: 800, triggerHook: 0, })
      .setPin("#moving-logo")
      //.addIndicators({name: "1"}) // add indicators (requires plugin)
      .addTo(controller);
  })

  return (
    <section className="decision"  id="moving-logo-trigger">
      <div className="container">
        <h2 className="visually-hidden">decision</h2>
        <div className="decision__wrapper decision__wrapper--main">
          <div className="decision__wrapper decision__wrapper--logo">
            <div className="decision__wrapper-logo" id="moving-logo">
              <a className="decision__logo" >
                <picture>
                  <img className="decision__img" src="/images/1.svg" alt="1razovoe logotype" width="325" height="397" />
                </picture>
              </a>
            </div>
          </div>
          <div className="decision__wrapper decision__wrapper--column">
            <p className="decision__text">{data.titleWhite} <span className="decision__text decision__text--colored">{data.title}</span></p>
            <ol className="decision__list" id="moving-logo-trigger">
              {
                data.text.split('|').map((value,index) => {
                  return <li key={index} className="decision__item">{value}</li>
                })
              }
            </ol>
            <p className="decision__text">{data.videoTitle}</p>
            <iframe className="decision__video" width="480" height="360" src={data.videoUrl} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
