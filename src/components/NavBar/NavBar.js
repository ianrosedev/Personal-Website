import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const burgerToggle = () => {
    const narrowLinks = document.querySelector('.nav-narrow-links');

    if (narrowLinks.style.display === 'block') {
      narrowLinks.style.display = 'none';
    } else {
      narrowLinks.style.display = 'block';
    }
  };

  return (
    <nav className='nav-bar'>
      <div className='nav-wide'>
        <ul>
          <li onClick={burgerToggle}>
            <NavLink exact to='/' activeClassName='selected'>
              Home
            </NavLink>
          </li>
          <li onClick={burgerToggle}>
            <NavLink to='/projects' activeClassName='selected'>
              Projects
            </NavLink>
          </li>
          <li onClick={burgerToggle}>
            <NavLink to='/about' activeClassName='selected'>
              About
            </NavLink>
          </li>
          <li onClick={burgerToggle}>
            <NavLink to='/contact' activeClassName='selected'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='nav-narrow'>
        <i
          className='fa fa-bars'
          onClick={burgerToggle}
        >
        </i>
        <ul className='nav-narrow-links'>
          <li onClick={burgerToggle}>
            <NavLink exact to='/' activeClassName='selected'>
              Home
            </NavLink>
          </li>
          <li onClick={burgerToggle}>
            <NavLink to='/projects' activeClassName='selected'>
              Projects
            </NavLink>
          </li>
          <li onClick={burgerToggle}>
            <NavLink to='/about' activeClassName='selected'>
              About
            </NavLink>
          </li>
          <li onClick={burgerToggle}>
            <NavLink to='/contact' activeClassName='selected'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
