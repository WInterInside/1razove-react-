import React from "react"
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item"><a className="navigation__link navigation__link--mobile" href="#brands">Бренди та Напрямки</a></li>
        <li className="navigation__item"><a className="navigation__link navigation__link--mobile" href="/contacts">Контактна Інформація</a></li>
      </ul>
    </nav>
  )
}
