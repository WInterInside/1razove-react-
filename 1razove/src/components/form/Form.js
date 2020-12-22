import React, { useState } from "react"
import "./Form.scss";
import axios from 'axios';

export default function Form({closePopup}) {
  let [email, setEmail] = useState('');
  let [name, setName] = useState('');

  function close(){
    closePopup();
  }

  function stopPropagation(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onEmailChange (e) {
    setEmail(e.target.value);
  }

  function submit(){
    let url = `https://crm.razove.com.ua/rest/1/tmz971rk5etxiy2j/crm.lead.add.json?FIELDS[TITLE]=Новий лід&FIELDS[NAME]=${name}&FIELDS[EMAIL][0][VALUE]=${email}&FIELDS[EMAIL][0][VALUE_TYPE]=WORK&FIELDS[UTM_SOURCE]=fb&FIELDS[UTM_CAMPAIGN]=123&FIELDS[UTM_CONTENT]=123&FIELDS[UTM_MEDIUM]=123&FIELDS[UTM_TERM]=123`;
    axios.get(url);
    close();
  }

  return (
    <section className="form container container-padding0" onClick={(e) => stopPropagation(e)}>
      <p className="form__text form__text--main">Отримати прайс-лист продуктів Maxtec</p>
      <p className="form__text form__text--sub">Введіть ваші дані і ми відправимо вам прайс-лист на пошту.</p>
      <form>
        <div className="form__wrapper">
          <label className="form__label visually-hidden" for="name"> Ваше ім’я / Назва організації </label>
          <input  onChange={onNameChange} className="form__input" type="text" name="name" id="name" placeholder="Ваше ім’я / Назва організації" required />
        </div>
        <div className="form__wrapper">
          <label className="form__label visually-hidden" for="email"> Email </label>
          <input onChange={onEmailChange} className="form__input" type="text" name="name" id="email" placeholder="Email" required />
        </div>
        <input onClick={submit} className="form__submit button button--submit" name="submit" value="Отримати Прайс-Лист" />
        <div className="form__toggle" onClick={() => close()}></div>
      </form>
    </section>
  )
}
