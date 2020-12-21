import React from "react"
import { useState } from 'react';
import "./Brands.scss";


export default function Brands({data}) {


  const [count, setCount] = useState(window.innerWidth <= 950 ? 4:100);
  const [name, setName] = useState("Показати більше");


  function toggleBrands() {
    if (count <= 4) {
      setCount(count + 100);
      setName("Згорнути");
    } else {
      setCount(count - 100);
      setName("Показати більше");
    }
  }

  return (
    <section className="brands">
      <a className="brands__link" name="brands"></a>
      <div className="container">
        <h2 className="brands__heading">{data.title}</h2>
        <ul className="brands__list">
          {
            data.brands.slice(0, count).map((value,index) => {
              return <li key={index} className="brands__item">
                <a className="brands__link" href={`/brand/${value.url}`}>
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
        <button className={`brands__button button button--more button--on ${data.brands.length <= 4 ? 'hidden' : ''}`} type="button" name="button" onClick={() => toggleBrands()}>
          <span className="button__text">{name}</span>
        </button>
      </div>
    </section>
  )
}
