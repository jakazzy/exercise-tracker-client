import React from 'react'
import { Row, Col, Container, Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers'
import * as Yup from 'yup'

import {
  FacebookButton,
  GoogleButton
} from '../oauth-buttons/oauth-buttons.component'
import { createNewUser } from '../../api/api'
import '../../assets/auth-styles.css'

const Signup = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    phonenumber: Yup.string(),
    password: Yup.string()
      .min(8, 'Password should be longer than 8 characters')
      .required('Password is required')
  })
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    try {
      const resp = await createNewUser(data)
      toast(resp.data.message, { type: 'info' })
    } catch (error) {
      console.log(error.message)
      toast('Sign up unsuccessful', { type: 'error' })
    }
  }

  return (
    <Card className="auth-card">
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
                  ref={register}></Form.Control>
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
                  ref={register}></Form.Control>
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
                      value: 8,
                      message: 'Password is too short'
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
                {/* <Card.Link href="#">Forgot password</Card.Link> */}
              </Col>
            </Form.Row>
            <Button className="btn-bg-color" type="submit" block>
              {' '}
              Sign up
            </Button>
            <div className="login-or">
              <span className="span-or">OR</span>
              <hr className="hr-or" />
            </div>
            <Form.Text className="text-muted">Login / Sign up with</Form.Text>
            <div className="social-icons">
              <FacebookButton text="Sign in with Facebook" route="auth" />
              <GoogleButton text="Sign in with Google" route="auth" />
            </div>
          </Form>
        </Container>
      </Card.Body>
      <ToastContainer position="top-center"></ToastContainer>
    </Card>
  )
}

export default Signup
