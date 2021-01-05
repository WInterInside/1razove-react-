import React from "react"
import "./contacts.scss";

export default function Contacts({data}) {
  return (
    <section className="contacts">
      <div className="container container--padding0">
        <div className="contacts__wrapper">
          <h1 className="contacts__header">{data.title}</h1>
          <div className="contacts__card">
            <ul className="contacts__list">
            <li className="contacts__item contacts__item--adress">
              <h2 className="contacts__heading">{data.addressTitle}:</h2>
                <a className="contacts__link" href="https://goo.gl/maps/eiW6tiefjzq9vrmi7" target="_blank">
                  <address className="contacts__adress">
                    {data.addressText}
                  </address>
                </a>
            </li>
            <li className="contacts__item contacts__item--email">
              <h2 className="contacts__heading">{data.emailTitle}:</h2>
              <a href={`mailto:${data.emailText}`}>{data.emailText}</a>
            </li>
            <li className="contacts__item contacts__item--telephone">
              <h2 className="contacts__heading">{data.phoneTitle}:</h2>
              <a className="contacts__link contacts__link--telephone" href={`tel:${data.phoneText}`}>{data.phoneText}</a>
            </li>
            <li className="contacts__item contacts__item--social">
              <h2 className="contacts__heading">{data.socialsTitle}:</h2>
              <section className="social">
                <ul className="social__list">
                  <li className="social__item">
                    <a className="social__link social__link--fb" href={data.fbLink} aria-label="1razove facebook">
                      <span className="visually-hidden">facebook</span>
                      <svg className="social__icon social__icon--fb" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect className="social__hovered" width="40" height="40" rx="6.667" fill="#0627B0"/>
                      <path d="M21.612 29.87zm.2-.034l-.12.02.12-.02zm-.673.099zm.191-.023zm.755-.13zm.675-.168l-.085.023.085-.023zm-.204.056l-.093.024.093-.024zm-.268.066l-.098.023.098-.023zm-1.448.229zM30 20c0-5.522-4.478-10-10-10s-10 4.478-10 10 4.478 10 10 10l.176-.002v-7.785h-2.149V19.71h2.149v-1.842c0-2.137 1.304-3.3 3.21-3.3.913 0 1.698.068 1.927.098V16.9h-1.315c-1.037 0-1.238.492-1.238 1.216v1.594h2.48l-.323 2.504H22.76v7.4C26.94 28.416 30 24.565 30 20zm-9.34 9.978zm-.318.016z" fill="#fff"/></svg>
                    </a>
                  </li>
                  <li className="social__item">
                    <a className="social__link social__link--inst" href={data.instaLink} aria-label="1razove Instagram">
                      <span className="visually-hidden">Instagram</span>
                      <svg className="social__icon social__icon--inst"width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect className="social__hovered" width="40" height="40" rx="6.667" fill="#0627B0"/><path d="M21.914 20a1.914 1.914 0 11-3.828 0 1.914 1.914 0 013.828 0z" fill="#fff"/>
                      <path d="M24.476 16.613a1.78 1.78 0 00-.43-.66 1.778 1.778 0 00-.66-.43c-.202-.078-.506-.171-1.066-.197-.605-.028-.787-.034-2.32-.034s-1.715.006-2.32.034c-.56.025-.864.12-1.066.198a1.76 1.76 0 00-.66.43 1.78 1.78 0 00-.43.66c-.079.202-.172.506-.198 1.066-.028.605-.034.787-.034 2.32s.006 1.715.034 2.32c.025.56.12.864.198 1.067.092.25.239.475.43.66.184.19.41.337.66.43.202.078.506.172 1.066.197.605.028.787.034 2.32.034 1.534 0 1.715-.006 2.32-.034.56-.025.864-.119 1.067-.198a1.9 1.9 0 001.09-1.09c.078-.202.172-.506.197-1.066.028-.605.034-.787.034-2.32s-.006-1.715-.034-2.32c-.025-.56-.119-.864-.198-1.067zM20 22.95a2.949 2.949 0 110-5.898 2.949 2.949 0 010 5.898zm3.065-5.325a.69.69 0 110-1.379.69.69 0 010 1.379z" fill="#fff"/><path d="M20 10c-5.522 0-10 4.478-10 10s4.478 10 10 10 10-4.478 10-10-4.478-10-10-10zm5.708 12.367c-.028.612-.125 1.029-.267 1.394a2.936 2.936 0 01-1.68 1.68c-.365.142-.782.239-1.393.267-.613.027-.808.034-2.368.034-1.56 0-1.755-.007-2.367-.034-.611-.028-1.029-.125-1.394-.267a2.814 2.814 0 01-1.017-.663 2.815 2.815 0 01-.662-1.017c-.142-.365-.24-.782-.267-1.393-.029-.613-.035-.809-.035-2.368 0-1.56.006-1.755.034-2.367.028-.612.125-1.029.267-1.394.144-.383.37-.73.663-1.017a2.813 2.813 0 011.017-.663c.365-.142.782-.239 1.394-.267.612-.027.808-.034 2.367-.034 1.56 0 1.755.007 2.367.035.612.027 1.029.124 1.394.266.383.144.73.37 1.017.663.293.287.519.634.663 1.017.142.365.239.782.267 1.394.028.612.034.808.034 2.367 0 1.56-.006 1.755-.034 2.367z" fill="#fff"/></svg>
                    </a>
                  </li>
                  <li className="social__item">
                    <a className="social__link social__link--tm" href={data.telegramLink} aria-label="1razove telegram">
                      <span className="visually-hidden">telegram</span>
                      <svg className="social__icon social__icon--tm" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect className="social__hovered" width="40" height="40" rx="6.667" fill="#0627B0"/>
                      <path d="M20 30c5.524 0 10-4.476 10-10s-4.476-10-10-10-10 4.476-10 10 4.476 10 10 10zm-5.424-10.217l9.642-3.717c.447-.162.838.109.693.786v-.001l-1.641 7.734c-.122.548-.447.682-.903.423l-2.5-1.842-1.206 1.162c-.134.133-.246.245-.504.245l.177-2.544 4.634-4.186c.201-.177-.046-.277-.311-.1l-5.726 3.605-2.469-.77c-.535-.17-.547-.536.114-.795z" fill="#fff"/></svg>
                    </a>
                  </li>
                  <li className="social__item">
                    <a className="social__link social__link--yt" href={data.ytLink} aria-label="1razove yotube">
                      <span className="visually-hidden">Razove in Youtube</span>
                      <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className="social__hovered" width="40" height="40" rx="6.667" fill="#0627B0"/>
                        <path d="M18.666 21.747l3.253-1.873L18.666 18v3.747z" fill="#fff"/>
                        <path d="M20 10c-5.522 0-10 4.478-10 10s4.478 10 10 10 10-4.478 10-10-4.478-10-10-10zm6.248 10.01s0 2.028-.257 3.006a1.566 1.566 0 01-1.101 1.102c-.978.257-4.89.257-4.89.257s-3.901 0-4.89-.268a1.566 1.566 0 01-1.101-1.101C13.75 22.038 13.75 20 13.75 20s0-2.028.258-3.006a1.598 1.598 0 011.101-1.112c.978-.257 4.89-.257 4.89-.257s3.912 0 4.89.268c.535.144.957.566 1.101 1.101.268.978.258 3.016.258 3.016z" fill="#fff"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </section>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
