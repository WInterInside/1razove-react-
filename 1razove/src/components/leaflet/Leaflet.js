import React from "react" 
import "./Leaflet.scss";

export default function Leaflet({data, openPopup}) {
  return (
    <div className="leaflet">
      <p className="leaflet__text">{ data.downloadBlockTitle || data.cardTitle }<br /><span className="leaflet__text leaflet__text--colored">{ data.downloadBlockTitle2 || data.cardText }</span></p>
      { openPopup && <a className="leaflet__link button button--pdf" onClick={openPopup}>{data.downloadBlockBtnText || data.cardBtnText }</a> }
      { !openPopup && <a className="leaflet__link button button--pdf" target="_blank" href={data.downloadBlockBtnLink || data.cardPdfLink }>{data.downloadBlockBtnText || data.cardBtnText }</a> }
    </div>
  )
}
