import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';
function Navbars() {
  return (
<div><nav  className="navbar bg-primary navbar-expand-lg bg-body-dark">
  <div className="container-fluid">
    
    
   
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <Link to={'/'}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
    </Link>
    <Link to={'/about'}>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
    </Link>
    
    <Link to={'/contact'}>
            <li className='nav-item'><a className="nav-link" href="#">Contact</a></li>
    </Link>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav></div>
  )
}

export default Navbars