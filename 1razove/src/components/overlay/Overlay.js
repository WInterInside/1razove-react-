import React from "react"
import "./Overlay.scss";

export default function Overlay(props) {
  function close(){
    props.closePopup();
  }

  return (
    <section className="overlay" onClick={() => close()}>
      <div className="overlay__content">
        {props.children}
      </div>
    </section>
  )
}
