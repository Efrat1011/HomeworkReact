import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <div>
      <h1>Мен тұралы</h1>
      <p>Мен Насыров Эфрат Азатович. Амжилт мектебінде 24/2 тобының студентімінюһ. Қазір REACT тілін үйреніп жатырмыню</p>
      <button onClick={handleClick}>Go to My Profile</button>
    </div>
  );
};

export default AboutMe;