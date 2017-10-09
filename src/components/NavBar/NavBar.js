import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  state = {
    isDropdownOpen: false
  };

  burgerClose = () => (
    this.setState({
      isDropdownOpen: false
    })
  );

  burgerToggle = () => (
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen
    }))
  );

  render () {
    const links = (
      <span>
        <li onClick={this.burgerClose}>
          <NavLink exact to='/' activeClassName='selected'>
            Home
          </NavLink>
        </li>
        <li onClick={this.burgerClose}>
          <NavLink to='/projects' activeClassName='selected'>
            Projects
          </NavLink>
        </li>
        <li onClick={this.burgerClose}>
          <NavLink to='/about' activeClassName='selected'>
            About
          </NavLink>
        </li>
        <li onClick={this.burgerClose}>
          <NavLink to='/contact' activeClassName='selected'>
            Contact
          </NavLink>
        </li>
      </span>
    );

    return (
      <nav className='nav-bar'>
        <div className='nav-wide'>
          <ul>
            {links}
          </ul>
        </div>
        <div className='nav-narrow'>
          <i
            className='fa fa-bars'
            onClick={this.burgerToggle}
          >
          </i>
          <ul
            className='nav-narrow-links'
            style={this.state.isDropdownOpen ? { display: 'block' } : { display: 'none' }}
          >
            {links}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
