import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compones/NavBar';
import Home from './pages/Home';
import Project from './pages/Project';
import ProjectDetail from './pages/ProjectDetail';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/projects/:id" element={<ProjectDetail/>}/>
        <Route path="/about" element={<AboutMe/>}/>
      </Routes>
    </Router>
  );
}

export default App;