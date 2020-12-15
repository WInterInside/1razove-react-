import React from "react"
// import  from "../components//";

import Brand__discription from "../components/brand__discription/Brand__discription";
import Products__card from "../components/products__card/Products__card";

export default function BrandPage() {
  return (
    <div class="brand">
      <Brand__discription />
      <div class="products">
        <h2 class="products__heading products__heading--h2">Унікальні товари</h2>
      <Products__card />
      </div>
    </div>
  )
}
