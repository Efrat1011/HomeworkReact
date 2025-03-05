import React from 'react'
import './App.css'

export default function App() {
  const handleChange = (event) => {
    console.log(event.target.value.toUpperCase());
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Submitted!");
    }
  };

  return (
    <div className='qorap'>
      <h1>EVENT TO REACT</h1>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Жазу енгізіңіз..."
      />
    </div>
  );
}
