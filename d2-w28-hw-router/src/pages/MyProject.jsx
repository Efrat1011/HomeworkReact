import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyProjects = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        <li>
          <h2>Project 1</h2>
          <p>1 жобаның сипаттамасы</p>
        </li>
        <li>
          <h2>Project 2</h2>
          <p>2 жобаның сипаттамасы</p>
        </li>
        <li>
          <h2>Project 3</h2>
          <p>3 жобаның сипаттамасы</p>
        </li>
      </ul>
      <button onClick={handleClick}>Go to About Me</button>
    </div>
  );
};

export default MyProjects;