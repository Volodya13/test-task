import styles from './SearchForm.module.css';
import SearchBtnIcon from "../../assets/search-btn-icon.svg";
import {useContext} from "react";
import {DataContext} from "../../contextApi/DataContext.tsx";

function SearchForm() {
  const {state: {tests}} = useContext(DataContext);

  return (
    <form className={styles.searchForm}>
      <input
        className={styles.searchField}
        type={"search"}
        placeholder={"What test are you looking for?"}
      />
      <span className={styles.results}>{tests.length} tests</span>
      <button
        className={styles.searchBtn}
        type={"submit"}
      >
        <SearchBtnIcon/>
      </button>
    </form>
  )
}

export default SearchForm;
