import React, { useState, useEffect, Suspense  } from "react";
import dataStore from '../stores/dataStore';
// import Contacts from "../components/contacts/Contacts";
// import WhiteHeader from "../components/header/WhiteHeader";
// import Footer from "../components/footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

const WhiteHeader = React.lazy(() => import('../components/header/WhiteHeader'));
const Footer = React.lazy(() => import('../components/footer/Footer'));
const Contacts = React.lazy(() => import('../components/contacts/Contacts'));

export default function ContactsPage() {
  let [data, setData] = useState(null);
  useEffect(async () => data ? data : setData(await dataStore.getData()) );
  return (
    <div className="view">
      <Suspense fallback={<div></div>}>


    <div className="content">
    <div className="content--inner">
      <div className="page ContactsPage">
        { !!data && <div>
              <WhiteHeader data={data}/>
              <Contacts data={data.contactPage}/>
          </div>
        }
      </div>
      { !!data && 
      <Footer data={data.contactBlock} />
    }
      </div>
      </div>
      </Suspense>
      </div>
  )
}
