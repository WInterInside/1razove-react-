import React from "react"
import "./Lang.scss";
import dataStore from '../../stores/dataStore';

export default function Lang({data}) {
  console.log(data);

  return (
    <div className="languages">
      <ul className="languages__list">
        {
          data.map((value,index) => {
            return <li key={index} onClick={() => dataStore.changeLang(value.lang)} className={`languages__item ${dataStore.getLang() == value.lang ? 'languages__item--current':''}`}>{value.langText}</li>
          })
        }
      </ul>
    </div>
  )
}
