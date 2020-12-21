import React from "react"
import dataStore from '../stores/dataStore';
import Slider  from "../components/slider/Slider";
import Product__card from "../components/productCard/ProductCard";
import WhiteHeader from "../components/header/WhiteHeader";
export default function ProductPage(props) {
  let data = dataStore.getData();
  let [product] = data.products.filter(x => x.url === props.match.params.id);
  return (
    <div className="product">
      <WhiteHeader data={data} brandLink={product.brandLink} brand={product.brand}/>
      <div className="container">
        <Product__card data={product}/>
      </div>
      <Slider data={product}/>
    </div>
  )
}
