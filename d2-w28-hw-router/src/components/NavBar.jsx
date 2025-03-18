import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/profile" className="active">My Profile</Link>
        </li>
        <li>
          <Link to="/project">My Projects</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;