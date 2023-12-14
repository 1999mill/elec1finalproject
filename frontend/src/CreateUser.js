
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function CreateUser() {
    const [name, setName] = useState('')
    const [device, setDevice] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
      event.preventDefault();
      axios.post('http://localhost:8081/create', { name, device })
          .then(response => { 
              console.log(response);
              navigate('/User');
          }).catch(err => console.log(err));
  }
  return (
      <div className='d-flex flex-column align-items-center vh-100 bg-primary justify-content-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h1>Add User</h1>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" className="form-control"
                    onChange={e => setName(e.target.value)}/>             
                </div>
                <div className="mb-2">
                    <label htmlFor="">Device</label>
                    <input type="text" placeholder="Enter Device" className="form-control"
                    onChange={e => setDevice(e.target.value)}/>
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
      </div>
    );
  }
  export default CreateUser;