import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './compones/NavBar';
import Home from './pages/Home';
import Project from './pages/Project';
import ProjectDetail from './pages/ProjectDetail';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/projects/:id" element={<ProjectDetail/>}/>
        <Route path="/about" element={<AboutMe/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;