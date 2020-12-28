import React from "react"
import "./About.scss";
import Leaflet from "../leaflet/Leaflet";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__block">
            <div className="about__block-sticky">
              <h2 className="about__heading">Про 1razove</h2>
              <p className="about__description">Ми – Разове: компанія, яка продає медичні вироби одноразового використання кращих світових брендів.</p>
            </div>
          </div>
          <div className="about__block">
              <p className="about__text">Наш фокус  - на якості. Тому вся продукція пройшла перевірку з якості та має відповідні документи.</p>
              <p className="about__text">Ми маємо торгових представників по території України, які готові ґрунтовно проконсультувати та здійснити постачання медичних одноразових виробів у ваш медичний заклад.</p>
              <p className="about__text">Разове віддано пропагує використання тільки одноразового, заради безпеки пацієнтів та медичного персоналу!</p>
              <Leaflet />
            </div>
        </div>
      </div>
    </section>
  )
}
