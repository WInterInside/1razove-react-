import React, { useState, useEffect } from "react"
import dataStore from '../stores/dataStore';
import Slider  from "../components/slider/Slider";
import Product__card from "../components/productCard/ProductCard";
import WhiteHeader from "../components/header/WhiteHeader";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export default function ProductPage(props) {
  const history = useHistory();
  let [data, setData] = useState(null);
  let [product, setProduct] = useState(null);

  useEffect(async () => {
    let newData = data;
    if(!newData){
      newData = await dataStore.getData();
      setData(newData);
    }

    let [currentProduct] = newData.products.filter(x => x.url === props.match.params.id);
    if(!currentProduct){
      history.push("/404");
      return '';
    }
    setProduct(currentProduct);
  });

  return (
      <div className="page product">
        { !!data && !!product && <div>
            <WhiteHeader data={data} brandLink={product.brandLink} brand={product.brand}/>
            <div className="container">
              <Product__card data={product}/>
            </div>
            <Slider data={product}/>
          </div>
        }
      </div>
  )
}
