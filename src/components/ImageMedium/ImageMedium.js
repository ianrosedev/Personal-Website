import React from 'react';
import PropTypes from 'prop-types';
import './ImageMedium.css';

const propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  float: PropTypes.string,
  onClick: PropTypes.func
};

const ImageMedium = ({ image, alt, float, onClick }) => (
  <img
    className={float ? `image-medium-${float}` : null}
    src={image}
    alt={alt}
    onClick={onClick}
  />
);

ImageMedium.propTypes = propTypes;

export default ImageMedium;
