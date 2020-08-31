import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'

import './navbar.styles.css'
const HomeNavbar = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">GOALTRACKER</Navbar.Brand>
          <Nav classname="kjh">
            <Nav.Link href="signin"> Sign in</Nav.Link>
            <Nav.Link href="signup"> Sign up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar style={{ backgroundColor: 'rgb(82, 185, 192)' }}>
        <Container>
          <Nav style={{ justifyContent: 'space-around', width: '70%' }}>
            <Nav.Link className="link-text" href="signin">
              {' '}
              ABOUT
            </Nav.Link>
            <Nav.Link
              className="link-text"
              style={{ color: 'white' }}
              href="signup">
              {' '}
              CONNECT
            </Nav.Link>
            <Nav.Link className="link-text" href="signin">
              {' '}
              BLOG
            </Nav.Link>
            <Nav.Link className="link-text" href="signup">
              {' '}
              HELP
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default HomeNavbar
