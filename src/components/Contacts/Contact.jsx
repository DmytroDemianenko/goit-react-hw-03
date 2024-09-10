import { PiPhoneFill } from "react-icons/pi";
import { IoMdContact } from "react-icons/io";
const Contact = ({ userName, phoneNumber, id }) => {
  return (
    <div>
      <p>
        <IoMdContact />
        {userName}
      </p>
      <p>
        <PiPhoneFill />
        {phoneNumber}
      </p>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
