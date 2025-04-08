import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {

  const languages = [
    ["Бұл Main компонент ", "Миссия түпнұсқасында басталады.", "Қазақша"],
    ["Это Main компонент ", "Миссия начинается с оригинала.", "Русский"],
    ["This is Main component ", "The mission starts in the original.", "English"],
  ];

  const [langIndex, setLangIndex] = useState(0); 

  const changeLanguage = (index) => setLangIndex(index);

  return (
    <LanguageContext.Provider
      value={{
        langIndex,
        changeLanguage,
        translations: languages[langIndex],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
