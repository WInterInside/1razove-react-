import React, {useState, useEffect} from "react"
import "./Footer.scss";

export default function Footer() {
  let [show, setShow] = useState(true);


  useEffect(() => {
    setShow(window.location.pathname != "/404")
  })

  return (
    show && <footer className="footer">
      <div className="container container--padding0">
        <div className="footer__card">
          <p className="footer__text"><span className="footer__text footer__text--colored"> Якщо ви готові впроваджувати використання одноразових медичних виробів або хочете  проконсультуватися —</span> сміливо телефонуйте або пишіть нам:</p>
          <ul className="footer__contacts">
            <li className="footer__contact footer__contact--email">
              <h2 className="footer__heading visually-hidden">Емейл:</h2>
              <a className="footer__contactlink" href="mailto:info@1razove.ua">info@1razove.ua</a>
            </li>
              <li className="footer__contact footer__contact--telephone">
              <h2 className="footer__heading visually-hidden">Телефон:</h2>
              <a className="footer__contactlink" href="tel:+380444543322"> +38 044 454 33 22 </a>
            </li>
          </ul>
        </div>
        <a className="footer__link" href="#">Айдентика і Сайт: Other Land</a>
      </div>
    </footer>
  )
}
