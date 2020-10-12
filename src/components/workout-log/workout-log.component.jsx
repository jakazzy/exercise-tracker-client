import React, { useState } from 'react'
import { Card, Form, Container, Row, Col } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { updateUsersExercises } from '../../api/api'

const Workout = () => {
  const [exercises, setExercises] = useState([
    {
      id: 1,
      name: 'running',
      sunday: 20,
      monday: 30,
      tuesday: 40,
      wednesday: 80,
      thursday: 30,
      friday: 90,
      saturday: 10,
      metric: 'metres'
    },
    {
      id: 2,
      name: 'skipping',
      sunday: 20,
      monday: 30,
      tuesday: 40,
      wednesday: 80,
      thursday: 30,
      friday: 90,
      saturday: 10,
      metric: 'reps'
    },
    {
      id: 3,
      name: 'abs',
      sunday: 20,
      monday: 30,
      tuesday: 40,
      wednesday: 80,
      thursday: 30,
      friday: 90,
      saturday: 10,
      metric: 'reps'
    },
    {
      id: 4,
      name: 'running',
      sunday: 20,
      monday: 30,
      tuesday: 40,
      wednesday: 80,
      thursday: 30,
      friday: 90,
      saturday: 10,
      metric: 'metres'
    },
    {
      id: 5,
      name: 'skipping',
      sunday: 20,
      monday: 30,
      tuesday: 40,
      wednesday: 80,
      thursday: 30,
      friday: 90,
      saturday: 10,
      metric: 'reps'
    },
    {
      id: 6,
      name: 'abs',
      sunday: 20,
      monday: 30,
      tuesday: 40,
      wednesday: 80,
      thursday: 30,
      friday: 90,
      saturday: 10,
      metric: 'reps'
    }
  ])

  const handleChange = (e, id) => {
    let newExercise = exercises.filter(exercise => exercise.id === id)[0]
    newExercise = { ...newExercise, [e.target.name]: e.target.value }

    const changeExercises = exercises.map(exercise => {
      if (exercise.id === id) {
        return { ...exercise, ...newExercise }
      }
      return exercise
    })
    setExercises([...changeExercises])
  }

  const handleBlur = () => {
    console.log(exercises, 'heloooooooooooooo')
    updateUsersExercises(exercises)
  }
  return (
    <div>
      <Card>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Workout Log
        </h3>
        <Card.Body>
          <Form>
            <div id="table" className="table-editable">
              <Container>
                <Row>
                  <Col>
                    <p>Running</p>
                    <p>Swimming</p>
                  </Col>
                  <Col>
                    <p>Running</p>
                    <p>Swimming</p>
                  </Col>
                  <Col>
                    <p>Running</p>
                    <p>Swimming</p>
                  </Col>
                </Row>
              </Container>
              <span className="table-add float-right mb-3 mr-2">
                <span className="text-success plus-icon">
                  <FaPlus className="fa-2x" />
                </span>
              </span>
              <table className="table table-bordered table-responsive-md table-striped text-center">
                <thead>
                  <tr>
                    <th className="text-center"># Exercises</th>
                    <th className="text-center">Sunday</th>
                    <th className="text-center">Monday</th>
                    <th className="text-center">Tuesday</th>
                    <th className="text-center">Wednesday</th>
                    <th className="text-center">Thursday</th>
                    <th className="text-center">Friday</th>
                    <th className="text-center">Saturday</th>
                  </tr>
                </thead>
                <tbody>
                  {exercises.map((exercise, index) => (
                    <tr key={index}>
                      <td className="pt-3-half">{exercise.name}</td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="1">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            name="sunday"
                            onBlur={e => handleBlur(e)}
                            onChange={e => handleChange(e, exercise.id)}
                            value={exercise.sunday}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="2">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            name="monday"
                            //   onBlur={e => handleBlur(e)}
                            onChange={e => handleChange(e, exercise.id)}
                            cols="10"
                            rows="2"
                            value={exercise.monday}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="3">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            name="tuesday"
                            //   onBlur={e => handleBlur(e)}
                            onChange={e => handleChange(e, exercise.id)}
                            value={exercise.tuesday}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="4">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            name="wednesday"
                            //   onBlur={e => handleBlur(e)}
                            onChange={e => handleChange(e, exercise.id)}
                            value={exercise.wednesday}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="5">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            name="thursday"
                            //   onBlur={e => handleBlur(e)}
                            onChange={e => handleChange(e, exercise.id)}
                            value={exercise.thursday}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="6">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            name="friday"
                            //   onBlur={e => handleBlur(e)}
                            onChange={e => handleChange(e, exercise.id)}
                            value={exercise.friday}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="7">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            name="saturday"
                            //   onBlur={e => handleBlur(e)}
                            onChange={e => handleChange(e, exercise.id)}
                            value={exercise.saturday}></Form.Control>
                        </Form.Group>
                      </td>
                      {/* <td>
                          <span className="table-remove">
                            <button
                              type="button"
                              className="btn btn-danger btn-rounded btn-sm my-0"
                              onClick={() => removeRow(activity.week)}>
                              Remove
                            </button>
                          </span>
                        </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Workout
