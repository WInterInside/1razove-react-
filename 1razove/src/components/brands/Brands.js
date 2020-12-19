import React from "react"
import "./Brands.scss";


export default function Brands({data}) {
  return (
    <section className="brands">
      <a className="brands__link" name="brands"></a>
      <div className="container">
        <h2 className="brands__heading">{data.title}</h2>
        <ul className="brands__list">
          {
            data.brands.map((value,index) => {
              return <li key={index} className="brands__item">
                <a className="brands__link" href={value.url}>
                  <div className="brands__wrapper">
                    {/* <h2 className="brands__name visually-hidden">Maxtec</h2> */}
                    <img className="brands__img brands__img--maxtec" src={value.img} alt="maxtec logotype" width="176" height="59" />
                    <p className="brands__description brands__description--maxtec">{value.text}</p>
                  </div>
                </a>
              </li>
            })
          }
        </ul>
        <button className="brands__button button button--more button--on" type="button" name="button">Показати більше</button>
      </div>
    </section>
  )
}
