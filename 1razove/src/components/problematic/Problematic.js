import React from "react"
import "./Problematic.scss";

export default function Problematic({data}) {
  return (
    <section className="problematic">
        <div className="problematic__wrapper problematic__wrapper--main container container--padding0">
          <div className="problematic__wrapper problematic__wrapper--card">
            {
              data.cards.map((value,index) => {
                return <div key={index} className="problematic__card" style={{backgroundColor: value.backgroundColor}}>
                  <h3 className="problematic__heading problematic__heading--card">{value.title}</h3>
                  <div className="problematic__wrapper problematic__wrapper--list">
                    <ul className="problematic__list">
                      {
                        value.text.split('|').map((val, k) => {
                          return <li key={k} className="problematic__item">{val}</li>
                        })
                      }
                    </ul>
                  </div>
                </div>
              })
            }
            
          </div>
          <div className="problematic__description container">
            <h2 className="problematic__heading">{data.title}</h2>
            <p className="problematic__text">{data.text}</p>
          </div>
        </div>
    </section>
  )
}
