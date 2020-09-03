import React from 'react'
import { ListGroup, Tab, Row, Col } from 'react-bootstrap'

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
            <ListGroup>
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
                Is it thy will, thy image should keep open My heavy eyelids to
                the weary night? Dost thou desire my slumbers should be broken,
                While shadows like to thee do mock my sight? Is it thy spirit
                that thou send'st from thee So far from home into my deeds to
                pry, To find out shames and idle hours in me, The scope and
                tenure of thy jealousy? O, no! thy love, though much, is not so
                great: It is my love that keeps mine eye awake:
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                Who will believe my verse in time to come, If it were fill'd
                with your most high deserts? Though yet heaven knows it is but
                as a tomb Which hides your life, and shows not half your parts.
                If I could write the beauty of your eyes, And in fresh numbers
                number all your graces, The age to come would say 'This poet
                lies; Such heavenly touches ne'er touch'd earthly faces.' So
                should my papers, yellow'd with their age, Be scorn'd, like old
                men of less truth than tongue,
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default Sidebar
