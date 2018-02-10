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

const ImageWithCaption = ({ image, link, alt, topCaption, bottomCaption }) => (
  <div className='image-link-with-caption'>
    <figure>
      <p>{topCaption}</p>
      {(link) ? (
        <a href={link}>
          <ImageMedium
            image={image}
            alt={alt}
          />
        </a>
      ) : (
        <PortalWithState
          node={document.getElementById('portal')}
          closeOnOutsideClick
          closeOnEsc
        >
          {({ portal, openPortal, closePortal }) => [
            <ImageMedium
              key={alt}
              image={image}
              alt={alt}
              onClick={openPortal}
            />,
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

ImageWithCaption.propTypes = propTypes;

export default ImageWithCaption;
