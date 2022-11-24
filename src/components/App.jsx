import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";
import Avatar from "./Avatar";

function createCard(contact){
  return (<Card 
    key={contact.id}
    name= {contact.name}
    img={contact.imgURL}    
    phone= {contact.phone}
    email= {contact.email}/>);
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://avatars.githubusercontent.com/u/59869762?v=4"/>
      {contacts.map(createCard)}

    </div>
  );
}

export default App;
