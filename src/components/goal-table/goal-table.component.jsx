import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

import './goal-table.styles.css'

const GoalTable = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      exercise: 'Build Abs',
      steps: 'exercise',
      duration: 'three'
    }
  ])

  const addNewGoalRow = () => {
    const newGoal = [
      {
        id: uuidv4(),
        exercise: 'Build Abs',
        steps: 'exercise',
        duration: 'three'
      }
    ]

    setGoals([...goals, ...newGoal])
  }

  const removenewGoalRow = id => {
    const filteredGoalTable = goals.filter(goal => goal.id !== id)
    setGoals([...filteredGoalTable])
  }
  return (
    <div style={{ margin: '3rem' }}>
      <Card>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Goal table
        </h3>
        <Card.Body>
          <Form>
            <div id="table" className="table-editable">
              <span className="table-add float-right mb-3 mr-2">
                <span className="text-success" onClick={addNewGoalRow}>
                  <FaPlus className="fa-2x" />
                </span>
              </span>
              <table className="table table-bordered table-responsive-md table-striped text-center">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Goal</th>
                    <th className="text-center">Action Steps</th>
                    <th className="text-center">Week(s)</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {goals.map((goal, index) => (
                    <tr key={goal.id}>
                      <td className="pt-3-half">{index + 1}</td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="1">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="5"
                            rows="2"
                            defaultValue={goal.exercise}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="2">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            defaultValue={goal.steps}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="3">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="5"
                            rows="2"
                            defaultValue={goal.duration}></Form.Control>
                        </Form.Group>
                      </td>
                      <td>
                        <span className="table-remove">
                          <button
                            type="button"
                            className="btn btn-danger btn-rounded btn-sm my-0"
                            onClick={() => removenewGoalRow(goal.id)}>
                            Remove
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))}
                  {/* This is our clonable table line */}
                </tbody>
              </table>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default GoalTable
