import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className='not-found'>
    <iframe
      className='not-found-video'
      src='https://www.youtube.com/embed/zDKO6XYXioc'
      title='Boys 2 Men, End of the Road'
      width='100%'
      height='100%'
      frameBorder='0'
    >
    </iframe>
    <h1>You've reached the end of the road...</h1>
    <p>You're lost, but to get back on track click below!</p>
    <Link to='/'>
      Home
    </Link>
  </div>
);

export default NotFound;
