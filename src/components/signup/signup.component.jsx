import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Row, Col, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import './signup.styles.css'

const Signup = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    console.log(data, 'input data')
  }

  return (
    <Card
      style={{
        width: '26rem',
        height: '33.5rem',
        position: 'absolute',
        right: '35rem',
        top: '14rem'
      }}>
      <Card.Body>
        <Card.Title>Create An Account</Card.Title>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row} controlId="Email">
              <Col>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  ref={register({
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email address'
                    }
                  })}></Form.Control>
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Contact">
              <Col>
                <Form.Control
                  type="tel"
                  placeholder="Enter telephone number"
                  name="phonenumber"
                  ref={register({
                    required: 'Phonenumber is required'
                  })}></Form.Control>
                {errors.phonenumber && (
                  <p className="error-message">{errors.phonenumber.message}</p>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="password">
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="hashedpassword"
                  ref={register({
                    required: 'password is required',
                    minLength: {
                      value: 2,
                      message: 'Name is too short'
                    }
                  })}></Form.Control>
                {errors.hashedpassword && (
                  <p className="error-message">
                    {errors.hashedpassword.message}
                  </p>
                )}
              </Col>
            </Form.Group>
            <Form.Row className="links-form">
              <Col sm={6}>
                <Form.Check
                  type="switch"
                  id="remember-me"
                  label="Remember me"
                  name="remember"
                  ref={register}
                />
              </Col>
              <Col sm={6}>
                {' '}
                <Card.Link href="#">Forgot password</Card.Link>
              </Col>
            </Form.Row>
            <Button type="submit" block>
              {' '}
              Sign up
            </Button>
            <div className="login-or">
              <span className="span-or">OR</span>
              <hr className="hr-or" />
            </div>
            <Form.Text className="text-muted">Login / Sign up with</Form.Text>
            <div className="social-icons">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
              <i className="fa fa-google-plus-square" aria-hidden="true"></i>
            </div>
          </Form>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default Signup
