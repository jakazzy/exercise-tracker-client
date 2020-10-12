import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'

import './footer.styles.css'

const Footer = () => {
  return (
    <div className="footer-content">
      <Container>
        {/* <ul className="footer-items">
          <li>GOALTRACKER</li>
          <li>&#169; goaltracker 2020</li>
          <li>contact</li>
          <li>privacy policy</li>
          <li>terms of use</li>
        </ul> */}
        <ListGroup horizontal="md" className="my-2">
          <ListGroup.Item>GOALTRACKER</ListGroup.Item>
          <ListGroup.Item>&#169; goaltracker 2020</ListGroup.Item>
          <ListGroup.Item>privacy policy</ListGroup.Item>
          <ListGroup.Item>terms of use!</ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  )
}

export default Footer
