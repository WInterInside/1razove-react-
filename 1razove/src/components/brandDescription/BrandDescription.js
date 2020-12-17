import React from "react"
import "./Brand.scss";
import BrandImg from "../../images/maxtec.svg";

export default function BrandDescription() {
  return (
    <section class="brand__discription">
      <div class="container">
        <div class="brand__wrapper">
          <div class="brand__logotype brand__logotype--desctop">
          <picture>
            <img className="brand__img" src={BrandImg} alt="logotype" width="277" height="92" />
          </picture>
          </div>
          <div class="brand__wrapper brand__wrapper--column">
            <h1 class="brand__heading">Maxtec</h1>
            <div class="brand__logotype brand__logotype--mobile">
              <picture>
                <img className="brand__img" src={BrandImg} alt="logotype" width="277" height="92" />
              </picture>              
            </div>
            <p class="brand__text">Maxtec has been a leader in oxygen analysis and delivery products for over 20 years.
              We provide a full line of replacement oxygen sensors and SpO2 probes compatible with all major applications in the market.
              Customers worldwide have come to appreciate Maxtec for our well-known oxygen analyzers and monitors in both medical and non-medical applications.
              Our range of products also include pulse oximeters, neonatal products, air-oxygen mixers, ventilator and ventilator support products applicable to hospital,
              homecare, and anesthesia markets.</p>
            <div class="brand__sphere">
              <h2 class="brand__heading brand__heading--colored brand__heading--h2">Cфера використання:</h2>
              <p class="brand__text brand__text--sphere">Анастезіологія та ІТ, Радіологія, Інфузійна терапія, Екстрена медицина </p>
            </div>
            <a class="brand__link button button--price" href="#">Отримати прайс-лист</a>
          </div>
        </div>
      </div>
    </section>
  )
}
