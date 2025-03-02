import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/index.css'
import App from './app/App.tsx'
import DashBoard from "./pages/DashBoard.tsx";
import Results from "./pages/Results.tsx";
import Finalize from "./pages/Finalize.tsx";
import DataProvider from "./contextApi/DataContext.tsx";
import {Paths} from "./utils/enums.ts";
import {Navigate} from "react-router";

const {DASHBOARD, RESULTS, FINALIZE} = Paths;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Navigate to={DASHBOARD} replace />} />
          <Route element={<App/>}>
            <Route index path={DASHBOARD} element={<DashBoard/>}/>
            <Route path={`${RESULTS}/:testId`} element={<Results/>}/>
            <Route path={`${FINALIZE}/:testId`} element={<Finalize/>}/>
          </Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  </StrictMode>,
)
