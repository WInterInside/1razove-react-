import React, { useState, useEffect } from "react"
import Decision from "../components/decision/Decision";
import Brands from "../components/brands/Brands";
import About from "../components/about/About";
import Problematic from "../components/problematic/Problematic";
import Header from "../components/header/Header";
import dataStore from '../stores/dataStore';

export default function HomePage() {
  let [data, setData] = useState(null);
  useEffect(async () => data ? data : setData(await dataStore.getData()) );

  return (
    <div className="HomePage">
      { !!data && <div>
            <Header data={data}/>
            <h1 className="main__heading visually-hidden">1razovoe</h1>

            <Problematic data={data.cardsBlock}/>
            <Decision data={data.videoBlock} />
            <Brands data={data.brandBlock} />
            <About />
          </div>
      }
    </div>
  )
}
