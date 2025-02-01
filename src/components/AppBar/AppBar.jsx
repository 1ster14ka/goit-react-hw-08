import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;
