import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectorsAuth";
import { useEffect } from "react";
import UserMenu from "../UserMenu/UserMenu";
import css from "../Navigation/Navigation.module.css";

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {}, [isLoggedIn]);
  return (
    <>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.navigation}>
          Contacts
        </NavLink>
      )}

      {!isLoggedIn && (
        <NavLink to="/register" className={css.navigation}>
          Registr
        </NavLink>
      )}
      {!isLoggedIn ? (
        <NavLink to="/login" className={css.navigation}>
          Login
        </NavLink>
      ) : (
        <UserMenu className={css.navigation} />
      )}
    </>
  );
};

export default AuthNav;
