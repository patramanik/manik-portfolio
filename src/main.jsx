import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainContent from "./components/Main/MainContent"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <MainContent/>
    <Footer/>
  </StrictMode>,
)
