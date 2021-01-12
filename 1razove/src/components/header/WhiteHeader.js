import React, { useState } from "react"
import "./Header.scss";
import dataStore from '../../stores/dataStore';
import { Link } from 'react-router-dom';

export default function WhiteHeader({data, brandLink, brand}) {
  let [ showMenu, setShowMenu ] = useState(false);

  function toggleMenu(){
    setShowMenu(!showMenu);
  }

  function stopPropagation(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  return (
    <header className="header header--product">
      <div className="container">
        <div className="header__wrapper header__wrapper--main">
          <Link className="header__logo" to={`/`}>
            <picture>
              <source media="(min-width: 950px)" srcSet="/images/logo-small-blue.svg" />
              <img className="header__img header__img--smallblue" src="/images/mobile-bl.svg" alt="1razovoe logotype" width="316" height="522" />
            </picture>
          </Link>
          <div className={`header__wrapper-mobile ${showMenu ? 'header__wrapper-mobile--opened' : ''}`} onClick={toggleMenu}>
            <div className="header__wrapper header__wrapper--column">
              <div className={`header__wrapper header__wrapper--menu ${showMenu ? 'header__wrapper--opened' : ''}`} onClick={stopPropagation}>

                <div className="header__wrapper header__wrapper--row">
                  <Link className="header__logo header__logo--mobile" to={`/`}>
                    <picture>
                      <img className="header__img header__img--menu" src="/images/mobile-bl.svg" alt="1razovoe logotype" width="173" height="39" />
                    </picture>
                  </Link>
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
                        return <li key={index} className="navigation__item">
                            <Link className="navigation__link navigation__link--blue navigation__link--mobile" to={`/${value.url}`}>{value.text}</Link>
                          </li>
                      })
                    }
                  </ul>
                </nav>
                <div className="languages">
                  <ul className="languages__list">
                    {
                      data.project.langs.map((value, index) => {
                        return <li key={index} onClick={() => dataStore.changeLang(value.lang)} className={`languages__item languages__item languages__item--blue languages__item--mobile ${dataStore.getLang() == value.lang ? 'languages__item--current':''}`}>{value.langText}</li>
                      })
                    }
                  </ul>
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
        {
          brandLink && <Link className="header__link" to={`/brand/${brandLink}`}>
            <span className="header__link-span">←</span>&nbsp;Назад до бренду&nbsp;<span>{brand}</span>
          </Link>
        }

      </div>
    </header>
  )
}
