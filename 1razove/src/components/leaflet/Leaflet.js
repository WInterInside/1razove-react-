import React from "react"
import "./Leaflet.scss";

export default function Leaflet() {
  return (
    <div className="leaflet">
      <p className="leaflet__text">Завантажте&nbsp;листівку <span className="leaflet__text leaflet__text--colored"> із&nbsp;науковими даними про використання одноразових медичних виробів</span></p>
      <a className="leaflet__link button button--pdf" target="_blank" href="http://razove.com.ua/prices/price_razove.pdf">Завантажити PDF</a>
    </div>
  )
}
