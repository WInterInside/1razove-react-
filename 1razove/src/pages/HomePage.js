import React from "react"
import Decision from "../components/decision/Decision";
import Brands from "../components/brands/Brands";
import About from "../components/about/About";
import Problematic from "../components/problematic/Problematic";
import Header from "../components/header/Header";
import dataStore from '../stores/dataStore';

export default function HomePage() {

  let data = dataStore.getData();

  return (
    <div className="HomePage">
      <Header data={data}/>
      <h1 className="main__heading visually-hidden">1razovoe</h1>

      <Problematic data={data.cardsBlock}/>
      <Decision data={data.videoBlock} />
      <Brands data={data.brandBlock} />
      <About />
    </div>
  )
}
