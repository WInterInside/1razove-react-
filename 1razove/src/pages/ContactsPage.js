import React from "react"
import Contacts from "../components/contacts/Contacts";
import WhiteHeader from "../components/header/WhiteHeader";

export default function ContactsPage() {
  return (
    <div className="ContactsPage">
      <WhiteHeader />
      <Contacts />
    </div>
  )
}
