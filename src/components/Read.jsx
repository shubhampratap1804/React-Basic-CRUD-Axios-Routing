import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Read() {

    const [data, setData] = useState([]);

    useEffect(() =>{
        getData();
    },[])

    const getData = () =>{
        try{
            axios.get("https://6651933220f4f4c4427810db.mockapi.io/crud")/*this returns a promise*/
            .then((res) => {
                //console.log("Response", res.data);
                setData(res.data)
            })
        }catch(e){
            console.log("Error in fetching data!");
        }
    }

    const handleDelete = (id) => {
        try{
            axios.delete(`https://6651933220f4f4c4427810db.mockapi.io/crud/${id}`)
            .then(() =>{
                getData();
            })
        }catch(e){
            console.log("Error while deleting element!");
        }
    }

    const setLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        
    }


    
    /*useEffect, which will re-render page only when the state changes.
    stops infinite re-rendering of page by using dependency array[data]
    first time rendering happens with initial data*/
   
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Operations</th>
    </tr>
  </thead>
{
    data.map((eachData) =>{
        return(
            <tr key={eachData.id}>
                <th>{eachData.id}</th>
                <th>{eachData.name}</th>
                <th>{eachData.email}</th>
                <th>
                <Link to="/update">
                    <button className='btn btn-success' onClick={() => setLocalStorage(
                        eachData.id, 
                        eachData.name, 
                        eachData.email)}>Edit
                    </button> &nbsp;                  
                </Link>
                <Link to="/read">
                <button className='btn btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button>
                </Link>
                </th>
            </tr>
        )
    })
}

</table>
    </div>
  )
}

export default Read
