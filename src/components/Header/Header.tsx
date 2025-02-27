import styles from './Header.module.css';
import SearchForm from "../../features/SearchForm/SearchForm.tsx";


function Header() {
  return (
    <header className={styles.header}>
      <h1>Dashboard</h1>
      <SearchForm/>
    </header>
  )
}

export default Header;
