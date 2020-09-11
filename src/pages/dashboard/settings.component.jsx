import React from 'react'
import { Card, Form } from 'react-bootstrap'

const Settings = () => {
  return (
    <div style={{ width: '60rem', margin: '2rem auto' }}>
      <Card>
        <Card.Header>Settings page</Card.Header>
        <Card.Body>
          <Form style={{ width: '40rem', margin: '0 auto' }}>
            <Form.File id="image-upload">
              <Form.File.Label>Change Profile picture</Form.File.Label>
              <Form.File.Input />
            </Form.File>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Change email Address </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <p>Change Password</p>
            <Form.Group controlId="formGroupPassword1">
              <Form.Label> Enter previous password</Form.Label>
              <Form.Control
                type="password"
                placeholder=" Enter previous password"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword2">
              <Form.Label> Enter new password</Form.Label>
              <Form.Control type="password" placeholder="New password" />
            </Form.Group>
            <Form.Group controlId="phonenumber">
              <Form.Label> Enter phonenumber</Form.Label>
              <Form.Control type="text" placeholder="New phonenumber" />
            </Form.Group>
            <Form.Check
              type="switch"
              id="switch-darkmode"
              label="Turn  on Dark Mode"
            />
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Turn on Notifications"
            />
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Settings
