import React,{useState,useEffect} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default function CreateExercise() {
    const [username,setUsername]=useState("test user");
    const [duration,setDuration]=useState("");
    const [description,setDescription]=useState("");
    const [date,setDate]=useState(new Date());
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/users/")
        .then(response=>{
            if(response.data.length>0){
                setUsers(response.data);
                setUsername(response.data[0].username);
            }
        })
        .catch(error=>console.log(error));
    },[]);

    const onSubmit=e=>{
        e.preventDefault();
    
        const exercise = {
          username: username,
          description: description,
          duration: duration,
          date: date
        }
        console.log(exercise);
    
        axios.post('http://localhost:5000/exercises/add', exercise)
          .then(res => console.log(res.data));
    
        window.location = '/';
      }
    return (
             <div className="container">
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select
              required
              className="form-control"
              value={username}
              onChange={e=>setUsername(e.target.value)}>
              {
                users.map(function(user){
                  return <option key={user.username} value={user.username}>
                      {user.username}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={description}
              onChange={e=>setDescription(e.target.value)}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={duration}
              onChange={e=>setDuration(e.target.value)}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={date=>setDate(date)}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
}
