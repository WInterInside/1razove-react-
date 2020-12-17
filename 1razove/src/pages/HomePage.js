import React from "react"
import Decision from "../components/decision/Decision";
import Brands from "../components/brands/Brands";
import About from "../components/about/About";
import Problematic from "../components/problematic/Problematic";
import Header from "../components/header/Header";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <h1 className="main__heading visually-hidden">1razovoe</h1>

      <Problematic />
      <Decision />
      <Brands />
      <About />
    </div>
  )
}
