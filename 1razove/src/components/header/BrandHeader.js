import React from "react"
import "./Header.scss";

export default function BrandHeader({data}) {
  return (
    <header className="header header--brand">
      <div className="container">
        <div className="header__wraper header__wraper--main">
          <a className="header__logo" href="/">
            <picture>
              <img className="header__img header__img--small" src='/images/logo-small-white-desctop.png' alt="1razovoe logotype" width="247" height="65" />
            </picture>
          </a>
          <div className="header__wraper header__wraper--column">
            <div className="header__wraper header__wraper--menu">
              <div className="header__wraper header__wraper--row">
                <a className="header__logo header__logo--mobile" href="/">
                  <picture>
                    <img className="header__img header__img--small" src="/images/logo-small-blue.png" alt="1razovoe logotype" width="247" height="56" />
                  </picture>
                </a>
                <button className="header__menu header__menu--on" type="button"><span className="visually-hidden">Открыть меню</span>
                  <span className="header__toggle">
                    x
                  </span>
                </button>
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
                      return <li key={index} className="languages__item">{value.langText}</li>
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
