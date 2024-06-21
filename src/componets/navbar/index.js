import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="container-fluid d-flex justify-content-between align-items-center">
      <Link to="/" >
          <img
            src="https://res.cloudinary.com/drevfgyks/image/upload/v1694333811/20230213_232002_p6djmh.png"
            className="company-logo"
            alt="logo"
          />
        </Link>
        <div className="menus d-flex">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
