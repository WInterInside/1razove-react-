import React from "react"
import "./Form.scss";

export default function Form({closePopup}) {

  function close(){
    closePopup();
  }

  function stopPropagation(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  return (
    <section className="form container container-padding0" onClick={(e) => stopPropagation(e)}>
      <p className="form__text form__text--main">Отримати прайс-лист продуктів Maxtec</p>
      <p className="form__text">Введіть ваші дані і ми відправимо вам прайс-лист на пошту.</p>
      <form action="https://echo.htmlacademy.ru" method="post">
        <div className="form__wrapper">
          <label className="form__label visually-hidden" for="name"> Ваше ім’я / Назва організації </label>
          <input className="form__input" type="text" name="name" id="name" placeholder="Ваше ім’я / Назва організації" required />
        </div>
        <div className="form__wrapper">
          <label className="form__label visually-hidden" for="email"> Email </label>
          <input className="form__input" type="text" name="name" id="email" placeholder="Email" required />
        </div>
        <input className="form__submit button button--submit" type="submit" name="submit" value="Отримати прайс-лист" />
        <div className="form__toggle" onClick={() => close()}></div>
      </form>
    </section>
  )
}
