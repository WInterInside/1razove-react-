import React, { useState } from "react"
import "./Header.scss";
import "../nav/Nav.scss";
import "../lang/Lang.scss";
import dataStore from '../../stores/dataStore';
import { Link } from 'react-router-dom';

export default function BrandHeader({data}) {
  let [ showMenu, setShowMenu ] = useState(false);
  const lang = dataStore.getLang();

  function toggleMenu(){
    setShowMenu(!showMenu);
  }

  function stopPropagation(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  return (
    <header className="header header--brand">
      <div className="container">
        <div className="header__wrapper header__wrapper--main">
          <Link className="header__logo" to={`/${lang}/`}>
            <picture>
              <source media="(min-width: 950px)" srcSet="/images/logo-small-white.svg" />
              <img className="header__img header__img--small header__img--small-brand" src="/images/mobile-white.svg" alt="1razovoe logotype" width="316" height="522" />
            </picture>
          </Link>
          <div className={`header__wrapper-mobile ${showMenu ? 'header__wrapper-mobile--opened' : ''}`} onClick={toggleMenu}>
            <div className="header__wrapper header__wrapper--column">
              <div className={`header__wrapper header__wrapper--menu ${showMenu ? 'header__wrapper--opened' : ''}`} onClick={stopPropagation}>

                <div className="header__wrapper header__wrapper--row">
                  <Link className="header__logo" to={`/${lang}/`}>
                    <picture>
                      <img className="header__img header__img--menu" src="/images/mobile-bl.svg" alt="1razovoe logotype" width="247" height="56" />
                    </picture>
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
                      data.heroBlock.menu.map((value,index) => {
                        return <li key={index} className="navigation__item">
                            <Link className="navigation__link navigation__link--mobile" to={`/${lang}/${value.url}`}>{value.text}</Link>
                          </li>
                      })
                    }
                    <ul className="navigation__sociallist navigation__sociallist--desctop">
                      { data.heroBlock.ytLink && <li className="navigation__socialitem">
                          <a className="social__link social__link--yt" target="_blank" href={data.heroBlock.ytLink} aria-label="1razove yotube">
                            <span className="visually-hidden">Razove in Youtube</span>
                            <svg className="navigation__svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M8.667 11.747l3.253-1.874L8.667 8v3.747z" fill="#fff"/>
                              <path d="M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.478 10-10S15.522 0 10 0zm6.248 10.01s0 2.028-.257 3.006a1.566 1.566 0 01-1.101 1.102c-.978.257-4.89.257-4.89.257s-3.902 0-4.89-.268a1.566 1.566 0 01-1.101-1.101C3.75 12.038 3.75 10 3.75 10s0-2.028.258-3.006A1.598 1.598 0 015.11 5.882c.978-.257 4.89-.257 4.89-.257s3.912 0 4.89.268c.535.144.957.566 1.101 1.101.268.978.258 3.016.258 3.016z" fill="#fff"/>
                            </svg>
                          </a>
                        </li>
                      }
                      { data.heroBlock.telegramLink && <li className="navigation__socialitem">
                          <a className="social__link social__link--tm" target="_blank" href={data.heroBlock.telegramLink} aria-label="1razove telegram">
                            <span className="visually-hidden">Razove in telegram</span>
                            <svg className="navigation__svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M10 20c5.524 0 10-4.476 10-10S15.524 0 10 0 0 4.476 0 10s4.476 10 10 10zM4.576 9.783l9.642-3.717c.447-.162.838.109.693.786V6.85l-1.641 7.734c-.122.548-.447.682-.903.423l-2.5-1.842-1.206 1.162c-.133.133-.246.245-.504.245l.177-2.544 4.633-4.186c.202-.177-.045-.277-.31-.1L6.93 11.346l-2.468-.77c-.536-.17-.548-.535.113-.794z" fill="#fff"/>
                            </svg>
                          </a>
                        </li>
                      }
                      { data.heroBlock.instaLink && <li className="navigation__socialitem">
                          <a className="navigation__social navigation__social--inst" target="_blank" href={data.heroBlock.instaLink} aria-label="1razove Instagram">
                            <span className="visually-hidden">Razove in Instagram</span>
                            <svg className="navigation__svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9141 10C11.9141 11.0571 11.0571 11.9141 10 11.9141C8.94287 11.9141 8.08594 11.0571 8.08594 10C8.08594 8.94287 8.94287 8.08594 10 8.08594C11.0571 8.08594 11.9141 8.94287 11.9141 10Z" fill="white"/>
                              <path d="M14.4764 6.61343C14.3844 6.36411 14.2376 6.13843 14.0469 5.95319C13.8617 5.76245 13.6361 5.61566 13.3867 5.52365C13.1843 5.44507 12.8804 5.35153 12.3205 5.32605C11.7149 5.29843 11.5333 5.29248 10.0001 5.29248C8.46677 5.29248 8.28519 5.29828 7.67972 5.3259C7.11987 5.35153 6.81577 5.44507 6.61359 5.52365C6.36411 5.61566 6.13843 5.76245 5.95334 5.95319C5.7626 6.13843 5.61581 6.36395 5.52365 6.61343C5.44507 6.81577 5.35153 7.11987 5.32605 7.67972C5.29843 8.28519 5.29248 8.46677 5.29248 10.0001C5.29248 11.5333 5.29843 11.7149 5.32605 12.3205C5.35153 12.8804 5.44507 13.1843 5.52365 13.3867C5.61581 13.6361 5.76245 13.8617 5.95319 14.0469C6.13843 14.2376 6.36395 14.3844 6.61343 14.4764C6.81577 14.5552 7.11987 14.6487 7.67972 14.6742C8.28519 14.7018 8.46661 14.7076 9.99997 14.7076C11.5335 14.7076 11.7151 14.7018 12.3204 14.6742C12.8802 14.6487 13.1843 14.5552 13.3867 14.4764C13.8875 14.2833 14.2833 13.8875 14.4764 13.3867C14.555 13.1843 14.6486 12.8804 14.6742 12.3205C14.7018 11.7149 14.7076 11.5333 14.7076 10.0001C14.7076 8.46677 14.7018 8.28519 14.6742 7.67972C14.6487 7.11987 14.5552 6.81577 14.4764 6.61343ZM10.0001 12.9486C8.37155 12.9486 7.05136 11.6285 7.05136 9.99997C7.05136 8.3714 8.37155 7.05136 10.0001 7.05136C11.6285 7.05136 12.9487 8.3714 12.9487 9.99997C12.9487 11.6285 11.6285 12.9486 10.0001 12.9486ZM13.0653 7.62387C12.6848 7.62387 12.3762 7.31534 12.3762 6.93478C12.3762 6.55423 12.6848 6.2457 13.0653 6.2457C13.4459 6.2457 13.7544 6.55423 13.7544 6.93478C13.7542 7.31534 13.4459 7.62387 13.0653 7.62387Z" fill="white"/>
                              <path d="M10 0C4.478 0 0 4.478 0 10C0 15.522 4.478 20 10 20C15.522 20 20 15.522 20 10C20 4.478 15.522 0 10 0ZM15.7076 12.3674C15.6798 12.9787 15.5826 13.396 15.4407 13.7613C15.1424 14.5326 14.5326 15.1424 13.7613 15.4407C13.3961 15.5826 12.9787 15.6796 12.3676 15.7076C11.7552 15.7355 11.5596 15.7422 10.0002 15.7422C8.44055 15.7422 8.24509 15.7355 7.6326 15.7076C7.02148 15.6796 6.604 15.5826 6.23886 15.4407C5.85556 15.2965 5.50858 15.0705 5.22171 14.7783C4.92966 14.4916 4.70367 14.1444 4.55948 13.7613C4.41757 13.3961 4.32037 12.9787 4.2926 12.3676C4.26437 11.7551 4.25781 11.5594 4.25781 10C4.25781 8.44055 4.26437 8.24493 4.29245 7.6326C4.32022 7.02133 4.41727 6.604 4.55917 6.23871C4.70337 5.85556 4.9295 5.50842 5.22171 5.22171C5.50842 4.9295 5.85556 4.70352 6.23871 4.55933C6.604 4.41742 7.02133 4.32037 7.6326 4.29245C8.24493 4.26453 8.44055 4.25781 10 4.25781C11.5594 4.25781 11.7551 4.26453 12.3674 4.2926C12.9787 4.32037 13.396 4.41742 13.7613 4.55917C14.1444 4.70337 14.4916 4.9295 14.7784 5.22171C15.0705 5.50858 15.2966 5.85556 15.4407 6.23871C15.5827 6.604 15.6798 7.02133 15.7077 7.6326C15.7356 8.24493 15.7422 8.44055 15.7422 10C15.7422 11.5594 15.7356 11.7551 15.7076 12.3674Z" fill="white"/>
                            </svg>
                          </a>
                        </li>
                      }
                      { data.heroBlock.fbLink && <li className="navigation__socialitem">
                          <a className="navigation__social navigation__social--fb" target="_blank" href={data.heroBlock.fbLink} aria-label="1razove facebook">
                            <span className="visually-hidden">Razove in Facebook</span>
                            <svg className="navigation__svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.612 19.87zM11.812 19.836l-.12.02.12-.02zM11.139 19.935zM11.33 19.912zM12.085 19.782zM12.76 19.614l-.085.023.085-.023zM12.556 19.67l-.093.024.093-.024zM12.289 19.736l-.1.023.1-.023zM10.84 19.965zM20 10c0-5.522-4.478-10-10-10S0 4.478 0 10s4.478 10 10 10l.176-.002v-7.785H8.027V9.71h2.149V7.867c0-2.137 1.304-3.3 3.21-3.3.913 0 1.698.068 1.927.098V6.9h-1.315c-1.037 0-1.238.493-1.238 1.216v1.594h2.48l-.323 2.504H12.76v7.4C16.94 18.416 20 14.566 20 10zM10.66 19.978zM10.342 19.994z" fill="#fff"/>
                            </svg>
                          </a>
                        </li>
                      }
                    </ul>
                  </ul>
                </nav>
                <div className="languages">
                  <ul className="languages__list">
                    {
                      data.project.langs.map((value,index) => {
                        return <li key={index} onClick={() => dataStore.changeLang(value.lang)}  className={`languages__item ${dataStore.getLang() == value.lang ? 'languages__item--current':''}`}>{value.langText}</li>
                      })
                    }
                    <ul className="navigation__sociallist navigation__sociallist--mobile">
                      { data.ytLink && <li className="navigation__socialitem">
                          <a className="social__link social__link--yt" target="_blank" href={data.ytLink} aria-label="1razove yotube">
                            <span className="visually-hidden">Razove in Youtube</span>
                            <svg className="navigation__svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M8.667 11.747l3.253-1.874L8.667 8v3.747z" fill="#fff"/>
                              <path d="M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.478 10-10S15.522 0 10 0zm6.248 10.01s0 2.028-.257 3.006a1.566 1.566 0 01-1.101 1.102c-.978.257-4.89.257-4.89.257s-3.902 0-4.89-.268a1.566 1.566 0 01-1.101-1.101C3.75 12.038 3.75 10 3.75 10s0-2.028.258-3.006A1.598 1.598 0 015.11 5.882c.978-.257 4.89-.257 4.89-.257s3.912 0 4.89.268c.535.144.957.566 1.101 1.101.268.978.258 3.016.258 3.016z" fill="#fff"/>
                            </svg>
                          </a>
                        </li>
                      }
                      { data.telegramLink && <li className="navigation__socialitem">
                          <a className="social__link social__link--tm" target="_blank" href={data.telegramLink} aria-label="1razove telegram">
                            <span className="visually-hidden">Razove in telegram</span>
                            <svg className="navigation__svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M10 20c5.524 0 10-4.476 10-10S15.524 0 10 0 0 4.476 0 10s4.476 10 10 10zM4.576 9.783l9.642-3.717c.447-.162.838.109.693.786V6.85l-1.641 7.734c-.122.548-.447.682-.903.423l-2.5-1.842-1.206 1.162c-.133.133-.246.245-.504.245l.177-2.544 4.633-4.186c.202-.177-.045-.277-.31-.1L6.93 11.346l-2.468-.77c-.536-.17-.548-.535.113-.794z" fill="#fff"/>
                            </svg>
                          </a>
                        </li>
                      }
                      { data.instaLink && <li className="navigation__socialitem">
                          <a className="navigation__social navigation__social--inst" target="_blank" href={data.instaLink} aria-label="1razove Instagram">
                            <span className="visually-hidden">Razove in Instagram</span>
                            <svg className="navigation__svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9141 10C11.9141 11.0571 11.0571 11.9141 10 11.9141C8.94287 11.9141 8.08594 11.0571 8.08594 10C8.08594 8.94287 8.94287 8.08594 10 8.08594C11.0571 8.08594 11.9141 8.94287 11.9141 10Z" fill="white"/>
                              <path d="M14.4764 6.61343C14.3844 6.36411 14.2376 6.13843 14.0469 5.95319C13.8617 5.76245 13.6361 5.61566 13.3867 5.52365C13.1843 5.44507 12.8804 5.35153 12.3205 5.32605C11.7149 5.29843 11.5333 5.29248 10.0001 5.29248C8.46677 5.29248 8.28519 5.29828 7.67972 5.3259C7.11987 5.35153 6.81577 5.44507 6.61359 5.52365C6.36411 5.61566 6.13843 5.76245 5.95334 5.95319C5.7626 6.13843 5.61581 6.36395 5.52365 6.61343C5.44507 6.81577 5.35153 7.11987 5.32605 7.67972C5.29843 8.28519 5.29248 8.46677 5.29248 10.0001C5.29248 11.5333 5.29843 11.7149 5.32605 12.3205C5.35153 12.8804 5.44507 13.1843 5.52365 13.3867C5.61581 13.6361 5.76245 13.8617 5.95319 14.0469C6.13843 14.2376 6.36395 14.3844 6.61343 14.4764C6.81577 14.5552 7.11987 14.6487 7.67972 14.6742C8.28519 14.7018 8.46661 14.7076 9.99997 14.7076C11.5335 14.7076 11.7151 14.7018 12.3204 14.6742C12.8802 14.6487 13.1843 14.5552 13.3867 14.4764C13.8875 14.2833 14.2833 13.8875 14.4764 13.3867C14.555 13.1843 14.6486 12.8804 14.6742 12.3205C14.7018 11.7149 14.7076 11.5333 14.7076 10.0001C14.7076 8.46677 14.7018 8.28519 14.6742 7.67972C14.6487 7.11987 14.5552 6.81577 14.4764 6.61343ZM10.0001 12.9486C8.37155 12.9486 7.05136 11.6285 7.05136 9.99997C7.05136 8.3714 8.37155 7.05136 10.0001 7.05136C11.6285 7.05136 12.9487 8.3714 12.9487 9.99997C12.9487 11.6285 11.6285 12.9486 10.0001 12.9486ZM13.0653 7.62387C12.6848 7.62387 12.3762 7.31534 12.3762 6.93478C12.3762 6.55423 12.6848 6.2457 13.0653 6.2457C13.4459 6.2457 13.7544 6.55423 13.7544 6.93478C13.7542 7.31534 13.4459 7.62387 13.0653 7.62387Z" fill="white"/>
                              <path d="M10 0C4.478 0 0 4.478 0 10C0 15.522 4.478 20 10 20C15.522 20 20 15.522 20 10C20 4.478 15.522 0 10 0ZM15.7076 12.3674C15.6798 12.9787 15.5826 13.396 15.4407 13.7613C15.1424 14.5326 14.5326 15.1424 13.7613 15.4407C13.3961 15.5826 12.9787 15.6796 12.3676 15.7076C11.7552 15.7355 11.5596 15.7422 10.0002 15.7422C8.44055 15.7422 8.24509 15.7355 7.6326 15.7076C7.02148 15.6796 6.604 15.5826 6.23886 15.4407C5.85556 15.2965 5.50858 15.0705 5.22171 14.7783C4.92966 14.4916 4.70367 14.1444 4.55948 13.7613C4.41757 13.3961 4.32037 12.9787 4.2926 12.3676C4.26437 11.7551 4.25781 11.5594 4.25781 10C4.25781 8.44055 4.26437 8.24493 4.29245 7.6326C4.32022 7.02133 4.41727 6.604 4.55917 6.23871C4.70337 5.85556 4.9295 5.50842 5.22171 5.22171C5.50842 4.9295 5.85556 4.70352 6.23871 4.55933C6.604 4.41742 7.02133 4.32037 7.6326 4.29245C8.24493 4.26453 8.44055 4.25781 10 4.25781C11.5594 4.25781 11.7551 4.26453 12.3674 4.2926C12.9787 4.32037 13.396 4.41742 13.7613 4.55917C14.1444 4.70337 14.4916 4.9295 14.7784 5.22171C15.0705 5.50858 15.2966 5.85556 15.4407 6.23871C15.5827 6.604 15.6798 7.02133 15.7077 7.6326C15.7356 8.24493 15.7422 8.44055 15.7422 10C15.7422 11.5594 15.7356 11.7551 15.7076 12.3674Z" fill="white"/>
                            </svg>
                          </a>
                        </li>
                      }
                      { data.fbLink && <li className="navigation__socialitem">
                          <a className="navigation__social navigation__social--fb" target="_blank" href={data.fbLink} aria-label="1razove facebook">
                            <span className="visually-hidden">Razove in Facebook</span>
                            <svg className="navigation__svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.612 19.87zM11.812 19.836l-.12.02.12-.02zM11.139 19.935zM11.33 19.912zM12.085 19.782zM12.76 19.614l-.085.023.085-.023zM12.556 19.67l-.093.024.093-.024zM12.289 19.736l-.1.023.1-.023zM10.84 19.965zM20 10c0-5.522-4.478-10-10-10S0 4.478 0 10s4.478 10 10 10l.176-.002v-7.785H8.027V9.71h2.149V7.867c0-2.137 1.304-3.3 3.21-3.3.913 0 1.698.068 1.927.098V6.9h-1.315c-1.037 0-1.238.493-1.238 1.216v1.594h2.48l-.323 2.504H12.76v7.4C16.94 18.416 20 14.566 20 10zM10.66 19.978zM10.342 19.994z" fill="#fff"/>
                            </svg>
                          </a>
                        </li>
                      }
                    </ul>
                  </ul>
                </div>
              </div>
              <div className={`header__hamburger ${showMenu ? 'header__hamburger--on' : ''}`} onClick={() => toggleMenu()}>
              <div className="header__hamburger-wrapper">
                <div className="header__hamburger-span-wrapper">
                  <span className="header__hamburger-span"></span>
                  <span className="header__hamburger-span"></span>
                  <span className="header__hamburger-span"></span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </header>
  )
}
