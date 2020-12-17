import React from "react"
import "./Brand.scss";
import BrandImg from "../../images/maxtec.svg";

export default function BrandDescription() {
  return (
    <div className="brand__description">
      <div className="brand__logotype">
        <picture>
          <img className="brand__img" src={BrandImg} alt="logotype" width="277" height="92" />
        </picture>
      </div>
      <h1 className="brand__heading">Maxtec</h1>
      <p className="brand__text">Maxtec has been a leader in oxygen analysis and delivery products for over 20 years.
        We provide a full line of replacement oxygen sensors and SpO2 probes compatible with all major applications in the market.
        Customers worldwide have come to appreciate Maxtec for our well-known oxygen analyzers and monitors in both medical and non-medical applications.
        Our range of products also include pulse oximeters, neonatal products, air-oxygen mixers, ventilator and ventilator support products applicable to hospital,
        homecare, and anesthesia markets.</p>
      <div className="brand__sphere">
        <h2 className="brand__heading brand__heading--h2">Cфера використання:</h2>
        <p className="brand__text brand__text--sphere">Анастезіологія </p>
        <p className="brand__text brand__text--sphere">Інтенсивна терапія</p>
      </div>
      <a className="brand__link button" href="#">Скачать прайс-лист</a>
    </div>
  )
}
