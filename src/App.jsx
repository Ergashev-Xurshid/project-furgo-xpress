
import { useState } from 'react'
import './App.css'
import About from './components/About'
import Choose from './components/Choose'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import News from './components/News'
import Our from './components/Our'
import Services from './components/Services'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  const [isOpen,setIsOpen] = useState(false)
  return (
    <>
      <Navbar/>
      <main>
        <Home/>
        <About setIsOpen={setIsOpen}/>
        <Services/>
        <Choose/>
        <News/>
        <Our/>
        <Contact/>
        {isOpen && <Modal setIsOpen={setIsOpen}/>}
        <ToastContainer position="top-right" autoClose={3000} />
      </main>
      <Footer/>
    </>
  )
}

export default App
