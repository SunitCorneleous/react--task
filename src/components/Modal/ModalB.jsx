import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

const ModalB = ({ show, handleClose, setModal }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const res = await fetch(
        'https://contact.mediusware.com/api/country-contacts/United%20States/?page_size=10'
      );

      const data = await res.json();

      setContacts(data.results);
    };

    getContacts();
  }, []);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop='static'
      animation={false}
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal B</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Country</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item?.country.name}</td>
                <td>@{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
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

export default ModalB;
