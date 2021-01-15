import React from "react"
import "./About.scss";
import Leaflet from "../leaflet/Leaflet";

export default function About({data}) {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__block">
            <div className="about__block-sticky">
              <h2 className="about__heading">{ data.title }</h2>
              <p className="about__description">{ data.text }</p>
            </div>
          </div>
          <div className="about__block">
            {
              data.descriptionList.map((item,i) => {
                return <p key={i} className="about__text">{ item.text }</p>
              })
            }
            <Leaflet data={data} />
            </div>
        </div>
      </div>
    </section>
  )
}
