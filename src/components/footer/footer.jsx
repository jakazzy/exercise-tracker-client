import React from 'react'
import { Container } from 'react-bootstrap'

import './footer.styles.css'

const Footer = () => {
  return (
    <div className="footer-content">
      <Container>
        <ul className="footer-items">
          <li>GOALTRACKER</li>
          <li>&#169; goaltracker 2020</li>
          <li>contact</li>
          <li>privacy policy</li>
          <li>terms of use</li>
        </ul>
      </Container>
    </div>
  )
}

export default Footer
