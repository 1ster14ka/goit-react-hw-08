import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";
import css from "../Navigation/Navigation.module.css";

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {}, [isLoggedIn]);
  return (
    <>
      <NavLink to="/register" className={css.navigation}>
        Registr
      </NavLink>

      <NavLink to="/login" className={css.navigation}>
        Login
      </NavLink>
    </>
  );
};

export default AuthNav;
