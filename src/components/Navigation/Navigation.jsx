import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {}, [isLoggedIn]);
  return (
    <div className={css.navigationWrapp}>
      <NavLink to="/" className={css.navigation}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.navigation}>
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
