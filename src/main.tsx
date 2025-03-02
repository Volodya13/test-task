import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/index.css'
import App from './app/App.tsx'
import DashBoard from "./pages/DashBoard.tsx";
import Results from "./pages/Results.tsx";
import Finalize from "./pages/Finalize.tsx";
import DataProvider from "./contextApi/DataContext.tsx";
import {Navigate} from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="dashboard/results/:testId" element={<Results />} />
            <Route path="dashboard/finalize/:testId" element={<Finalize />} />
          </Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  </StrictMode>,
)
