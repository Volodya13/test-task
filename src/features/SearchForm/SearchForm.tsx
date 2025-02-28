import styles from './SearchForm.module.css';
import SearchBtnIcon from "../../assets/search-btn-icon.svg";

function SearchForm() {;

  return (
    <form className={styles.searchForm}>
      <input
        className={styles.searchField}
        type={"search"}
        placeholder={"What test are you looking for?"}
      />
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
