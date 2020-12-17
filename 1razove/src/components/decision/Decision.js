import React from "react"
import "./Decision.scss";
import Logo1 from "../../images/1.svg";

export default function Decision({data}) {
  return (
    <section className="decision">
      <div className="container">
        <h2 className="visually-hidden">decision</h2>
        <div className="decision__wrapper decision__wrapper--main">
          <div className="decision__wrapper">
            <a className="decision__logo">
              <picture>
                <img className="decision__img" src={Logo1} alt="1razovoe logotype" width="325" height="397" />
              </picture>
            </a>
          </div>
          <div className="decision__wrapper decision__wrapper--column">
            <p className="decision__text">{data.titleWhite} <span className="decision__text decision__text--colored">{data.title}</span></p>
            <ol className="decision__list">
              {
                data.text.split('|').map((value,index) => {
                  return <li key={index} className="decision__item">{value}</li>
                })
              }
            </ol>
            <p className="decision__text">{data.videoTitle}</p>
            <iframe className="decision__video" width="480" height="360" src={data.videoUrl} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
