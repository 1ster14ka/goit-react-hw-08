import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

const PhoneBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      <ContactList />
    </>
  );
};

export default PhoneBook;
