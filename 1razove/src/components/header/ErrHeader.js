import React from "react"
import "./Header.scss";
import Nav from "../nav/Nav";
import Lang from "../lang/Lang";
import Logo from "../img/logo.svg";
import LogoMenu from "../img/logo-small-blue.png";

export default function Header() {
  return (
    <header className="header header--404">
      <div className="container">
        <div className="header__wraper header__wraper--main">
          <a className="header__logo" href="index.html">
            <img className="header__img" src={Logo} alt="1razovoe logotype" width="316" height="522" />
          </a>
          <div className="header__wraper header__wraper--column">
            <div className="header__wraper header__wraper--menu">
              <div className="header__wraper header__wraper--row">
                <a className="header__logo header__logo--mobile" href="index.html">
                  <img className="header__img header__img--small" src={LogoMenu} alt="1razovoe logotype" width="247" height="56" />
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
            <div className="header__error">
              <h1 className="header__text header__text--err">404</h1>
              <p className="header__text header__text--err"> Упс! <span className="header__text header__text--colored">ТакоЇ сторінки не існує</span></p>
              <a className="header__link button button--index" href="index.html">На головну сторінку</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
