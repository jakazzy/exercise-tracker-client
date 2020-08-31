import React from 'react'
import { Button } from 'react-bootstrap'
import HomeNavbar from '../../components/navbar/navbar.component'
import './landing-page.styles.css'
import Stability from '../../images/stability_ball.svg'
import WorkOut from '../../images/working_out.svg'

const LandingPage = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <HomeNavbar />
      <div className="CTA-message">
        <h1> MAKE IT HAPPEN. SHOCK EVERYONE</h1>
        Begin your fitness goals today. Set goals and smash them goals using
        exercise tracker.
        <Button className="btn-bg-color-cta" type="button" block>
          {' '}
          JOIN NOW
        </Button>
      </div>
      <div className="landing-page-container">
        <div className="rounded-divider"></div>
        <div className="landing-page-images">
          <img src={Stability} alt="stability" className="stability" />
          <img src={WorkOut} alt="workout" className="work-out" />
        </div>
      </div>

      <div className="success-stories"></div>
    </div>
  )
}

export default LandingPage
