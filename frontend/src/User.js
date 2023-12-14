import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/User/${id}`)
      .then(response => {
        console.log(response);
        setUser(prevUsers => prevUsers.filter(user => user.ID !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex flex-column align-items-center vh-100 bg-primary justify-content-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success'>Add User</Link>
        <table className='table mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Device</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data, i) => (
              <tr key={i}>
                <td>{data.Name}</td>
                <td>{data.Device}</td>
                <td>
                  <Link to={`/update/${data.ID}`} className='btn btn-primary'>Update</Link>
                  <button className='btn btn-danger ms-2'onClick={ () => handleDelete(data.ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

