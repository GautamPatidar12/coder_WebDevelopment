import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Detecting the system's dark mode preference
  useEffect(() => {
    const userPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(userPreference);
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;