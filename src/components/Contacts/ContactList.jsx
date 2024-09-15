import Contact from "./Contact";
import s from "./Contacts.module.css";

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
