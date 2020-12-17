import React from "react"
import "./Header.scss";
import LogoMenu from "../../images/logo-small-white.png";

export default function BrandHeader() {
  return (
    <header className="header header--brand">
      <div className="container">
        <div className="header__wraper header__wraper--main">
          <a className="header__logo" href="index.html">
            <picture>
              <img className="header__img header__img--small" src={LogoMenu} alt="1razovoe logotype" width="247" height="56" />
            </picture>
          </a>
          <div className="header__wraper header__wraper--column">
            <div className="header__wraper header__wraper--menu">
              <div className="header__wraper header__wraper--row">
                <a className="header__logo header__logo--mobile" href="index.html">
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
                  <li className="navigation__item"><a className="navigation__link navigation__link--mobile" href="index.html#brands"> Бренди та Напрямки </a> </li>
                  <li className="navigation__item"><a className="navigation__link navigation__link--mobile" href="contacts.html">Контактна Інформація</a></li>
                </ul>
              </nav>
              <div className="languages">
                <ul className="languages__list">
                  <li className="languages__item">Укр</li>
                  <li className="languages__item">Рус</li>
                  <li className="languages__item">Eng</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
