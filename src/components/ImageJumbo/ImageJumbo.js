import React from 'react';
import PropTypes from 'prop-types';
import './ImageJumbo.css';

const propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

const ImageJumbo = ({ image, alt }) => (
  <img
    className='image-jumbo'
    src={image}
    alt={alt}
  />
);

ImageJumbo.propTypes = propTypes;

export default ImageJumbo;
