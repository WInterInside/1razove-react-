import React, { useEffect, useState } from "react"
import "./Header.scss";
import Nav from "../nav/Nav";
import Lang from "../lang/Lang";
import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax, Power1 } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

export default function Header({data}) {
  let [ showMenu, setShowMenu ] = useState(false);
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

  useEffect(() => {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: "200%"
      }
    });

    var scrollAnimation = new TimelineMax();
    scrollAnimation.set(document.getElementById('home-header'), {autoAlpha: 1})
      .to(document.getElementById('animated-text'), 305, {y:'-110%', ease:Power1.easeIn, autoAlpha: 1, delay:2}, "trans1");
      //.to(document.getElementById('scroll-text-1'), 305, {y:'-500px', ease:Power4.ease, autoAlpha: 0, delay:2}, "trans2")
      //.to(document.getElementById('scroll-text-2'), 305, {y:'-500px', ease:Power4.ease, autoAlpha: 0, delay:2}, "trans3");


    var scene = new ScrollMagic.Scene({triggerElement: "#home-header", duration: 1000})
      .setPin("#home-header")
      .addTo(controller)
      .setTween(scrollAnimation);
      //scene.offset(400);
  })

  function toggleMenu(){
    setShowMenu(!showMenu);
  }

  return (
    <header className="header" id="home-header">
      <div className="container">
        <div className="header__wrapper header__wrapper--main">
          <a className="header__logo" href="/">
            <img className="header__img" src="/images/logo.svg" alt="1razovoe logotype" width="316" height="522" />
          </a>
          <div className="header__wrapper header__wrapper--index header__wrapper--column">
            <div className={`header__wrapper header__wrapper--menu ${showMenu ? 'header__wrapper--opened' : ''}`}>
              <div className="header__wrapper header__wrapper--row">
                <a className="header__logo header__logo--mobile" href="/">
                  <img className="header__img header__img--menu" src="/images/logo-small-blue.svg" alt="1razovoe logotype" width="173" height="39" />
                </a>
              </div>
              <Nav data={data.heroBlock.menu}/>
              <Lang data={data.project.langs}/>
            </div>
            <div className="header__wrapper--text">
              <div id="animated-text">
                {
                  data.heroBlock.scrollText.map((value, index) => {
                    return  <p key={index} className="header__text" id={`scroll-text-${index}`}>
                        {value.white + " "}
                        <span className="header__text header__text--colored">{value.blue}</span>
                      </p>;
                  })
                }
              </div>
            </div>
            <div className={`header__hamburger ${showMenu ? 'header__hamburger--on' : ''}`} onClick={() => toggleMenu()}>
              <span className="header__hamburger-span"></span>
              <span className="header__hamburger-span"></span>
              <span className="header__hamburger-span"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
