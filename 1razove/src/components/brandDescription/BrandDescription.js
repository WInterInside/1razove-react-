import React, {useState} from "react"
import "./Brand.scss";
import Overlay from '../overlay/Overlay';
import Form from '../form/Form';

export default function BrandDescription({data}) {
  let [showPopup, setShowPopup] = useState(false);

  function closePopup(){
    setShowPopup(false);
  }

  function openPopup(){
    setShowPopup(true);
  }

  return (
    <section className="brand__description">
      <div className="container">
        <div className="brand__wrapper">
          <div className="brand__logotype brand__logotype--desctop">
          <picture>
            <img className="brand__img" src={data.brandImage} alt="logotype" width="277" height="92" />
          </picture>
          </div>
          <div className="brand__wrapper brand__wrapper--column">
            <h1 className="brand__heading">{data.title}</h1>
            <div className="brand__logotype brand__logotype--mobile">
              <picture>
                <img className="brand__img" src={data.brandImage} alt="logotype" width="277" height="92" />
              </picture>
            </div>
            <p className="brand__text brand__text--description">{data.description}</p>
            <div className="brand__sphere">
              <h2 className="brand__heading brand__heading--colored brand__heading--h2">{data.blueText}</h2>
              <p className="brand__text brand__text--sphere">{data.text}</p>
            </div>
            <a className="brand__link button button--price" onClick={() => openPopup()}>{data.btnText}</a>
          </div>
        </div>
      </div>

      { 
        showPopup && <Overlay closePopup={() => closePopup()}>
          <Form closePopup={() => closePopup()}/>
        </Overlay>
      }

    </section>
  )
}
