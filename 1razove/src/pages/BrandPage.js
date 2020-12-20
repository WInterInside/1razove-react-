import React from "react"
// import  from "../components//";
import getData from '../stores/dataStore';
import BrandDescription from "../components/brandDescription/BrandDescription";
import Products from "../components/products/Products";
import BrandHeader from "../components/header/BrandHeader";
import Form from "../components/form/Form";
export default function BrandPage(props) {

  console.log(props.match.params.id);
  let data = getData();
  let [ brand ] = data.brandsList.filter(x => x.url === '/maxtec');

  return (
    <div className="brand">
      <BrandHeader data={data} />
      <BrandDescription data={brand} />
      <Products data={brand} />
      <Form />
    </div>
  )
}
