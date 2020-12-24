import React, { useState, useEffect } from "react";
import dataStore from '../stores/dataStore';
import Contacts from "../components/contacts/Contacts";
import WhiteHeader from "../components/header/WhiteHeader";

export default function ContactsPage() {
  let [data, setData] = useState(null);
  useEffect(async () => data ? data : setData(await dataStore.getData()) );
  return (
    <div className="ContactsPage">
      { !!data && <div>
            <WhiteHeader data={data}/>
            <Contacts data={data}/>
        </div>
      }
    </div>
  )
}
