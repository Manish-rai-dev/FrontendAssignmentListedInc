// ThemeToggle.jsx

import React from 'react';
import './ThemeToggle.css';
import '../index.css';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className={`tdnn ${isDarkMode ? 'day' : ''}`} onClick={toggleTheme}>
      <div className={`moon ${isDarkMode ? 'sun' : ''}`}></div>
    </div>
  );
};

export default ThemeToggle;
