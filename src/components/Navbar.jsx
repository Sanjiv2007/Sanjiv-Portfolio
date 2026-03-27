import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar glass-card">
        <div className="logo">
          Sanjiv<span>.</span>
        </div>

        <div className="nav-right">
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions">
            <div className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className={`menu-btn-burger ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
