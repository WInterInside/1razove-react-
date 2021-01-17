import React, {Suspense} from "react"
//import HomePage from "./HomePage";
const HomePage = React.lazy(() => import('./HomePage'));

export default function HomePageWrapper() {
  return ( 
    <Suspense fallback={<div></div>}>
      <HomePage />  
    </Suspense>
  )
}
