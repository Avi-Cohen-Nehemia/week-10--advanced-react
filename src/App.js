import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Squares from './components/Squares/Squares';
import SignUp from './components/SignUp/SignUp';
import Max from './components/Max/Max';
import Button from './components/Button';
import Form from "./components/Form/Form";
import Articles from "./components/news/Articles";
import Article from './components/news/Article';

function App() {
  return (
    <Router>
      <h2>My Blog</h2>
      <hr></hr>
      <Route exact path="/news" component={ Articles }/>
      <Route exact path="/news/:id" render={ ({match}) => (<Article id={ match.params.id }/>) }/>
      <Route exact path="/squares" component={ Squares }/>

      <Route exact path="/sign-up">
        <SignUp
          minimumLength={ 12 }
        />
      </Route>

      <Route exact path="/max">
        <Max
          numbers={ [2, 4, 10, 8] }
        />
      </Route>

      <Route exact path="/button">
        <Button
          handleUpdate={ console.log }
        />
      </Route>

      <Route exact path="/form">
        <Form
          handleSubmit={ console.log }
          fields={ [
            { label: "Name", name: "name", type: "text" },
            { label: "E-mail", name: "email", type: "email" },
            { label: "Telephone Number", name: "telephone", type: "tel" },
            { label: "Date of Birth", name: "dob", type: "date" },
        ] }
        />
      </Route>
    </Router>
  );
}

export default App;
