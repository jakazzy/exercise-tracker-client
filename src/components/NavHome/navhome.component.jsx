import React, { useContext } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { signout } from '../../api/api'
import { AuthContext } from '../../contexts/AuthContext'

const NavHome = () => {
  const {
    auth: { token, isAuthenticated }
  } = useContext(AuthContext)

  const signOut = async () => {
    await signout()
  }
  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="#home">GOALTRACKER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Exercises</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {true ? (
            <span>
              <Nav.Link href="/login" className="auth-link">
                Sign in
              </Nav.Link>
              <Nav.Link href="/signup" className="auth-link">
                Sign up
              </Nav.Link>
            </span>
          ) : (
            <Nav.Link onClick={signOut}>sign out</Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavHome
