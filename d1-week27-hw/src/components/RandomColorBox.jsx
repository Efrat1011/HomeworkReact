import { useState } from "react";
import "../index.css"; 

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
};

export default function RandomColorBox() {
  const [color, setColor] = useState(getRandomColor());

  const changeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <div className="qorap">
      <div className="qorap1" style={{ backgroundColor: color }}>
        <p className="text">{color}</p>
      </div>
      <button className="btn" onClick={changeColor}>
        Түсті өзгерту
      </button>
    </div>
  );
}