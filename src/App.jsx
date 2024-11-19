import { useState } from 'react'
import './static/App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import NavbarSCH from './components/Navbar'


function App() {

  return (
    <div className="background-overlay">
      <NavbarSCH />

      <Routes>
        <Route path='/' element={<Home key='home' />} />
        <Route path='/about' element={<About key='about' />} />
        <Route path='/donate' element={<Donate key='donate' />} />
        <Route path='/contact' element={<Contact key='contact' />} />
      </Routes>

    </div>
  )
}

export default App
