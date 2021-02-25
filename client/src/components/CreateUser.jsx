import axios from 'axios';
import React,{useState,useEffect} from 'react'

export default function CreateUser() {
    const [username,setUsername]=useState("");
    const onSubmit=e=>{
        e.preventDefault();
        const user={
            username:username
        }
        axios.post("http://localhost:5000/users/add",user)
        .then(res=>console.log(res.data))      
    }
    return (
        <div className="container">
        <h3>Create New User</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={username}
                onChange={e=>setUsername(e.target.value)}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
}
