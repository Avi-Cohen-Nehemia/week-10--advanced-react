import React from 'react';
import './App.css';
import Squares from './components/Squares/Squares';
import SignUp from './components/SignUp/SignUp';
import Max from './components/Max/Max';
import Button from './components/Button';
import Form from "./components/Form/Form";

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

      <Button
        handleUpdate={ console.log }
      />

      <Form
        handleSubmit={ console.log }
        fields={ [
          { label: "Name", name: "name", type: "text" },
          { label: "E-mail", name: "email", type: "email" },
          { label: "Telephone Number", name: "telephone", type: "tel" },
          { label: "Date of Birth", name: "dob", type: "date" },
      ] }
      />
    </>
  );
}

export default App;
