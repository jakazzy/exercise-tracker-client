import React, { useContext } from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'
import { AuthContext } from '../../contexts/AuthContext'
import { signout } from '../../api/api'

import './navbar.styles.css'
const HomeNavbar = () => {
  const {
    auth: { token, isAuthenticated }
  } = useContext(AuthContext)

  const signOut = async () => {
    await signout()
  }
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">GOALTRACKER</Navbar.Brand>
          <Nav className="kjh">
            {!token && !isAuthenticated ? (
              <span>
                <Nav.Link className="auth-link" href="/login">
                  {' '}
                  Log in
                </Nav.Link>
                <Nav.Link className="auth-link" href="/signup">
                  {' '}
                  Sign up
                </Nav.Link>
              </span>
            ) : (
              <Nav.Link onClick={signOut}>sign out</Nav.Link>
            )}
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
