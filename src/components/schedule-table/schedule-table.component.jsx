import React from 'react'

const ScheduleTable = () => {
  return (
    <div>
      ;
      <div className="card">
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Editable table
        </h3>
        <div className="card-body">
          <div id="table" className="table-editable">
            <span className="table-add float-right mb-3 mr-2">
              <a href="#!" className="text-success">
                <i className="fas fa-plus fa-2x" aria-hidden="true"></i>
              </a>
            </span>
            <table className="table table-bordered table-responsive-md table-striped text-center">
              <thead>
                <tr>
                  <th className="text-center">Person Name</th>
                  <th className="text-center">Age</th>
                  <th className="text-center">Company Name</th>
                  <th className="text-center">Country</th>
                  <th className="text-center">City</th>
                  <th className="text-center">Sort</th>
                  <th className="text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-3-half" contenteditable="true">
                    Aurelia Vega
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    30
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    Deepends
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    Spain
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    Madrid
                  </td>
                  <td className="pt-3-half">
                    <span className="table-up">
                      <a href="#!" className="indigo-text">
                        <i
                          className="fas fa-long-arrow-alt-up"
                          aria-hidden="true"></i>
                      </a>
                    </span>
                    <span className="table-down">
                      <a href="#!" className="indigo-text">
                        <i
                          className="fas fa-long-arrow-alt-down"
                          aria-hidden="true"></i>
                      </a>
                    </span>
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
                <tr>
                  <td className="pt-3-half" contenteditable="true">
                    Guerra Cortez
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    45
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    Insectus
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    USA
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    San Francisco
                  </td>
                  <td className="pt-3-half">
                    <span className="table-up">
                      <a href="#!" className="indigo-text">
                        <i
                          className="fas fa-long-arrow-alt-up"
                          aria-hidden="true"></i>
                      </a>
                    </span>
                    <span className="table-down">
                      <a href="#!" className="indigo-text">
                        <i
                          className="fas fa-long-arrow-alt-down"
                          aria-hidden="true"></i>
                      </a>
                    </span>
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
                {/* clonable table */}
                <tr>
                  <td className="pt-3-half" contenteditable="true">
                    Guadalupe House
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    26
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    Isotronic
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    Germany
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    Frankfurt am Main
                  </td>
                  <td className="pt-3-half">
                    <span className="table-up">
                      <a href="#!" className="indigo-text">
                        <i
                          className="fas fa-long-arrow-alt-up"
                          aria-hidden="true"></i>
                      </a>
                    </span>
                    <span className="table-down">
                      <a href="#!" className="indigo-text">
                        <i
                          className="fas fa-long-arrow-alt-down"
                          aria-hidden="true"></i>
                      </a>
                    </span>
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
                {/* clonable table */}
                <tr className="hide">
                  <td className="pt-3-half" contenteditable="true">
                    Elisa Gallagher
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    31
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    Portica
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    United Kingdom
                  </td>
                  <td className="pt-3-half" contenteditable="true">
                    London
                  </td>
                  <td className="pt-3-half">
                    <span className="table-up">
                      <a href="#!" className="indigo-text">
                        <i
                          className="fas fa-long-arrow-alt-up"
                          aria-hidden="true"></i>
                      </a>
                    </span>
                    <span className="table-down">
                      <a href="#!" className="indigo-text">
                        <i
                          className="fas fa-long-arrow-alt-down"
                          aria-hidden="true"></i>
                      </a>
                    </span>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleTable
