import React from "react";
import getData from '../stores/dataStore';
import Contacts from "../components/contacts/Contacts";
import WhiteHeader from "../components/header/WhiteHeader";

export default function ContactsPage() {
  let data = getData();
  return (
    <div className="ContactsPage">
      <WhiteHeader data={data}/>
      <Contacts data={data}/>
    </div>
  )
}
