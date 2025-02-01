import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/contactsOps";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Layout from "./components/Layout/Layout";
import Registration from "./pages/RegistrationPage/Registration";
import Login from "./pages/LoginPage/Login";
import { refreshUser } from "./redux/auth/authOps";
import { selectIsLoggedIn, selectIsRefresh } from "./redux/auth/selectorsAuth";
import PrivateRoute from "./PrivateRoute";
import PhoneBook from "./components/PhoneBook/PhoneBook";
import PablicRoute from "./PablicRoute";

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefresh = useSelector(selectIsRefresh);

  return isRefresh ? null : (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <PablicRoute>
                <Registration />
              </PablicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PablicRoute>
                <Login />
              </PablicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <PhoneBook />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
