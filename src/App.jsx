
import './App.css'
import About from './components/About'
import Choose from './components/Choose'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import News from './components/News'
import Our from './components/Our'
import Services from './components/Services'


function App() {
  

  return (
    <>
      <Navbar/>
      <main>
        <Home/>
        <About/>
        <Services/>
        <Choose/>
        <News/>
        <Our/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
