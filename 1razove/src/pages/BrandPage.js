import React, { useState, useEffect } from "react"
// import  from "../components//";
import dataStore from '../stores/dataStore';
import BrandDescription from "../components/brandDescription/BrandDescription";
import Products from "../components/products/Products";
import BrandHeader from "../components/header/BrandHeader";
import { useHistory } from "react-router-dom";
import Footer from "../components/footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

export default function BrandPage(props) {
  let [data, setData] = useState(null);
  let [brand, setBrand] = useState(null);
  const history = useHistory();

  useEffect(async () => {
    if(window.location.pathname == "/404")
      return;

    let newData = data;
    if(!data){
      newData = await dataStore.getData();
      setData(newData);
    }
    console.log(newData);
    let [ currentBrand ] = newData.brandsList.filter(x => x.url === props.match.params.id);
    console.log(currentBrand);
    if(!currentBrand){
      history.push("/404");
      return '';
    }
    setBrand(currentBrand);
  });

  return (
    <div className="view">
    <div className="content">
          <div className="content--inner">
    <div className="brand">
      { !!data && !!brand && <div>
          <BrandHeader data={data} />
          <BrandDescription data={brand} />
          <Products data={brand} />
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
