import React, { Suspense, useState, useEffect } from "react"
import dataStore from '../stores/dataStore';
//import Slider  from "../components/slider/Slider";
//import Product__card from "../components/productCard/ProductCard";
//import WhiteHeader from "../components/header/WhiteHeader";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
//import Footer from "../components/footer/Footer";

const Slider = React.lazy(() => import('../components/slider/Slider'));
const Product__card = React.lazy(() => import('../components/productCard/ProductCard'));
const WhiteHeader = React.lazy(() => import('../components/header/WhiteHeader'));
const Footer = React.lazy(() => import('../components/footer/Footer'));

export default function ProductPage(props) {
  const history = useHistory();
  let [data, setData] = useState(null);
  let [product, setProduct] = useState(null);

  useEffect(async () => {
    if(window.location.pathname == "/404")
      return;

    let newData = data;
    if(!newData){
      newData = await dataStore.getData();
      setData(newData);
    }

    let [currentProduct] = newData.products.filter(x => x.url === props.props.match.params.id);
    if(!currentProduct){
      history.push("/404");
      return '';
    } else {
      setProduct(currentProduct);
    }
  });

  return (
    <div className="view">
      <Suspense fallback={<div></div>}>
        <div className="content">
          <div className="content--inner">
            <div className="page product">
              { !!data && !!product && <div>
                  <WhiteHeader data={data} brandLink={product.brandLink} brand={product.brand} brandText={product.brandText}/>
                  <div className="container">
                    <Product__card data={product}/>
                  </div>
                  { (product.images.length > 0) && <Slider data={product}/> }
                </div>
              }
            </div>
            { !!data && 
              <Footer data={data.contactBlock} />
            }
          </div>
        </div>
      </Suspense>
    </div>
  )
}
