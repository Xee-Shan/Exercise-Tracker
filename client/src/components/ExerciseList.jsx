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
  },[])
    return (
        <div>
            exercise list
        </div>
    )
}
