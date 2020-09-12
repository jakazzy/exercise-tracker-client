import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Search from '../search_input/search.components'

const DashboardNavbar = () => {
  return (
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
  )
}

export default DashboardNavbar
