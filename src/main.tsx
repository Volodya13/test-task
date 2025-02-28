import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './styles/index.css'
import App from './app/App.tsx'
import HomePage from "./pages/HomePage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path={'/dashboard'} element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
