import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){

return(
<div>   
<nav className="navbar navbar-expand-lg py-5 p-3 mb-2 bg-secondary text-white" id="navbar">
      <div className="container-fluid">
        <a className="display-6" id="header" aria-current="page" href="./">Melissa Rubio's Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="./Mywork">My Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./resume">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div> 
)}

export default Navbar;