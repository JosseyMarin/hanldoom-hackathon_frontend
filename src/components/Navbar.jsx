import React from 'react';
import { FaTshirt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleLogin }) => {
  const navigate = useNavigate();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
        <FaTshirt className="logo-icon" />
        HandloomHub
      </a>
      <ul className="nav-links">
        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
        <li><a href="#weavers" onClick={(e) => { e.preventDefault(); scrollToSection('weavers'); }}>Weavers</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/supplier-login"); }}>Supplier Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;