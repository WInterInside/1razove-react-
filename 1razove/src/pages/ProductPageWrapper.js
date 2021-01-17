import React, {Suspense} from "react"
//import HomePage from "./HomePage";
const ProductPage = React.lazy(() => import('./ProductPage'));

export default function ProductPageWrapper(props) {
  return ( 
    <Suspense fallback={<div></div>}>
      <ProductPage props={props} />  
    </Suspense>
  )
}
