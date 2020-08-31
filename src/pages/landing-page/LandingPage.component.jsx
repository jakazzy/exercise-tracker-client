import React from 'react'
import HomeNavbar from '../../components/navbar/navbar.component'
import './landing-page.styles.css'
import Stability from '../../images/stability_ball.svg'
import WorkOut from '../../images/working_out.svg'

const LandingPage = () => {
  return (
    <div>
      <HomeNavbar />
      <div className="landing-page-container">
        <div className="rounded-divider"></div>
        <div className="landing-page-images">
          <img src={Stability} alt="stability" className="stability" />
          <img src={WorkOut} alt="workout" className="work-out" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
