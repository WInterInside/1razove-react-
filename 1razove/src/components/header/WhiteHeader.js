import React from "react"
import "./Header.scss";
import LogoMenu from "../../images/logo-small-blue.png";

export default function WhiteHeader({data}) {
  return (
    <header className="header header--product">
      <div className="container">
        <div className="header__wraper header__wraper--main">
          <a className="header__logo" href="/">
            <picture>
              <img className="header__img header__img--small" src={LogoMenu} alt="1razovoe logotype" width="247" height="56" />
            </picture>
          </a>
          <div className="header__wraper header__wraper--column">
            <div className="header__wraper header__wraper--menu">
              <div className="header__wraper header__wraper--row">
                <a className="header__logo header__logo--mobile" href="/">
                  <picture>
                    <img className="header__img header__img--small" src={LogoMenu} alt="1razovoe logotype" width="247" height="56" />
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
                  <li className="navigation__item"><a className="navigation__link navigation__link--blue navigation__link--mobile" href="#brands"> Бренди та Напрямки </a> </li>
                  <li className="navigation__item"><a className="navigation__link navigation__link--blue navigation__link--mobile" href="/contacts">Контактна Інформація</a></li>
                </ul>
              </nav>
              <div className="languages">
                <ul className="languages__list">
                  {
                    data.project.langs.map((value, index) => {
                      <li key={index} className="languages__item languages__item--blue languages__item--mobile">{value.langText}</li>
                    })
                  }
                </ul>
              </div>
              </div>
            </div>
          </div>
        <a className="header__link" href="/brand/12">← Назад до бренду <span>Brand Name</span></a>
      </div>
    </header>
  )
}
