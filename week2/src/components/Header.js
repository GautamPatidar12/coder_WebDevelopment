import React from 'react';

//npm install react-scroll
import { Link } from 'react-scroll';

const Header = ({ setDarkMode, darkMode }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Gautam Patidar</h1>
      </div>
      <nav className="header-nav">
        <Link to="about" smooth duration={500}>About</Link>
        <Link to="projects" smooth duration={500}>Projects</Link>
        <Link to="contact" smooth duration={500}>Contact</Link>
      </nav>
      <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;