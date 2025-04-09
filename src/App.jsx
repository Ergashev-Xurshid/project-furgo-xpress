
import './App.css'
import About from './components/About'
import Choose from './components/Choose'
import Home from './components/Home'
import Navbar from './components/Navbar'
import News from './components/News'
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
      </main>
    </>
  )
}

export default App
