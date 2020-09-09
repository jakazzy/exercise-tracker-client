import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Training from '../../images/personal_training.svg'
import Search from '../../components/search_input/search.components'

import './main.styles.css'

const Main = () => {
  return (
    <div style={{ width: '60rem', margin: '2rem auto' }}>
      <div className="dashboard-header">
        <Row
          style={{
            height: '5rem',
            // backgroundColor: 'blue',
            width: '60rem',
            margin: '2rem auto'
          }}>
          <Col
            style={{ color: '#66615b', textAlign: 'left', fontSize: '1.3rem' }}
            xs={6}>
            <p>Dashboard</p>
          </Col>
          <Col xs={3} style={{ color: '#66615b', fontSize: '0.9rem' }}>
            <p>6th Sept 2020</p>
          </Col>
          <Col xs={3}>
            <Search />
          </Col>
        </Row>
      </div>
      <Card>
        <Card.Body style={{ position: 'relative', height: '12rem' }}>
          <div
            style={{
              textAlign: 'left',
              margin: '2rem 2rem 2rem 3rem',
              padding: '1rem',
              fontSize: '1.2rem'
            }}>
            {' '}
            <p>
              <b>Hello Musa,</b>{' '}
            </p>
            <p>Today is a great day to be fit</p>
          </div>
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
