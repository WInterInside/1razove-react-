import React, { useState, useEffect } from "react"
import "../components/header/Header.scss";
import dataStore from '../stores/dataStore';

export default function ErrorPage() {
  let [data, setData] = useState(null);
  useEffect(async () => data ? data : setData(await dataStore.getData()) );

  return (
      <header className="page header header--404">
        { !!data && <div>
          <div className="container">
            <div className="header__wrapper header__wrapper--main">
              <Link className="header__logo" to={`/`}>
                <img className="header__img" src="/images/logo.svg" alt="1razovoe logotype" width="316" height="522" />
              </Link>
              <div className="header__wrapper header__wrapper--column">
                <div className="header__wrapper header__wrapper--menu">
                  <div className="header__wrapper header__wrapper--row">
                    <Link className="header__logo header__logo--mobile" to={`/`}>
                      <img className="header__img header__img--small" src="/images/logo-small-blue.svg" alt="1razovoe logotype" width="247" height="56" />
                    </Link>
                    <div className="header__menu">
                      <span className="header__menu-span"></span>
                      <span className="header__menu-span"></span>
                      <span className="header__menu-span"></span>
                    </div>
                  </div>
                  <nav className="navigation">
                    <ul className="navigation__list">
                      {
                        data.heroBlock.menu.map((value, index) => {
                          return <li className="navigation__item" key={index}>
                              <Link className="navigation__link navigation__link--mobile" to={value.url}>
                                {value.text}
                              </Link>
                            </li>
                        })
                      }
                    </ul>
                  </nav>
                  <div className="languages">
                    <ul className="languages__list">
                    {
                        data.project.langs.map((value, index) => {
                          return <li key={index} onClick={() => dataStore.changeLang(value.lang)} className="languages__item">{value.langText}</li>
                        })
                      }
                    </ul>
                  </div>
                </div>
                <div className="header__error">
                  <h1 className="header__text header__text--err">404</h1>
                  <p className="header__texterror"> Упс! <span className="header__text header__text--colored">ТакоЇ сторінки не існує</span></p>
                  <Link className="header__link button button--index" to={`/`}>На головну сторінку</Link>
                </div>
              </div>
            </div>
          </div>
      
        </div>
        }
        </header>
  )
}
