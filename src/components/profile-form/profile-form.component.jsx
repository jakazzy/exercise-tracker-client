import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers'
import * as Yup from 'yup'

import { updateNewUser } from '../../api/api'

const ProfileForm = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    email: Yup.string().email('Invalid email'),
    phonenumber: Yup.string(),
    age: Yup.number(),
    height: Yup.number(),
    weight: Yup.number(),
    about: Yup.string()
  })

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data, id) => {
    try {
      const resp = await updateNewUser(data, id)
      if (resp) {
        toast.info('user profile updated')
      }
    } catch (error) {
      toast.error('Unable to update user profile')
    }
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <p>Edit Profile</p>

      <Form.Row>
        <Form.Group as={Col} controlId="firstname">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            placeholder="First name"
            ref={register}></Form.Control>
          {errors.firstname && (
            <p className="error-message">{errors.firstName.message}</p>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="lastname">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            placeholder="Last name"
            ref={register}></Form.Control>
          {errors.lastName && (
            <p className="error-message">{errors.lastName.message}</p>
          )}
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            ref={register}></Form.Control>
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="contact">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            ref={register}
            name="phonenumber"></Form.Control>
          {errors.phonenumber && (
            <p className="error-message">{errors.phonenumber.message}</p>
          )}
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridHeight">
          <Form.Label>Height/m</Form.Label>
          <Form.Control
            type="number"
            placeholder="1.5m"
            ref={register}
            name="height"
          />
          {errors.height && (
            <p className="error-message">{errors.height.message}</p>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridWeight">
          <Form.Label>Weight/kg</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            name="weight"
            ref={register}>
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
          {errors.weight && (
            <p className="error-message">{errors.weight.message}</p>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAge">
          <Form.Label>Age/yrs</Form.Label>
          <Form.Control
            type="nuumber"
            placeholder="23years"
            ref={register}
            name="age"></Form.Control>
          {errors.age && <p className="error-message">{errors.age.message}</p>}
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAbout">
        <Form.Label>About</Form.Label>
        <Form.Control
          placeholder="Lorem ipsum dolor sit amet consectetur."
          type="text"
          name="about"
          ref={register}></Form.Control>
        {errors.about && (
          <p className="error-message">{errors.about.message}</p>
        )}
      </Form.Group>

      <Button
        style={{
          color: 'white',
          backgroundColor: 'rgb(82, 185, 192)',
          border: 'rgb(82, 185, 192)'
        }}
        type="submit">
        Update Profile
      </Button>
      <ToastContainer position="top-center"></ToastContainer>
    </Form>
  )
}

export default ProfileForm
