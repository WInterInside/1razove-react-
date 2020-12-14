import React from "react"
import "./Lang.scss";

export default function Header() {
  return (
    <div className="languages">
      <ul className="languages__list">
        <li className="languages__item">Укр</li>
        <li className="languages__item">Рус</li>
        <li className="languages__item">Eng</li>
      </ul>
    </div>
  )
}
