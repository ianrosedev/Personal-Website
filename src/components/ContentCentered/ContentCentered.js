import React from 'react';
import PropTypes from 'prop-types';
import './ContentCentered.css';

const propTypes = {
  children: PropTypes.node.isRequired
};

const ContentCentered = ({ children }) => (
  <div className='content-centered'>
    {children}
  </div>
);

ContentCentered.propTypes = propTypes;

export default ContentCentered;
