import React from 'react'
import { Card } from 'react-bootstrap'
import Training from '../../images/personal_training.svg'
import DashboardNavbar from '../../components/dashboard-navbar/dashboard-navbar.component'

import './main.styles.css'

const Main = () => {
  return (
    <div style={{ width: '60rem', margin: '2rem auto' }}>
      <DashboardNavbar />
      <Card
        className="shadow border-0"
        style={{
          position: 'relative',
          height: '8rem',
          backgroundColor: '#b2d9dc'
        }}>
        <Card.Body>
          <div
            style={{
              textAlign: 'left',
              margin: '1rem 1rem 0rem 1rem'
              // padding: '1rem',
              // fontSize: '1.2rem'
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
            width="250"
            height="250"
            style={{ position: 'absolute', top: '-6rem' }}
          />
        </Card.Body>
      </Card>
      {/* </Container> */}
      {/* graph */}
      <Card className="shadow border-0 card-section card-section-metrics">
        <Card.Body className="metrics">
          <div className="first-metric">
            <div className="first-metric-items">
              <p>Heart Rate</p>
              <div className="graph-hr"></div>
            </div>
            <p> 71 beats per min</p>
          </div>
          <div className="second-metric">
            <div className="second-metric-items">
              <p>Calories </p>
              <div className="graph-cal"></div>
            </div>
            <p> 300KCal</p>
          </div>
          <div className="third-metric">
            <div className="third-metric-items">
              <p>Distance </p>
              <div className="graph-distance"></div>
            </div>
            <p> 300KCal</p>
          </div>
        </Card.Body>
      </Card>
      <Card className="shadow border-0 card-section">
        <Card.Body className="graphs">
          <div className="first-graph">hi</div>
          <div className="second-graph">hello</div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default Main
