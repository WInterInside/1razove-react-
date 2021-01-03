import React from "react"
import "./Leaflet.scss";

export default function Leaflet({data}) {
  return (
    <div className="leaflet">
      <p className="leaflet__text">{ data.downloadBlockTitle || data.cardTitle }<span className="leaflet__text leaflet__text--colored">{ data.downloadBlockTitle2 || data.cardText }</span></p>
      <a className="leaflet__link button button--pdf" target="_blank" href={data.downloadBlockBtnLink || data.cardPdfLink }>{data.downloadBlockBtnText || data.cardBtnText }</a>
    </div>
  )
}
