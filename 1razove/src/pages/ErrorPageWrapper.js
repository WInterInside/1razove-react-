import React, {Suspense} from "react"
//import HomePage from "./HomePage";
const ErrorPage = React.lazy(() => import('./ErrorPage'));

export default function ErrorPageWrapper() {
  return ( 
    <Suspense fallback={<div></div>}>
      <ErrorPage />  
    </Suspense>
  )
}
