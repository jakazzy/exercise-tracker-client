import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'

const ProfileForm = () => {
  return (
    <Form>
      <p>Edit Profile</p>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="firstname">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="First name" />
        </Form.Group>

        <Form.Group as={Col} controlId="lastname">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Last name" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Button
        style={{
          color: 'white',
          backgroundColor: 'rgb(82, 185, 192)',
          border: 'rgb(82, 185, 192)'
        }}
        type="submit">
        Update Profile
      </Button>
    </Form>
  )
}

export default ProfileForm
