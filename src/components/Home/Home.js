import React from 'react';
import ContentCentered from '../ContentCentered/ContentCentered';
import './Home.css';

const Home = () => (
  <div className='home'>
    <ContentCentered>
      <h1>Hi! My name is Ian.<br />
        <span className='home-intro-about'>
          I’m a Web Application Developer living in Durham, North Carolina.
        </span>
      </h1>
      <h3>Some of my current skills include:</h3>
      <ul>
        <li>JavaScript (Latest+)</li>
        <li>React</li>
        <li>Redux</li>
        <li>Sass</li>
        <li>Node</li>
        <li>Express</li>
      </ul>
      <h3>I look forward to working with you to make some great web apps!</h3>
    </ContentCentered>
  </div>
);

export default Home;
