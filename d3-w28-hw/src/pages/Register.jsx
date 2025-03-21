// pages/Register.jsx
import React from 'react';
import '../index.css'

const Register = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
        <input type="text" placeholder="Enter your username" className="register-input" />
        <input type="password" placeholder="Enter your password" className="register-input" />
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;