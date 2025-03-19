import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About Me</Link>
    </nav>
  );
};

export default Navbar;