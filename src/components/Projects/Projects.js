import React from 'react';
import { Helmet } from 'react-helmet';
import ContentCentered from '../ContentCentered/ContentCentered';
import ImageWithCaption from '../ImageWithCaption/ImageWithCaption';
import './Projects.css';

const Projects = () => (
  <div className='projects'>
    <Helmet defer={false}>
      <title>Ian Rose &ndash; Projects</title>
    </Helmet>
    <ContentCentered>
      <h1>My Latest Projects</h1>
      <p>Ordered newest to oldest. Check out the GitHub repos to see the code.</p>
      <div className='projects-images'>
        <ImageWithCaption
          image={require('../../media/images/super-nintendo-game-info.jpg')}
          alt='Super Nintendo Game Info'
          topCaption='Super Nintendo Game Info'
          bottomCaption='https://github.com/ianrosedev/Super-Nintendo-Game-Info'
        />
        <ImageWithCaption
          image={require('../../media/images/todo-list.jpg')}
          alt='Todo List'
          topCaption='Todo List'
          bottomCaption='https://github.com/ianrosedev/Todo-App'
        />
        <ImageWithCaption
          image={require('../../media/images/simple-simon.png')}
          alt='Simple Simon'
          topCaption='Simple Simon'
          bottomCaption='https://github.com/ianrosedev/Simple-Simon'
        />
      </div>
    </ContentCentered>
  </div>
);

export default Projects;
