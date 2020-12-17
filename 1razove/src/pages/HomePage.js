import React from "react"
import Decision from "../components/decision/Decision";
import Brands from "../components/brands/Brands";
import About from "../components/about/About";
import Problematic from "../components/problematic/Problematic";
import Header from "../components/header/Header";
import getData from '../stores/dataStore';

export default function HomePage() {

  let data = getData();

  return (
    <div className="HomePage">
      <Header data={data.heroBlock}/>
      <h1 className="main__heading visually-hidden">1razovoe</h1>

      <Problematic data={data.cardsBlock}/>
      <Decision data={data.videoBlock} />
      <Brands data={data.brandBlock} />
      <About />
    </div>
  )
}
