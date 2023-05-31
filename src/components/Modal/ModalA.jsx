import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalA = ({ show, handleClose, setModal }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop='static'
      animation={false}
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal A</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Don not even try to press
        escape key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={() => setModal('A')}>
          All Contacts
        </Button>
        <Button variant='primary' onClick={() => setModal('B')}>
          US Contacts
        </Button>

        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;
