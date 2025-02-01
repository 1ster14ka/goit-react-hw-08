import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectorsAuth";
import { Navigate } from "react-router-dom";

const PablicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PablicRoute;
