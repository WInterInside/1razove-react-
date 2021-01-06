import React, {useState, useEffect} from "react"
import "./Footer.scss";

export default function Footer({data}) {
  let [show, setShow] = useState(true);


  useEffect(() => {
    setShow(window.location.pathname != "/404");
  })

  return (
    show && <footer className="footer">
      <div className="container container--padding0">
        <div className="footer__card">
          <p className="footer__text"><span className="footer__text footer__text--colored">{data.text}</span> {data.redText}</p>
          <ul className="footer__contacts">
            <li className="footer__contact footer__contact--email">
              <h2 className="footer__heading visually-hidden">{data.emailTitle}:</h2>
              <a className="footer__contactlink" href={`mailto:${data.email}`}>{data.email}</a>
            </li>
              <li className="footer__contact footer__contact--telephone">
              <h2 className="footer__heading visually-hidden">{data.phoneTitle}:</h2>
              <a className="footer__contactlink" href={`tel:${data.phone}`}> {data.phone}</a>
            </li>
          </ul>
        </div>
        <a className="footer__link" target="_blank" href={data.copyrightLink}>{data.copyrightText}</a>
      </div>
    </footer>
  )
}
