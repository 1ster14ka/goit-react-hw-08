import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operations";
import { selectIsLoggedIn, selectIsRefresh } from "./redux/auth/selectors";
import PrivateRoute from "./PrivateRoute";
import PhoneBook from "./components/PhoneBook/PhoneBook";
import PablicRoute from "./PablicRoute";

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const Home = lazy(() => import("./pages/HomePage/Home"));
  const Login = lazy(() => import("./pages/LoginPage/Login"));
  const Registration = lazy(() =>
    import("./pages/RegistrationPage/Registration")
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefresh = useSelector(selectIsRefresh);

  return isRefresh ? null : (
    <>
      <Layout>
        <Suspense>
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
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
