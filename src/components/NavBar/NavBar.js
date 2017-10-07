import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className='nav-bar'>
    <ul>
      <li>
        <NavLink exact to='/' activeClassName='selected'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/projects' activeClassName='selected'>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' activeClassName='selected'>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to='/contact' activeClassName='selected'>
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
