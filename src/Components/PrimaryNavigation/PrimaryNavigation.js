import React from 'react';
import { NavLink } from 'react-router-dom';
import './PrimaryNavigation.css';

const PrimaryNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler ms-auto position-fixed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/" 
                style={({ isActive }) => isActive ? { backgroundColor: 'rgb(30, 115, 190)',color:'#fff' } : {}}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/about" 
                style={({ isActive }) => isActive ? { backgroundColor: 'rgb(30, 115, 190)',color:'#fff' } : {}}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/fleet" 
                style={({ isActive }) => isActive ? { backgroundColor: 'rgb(30, 115, 190)',color:'#fff' } : {}}
              >
                Fleet
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/fares" 
                style={({ isActive }) => isActive ? { backgroundColor: 'rgb(30, 115, 190)',color:'#fff' }: {}}
              >
                Fares
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/booking" 
                style={({ isActive }) => isActive ? { backgroundColor: 'rgb(30, 115, 190)',color:'#fff' } : {}}
              >
                Booking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to="/contact" 
                style={({ isActive }) => isActive ? { backgroundColor: 'rgb(30, 115, 190)',color:'#fff' } : {}}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="search-icon"><i className="fa fa-search"></i></div>
        </div>
      </div>
    </nav>
  );
};

export default PrimaryNavigation;
