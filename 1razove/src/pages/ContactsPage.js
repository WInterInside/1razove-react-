import React, { useState, useEffect } from "react";
import dataStore from '../stores/dataStore';
import Contacts from "../components/contacts/Contacts";
import WhiteHeader from "../components/header/WhiteHeader";
import Footer from "../components/footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

export default function ContactsPage() {
  let [data, setData] = useState(null);
  useEffect(async () => data ? data : setData(await dataStore.getData()) );
  return (
    <div className="view">
    <div className="content">
    <div className="content--inner">
      <div className="page ContactsPage">
        { !!data && <div>
              <WhiteHeader data={data}/>
              <Contacts data={data}/>
          </div>
        }
      </div>
      <Footer />
      </div>
      </div>
      </div>
  )
}
