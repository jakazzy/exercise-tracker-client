import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Exercise from '../../images/exercise.svg'
import Search from '../../components/search_input/search.components'

const Main = () => {
  return (
    <div>
      <div className="dashboard-header">
        <Row>
          <Col xs={6}>
            <h2>Dashboard</h2>
          </Col>
          <Col xs={3}>
            <p>Date of the day</p>
          </Col>
          <Col xs={3}>
            <Search />
          </Col>
        </Row>
      </div>
      <Card style={{ width: '60rem', margin: '2rem auto' }}>
        <Card.Body>
          <img src={Exercise} alt="Exercise" width="300" height="300" />
        </Card.Body>
      </Card>
      {/* </Container> */}
    </div>
  )
}
export default Main
