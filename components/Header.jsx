

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Header() {
   const [isdark,setIsdark]= useContext(ThemeContext)
  return (
    <header className={`header-content ${isdark ? 'dark' : ''}`}> 
      <div className="header-text">
        <h2 className="tital">
          <Link to="/">Where in the world?</Link>
        </h2>
        
        <p className="theme-changer" onClick={() => {
          setIsdark(!isdark)
          localStorage.setItem('themeMode',!isdark)
        }}> 
          <span>
            <i className={isdark ? 'fa-solid fa-sun' : 'fa-regular fa-moon'}></i>
          </span>
          &nbsp;&nbsp;{isdark ? 'Light' : 'Dark'} Mode
        </p>
      </div>
    </header>
  );
}