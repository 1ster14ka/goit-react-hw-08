import { useDispatch, useSelector } from "react-redux";
import css from "../SearchBox/SearchBox.module.css";
import { selectFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/operations";

const SearchBox = () => {
  const dispatch = useDispatch();
  const select = useSelector(selectFilter);

  return (
    <div className={css.searchWrapp}>
      <p>Find contacts by name</p>
      <input
        className={css.search}
        type="text"
        name="searchUser"
        value={select}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
