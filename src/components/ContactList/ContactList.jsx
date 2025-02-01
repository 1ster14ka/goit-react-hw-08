import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import {
  selectFilteredContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
// import {
//   selectIsLoading,
//   selectFilteredContacts,
//   selectIsError,
// } from "../../redux/contacts/slice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  return (
    <ul className={css.contactList}>
      {loading && <h2>Loading...</h2>}
      {error && <h3>{error}</h3>}

      {filteredContacts.map((user) => (
        <li className={css.contactItem} key={user.id}>
          <Contact data={user} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
