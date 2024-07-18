import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeNavbar = () => {
      setIsOpen(false);
    };

    document.addEventListener('click', closeNavbar);

    return () => {
      document.removeEventListener('click', closeNavbar);
    };
  }, []);

  const toggleNavbar = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    if (isOpen) {
      setIsOpen(false);
    }

    if (targetId === 'home' && window.scrollY !== 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="nav">
      <div className="logo">Logo</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <a href="#" onClick={(e) => handleNavLinkClick(e, 'home')}>Home</a>
        <a href="#" onClick={(e) => handleNavLinkClick(e, 'about')}>About</a>
        <a href="#" onClick={(e) => handleNavLinkClick(e, 'skills')}>Skills</a>
        <a href="#" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a>
        <a href="#" onClick={(e) => handleNavLinkClick(e, 'achievements')}>Achievements</a>
        <a href="#" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
