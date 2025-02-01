import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className={css.contactName}>
          <FaUser />
          <h3>{name}</h3>
        </div>
        <div className={css.contactNumber}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        className={css.contactButton}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
