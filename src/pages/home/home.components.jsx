import React from 'react'
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap'
import Footer from '../../components/footer/footer'
import { cardData } from '../../data/data'
import CardItem from '../../components/card/card.component'
import './home.styles.css'

const Home = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="#home">GOALTRACKER</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Exercises
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link href="/login">Sign in</Nav.Link>
            <Nav.Link href="/signup" className="mr-sm-2">
              Sign up
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="content">
        <div className="call-to-action-message">
          <h1> MAKE IT HAPPEN. SHOCK EVERYONE</h1>
          <p>
            Begin your fitness goals today. Set goals and smash them goals using
            goal tracker.
          </p>
          <Button className="btn-bg-color-cta shadow" type="button" block>
            {' '}
            JOIN NOW
          </Button>
        </div>
      </section>
      <section className="info-card">
        {cardData.map(({ width, image, id, info }) => (
          <CardItem width={width} img={image} key={id} info={info} />
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default Home
