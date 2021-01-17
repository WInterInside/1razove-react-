import React, {Suspense} from "react"
//import HomePage from "./HomePage";
const ContactsPage = React.lazy(() => import('./ContactsPage'));

export default function ContactsPageWrapper() {
  return ( 
    <Suspense fallback={<div></div>}>
      <ContactsPage />  
    </Suspense>
  )
}
