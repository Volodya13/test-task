import styles from './Header.module.css';
import SearchBtnIcon  from "../../assets/search-btn-icon.svg"


function Header() {
  return (
    <header className={styles.header}>
      <h1>Dashboard</h1>
      <form className={styles.search}>
        <input type={"search"} placeholder={"What test are you looking for?"}/>
        <button type={"submit"}>
          <SearchBtnIcon/>
        </button>
      </form>
    </header>
  )
}

export default Header;
