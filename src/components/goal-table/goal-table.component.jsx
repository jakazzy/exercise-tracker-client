import React, { useState, useContext, useEffect } from 'react'
import { Card, Form } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'
import { updateGoal } from '../../api/api'
import { AuthContext } from '../../contexts/AuthContext'

import './goal-table.styles.css'

const GoalTable = () => {
  const { goal } = useContext(AuthContext)
  const [goals, setGoals] = useState([
    {
      id: 1,
      exercise: 'Build Abs',
      steps: 'exercise',
      duration: 'three'
    }
  ])

  useEffect(() => {
    const goalData = () => {
      if (goal && goal.length > goals.length) {
        setGoals(goal)
      }
    }
    goalData()
  }, [goal, goals])

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

  const removeNewGoalRow = async id => {
    const filteredGoalTable = goals.filter(goal => goal.id !== id)
    setGoals([...filteredGoalTable])
    await updateGoal(filteredGoalTable)
  }

  const handleChange = (e, id) => {
    let newGoals = goals.filter(goal => goal.id === id)[0]
    newGoals = { ...newGoals, [e.target.name]: e.target.value }
    const changeGoals = goals.map(goal => {
      if (goal.id === id) {
        return { ...goal, ...newGoals }
      }
      return goal
    })

    setGoals([...changeGoals])
  }

  const handleBlur = async () => {
    await updateGoal(goals)
    console.log(goals)
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
                            name="exercise"
                            onBlur={e => handleBlur(e)}
                            onChange={e => handleChange(e, goal.id)}
                            value={goal.exercise}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="2">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            name="steps"
                            onBlur={e => handleBlur(e)}
                            onChange={e => handleChange(e, goal.id)}
                            value={goal.steps}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="3">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="5"
                            rows="2"
                            name="duration"
                            onBlur={e => handleBlur(e)}
                            onChange={e => handleChange(e, goal.id)}
                            value={goal.duration}></Form.Control>
                        </Form.Group>
                      </td>
                      <td>
                        <span className="table-remove">
                          <button
                            type="button"
                            className="btn btn-danger btn-rounded btn-sm my-0"
                            onClick={() => removeNewGoalRow(goal.id)}>
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
