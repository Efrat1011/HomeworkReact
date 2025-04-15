import React, { useReducer } from 'react';

// let initialState = {
//   color:'white',
//   color:'black',
//   color:'blue',
// }
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
  const [state, dispatch] = useReducer(themeReducer, '');

  return (
    <div
      style={{
        backgroundColor: state,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        color:'red'
        
      }}
    >
      <h1>Current theme: {state}</h1>
      <div >
        <button onClick={() => dispatch({ type: 'Aq tus' })}>White</button>
        <button onClick={() => dispatch({ type: 'Kara tus' })}>Black</button>
        <button onClick={() => dispatch({ type: 'Kok tus' })}>Blue</button>
      </div>
    </div>
  );
};


