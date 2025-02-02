import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefresh } from "./redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefresh);

  if (isRefreshing) {
    return null;
  }
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
