import React from 'react';
import PropTypes from 'prop-types';
import { PortalWithState } from 'react-portal';
import ModalSmall from '../ModalSmall/ModalSmall';
import ImageMedium from '../ImageMedium/ImageMedium';
import './ImageLinkWithCaption.css';

const propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  alt: PropTypes.string.isRequired,
  topCaption: PropTypes.string.isRequired,
  bottomCaption: PropTypes.string.isRequired
};

const ImageLinkWithCaption = ({ image, link, alt, topCaption, bottomCaption }) => (
  <div className='image-link-with-caption'>
    <figure>
      <p>{topCaption}</p>
      {(link) ? (
        <a href={link}>
          <div className='image-link-with-caption-image'>
            <ImageMedium
              image={image}
              alt={alt}
            />
          </div>
        </a>
      ) : (
        <PortalWithState
          node={document.getElementById('portal')}
          closeOnOutsideClick
          closeOnEsc
        >
          {({ portal, openPortal, closePortal }) => [
            <div
              className='image-link-with-caption-image'
              key={alt}
            >
              <ImageMedium
                image={image}
                alt={alt}
                onClick={openPortal}
              />
            </div>,
            portal(
              <ModalSmall
                text="Sorry, there currently isn't an example for this app."
                onClick={closePortal}
              />
            )
          ]}
        </PortalWithState>
      )}
      <figcaption>
        <a href={bottomCaption}>
          <i className='fa fa-github fa-lg' aria-hidden='true'></i>
          See it on GitHub
        </a>
      </figcaption>
    </figure>
  </div>
);

ImageLinkWithCaption.propTypes = propTypes;

export default ImageLinkWithCaption;
