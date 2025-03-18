import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/project');
  };

  return (
    <div>
      <h1>My Profile</h1>
      <p>Name: Efrat Nassyrov</p>
      <p>Email: ifrat1998@gmail.com</p>
      <p>Academy: Amjilt Cyber School</p>
      <button onClick={handleClick}>Go to My Projects</button>
    </div>
  );
};

export default MyProfile;