import Contact from "./Contact";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact userName={contact.name} phoneNumber={contact.number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
