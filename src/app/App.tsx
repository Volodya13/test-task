import styles from './App.module.css'
import {Outlet} from "react-router";
import Header from "../components/Header/Header.tsx";

function App() {
  return (
    <main className={styles.app}>
      <Header/>
      <Outlet/>
    </main>
  )
}

export default App
