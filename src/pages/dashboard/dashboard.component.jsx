import React from 'react'
import { ListGroup, Tab, Row, Col } from 'react-bootstrap'
import Chat from './chat.component'
import InviteFriend from './invite-friend.component.jsx'
import Profile from './profile.component'
import Schedule from './schedule.component'
import Main from './main.component'

import './dashboard.styles.css'
const Sidebar = () => {
  return (
    <div>
      {/* <Navbar>
        <Navbar.Brand href="#home">Goal Tracker</Navbar.Brand>
        <Nav>
          <Nav.Link href="">Dashboard</Nav.Link>
          <Nav.Link href="">Schedule and Goals</Nav.Link>
          <Nav.Link href="">Profile</Nav.Link>
          <Nav.Link href="">Invite friends</Nav.Link>
        </Nav>
      </Navbar> */}

      {/* <ListGroup>
        <ListGroup.Item action href="#home">
          {' '}
          Dashboard
        </ListGroup.Item>
        <ListGroup.Item action href="#home">
          {' '}
          Schedule and Goal
        </ListGroup.Item>
        <ListGroup.Item action href="#home">
          {' '}
          Profile
        </ListGroup.Item>
        <ListGroup.Item action href="#home">
          {' '}
          Invite Friends
        </ListGroup.Item>
      </ListGroup> */}

      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col
            sm={2}
            style={
              {
                //   height: '100vh',
                //   border: '1px solid #ccced0',
                //   backgroundColor: 'green',
                //   borderRadius: '20px'
              }
            }>
            <ListGroup
              style={{
                height: '100vh'
                // backgroundColor: 'rgb(82, 185, 192)'
              }}>
              <ListGroup.Item action href="#link1">
                Dashboard
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Schedule and Goals
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Profile
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Chat
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
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
