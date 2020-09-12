import React from 'react'
import { Card } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'

const ScheduleTable = () => {
  return (
    <div>
      <Card>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Schedule table
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
                <tr>
                  <td
                    className="pt-3-half"
                    contentEditable="true"
                    suppressContentEditableWarning={true}>
                    Aurelia Vega
                  </td>
                  <td
                    className="pt-3-half"
                    contentEditable="true"
                    suppressContentEditableWarning={true}>
                    30
                  </td>
                  <td
                    className="pt-3-half"
                    contentEditable="true"
                    suppressContentEditableWarning={true}>
                    Deepends
                  </td>
                  <td
                    className="pt-3-half"
                    contentEditable="true"
                    suppressContentEditableWarning={true}>
                    Spain
                  </td>
                  <td
                    className="pt-3-half"
                    contentEditable="true"
                    suppressContentEditableWarning={true}>
                    Madrid
                  </td>
                  <td
                    className="pt-3-half"
                    contentEditable="true"
                    suppressContentEditableWarning={true}>
                    Madrid
                  </td>
                  <td
                    className="pt-3-half"
                    contentEditable="true"
                    suppressContentEditableWarning={true}>
                    Madrid
                  </td>
                  <td
                    className="pt-3-half"
                    contentEditable="true"
                    suppressContentEditableWarning={true}>
                    Madrid
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

export default ScheduleTable
