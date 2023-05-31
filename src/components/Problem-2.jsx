import React, { useState } from 'react';
import DynamicModal from './Modal/DynamicModal';

const Problem2 = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = option => {
    setShow(true);
    setModal(option);
  };

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

        <div className='d-flex justify-content-center gap-3'>
          <button
            onClick={() => handleShow('A')}
            className='btn btn-lg btn-outline-primary'
            type='button'
          >
            All Contacts
          </button>

          <button
            onClick={() => handleShow('B')}
            className='btn btn-lg btn-outline-warning'
            type='button'
          >
            US Contacts
          </button>
        </div>

        <DynamicModal
          show={show}
          handleClose={handleClose}
          modalOption={modal}
          setModal={setModal}
        />
      </div>
    </div>
  );
};

export default Problem2;
