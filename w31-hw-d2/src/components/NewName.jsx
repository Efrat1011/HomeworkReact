import React, { useReducer, useEffect } from 'react';
import '../App.css';

const initialState = {
  name: '',
  savedName: '',
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'ESIM':
      return { ...state, name: action.esim };
    case 'START':
      return { ...state, isLoading: true };
    case 'SETITEM':
      return { ...state, savedName: action.esim, isLoading: false };
    case 'GETITEM':
      return { ...state, savedName: action.esim };
    default:
      return state;
  }
}

export default function NewName() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const saqtau = localStorage.getItem('name');
    if (saqtau) {
      dispatch({ type: 'GETITEM', esim: saqtau });
    }
  }, []);

  const handleSave = () => {
    dispatch({ type: 'START' });

    setTimeout(() => {
      localStorage.setItem('name', state.name);
      dispatch({ type: 'SETITEM', esim: state.name });
    }, 1000);
  };

  return (
    <div className="container">
      <h2>Есімді Сақтау</h2>
      <input
        type="text"
        placeholder="Есіміңізді жазыңыз"
        value={state.name}
        onChange={(e) => dispatch({ type: 'ESIM', esim: e.target.value })}
        className="input"
      />
      <button onClick={handleSave} disabled={state.isLoading} className="button">
        {state.isLoading ? 'Сақталуда...' : 'Сақтау'}
      </button>
      {state.savedName && (
        <p className="saved-name">
          Соңғы сақталған есім: <strong>{state.savedName}</strong>
        </p>
      )}
    </div>
  );
}
