import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from "./SearchInput.module.css";

export const SearchInput = ({...rest}) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded />
      <input className={styles.input} {...rest}/>
    </div>
  );
};

 