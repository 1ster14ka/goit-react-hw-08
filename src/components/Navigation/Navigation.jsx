import { NavLink } from "react-router-dom";
// import AuthNav from "../AuthNav/AuthNav";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/" className={css.navigation}>
        Home
      </NavLink>
    </div>
  );
};

export default Navigation;
