import React from 'react';
import './Navbar.css';
import Logo from '../assets/Logo (2).png';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src={Logo} alt="Softcode Logo" className="logo-img" />
      <p>Softcode</p>
    </div>
    <ul className="nav-links">
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
