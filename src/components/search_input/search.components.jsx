import React from 'react'
import { Form } from 'react-bootstrap'
import './search.styles.css'

const Search = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="search">
          <Form.Control
            type="text"
            id="search"
            placeholder="Search..."
            style={{
              backgroundColor: 'hsla(0,0%,87.1%,.3)',
              color: '#66615b',
              border: 'none',
              fontSize: '0.8rem'
            }}
          />
        </Form.Group>
      </Form>
    </div>
  )
}

export default Search
