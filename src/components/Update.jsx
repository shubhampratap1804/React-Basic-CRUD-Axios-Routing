import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function Update() {

    const [id, setId] = useState(0);
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const history = useNavigate();
    
   useEffect(() =>{
    setId(localStorage.getItem("id"))
    setName(localStorage.getItem("name"))
    setEmail(localStorage.getItem("email"))

   },[])

   const handleUpdate = (e) =>{
    try{
        e.preventDefault();
        axios.put(`https://6651933220f4f4c4427810db.mockapi.io/crud/${id}`,
        {
            name : name,
            email : email
        }
        ).then(() =>{
            history("/read")
            localStorage.clear();
        });
    }catch(e){
        console.log("Error while updating the element!");
    }
        
   }


  return (
    <div>
        <h1>Update</h1>
    <form onSubmit={handleUpdate}>

    <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" value={name}
        id="exampleInputName1" onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" value={email}
        aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <button type="submit" className="btn btn-primary">Update</button>
    </form>
    </div>
  )
}

export default Update
