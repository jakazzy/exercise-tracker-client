import React, { useState } from 'react'
import { ListGroup, Tab, Row, Col } from 'react-bootstrap'
import { RiDashboardLine } from 'react-icons/ri'
import { AiOutlineSchedule, AiFillWechat } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaUserFriends } from 'react-icons/fa'

import Settings from './settings.component'
// import InviteFriend from './invite-friend.component.jsx'
import Profile from './profile.component'
import Schedule from './schedule.component'
import Main from './main.component'
import InviteModal from '../../components/modal/modal.component'

import './dashboard.styles.css'

const Sidebar = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="sidebar">
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={3} lg={2}>
            <ListGroup
              style={{
                height: '100vh'
              }}>
              <h4 className="dashboard-brand">GOAL TRACKER</h4>
              <ListGroup.Item action href="#link1">
                <RiDashboardLine />
                Dashboard
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                <AiOutlineSchedule />
                Schedule and Goals
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                <CgProfile />
                User Profile
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                <AiFillWechat />
                Settings
              </ListGroup.Item>
              <ListGroup.Item onClick={handleShow}>
                <FaUserFriends />
                Invite Friends
              </ListGroup.Item>
            </ListGroup>
            <InviteModal show={show} handleClose={handleClose} />
          </Col>
          <Col sm={8} lg={9}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <Main />
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <Schedule />
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <Profile />
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <Settings />
              </Tab.Pane>
              {/* <Tab.Pane eventKey="#link5">
                <InviteFriend />
              </Tab.Pane> */}
            </Tab.Content>
          </Col>
          {/* <Col className="person-detail" lg={3}>
            <div>hello</div>
          </Col> */}
        </Row>
      </Tab.Container>
    </div>
  )
}

export default Sidebar
