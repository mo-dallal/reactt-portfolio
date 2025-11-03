import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Start Bootstrap
        </Link>
        
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/portfolio" 
            className={isActive('/portfolio') ? 'active-link' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            to="/about" 
            className={isActive('/about') ? 'active-link' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={isActive('/contact') ? 'active-link' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;