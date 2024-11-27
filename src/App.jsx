import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './Menu'
import Home from './Home'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Productos from './Productos'

function App() {

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/productos' element={<Productos />} />
      </Routes>
    </Router>
  )
}

export default App
