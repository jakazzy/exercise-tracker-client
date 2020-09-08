import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Training from '../../images/personal_training.svg'
// import Search from '../../components/search_input/search.components'

import './main.styles.css'

const Main = () => {
  return (
    <div style={{ width: '60rem', margin: '2rem auto' }}>
      <div className="dashboard-header">
        <Row
          style={{
            height: '5rem',
            backgroundColor: 'blue',
            width: '60rem',
            margin: '2rem auto'
          }}>
          <Col xs={6}>
            <h2>Dashboard</h2>
          </Col>
          <Col xs={3}>
            <p>Date of the day</p>
          </Col>
          <Col xs={3}>{/* <Search /> */}</Col>
        </Row>
      </div>
      <Card>
        <Card.Body style={{ position: 'relative', height: '12rem' }}>
          <img
            src={Training}
            alt="Exercise"
            width="300"
            height="300"
            style={{ position: 'absolute', top: '-6rem' }}
          />
        </Card.Body>
      </Card>
      {/* </Container> */}
      {/* graph */}
      <div className="graphs">
        <div className="first-graph">hi</div>
        <div className="second-graph">hello</div>
      </div>
      <div className="metrics">
        <div className="first-metric">hi</div>
        <div className="second-metric">hello</div>
        <div className="third-metric">you</div>
      </div>
    </div>
  )
}
export default Main
