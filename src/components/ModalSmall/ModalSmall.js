import React from 'react';
import PropTypes from 'prop-types';
import './ModalSmall.css';

const propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const ModalSmall = ({ text, onClick }) => {
  return (
    <div className='modal-small' >
      <div className='modal-small-modal'>
        <div className='modal-small-topbar'>
          <i
            className='fa fa-times-circle'
            onClick={onClick}
          >
          </i>
        </div>
        <div className='modal-small-text'>
          {text}
        </div>
      </div>
    </div>
  );
};

ModalSmall.propTypes = propTypes;

export default ModalSmall;
