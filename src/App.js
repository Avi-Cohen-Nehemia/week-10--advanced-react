import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Squares from './components/Squares/Squares';
import SignUp from './components/SignUp/SignUp';
import Max from './components/Max/Max';
import Button from './components/Button';
import Form from "./components/Form/Form";
import Articles from "./components/news/Articles";
import Article from './components/news/Article';
import CreateArticle from './components/news/CreateArticle';
import Clicked from "./hooks/Clicked";
import Square from './hooks/Square';
import ToggleText from './hooks/ToggleText';
import Counter from './hooks/Counter';
import StepCounter from './hooks/StepCounter';
import CatchMeIfYouCan from './hooks/CatchMeIfYouCan';
import RollCall from './hooks/RollCall';
import PasswordStrength from './hooks/PasswordStrength';
import TempConverter from './hooks/TempConverter';
import List from './hooks/List';
import ClickedReducer from './hooks/ClickedReducer';

function App() {
  return (
    <Router>
      <h2>My Blog</h2>
      <hr></hr>
      <Clicked/>
      <Square
        color={ "hotpink" }
      />
      <ToggleText
        initial={ "Hello" }
        alternate={ "World" }
      />
      <Counter
        initial={ 50 }
        max={ 100 }
      />
      <StepCounter
        step={ 5 }
        max={ 100 }
      />
      <CatchMeIfYouCan
        jump={ 100 }
      />
      <RollCall
        names={ ["Adam", "Avi", "Dan", "Harriet", "Hanna", "Henry", "Jack", "Nick", "Kierran", "Maddy", "Mhairi", "Richard"] }
      />
      <PasswordStrength />
      <TempConverter />
      <List />
      <ClickedReducer />
      <Switch>
        <Route exact path="/news" component={ Articles }/>
        <Route exact path="/news/create" component={ CreateArticle }/>
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
      </Switch>
    </Router>
  );
}

export default App;
