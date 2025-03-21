
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuth, setIsAuth }) => {
  const handleLogout = () => {
    setIsAuth(false); 
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About Me</Link>
      {isAuth ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;