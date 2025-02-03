import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "../Navigation/Navigation.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <>
      <h2>Welcome, {userName}</h2>
      <button
        onClick={() => {
          return dispatch(logout()).then(() => navigate("/login"));
        }}
        className={css.navigation}
      >
        Logout
      </button>
    </>
  );
};

export default UserMenu;
