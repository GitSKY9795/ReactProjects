import React from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agence from './pages/Agence'
import { Link, Navigate, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className=' h-screen '>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
