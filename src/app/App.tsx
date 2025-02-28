import styles from './App.module.css'
import {Outlet} from "react-router";
import Header from "../components/Header/Header.tsx";
import DataProvider from "../contextApi/DataContext.tsx";

function App() {

  return (
    <DataProvider>
      <main className={styles.app}>
        <Header/>
        <Outlet/>
      </main>
    </DataProvider>
  )
}

export default App
