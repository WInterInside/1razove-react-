import React, {Suspense} from "react"
//import HomePage from "./HomePage";
const BrandPage = React.lazy(() => import('./BrandPage'));

export default function BrandPageWrapper(props) {
  return ( 
    <Suspense fallback={<div></div>}>
      <BrandPage props={props} />  
    </Suspense>
  )
}
