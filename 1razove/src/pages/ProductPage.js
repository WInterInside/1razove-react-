import React from "react"
import getData from '../stores/dataStore';
import Slider  from "../components/slider/Slider";
import Product__card from "../components/productCard/ProductCard";
import WhiteHeader from "../components/header/WhiteHeader";
export default function ProductPage() {
  let data = getData();
  let [product] = data.products.filter(x => x.url === 'maxtec');
  return (
    <div className="product">
      <WhiteHeader data={data} />
      <div className="container">
        <Product__card data={product}/>
      </div>
      <Slider data={product}/>
    </div>
  )
}
