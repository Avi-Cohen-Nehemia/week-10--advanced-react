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
import ClickedReducer from './hooks/ClickedReducer';
import Square from './hooks/Square';
import ToggleText from './hooks/ToggleText';
import Counter from './hooks/Counter';
import StepCounter from './hooks/StepCounter';
import StepCounterReducer from './hooks/StepCounterReducer';
import CatchMeIfYouCan from './hooks/CatchMeIfYouCan';
import RollCall from './hooks/RollCall';
import PasswordStrength from './hooks/PasswordStrength';
import TempConverter from './hooks/TempConverter';
import TempConverterReducer from './hooks/TempConverterReducer';
import List from './ToDo/List';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/news" component={ Articles }/>
        <Route exact path="/news/create" component={ CreateArticle }/>
        <Route exact path="/news/:id" render={ ({match}) => (<Article id={ match.params.id }/>) }/>

        <Route exact path="/clicked" component={ Clicked }/>
        <Route exact path="/clicked-reducer" component={ ClickedReducer }/>
        <Route exact path="/squares" component={ Squares }/>
        <Route exact path="/password-strength" component={ PasswordStrength }/>
        <Route exact path="/temp-converter" component={ TempConverter }/>
        <Route exact path="/temp-converter-reducer" component={ TempConverterReducer }/>
        <Route exact path="/list" component={ List }/>

        <Route exact path="/square">
          <Square
            color={ "hotpink" }
          />
        </Route>

        <Route exact path="/toggle-text">
          <ToggleText
            initial={ "Hello" }
            alternate={ "World" }
          />
        </Route>

        <Route exact path="/counter">
          <Counter
            initial={ 50 }
            max={ 100 }
          />
        </Route>

        <Route exact path="/step-counter">
          <StepCounter
            step={ 5 }
            max={ 100 }
          />
        </Route>

        <Route exact path="/step-counter-reducer">
          <StepCounterReducer
            step={ 5 }
            max={ 100 }
          />
        </Route>

        <Route exact path="/catch-me-if-you-can">
          <CatchMeIfYouCan
            jump={ 100 }
          />
        </Route>

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

        <Route exact path="/roll-call">
          <RollCall
            names={ ["Adam", "Avi", "Dan", "Harriet", "Hanna", "Henry", "Jack", "Nick", "Kierran", "Maddy", "Mhairi", "Richard"] }
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
