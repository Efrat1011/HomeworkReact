import React, { useReducer } from 'react';


const themeReducer = (state, action) => {
  switch (action.type) {
    case 'Aq tus':
      return 'white';
    case 'Kara tus':
      return 'black';
    case 'Kok tus':
      return 'blue';
    default:
      return state;
  }
};

export default function  ThemeSwitcher ()  {
  const [theme, dispatch] = useReducer(themeReducer, 'aq');

  return (
    <div
      style={{
        backgroundColor: theme,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        color:'red'
        
      }}
    >
      <h1>Current theme: {theme}</h1>
      <div >
        <button onClick={() => dispatch({ type: 'Aq tus' })}>White</button>
        <button onClick={() => dispatch({ type: 'Kara tus' })}>Black</button>
        <button onClick={() => dispatch({ type: 'Kok tus' })}>Blue</button>
      </div>
    </div>
  );
};


