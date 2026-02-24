import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Nirjala<span>Deshar</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <button onClick={() => handleNavigation('/')} className="nav-link">Home</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleNavigation('/about')} className="nav-link">About</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleNavigation('/projects')} className="nav-link">Projects</button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleNavigation('/contact')} className="nav-link">Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
