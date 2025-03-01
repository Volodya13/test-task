import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './styles/index.css'
import App from './app/App.tsx'
import DashBoard from "./pages/DashBoard.tsx";
import DataProvider from "./contextApi/DataContext.tsx";
import {Paths} from "./utils/enums.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<App/>}>
            <Route index path={Paths.DASHBOARD} element={<DashBoard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </StrictMode>,
)
