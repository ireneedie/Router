import React from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Menu' element={<Menu />}/>
        </Routes>
      
    </Router>
  )
}

export default App