import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import User from './User';
import Device from './Device';
import AddDevice from './AddDevice';
import Tracker from './Tracker';
import AddTracker from './AddTracker';
import About from './About';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import Ad from './ad';
import Social from './social';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/User" element={<User/>} />
        <Route path="/create" element={<CreateUser/>} />
        <Route path="/update/:id" element={<UpdateUser/>} />
        <Route path="/Device" element={<Device />} />
        <Route path="/AddDevice" element={<AddDevice />} />
        <Route path="/Tracker" element={<Tracker />} />
        <Route path="/AddTracker" element={<AddTracker />} />
        <Route path="/About" element={<About />} />
        <Route path="/Ad" element={<Ad />} />
       <Route path="/Social" element={<Social />} />
      </Routes>
    </div>
  );
}

export default App;
