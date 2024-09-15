import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul className={s.wrapper}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => onDeleteContact(contact.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
