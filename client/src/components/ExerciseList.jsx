import React,{useEffect,useState} from 'react'
import axios from "axios"
export default function ExerciseList() {
    const [exercises,setExercises]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/exercises/")
    .then(response=>{
        setExercises(response.data);
    })
    .catch((error)=>console.log(error));
  },[]);
  function deleteExercise(id){
    axios.delete("http://localhsot:5000/exercises/"+id)
    .then(res=>console.log(res.data));
    setExercises(exercises.filter(el=>el._id!==id));
  }
    return (
            <div className="container">
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
        {
          exercises.map((exercise,i)=>{
            <tr key={i}>
          <td>{exercise.username}</td>
          <td>{exercise.description}</td>
          <td>{exercise.duration}</td>
          <td>{exercise.date}</td>
          </tr>
          })
        }
          </tbody>
        </table>
      </div>
    )
}
