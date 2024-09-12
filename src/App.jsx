// import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/Contacts/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const contactData = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();

  //   const form = evt.target;
  //   const { login, password } = form.elements;

  //   // Посилання на DOM-елементи
  //   console.log(login, password);

  //   // Значення полів
  //   console.log(login.value, password.value);

  //   // Скидаємо значення полів після відправки
  //   form.reset();
  // };
  return (
    <>
      <div className="wrapper">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList contacts={contactData} />
        {/* <form onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form> */}
      </div>
    </>
  );
}

export default App;
