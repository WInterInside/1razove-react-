import React from "react"
import "./Problematic.scss";

export default function Problematic() {
  return (
    <section className="problematic">
        <div className="problematic__wrapper problematic__wrapper--main container container--padding0">
          <div className="problematic__wrapper problematic__wrapper--card">
            <div className="problematic__card problematic__card--first">
              <h3 className="problematic__heading problematic__heading--card">Переробка складна, дорога і не дає 100% стерильність</h3>
              <div className="problematic__wrapper problematic__wrapper--list">
                <ul className="problematic__list">
                  <li className="problematic__item">Витрати праці/енергії/води</li>
                  <li className="problematic__item">Організувати контроль якості</li>
                  <li className="problematic__item">Утилізація хімікатів</li>
                  <li className="problematic__item">Повторна стерилізація погіршує продукт</li>
                  <li className="problematic__item">Витрати на заміну</li>
                </ul>
              </div>
            </div>
            <div className="problematic__card problematic__card--second">
              <h3 className="problematic__heading problematic__heading--card">Переробка складна, дорога і не дає 100% стерильність</h3>
              <div className="problematic__wrapper problematic__wrapper--list">
                <ul className="problematic__list">
                  <li className="problematic__item">Витрати праці/енергії/води</li>
                  <li className="problematic__item">Організувати контроль якості</li>
                  <li className="problematic__item">Утилізація хімікатів</li>
                  <li className="problematic__item">Повторна стерилізація погіршує продукт</li>
                  <li className="problematic__item">Витрати на заміну</li>
                </ul>
              </div>
            </div>
            <div className="problematic__card problematic__card--third">
              <h3 className="problematic__heading problematic__heading--card">Переробка складна, дорога і не дає 100% стерильність</h3>
              <div className="problematic__wrapper problematic__wrapper--list">
                <ul className="problematic__list">
                  <li className="problematic__item">Витрати праці/енергії/води</li>
                  <li className="problematic__item">Організувати контроль якості</li>
                  <li className="problematic__item">Утилізація хімікатів</li>
                  <li className="problematic__item">Повторна стерилізація погіршує продукт</li>
                  <li className="problematic__item">Витрати на заміну</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="problematic__description container">
            <h2 className="problematic__heading">Проблематика</h2>
            <p className="problematic__text">Витрати коштів на використання виробів багаторазового призначення - контрольовані і прогнозовані</p>
          </div>
        </div>
    </section>
  )
}
