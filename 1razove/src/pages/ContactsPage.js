import React from "react";
import dataStore from '../stores/dataStore';
import Contacts from "../components/contacts/Contacts";
import WhiteHeader from "../components/header/WhiteHeader";

export default function ContactsPage() {
  let data = dataStore.getData();
  return (
    <div className="ContactsPage">
      <WhiteHeader data={data}/>
      <Contacts data={data}/>
    </div>
  )
}
