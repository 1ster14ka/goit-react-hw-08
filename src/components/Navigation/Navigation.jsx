import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Registr</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Navigation;
