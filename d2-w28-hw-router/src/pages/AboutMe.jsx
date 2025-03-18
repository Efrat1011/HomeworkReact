import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <div>
      <h1>About Me</h1>
      <p>Бұл өзім туралы біраз ақпарат...</p>
      <button onClick={handleClick}>Go to My Profile</button>
    </div>
  );
};

export default AboutMe;