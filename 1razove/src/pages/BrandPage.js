import React from "react"
// import  from "../components//";

import BrandDescription from "../components/brandDescription/BrandDescription";
import Products from "../components/products/Products";
import BrandHeader from "../components/header/BrandHeader";
import Form from "../components/form/Form";
export default function BrandPage(props) {

  console.log(props.match.params.id);

  return (
    <div className="brand">
      <BrandHeader />
      <BrandDescription />
      <Products />
      <Form />
    </div>
  )
}
