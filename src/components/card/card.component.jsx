import React from 'react'
import { Card } from 'react-bootstrap'

const CardItem = ({ width, img, info }) => {
  return (
    <Card style={{ width: width }} className="shadow">
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
  )
}

export default CardItem
