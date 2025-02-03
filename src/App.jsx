import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefresh } from "./redux/auth/selectors";
import PrivateRoute from "./PrivateRoute";
import PhoneBook from "./components/PhoneBook/PhoneBook";
import RestrictedRoute from "./RestrictedRoute";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const Home = lazy(() => import("./pages/HomePage/Home"));
  const LoginForm = lazy(() => import("./pages/LoginPage/LoginForm"));
  const RegistrationForm = lazy(() =>
    import("./pages/RegistrationPage/RegistrationForm")
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
                <RestrictedRoute>
                  <RegistrationForm />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginForm />
                </RestrictedRoute>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
