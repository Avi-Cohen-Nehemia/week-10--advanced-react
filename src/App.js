import React from 'react';
import './App.css';
import Squares from './components/Squares/Squares';
import SignUp from './components/SignUp/SignUp';
import Max from './components/Max/Max';

function App() {
  return (
    <>
      <Squares />

      <SignUp
        minimumLength={ 12 }
      />

      <Max
        numbers={ [2, 4, 10, 8] }
      />
    </>
  );
}

export default App;
