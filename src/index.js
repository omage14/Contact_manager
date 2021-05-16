
import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AddPersonForm(){
  const [person, setPerson] = 
  useState ("");

  function handleChange(e) {
   setPerson(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder="Add new contact"
      onChange={handleChange}
      value={person.name} />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index)=>
  <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}
function ContactManager(props){
  const [contacts, setContacts] = useState
  (props.data);

  function addPerson(name){
    setContacts([...contacts, name]);
  }
  return  (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
  
}


const contacts = ["James Johnson", "Clinton Wilson", "Sinclair Wilbefor"];


ReactDOM.render(
  <ContactManager data={contacts} />,
  document.getElementById('root')
);