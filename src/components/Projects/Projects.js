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
          image={require('../../media/images/puphub.jpg')}
          alt='PupHub'
          topCaption='PupHub'
          bottomCaption='https://github.com/ianrosedev/PupHub'
        />
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
      </div>
    </ContentCentered>
  </div>
);

export default Projects;
