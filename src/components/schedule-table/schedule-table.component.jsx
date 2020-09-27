import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

import './schedule-table.styles.css'

const ScheduleTable = () => {
  const [activities, setActivities] = useState([
    {
      week: 1,
      sunday: 'Aurelia Vega',
      monday: 'Aurelia Vega',
      tuesday: 'Aurelia Vega',
      wednesday: 'Aurelia Vega',
      thursday: 'Aurelia Vega',
      friday: 'Aurelia Vega',
      saturday: 'Aurelia Vega'
    }
  ])
  const addNewRow = () => {
    const newActivities = [
      {
        week: uuidv4(),
        sunday: 'Aurelia Vega',
        monday: 'Aurelia Vega',
        tuesday: 'Aurelia Vega',
        wednesday: 'Aurelia Vega',
        thursday: 'Aurelia Vega',
        friday: 'Aurelia Vega',
        saturday: 'Aurelia Vega'
      }
    ]
    setActivities([...activities, ...newActivities])
  }

  const removeRow = id => {
    console.log(id)
    const filteredData = activities.filter(activity => activity.week !== id)
    console.log(filteredData)
    setActivities([...filteredData])
  }
  return (
    <div>
      <Card>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Schedule table
        </h3>
        <Card.Body>
          <Form>
            <div id="table" className="table-editable">
              <span className="table-add float-right mb-3 mr-2">
                <span className="text-success plus-icon" onClick={addNewRow}>
                  <FaPlus className="fa-2x" />
                </span>
              </span>
              <table className="table table-bordered table-responsive-md table-striped text-center">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Sunday</th>
                    <th className="text-center">Monday</th>
                    <th className="text-center">Tuesday</th>
                    <th className="text-center">Wednesday</th>
                    <th className="text-center">Thursday</th>
                    <th className="text-center">Friday</th>
                    <th className="text-center">Saturday</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((activity, index) => (
                    <tr key={activity.week}>
                      <td className="pt-3-half">{index + 1}</td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="1">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            defaultValue={activity.sunday}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="2">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            defaultValue={activity.monday}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="3">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            defaultValue={activity.tuesday}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="4">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            defaultValue={activity.wednesday}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="5">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            defaultValue={activity.thursday}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="6">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            defaultValue={activity.friday}></Form.Control>
                        </Form.Group>
                      </td>
                      <td className="pt-3-half">
                        <Form.Group className="form-text-area" controlId="7">
                          <Form.Control
                            className="input-text-area"
                            as="textarea"
                            cols="10"
                            rows="2"
                            defaultValue={activity.saturday}></Form.Control>
                        </Form.Group>
                      </td>
                      <td>
                        <span className="table-remove">
                          <button
                            type="button"
                            className="btn btn-danger btn-rounded btn-sm my-0"
                            onClick={() => removeRow(activity.week)}>
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

export default ScheduleTable
