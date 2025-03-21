
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  const handleLogin = () => {
    setIsAuth(true); 
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
      <p>
        Тіркелу үшін: <Link to="registered">Register</Link>
      </p>
      <Outlet />
    </div>
  );
};

export default Login;