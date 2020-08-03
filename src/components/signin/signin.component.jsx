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
            {/* <Form.Label column sm={3}>
              Email
            </Form.Label> */}
            <Col>
              <Form.Control
                type="email"
                placeholder="Enter email address"></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="password">
            {/* <Form.Label column sm={3}>
              Password
            </Form.Label> */}
            <Col>
              <Form.Control
                type="password"
                placeholder="Enter password"></Form.Control>
            </Col>
          </Form.Group>
          <Button> Sign in</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Signin
