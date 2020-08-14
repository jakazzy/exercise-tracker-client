import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Row, Col, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

import { loginUser, oauth } from '../../api/api'
import './signin.styles.css'

const Signin = () => {
  const { handleSubmit, register, errors } = useForm()

  const onSubmit = async data => {
    console.log(data, 'this is login data')
    await loginUser(data)
  }

  const responseFacebook = async response => {
    console.log(response)
    await oauth('facebook', response.accessToken)
  }

  const responseGoogle = async response => {
    console.log(response)
    await oauth('google', response.accessToken)
  }

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
                <Card.Link href="#">Forgot password</Card.Link>
              </Col>
            </Form.Row>
            <Button className="btn-bg-color" type="submit" block>
              {' '}
              Sign in
            </Button>
            <div className="login-or">
              <span className="span-or">OR</span>
              <hr className="hr-or" />
            </div>
            <Form.Text className="text-muted">Login / Sign up with</Form.Text>
            <div className="social-icons">
              <FacebookLogin
                appId="1088597931155576"
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="btn btn-primary social-button"
                icon={
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                }
                textButton="&nbsp;&nbsp;Sign In with Facebook"
              />
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="&nbsp;&nbsp;Sign In with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="social-button google-button btn btn-outline-danger"
              />
            </div>
          </Form>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default Signin
