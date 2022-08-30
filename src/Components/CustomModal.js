import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import './CustomModal.css';

const ModalOverlay = props => {
  const content = (
    <div className={`modal_custom`} style={props.style}>
      <header className={`modal__header`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div className={`modal__content `}>
          {props.children}
        </div>
        <footer className={`modal__footer`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
  return (
    <React.Fragment>
      {props.show && <Backdrop />}
      <ModalOverlay {...props} />
    </React.Fragment>
  );
};

export default Modal;
