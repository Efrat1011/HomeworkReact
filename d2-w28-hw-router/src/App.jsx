import React from 'react'
import{ BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import MyProfile from './pages/MyProfile'
import MyProject from './pages/MyProject'
import AboutMe from './pages/AboutMe'
import NotFound from './pages/NotFound'

import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path='/profile' element={<MyProfile/>}/>
          <Route path='/project' element={<MyProject/>}/>
          <Route path='/about' element={<AboutMe/>}/>
          <Route path='/'element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
