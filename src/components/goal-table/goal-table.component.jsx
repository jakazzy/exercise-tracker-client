import React from 'react'
import { Card } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'

const GoalTable = () => {
  return (
    <div style={{ margin: '3rem' }}>
      <Card>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Goal table
        </h3>
        <Card.Body>
          <div id="table" className="table-editable">
            <span className="table-add float-right mb-3 mr-2">
              <a href="#!" className="text-success">
                <FaPlus className="fa-2x" />
              </a>
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
                <tr>
                  <td className="pt-3-half" contenteditable="true">
                    1
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    Build abs
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    Deepends
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    Spain
                  </td>
                  <td>
                    <span className="table-remove">
                      <button
                        type="button"
                        className="btn btn-danger btn-rounded btn-sm my-0">
                        Remove
                      </button>
                    </span>
                  </td>
                </tr>
                {/* This is our clonable table line */}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default GoalTable
