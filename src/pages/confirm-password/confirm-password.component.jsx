import React from 'react'
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import Layout from '../../components/layout/layout.component'

const ConfirmPassword = () => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = data => {
    console.log(data, 'send data')
  }

  return (
    <Layout>
      <Card
        style={{
          width: '20rem',
          height: '20rem',
          top: '14rem',
          margin: '0 auto'
        }}>
        <Card.Body>
          <Container>
            <Card.Title>Kindly reset password</Card.Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group as={Row} controlId="password">
                <Col>
                  <Form.Control
                    type="password"
                    placeholder="Enter password "
                    name="password"
                    ref={register({
                      required: 'password is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid password '
                      }
                    })}></Form.Control>
                  {errors.password && (
                    <p className="error-message">{errors.password.message}</p>
                  )}
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="password">
                <Col>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    ref={register({
                      required: 'password is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid password address'
                      }
                    })}></Form.Control>
                  {errors.confirmPassword && (
                    <p className="error-message">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </Col>
              </Form.Group>
              <Button className="btn-bg-color" type block>
                {' '}
                Reset Password
              </Button>
            </Form>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Container>
        </Card.Body>
      </Card>
    </Layout>
  )
}

export default ConfirmPassword
