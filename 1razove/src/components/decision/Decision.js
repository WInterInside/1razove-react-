import React from "react"
import "./Decision.scss";
import Logo1 from "../img/1.svg";

export default function Decision() {
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
            <p className="decision__text">Рішення – використовуй одноразове! <span className="decision__text decision__text--colored">Перехід на одноразові медичні вироби позбавить вас таких проблем:</span></p>
            <ol className="decision__list">
              <li className="decision__item">Гарантія чистоти і стерильності</li>
              <li className="decision__item">Чіткі витрати в бюджеті лікарні</li>
              <li className="decision__item">Ризики  післяопераційних ускладнень мінімізовано</li>
              <li className="decision__item">Реальна економія!</li>
            </ol>
            <p className="decision__text">Нас підтримують лідери в галузі</p>
            <iframe className="decision__video" width="480" height="360" src="https://www.youtube.com/embed/xFa2_PVMeDQ" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
