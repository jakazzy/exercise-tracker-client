import React from 'react'
import { Card, Form, Row, Col } from 'react-bootstrap'
import DashboardNavbar from '../../components/dashboard-navbar/dashboard-navbar.component'
import {
  FacebookButton,
  GoogleButton
} from '../../components/oauth-buttons/oauth-buttons.component'
import './settings.styles.css'

const Settings = () => {
  return (
    <div style={{ width: '60rem', margin: '2rem auto' }}>
      <DashboardNavbar page="settings" />
      <Card>
        <Card.Header>Settings page</Card.Header>
        <Card.Body>
          <Form style={{ width: '30rem', margin: '0 auto' }}>
            <Form.Group>
              <Form.Label> Linked Accounts</Form.Label>
              <FacebookButton text="Connect Facebook" route="auth" />
              <GoogleButton text="Connect Google" route="auth" />
            </Form.Group>
            <Form.Group as={Row} style={{ margin: '3rem 1rem 1rem 1rem' }}>
              <Form.File id="image-upload">
                <Form.File.Label>Change Profile picture</Form.File.Label>
                <Form.File.Input />
              </Form.File>
            </Form.Group>
            <Form.Group as={Row} controlId="formGroupEmail">
              <Form.Label column sm={5}>
                Change email Address{' '}
              </Form.Label>
              <Col sm={7}>
                <Form.Control type="email" placeholder="Enter email" />
              </Col>
            </Form.Group>
            <p style={{ textAlign: 'left', marginLeft: '1rem' }}>
              Change Password
            </p>
            <Form.Group as={Row} controlId="formGroupPassword1">
              <Form.Label column sm={5}>
                {' '}
                Enter old password
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="password"
                  placeholder=" Enter previous password"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formGroupPassword2">
              <Form.Label column sm={5}>
                {' '}
                Enter new password
              </Form.Label>
              <Col sm={7}>
                <Form.Control type="password" placeholder="New password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="phonenumber">
              <Form.Label column sm={5}>
                {' '}
                Enter phonenumber
              </Form.Label>
              <Col sm={7}>
                <Form.Control type="text" placeholder="New phonenumber" />
              </Col>
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
