import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Row, Col, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import {
  FacebookButton,
  GoogleButton
} from '../../components/oauth-buttons/oauth-buttons.component'
import { loginUser } from '../../api/api'
import '../../assets/auth-styles.css'

const Signin = () => {
  const history = useHistory()
  const { handleSubmit, register, errors } = useForm()

  const onSubmit = async data => {
    try {
      const resp = await loginUser(data)
      toast(resp.data.message, { type: 'info' })
      setTimeout(() => {
        console.log('This will run after 1 second!')
        history.push('/dashboard')
      }, 2500)
    } catch (error) {
      console.log(error.message)
      toast('Log in unsuccessful', { type: 'error' })
    }
  }

  return (
    <Card className="auth-card">
      <Card.Body>
        <Card.Title>Welcome back</Card.Title>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row} controlId="Email">
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Enter email address"
                  name="email"
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

            <Form.Group as={Row} controlId="password">
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="hashedpassword"
                  ref={register({
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'password is too short'
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
                <Card.Link href="/reset-password">Forgot password</Card.Link>
              </Col>
            </Form.Row>
            <Button className="btn-bg-color btn btn-danger" type="submit" block>
              {' '}
              Sign in
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

export default Signin
