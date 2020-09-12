import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const InviteModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Email address of invite</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group controlId="inviteEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Send Invite
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default InviteModal
