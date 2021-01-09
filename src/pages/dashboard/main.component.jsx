import React, { useContext } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Training from '../../images/personal_training.svg'
import DashboardNavbar from '../../components/dashboard-navbar/dashboard-navbar.component'
import { RiPulseLine, RiFireFill, RiRunFill } from 'react-icons/ri'
import { ToastContainer } from 'react-toastify'
import Chart from './chart.component'

import './main.styles.css'
import ExerciseProgress from './exercise-progress.component'
import { AuthContext } from '../../contexts/AuthContext'

const Main = () => {
  const {
    auth: { user }
  } = useContext(AuthContext)

  return (
    <div style={{ width: '60rem', margin: '2rem auto' }}>
      <DashboardNavbar page="main" />
      <Card
        className="shadow border-0"
        style={{
          position: 'relative',
          height: '7rem',
          backgroundColor: '#b2d9dc'
        }}>
        <Card.Body>
          <div
            style={{
              textAlign: 'left',
              marginLeft: '2rem'
            }}>
            {' '}
            <p>
              <b>Hello {user.username} ,</b>{' '}
            </p>
            <p>Today is a great day to be fit</p>
          </div>
          <img
            src={Training}
            alt="Exercise"
            loading="lazy"
            // width="250"
            // height="250"
            className="training-image"
            // style={{ position: 'absolute', top: '-6rem' }}
          />
        </Card.Body>
      </Card>
      {/* </Container> */}
      {/* graph */}
      <Card className="shadow border-0 card-section card-section-metrics">
        <Card.Body className="metrics">
          <div className="first-metric shadow">
            <div className="first-metric-items">
              <p>Heart Rate</p>
              <div className="graph-hr">
                <RiPulseLine className="graph-icon" />
              </div>
            </div>
            <p> 71 beats per min</p>
          </div>
          <div className="second-metric shadow">
            <div className="second-metric-items">
              <p>Calories </p>
              <div className="graph-cal">
                <RiFireFill className="graph-icon" />
              </div>
            </div>
            <p> 300KCal</p>
          </div>
          <div className="third-metric shadow">
            <div className="third-metric-items">
              <p>Distance </p>
              <div className="graph-distance">
                <RiRunFill className="graph-icon" />
              </div>
            </div>
            <p> 300KCal</p>
          </div>
        </Card.Body>
      </Card>
      <Card className="shadow border-0 card-section graphs-section">
        <Card.Body as={Row} className="graphs">
          <Col xs={9} md={9}>
            <div className="first-graph">
              <Chart />
            </div>
          </Col>
          <Col xs={3} md={3} className="shadow">
            <div className="second-graph">
              <ExerciseProgress />
            </div>
          </Col>
        </Card.Body>
      </Card>
      <ToastContainer position="top-right"></ToastContainer>
    </div>
  )
}
export default Main
