import React from "react"
import "./Header.scss";
import dataStore from '../../stores/dataStore';

export default function BrandHeader({data}) {
  return (
    <header className="header header--brand">
      <div className="container">
        <div className="header__wrapper header__wrapper--main">
          <a className="header__logo" href="/">
            <picture>
              <img className="header__img header__img--small" src='/images/logo-small-white-desctop.png' alt="1razovoe logotype" width="247" height="65" />
            </picture>
          </a>
          <div className="header__wrapper header__wrapper--column">
            <div className="header__wrapper header__wrapper--menu">
              <div className="header__wrapper header__wrapper--row">
                <a className="header__logo header__logo--mobile" href="/">
                  <picture>
                    <img className="header__img header__img--small" src="/images/logo-small-blue.png" alt="1razovoe logotype" width="247" height="56" />
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
                      return <li key={index} className="navigation__item"><a className="navigation__link navigation__link--mobile" href={value.url}>{value.text} </a> </li>
                    })
                  }
                </ul>
              </nav>
              <div className="languages">
                <ul className="languages__list">
                  {
                    data.project.langs.map((value,index) => {
                      return <li key={index} onClick={() => dataStore.changeLang(value.lang)} className="languages__item">{value.langText}</li>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
