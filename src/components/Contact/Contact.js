import React from 'react';
import ContentCentered from '../ContentCentered/ContentCentered';
import ImageJumbo from '../ImageJumbo/ImageJumbo';

const About = () => (
  <div className='about'>
    <ContentCentered>
      <h1>Get in Touch</h1>
      <ImageJumbo
        image={require('../../media/images/ian-on-triangle-statue.jpg')}
        alt='Ian on a trangular statue'
      />
      <p>Email me or check out what projects I’m currently working on.</p>
      <p>
        <i className='fa fa-envelope-o fa-lg' aria-hidden='true'></i>
        <a href='mailto:ianrosedev@gmail.com'>ianrosedev@gmail.com</a>
      </p>
      <p>
        <i className='fa fa-github fa-lg' aria-hidden='true'></i>
        <a href='https://github.com/ianrosedev'>github.com/ianrosedev</a>
      </p>
    </ContentCentered>
  </div>
);

export default About;
