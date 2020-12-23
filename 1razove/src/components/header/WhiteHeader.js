import React, { useState } from "react"
import "./Header.scss";
import dataStore from '../../stores/dataStore';

export default function WhiteHeader({data, brandLink, brand}) {
  let [ showMenu, setShowMenu ] = useState(false);

  function toggleMenu(){
    setShowMenu(!showMenu);
  }

  return (
    <header className="header header--product">
      <div className="container">
        <div className="header__wrapper header__wrapper--main">
          <a className="header__logo" href="/">
            <picture>
              <source media="(min-width: 950px)" srcSet="/images/logo-small-blue.svg" />
              <img className="header__img header__img--smallblue" src="/images/mobile-bl.svg" alt="1razovoe logotype" width="316" height="522" />
            </picture>
          </a>
          <div className="header__wrapper header__wrapper--column">
            <div className={`header__wrapper header__wrapper--menu ${showMenu ? 'header__wrapper--opened' : ''}`}>

              <div className="header__wrapper header__wrapper--row">
                <a className="header__logo header__logo--mobile" href="/">
                  <picture>
                    <img className="header__img header__img--menu" src="/images/mobile-bl.svg" alt="1razovoe logotype" width="173" height="39" />
                  </picture>
                </a>
                <div className="header__menu">
                  <span className="header__menu-span"></span>
                  <span className="header__menu-span"></span>
                  <span className="header__menu-span"></span>
                </div>
              </div>

              <nav className="navigation">
                <ul className="navigation__list">
                  {
                    data.heroBlock.menu.map((value,index) => {
                      return <li key={index} className="navigation__item"><a className="navigation__link navigation__link--blue navigation__link--mobile" href={value.url}>{value.text} </a> </li>
                    })
                  }
                </ul>
              </nav>
              <div className="languages">
                <ul className="languages__list">
                  {
                    data.project.langs.map((value, index) => {
                      return <li key={index} onClick={() => dataStore.changeLang(value.lang)} className="languages__item languages__item--blue languages__item--mobile">{value.langText}</li>
                    })
                  }
                </ul>
              </div>

            </div>
            <div className={`header__hamburger ${showMenu ? 'header__hamburger--on' : ''}`} onClick={() => toggleMenu()}>
              <span className="header__hamburger-span header__hamburger-span--blue"></span>
              <span className="header__hamburger-span header__hamburger-span--blue"></span>
              <span className="header__hamburger-span header__hamburger-span--blue"></span>
            </div>
          </div>
        </div>
        {
          brandLink && <a className="header__link" href={`/brand/${brandLink}`}>← Назад до бренду <span>{brand}</span></a>
        }

      </div>
    </header>
  )
}
