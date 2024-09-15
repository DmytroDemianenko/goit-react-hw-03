import { PiPhoneFill } from "react-icons/pi";
import { IoMdContact } from "react-icons/io";
import s from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={s.contact}>
      <div>
        <p className={s.name}>
          <IoMdContact className={s.svg} />
          {name}
        </p>
        <p className={s.name}>
          <PiPhoneFill className={s.svg} />
          {number}
        </p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Contact;
