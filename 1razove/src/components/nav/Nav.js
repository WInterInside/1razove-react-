import React from "react"
import "./Nav.scss";

export default function Nav({data}) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {data.map((value, index) => {
          return <li key={index} className="navigation__item">
              <a className="navigation__link navigation__link--mobile" href={value.url}>{value.text}</a>
            </li>
        })}
      </ul>
    </nav>
  )
}
