import React from 'react'
import {BrowserRouter  as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component.js"
import ExercicesList from "./components/exercices-list.component.js"
import EditExercice from "./components/edit-exercice.component.js"
import CreateExercice from "./components/create-exercice.component.js"
import CreateUser from "./components/create-user.component"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={ExercicesList}/>
        <Route path="/edit/:id" component={EditExercice}/>
        <Route path="/create" component={CreateExercice}/>
        <Route path="/user" component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
