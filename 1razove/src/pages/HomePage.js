import React, { useState, useEffect } from "react"
import Decision from "../components/decision/Decision";
import Brands from "../components/brands/Brands";
import About from "../components/about/About";
import Problematic from "../components/problematic/Problematic";
import Header from "../components/header/Header";
import dataStore from '../stores/dataStore';
import Footer from "../components/footer/Footer";

export default function HomePage() {
  let [data, setData] = useState(null);
  useEffect(async () => {
    if(!data)
      setData(await dataStore.getData());

    let hash = window.location.hash;
    if(hash)
      setTimeout(() => {
        let elem = document.querySelector(hash);
        var rect = elem.getBoundingClientRect();
        window.parent.scrollTo({
          top: rect.top,
          behavior: 'smooth'
        })
      }, 1000);

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
            <About data={data.aboutBlock} />
          </div>
      }
    </div>
    { !!data && 
      <Footer data={data.contactBlock} />
    }
    </div>
    </div>
    </div>
  )
}
