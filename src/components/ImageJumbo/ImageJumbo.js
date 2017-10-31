import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageJumbo.css';

const propTypes = {
  image: PropTypes.string.isRequired,
  imageCropped: PropTypes.string,
  alt: PropTypes.string.isRequired
};

class ImageJumbo extends Component {
  handleWindowResize = () => this.forceUpdate();

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  render() {
    const { image, imageCropped = image, alt } = this.props;

    return (
      <img
        className='image-jumbo'
        src={window.innerWidth > 599 ? image : imageCropped}
        alt={alt}
      />
    );
  }
};

ImageJumbo.propTypes = propTypes;

export default ImageJumbo;
