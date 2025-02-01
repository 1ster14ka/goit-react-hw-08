import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : null;
};

export default PrivateRoute;
