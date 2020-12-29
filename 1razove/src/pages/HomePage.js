import React, { useState, useEffect } from "react"
import Decision from "../components/decision/Decision";
import Brands from "../components/brands/Brands";
import About from "../components/about/About";
import Problematic from "../components/problematic/Problematic";
import Header from "../components/header/Header";
import dataStore from '../stores/dataStore';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

export default function HomePage() {
  let [data, setData] = useState(null);
  useEffect(async () => {
    if(!data)
      setData(await dataStore.getData());

    let hash = window.location.hash;
    if(hash)
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth'
      });
  });

  return (
    <div className="view">
    <div className="content">
    <div className="content--inner">
    <div className="HomePage" id="homepage">
      { !!data && <div>
            <div id="header-animation-wrapper">
            <Header data={data}/>
            <h1 className="main__heading visually-hidden">1razovoe</h1>

            <Problematic data={data.cardsBlock}/>
            </div>
            <Decision data={data.videoBlock} />
            <Brands data={data.brandBlock} />
            <About />
          </div>
      }
    </div>
    </div>
    </div>
    </div>
  )
}
