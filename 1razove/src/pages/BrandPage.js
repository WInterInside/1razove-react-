import React from "react"
// import  from "../components//";
import dataStore from '../stores/dataStore';
import BrandDescription from "../components/brandDescription/BrandDescription";
import Products from "../components/products/Products";
import BrandHeader from "../components/header/BrandHeader";
import { useHistory } from "react-router-dom";

export default function BrandPage(props) {
  const history = useHistory();
  let data = dataStore.getData();
  let [ brand ] = data.brandsList.filter(x => x.url === props.match.params.id);
  if(!brand){
    history.push("/404");
    return '';
  }
  return (
    <div className="brand">
      <BrandHeader data={data} />
      <BrandDescription data={brand} />
      <Products data={brand} />
    </div>
  )
}
