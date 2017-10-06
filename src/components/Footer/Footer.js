import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    &copy; Ian Rose, {new Date().getFullYear()}
  </footer>
);

export default Footer;
