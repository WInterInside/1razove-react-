import React, { useEffect, useState } from "react"
import "./Header.scss";
import Nav from "../nav/Nav";
import Lang from "../lang/Lang";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { Link } from 'react-router-dom';

export default function Header({data}) {
  let [ showMenu, setShowMenu ] = useState(false);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {

      setTimeout(() => {
        gsap.timeline({
          defaults: {duration: 1 },
          scrollTrigger: {
            trigger: "#home-header",
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true
          }
        })
          .to("#animated-text",  { y: window.innerWidth > 950 ? -700 : -500})
          .addLabel("color");
      },500);
    
  })

  function toggleMenu(){
    setShowMenu(!showMenu);
  }

  function stopPropagation(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  return (
    <header className="header" id="home-header">
      <div className="container">
        <div className="header__wrapper header__wrapper--main">
          <Link className="header__logo" to={`/`}>
            <picture>
              <source media="(min-width: 950px)" srcSet="/images/logo.svg" />
              <img className="header__img" src="/images/1mobile.svg" alt="1razovoe logotype" width="316" height="522" />
            </picture>
          </Link>
          <div className="header__wrapper header__wrapper--index header__wrapper--column">
            <div className={`header__wrapper-mobile ${showMenu ? 'header__wrapper-mobile--opened' : ''}`} onClick={toggleMenu}>
              <div className={`header__wrapper header__wrapper--menu ${showMenu ? 'header__wrapper--opened' : ''}`} onClick={stopPropagation}>
                <div className="header__wrapper header__wrapper--row">
                  <Link className="header__logo header__logo--mobile" to={`/`}>
                    <img className="header__img header__img--menu" src="/images/mobile-bl.svg" alt="1razovoe logotype" width="173" height="39" />
                  </Link>
                </div>
                <Nav data={data.heroBlock.menu} closeMenu={() => !showMenu ? null : toggleMenu()} />
                <Lang data={data.project.langs}/>
              </div>
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
              <div className="header__hamburger-wrapper">
                <div className="header__hamburger-span-wrapper">
                  <span className="header__hamburger-span"></span>
                  <span className="header__hamburger-span"></span>
                  <span className="header__hamburger-span"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
