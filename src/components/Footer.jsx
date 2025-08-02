import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="#" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#weavers" onClick={() => scrollToSection('weavers')}>Weavers</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
        <p className="copyright">&copy; 2023 HandloomHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;