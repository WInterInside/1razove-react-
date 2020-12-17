import React from "react"
import "./Brand.scss";
import BrandImg from "../../images/maxtec.svg";

export default function BrandDescription({data}) {
  return (
    <section class="brand__discription">
      <div class="container">
        <div class="brand__wrapper">
          <div class="brand__logotype brand__logotype--desctop">
          <picture>
            <img className="brand__img" src={data.brandImage} alt="logotype" width="277" height="92" />
          </picture>
          </div>
          <div class="brand__wrapper brand__wrapper--column">
            <h1 class="brand__heading">{data.title}</h1>
            <div class="brand__logotype brand__logotype--mobile">
              <picture>
                <img className="brand__img" src={data.brandImage} alt="logotype" width="277" height="92" />
              </picture>              
            </div>
            <p class="brand__text">{data.description}</p>
            <div class="brand__sphere">
              <h2 class="brand__heading brand__heading--colored brand__heading--h2">{data.blueText}</h2>
              <p class="brand__text brand__text--sphere">{data.text}</p>
            </div>
            <a class="brand__link button button--price" href={data.btnLink}>{data.btnText}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
