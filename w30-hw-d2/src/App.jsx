import React from "react";
import  LanguageProvider  from "./components/LanguageProvider";
import Test from "./components/Test";
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <div>
        <h1>HomeWork useContext</h1>
        <Test/>
      </div>
    </LanguageProvider>
  );
}

export default App;
