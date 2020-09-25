import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const InviteModal = ({ show, handleClose }) => {
  const [register, handleSubmit, errors] = useForm()

  const onSubmit = async data => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Email address of invite</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Form.Group controlId="inviteEmail">
            <Form.Control
              type="email"
              ref={register({
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address'
                }
              })}
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
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
