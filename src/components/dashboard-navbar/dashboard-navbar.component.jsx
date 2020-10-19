import React, { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProfileMenu from '../dropdown-menu/DropdownMenu.component'
import Search from '../search_input/search.components'
import { AiOutlineMenu } from 'react-icons/ai'
import { AuthContext } from '../../contexts/AuthContext'

import './dashboard-navbar.styles.css'

const DashboardNavbar = ({ page }) => {
  const { toggleNavState } = useContext(AuthContext)

  return (
    <div className="dashboard-header">
      <Row className="header-row">
        <Col
          style={{ color: '#66615b', textAlign: 'left', fontSize: '1.3rem' }}
          xs={4}>
          <p>
            <span className="menu-icon" onClick={toggleNavState}>
              <AiOutlineMenu />
            </span>
            <span className="dashboard-text">Dashboard</span>
          </p>
        </Col>
        <Col
          className="dashboard-nav-item"
          xs={3}
          style={{ color: '#66615b', fontSize: '0.9rem' }}>
          <p>6th Sept 2020</p>
        </Col>
        <Col className="dashboard-nav-item" xs={3}>
          <Search page={page} />
        </Col>
        <Col className="dashboard-nav-item" xs={2}>
          <ProfileMenu username="Musa" />
        </Col>
      </Row>
    </div>
  )
}

export default DashboardNavbar
