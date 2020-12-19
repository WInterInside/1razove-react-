import React from "react"
import "./Brand.scss";

export default function BrandDescription({data}) {
  return (
    <section className="brand__discription">
      <div className="container">
        <div className="brand__wrapper">
          <div className="brand__logotype brand__logotype--desctop">
          <picture>
            <img className="brand__img" src={data.brandImage} alt="logotype" width="277" height="92" />
          </picture>
          </div>
          <div className="brand__wrapper brand__wrapper--column">
            <h1 className="brand__heading">{data.title}</h1>
            <div className="brand__logotype brand__logotype--mobile">
              <picture>
                <img className="brand__img" src={data.brandImage} alt="logotype" width="277" height="92" />
              </picture>
            </div>
            <p className="brand__text brand__text--discription">{data.description}</p>
            <div className="brand__sphere">
              <h2 className="brand__heading brand__heading--colored brand__heading--h2">{data.blueText}</h2>
              <p className="brand__text brand__text--sphere">{data.text}</p>
            </div>
            <a className="brand__link button button--price" href={data.btnLink}>{data.btnText}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
