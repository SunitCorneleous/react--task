import React from 'react';
import ModalA from './ModalA';
import ModalB from './ModalB';

const DynamicModal = ({ show, handleClose, modalOption, setModal }) => {
  if (modalOption === 'A') {
    return <ModalA show={show} handleClose={handleClose} setModal={setModal} />;
  } else if (modalOption === 'B') {
    return <ModalB show={show} handleClose={handleClose} setModal={setModal} />;
  }
};

export default DynamicModal;
