import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "../Navigation/Navigation.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(logout())} className={css.navigation}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
