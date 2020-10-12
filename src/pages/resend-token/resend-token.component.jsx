import React from 'react'
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import Layout from '../../components/layout/layout.component'

const ResendToken = () => {
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
            <Card.Title>
              Kindly provide your email so we can resend activation email
            </Card.Title>
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
              <Button className="btn-bg-color" type block>
                {' '}
                Resend Email
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

export default ResendToken
