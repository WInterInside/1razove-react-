import React, { useEffect, useState } from "react"
import "./Decision.scss";
//import YouTubePlayer from 'youtube-player';

//let initialized = false;
export default function Decision({data}) {
  let [videoStarted, setVideoStarted] = useState(false);
  let [loadYT, setLoadYT] = useState(false);
  let player;

  useEffect(() => {
    // player = YouTubePlayer('decision__video');
    // player.loadVideoById(data.videoUrl);
    // player.stopVideo();
    window.addEventListener("scroll", () => {
      if(document.body.scrollTop > 3200 || document.documentElement.scrollTop > 3200){
        setLoadYT(true);

        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        //var player;
        window.onYouTubeIframeAPIReady = function() {
          player = new window.YT.Player('decision__video', {
            height: '390',
            width: '640',
            videoId: data.videoUrl,
            // events: {
            //   'onReady': onPlayerReady,
            //   'onStateChange': onPlayerStateChange
            // }
          });
        }

      }
    });
  })

  function clickVideo(){
    debugger;
    //let player = document.getElementById('ytplayer');
    setVideoStarted(true);
    //player.playVideo();
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
              { loadYT && <div id="decision__video" className="decision__video">
                  {/* <iframe id="ytplayer" frameBorder="0" type="text/html" width="100%" height="100%" src={`https://www.youtube.com/embed/${data.videoUrl}`}></iframe> */}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
