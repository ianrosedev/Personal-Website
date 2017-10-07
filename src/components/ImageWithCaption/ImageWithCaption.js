import React from 'react';
import PropTypes from 'prop-types';
import ImageMedium from '../ImageMedium/ImageMedium';
import './ImageWithCaption.css';

const propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  topCaption: PropTypes.string.isRequired,
  bottomCaption: PropTypes.string.isRequired
};

const ImageWithCaption = ({ image, alt, topCaption, bottomCaption }) => (
  <div className='image-with-caption'>
    <figure>
      <p>{topCaption}</p>
      <ImageMedium
        image={image}
        alt={alt}
      />
      <figcaption>
        <a href={bottomCaption}>
          <i className='fa fa-github fa-lg' aria-hidden='true'></i>
          See it on GitHub
        </a>
      </figcaption>
    </figure>
  </div>
);

ImageWithCaption.propTypes = propTypes;

export default ImageWithCaption;
