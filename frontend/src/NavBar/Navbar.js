import React from "react";
import {NavLink} from "react-router-dom";
import './navbar.css'
import {useData} from '../DataContext/DataContext';
function Navbar() {
  const {userData} = useData();
  console.log(userData);
  return (
    <nav className="navigationbar">
      <ul>
      
      <NavLink to="/"><img src="default.jpg" alt="image" className="home-image"/></NavLink>
      {userData?<li><NavLink to="/profile">Profile</NavLink></li>:<li><NavLink to="/login">Login</NavLink></li>}
      <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
}
export default Navbar;
