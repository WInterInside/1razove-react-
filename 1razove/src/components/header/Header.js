import React from "react"
import "./Header.scss";
import Nav from "../nav/Nav";
import Lang from "../lang/Lang";
import Logo from "../../images/logo.svg";
import LogoMenu from "../../images/logo-small-blue.png";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wraper header__wraper--main">
          <a className="header__logo" href="/">
            <img className="header__img" src={Logo} alt="1razovoe logotype" width="316" height="522" />
          </a>
          <div className="header__wraper header__wraper--index header__wraper--column">
            <div className="header__wraper header__wraper--menu">
              <div className="header__wraper header__wraper--row">
                <a className="header__logo header__logo--mobile" href="/">
                  <img className="header__img header__img--small" src={LogoMenu} alt="1razovoe logotype" width="247" height="56" />
                </a>
                <button className="header__menu header__menu--on" type="button"><span className="visually-hidden">Открыть меню</span>
                  <span className="header__toggle">
                    x
                  </span>
                </button>
              </div>
              <Nav />
              <Lang />
            </div>
            <p className="header__text">А скільки пацієнтів та лікарів <span className="header__text header__text--colored">наражаються на небезпеку через неякісну обробку?</span></p>
          </div>
        </div>
      </div>
    </header>
  )
}
