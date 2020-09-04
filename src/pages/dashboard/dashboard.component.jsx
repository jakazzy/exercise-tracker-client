import React from 'react'
import { ListGroup, Tab, Row, Col } from 'react-bootstrap'
import { RiDashboardLine } from 'react-icons/ri'
import { AiOutlineSchedule, AiFillWechat } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaUserFriends } from 'react-icons/fa'

import Chat from './chat.component'
import InviteFriend from './invite-friend.component.jsx'
import Profile from './profile.component'
import Schedule from './schedule.component'
import Main from './main.component'

import './dashboard.styles.css'

const Sidebar = () => {
  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={2}>
            <ListGroup
              style={{
                height: '100vh'
              }}>
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
                Profile
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                <AiFillWechat />
                Chat
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                <FaUserFriends />
                Invite Friends
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
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
                <Chat />
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <InviteFriend />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default Sidebar
