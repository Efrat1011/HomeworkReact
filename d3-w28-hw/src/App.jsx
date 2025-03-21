// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './compones/NavBar';
import Home from './pages/Home';
import Project from './pages/Project';
import ProjectDetail from './pages/ProjectDetail';
import AboutMe from './pages/AboutMe';
import Login from './pages/Login'; // Login бетін импорттау
import Register from './pages/Register'; // Register бетін импорттау
import ProtectedRoute from './compones/ProtectedRoute'; // ProtectedRoute компонентін импорттау

function App() {
  const [isAuth, setIsAuth] = useState(false); // Аутентификация мәнін сақтау

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Защищенные маршруты */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Project />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <ProjectDetail />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<AboutMe />} />

        {/* Login және Register маршруттары */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}>
          {/* Nested route: Register */}
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;