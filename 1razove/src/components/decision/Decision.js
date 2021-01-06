import React, { useEffect, useState } from "react"
import "./Decision.scss";
import YouTubePlayer from 'youtube-player';

//let initialized = false;
export default function Decision({data}) {
  let [videoStarted, setVideoStarted] = useState(false);
  let player;

  useEffect(() => {
    // if(initialized)
    //   return;

    player = YouTubePlayer('decision__video');
    player.loadVideoById(data.videoUrl);
    player.stopVideo();

    //initialized = true;
  })

  function clickVideo(){
    setVideoStarted(true);
    player.playVideo();
  }

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
                  return <li key={index} className="decision__item">
                    <span className="decision__item-counter">{index + 1}</span>
                    <span className="decision__item-text">{value}</span>
                  </li>
                })
              }
            </ol>
            <p className="decision__text">{data.videoTitle}</p>
            <div className="decision__videowrapper">
              { !videoStarted && <div className="decision__videocover" onClick={clickVideo}> </div> }
              {
                !videoStarted && <div className="decision__videotoggle">
                  <svg width="54" height="54" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-play" onClick={clickVideo}>
                    <rect className="decision__hovered" width="54" height="54" rx="10" fill="#FB4073"/>
                    <path d="M37 25.768c1.333.77 1.333 2.694 0 3.464L22.75 37.46c-1.333.77-3-.192-3-1.732V19.273c0-1.54 1.667-2.502 3-1.732L37 25.768z" fill="#fff"/>
                  </svg>
                </div>
              }
              <div id="decision__video" className="decision__video" width="480" height="360"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
