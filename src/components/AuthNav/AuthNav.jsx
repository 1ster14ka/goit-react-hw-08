import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectorsAuth";

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavLink to="/register">Registr</NavLink>
      {!isLoggedIn ? <NavLink to="/login">Login</NavLink> : "Logout"}
    </>
  );
};

export default AuthNav;
