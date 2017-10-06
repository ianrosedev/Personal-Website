import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => (
  <header className='header'>
    <div className='heading'>
      <h1>Ian Rose</h1>
      <span className='sub-heading'>Web Application Developer</span>
    </div>
    <NavBar />
  </header>
);

export default Header;
