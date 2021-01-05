import React from "react"
import "./Nav.scss";
import { Link } from 'react-router-dom';

export default function Nav({data, closeMenu}) {
  function hashClick(e, hash){
    if(hash.indexOf('#') > -1){ 
      e.preventDefault();
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth'
      });
      closeMenu();
    }
  }

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {data.map((value, index) => {
          return <li key={index} className="navigation__item">
             <Link className="navigation__link navigation__link--mobile" to={`/${value.url}`} onClick={(e) => hashClick(e, value.url)}>
              {value.text}
             </Link>
            </li>
        })}
      </ul>
    </nav>
  )
}
