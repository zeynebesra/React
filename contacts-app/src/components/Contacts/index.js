import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./style.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Rumeysa",
      phone_number: "123123",
    },
    {
      fullname: "Ayşe",
      phone_number: "456456",
    },
    {
      fullname: "Ela",
      phone_number: "789789",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
