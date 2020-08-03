import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap'

import './signin.styles.css'

const Signin = () => {
  return (
    <Card
      style={{
        width: '26rem',
        height: '30rem',
        position: 'absolute',
        right: '35rem',
        top: '14rem'
      }}>
      <Card.Body>
        <Card.Title>Welcome back</Card.Title>
        <Form>
          <Form.Group as={Row} controlId="Email">
            <Form.Control
              type="email"
              placeholder="Enter email address"></Form.Control>
          </Form.Group>

          <Form.Group as={Row} controlId="password">
            <Form.Control
              type="password"
              placeholder="Enter password"></Form.Control>
          </Form.Group>
          <Form.Row>
            <Col sm={6}>
              <Form.Check type="switch" id="remember-me" label="Remember me" />
            </Col>
            <Col sm={6}>
              {' '}
              <Card.Link href="#">Forgot password</Card.Link>
            </Col>
          </Form.Row>
          <Button> Sign in</Button>
          <div className="login-or">
            <span className="span-or">OR</span>
            <hr className="hr-or" />
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Signin
