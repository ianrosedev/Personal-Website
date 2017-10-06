import React from 'react';
import PropTypes from 'prop-types';
import './ImageMedium.css';

const propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  float: PropTypes.string.isRequired
};

const ImageMedium = ({ image, alt, float }) => (
  <img
    className={`image-medium-${float}`}
    src={image}
    alt={alt}
  />
);

ImageMedium.propTypes = propTypes;

export default ImageMedium;
