import React from 'react'
import { Card } from 'react-bootstrap'

import './card.styles.css'

const CardItem = ({ width, img, info }) => {
  return (
    <div className="card-container">
      <Card
        style={{ width: width, height: '100%' }}
        className="shadow services">
        <Card.Img
          variant="top"
          src={img}
          loading="lazy"
          style={{ height: '10rem', paddingTop: '1rem' }}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{info}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardItem
