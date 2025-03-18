import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>ERROR - 404</h1>
      <p>Сіз «Мен туралы» бетіне қайта ораласыз.</p>
    </div>
  );
};

export default NotFound;