import React from "react"
import "./Brands.scss";
import MaxtecLogo from "../../images/maxtec-small.png";
import UlrichLogo from "../../images/ulrich-small.png";
import FlexicareLogo from "../../images/flexicare-small.png";
import DeltamedLogo from "../../images/deltamed-small.png";


export default function Brands() {
  return (
    <section className="brands">
      <a className="brands__link" name="brands"></a>
      <div className="container">
        <h2 className="brands__heading">Товари провідних світових брендів</h2>
        <ul className="brands__list">
          <li className="brands__item">
            <a className="brands__link" href="/brand/12">
              <div className="brands__wrapper">
                <h2 className="brands__name visually-hidden">Maxtec</h2>
                <img className="brands__img brands__img--maxtec" src={MaxtecLogo} alt="maxtec logotype" width="176" height="59" />
                <p className="brands__description brands__description--maxtec">Анастезіологія та ІТ</p>
              </div>
            </a>
          </li>
          <li className="brands__item">
            <a className="brands__link" href="/brand/12">
              <div className="brands__wrapper">
                <h2 className="brands__name visually-hidden">Ulrich Medical</h2>
                <img className="brands__img brands__img--ulrich" src={UlrichLogo} alt="Ulrich Medical logotype" width="128" height="46" />
                <p className="brands__description brands__description--ulrich">Радіологія</p>
              </div>
            </a>
          </li>
          <li className="brands__item">
            <a className="brands__link" href="/brand/12">
              <div className="brands__wrapper">
                <h2 className="brands__name visually-hidden">Flexicare</h2>
                <img className="brands__img brands__img--flexicare" src={FlexicareLogo} alt="Flexicare logotype" width="147" height="59" />
                <p className="brands__description brands__description--flexicare">Анастезіологія та ІТ,  Екстрена медицина</p>
              </div>
            </a>
          </li>
          <li className="brands__item">
            <a className="brands__link" href="/brand/12">
              <div className="brands__wrapper">
                <h2 className="brands__name visually-hidden">DeltaMed</h2>
                <img className="brands__img brands__img--deltamed" src={DeltamedLogo} alt="DeltaMed logotype" width="191" height="60" />
                <p className="brands__description brands__description--deltamed">Анастезіологія та ІТ, Радіологія, Інфузійна терапія, Екстрена медицина</p>
              </div>
            </a>
          </li>
        </ul>
        <button className="brands__button button button--more button--on" type="button" name="button">Показати більше</button>
      </div>
    </section>
  )
}
