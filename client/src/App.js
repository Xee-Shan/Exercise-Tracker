import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import ExerciseList from "./components/ExerciseList";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import EditExercise from "./components/EditExercise";

export default function App() {
  return (
    <div>
      <Navbar/>
      <br/>
      <Route path="/" exact component={ExerciseList}/>
      <Route path="/edit/:id" exact component={EditExercise}/>
      <Route path="/create" exact component={CreateExercise}/>
      <Route path="/user" exact component={CreateUser}/>
    </div>
  )
}
