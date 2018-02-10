import React from 'react';
import { Helmet } from 'react-helmet';
import ContentCentered from '../ContentCentered/ContentCentered';
import ImageLinkWithCaption from '../ImageLinkWithCaption/ImageLinkWithCaption';
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
        <ImageLinkWithCaption
          image={require('../../media/images/puphub.jpg')}
          link='https://puphubapp.herokuapp.com'
          alt='PupHub'
          topCaption='PupHub'
          bottomCaption='https://github.com/ianrosedev/PupHub'
        />
        <ImageLinkWithCaption
          image={require('../../media/images/super-nintendo-game-info.jpg')}
          link='https://supernintendogameinfo.herokuapp.com'
          alt='Super Nintendo Game Info'
          topCaption='Super Nintendo Game Info'
          bottomCaption='https://github.com/ianrosedev/Super-Nintendo-Game-Info'
        />
        <ImageLinkWithCaption
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
