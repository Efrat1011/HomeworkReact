import React, { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";


const Main = () => {
  const { translations, langIndex, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <h2>{translations[0]}</h2>
      <p>{translations[1]}</p>
      <select
        value={langIndex}
        onChange={(e) => changeLanguage(Number(e.target.value))}
      >
        <option value={0}>Қазақша</option>
        <option value={1}>Русский</option>
        <option value={2}>English</option>
      </select>
    </div>
  );
};

export default Main;
