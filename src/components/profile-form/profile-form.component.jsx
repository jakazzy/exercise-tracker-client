import React, { useContext } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers'
import * as Yup from 'yup'

import { AuthContext } from '../../contexts/AuthContext'
import { updateUser } from '../../api/api'

const ProfileForm = () => {
  const schema = Yup.object().shape({
    firstname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    lastname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    email: Yup.string().email('Invalid email'),
    phonenumber: Yup.string(),
    age: Yup.number(),
    height: Yup.number(),
    weight: Yup.number(),
    about: Yup.string()
  })

  const {
    auth: { token }
  } = useContext(AuthContext)
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    console.log(
      // token,
      // '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&'
      data,
      'what is happening now'
    )
    const finalData = { ...data, username: data.firstname }
    try {
      const resp = await updateUser(finalData, token)
      console.log(resp, 'this is resp')
      if (resp.data) {
        toast.info('user profile updated')
      } else {
        toast.error('Unable to update user profile')
      }
    } catch (error) {
      toast.error('Unable to update user profile')
    }
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <p>Edit Profile</p>

      <Form.Row>
        <Form.Group as={Col} controlId="username">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            default="jida"
            placeholder="First name"
            ref={register}></Form.Control>
          {errors.firstname && (
            <p className="error-message">{errors.firstname.message}</p>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="lastname">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            default="asare"
            placeholder="Last name"
            ref={register}></Form.Control>
          {errors.lastname && (
            <p className="error-message">{errors.lastname.message}</p>
          )}
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            default="jakazzy@gmail.com"
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
            default="+233546678765"
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
            placeholder="1.5"
            default="5"
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
            type="number"
            defaultValue="Choose..."
            placeholder="45"
            default="45"
            name="weight"
            ref={register}></Form.Control>
          {errors.weight && (
            <p className="error-message">{errors.weight.message}</p>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAge">
          <Form.Label>Age/yrs</Form.Label>
          <Form.Control
            type="nuumber"
            placeholder="23years"
            default="25"
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
          default="Lorem ipsum dolor sit amet consectetur."
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
