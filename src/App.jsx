import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/contactsOps";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Layout from "./components/Layout/Layout";
import Registration from "./pages/RegistrationPage/Registration";
import Login from "./pages/LoginPage/Login";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      <ContactList /> */}

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
