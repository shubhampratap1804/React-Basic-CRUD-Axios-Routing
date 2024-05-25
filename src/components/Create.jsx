    import React, { useState } from 'react'
    import axios from "axios";
    import { useNavigate } from 'react-router-dom';

    function Create() {

        const[name, setName] = useState("");
        const[email, setEmail] = useState("");
        const history = useNavigate();

        const header = {"Access Verified, Do Your things!" : "*"};

        const handleSubmit = (e) =>{
            e.preventDefault();
            console.log("Submitted!")
            axios.post(
                'https://6651933220f4f4c4427810db.mockapi.io/crud',
                {
                name: name, 
                email : email, 
                header
            })
            .then(() =>{
                history("/read");
            })
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" 
        id="exampleInputName1" onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" 
        aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
        </div>
    )
    }

    export default Create
