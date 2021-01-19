import React, { useState } from "react"
import "./ProductCard.scss";
import Overlay from '../overlay/Overlay';
import ProductIndications from "../productIndications/ProductIndications";
import Leaflet from "../leaflet/Leaflet";
import Form from '../form/Form';

export default function ProductCard({data}) {
  let [showPopup, setShowPopup] = useState(false);

  function closePopup(){
    setShowPopup(false);
  }

  function openPopup(){
    setShowPopup(true);
  }

  return (
    <div className="product__card">
      <div className="product__image product__image--desktop">
        <picture>
          <img className="product__img" src={data.images[0].url} alt={data.title} />
        </picture>
      </div>
      <div className="product__discriprion">
        <h1 className="product__name">{data.title}</h1>
        <div className="product__image product__image--mobile">
          <picture>
            <img className="product__img" src={data.images[0].url} alt={data.title} />
          </picture>
        </div>
        <p className="product__text">{data.text}</p>
        <ProductIndications data={data}/>
        <div className="product__data">
          {
            data.textHtmlElements.map((elem, index) => {
              switch(elem.type) {
                case 'card':
                  return <ul key={index} className="product__list product__list----advantages">
                    <li className="product__item product__item--advantages">
                      <h3 className="product__heading product__heading--advantages">{elem.title}</h3>
                      <p className="product__text product__text--advantages">{elem.text}</p>
                    </li>
                  </ul>;
                case 'list':
                  return <div key={index} className="product__numbereditem"><div className="product__number">{elem.title}</div> <span className="product__numbereditem-text"> {elem.text} </span>  </div>;
                case 'title':
                  return <h2 key={index} className='product__heading product__heading--data'>{elem.title}</h2>;
                case 'text':
                  return <p key={index} className='product__text product__text--data'>{elem.text}</p>;
                default:
                  return <p key={index} className='product__text product__text--data'>{elem.text}</p>;
              }
            })
          }
        </div> 
        <Leaflet data={data} openPopup={() => openPopup()}/>
      </div>
      { 
        showPopup && <Overlay closePopup={() => closePopup()}>
          <Form closePopup={() => closePopup()} data={data} fileUrl={data.downloadBlockBtnLink} />
        </Overlay>
      }
    </div>
  )
}
