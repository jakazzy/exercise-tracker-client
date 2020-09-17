import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import queryString from 'query-string'

import { confirmation } from '../../api/api'
// import SigninPage from '../signin-page/signin-page.component'
// import ResendToken from '../resend-token/resend-token.component'

const Confirmation = props => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState({ confirmed: '' })

  useEffect(() => {
    const { token } = queryString.parse(props.location.search)
    const fetchData = async () => {
      const result = await confirmation(token)
      if (!result) {
        return result
      }
      console.log(result.data)
      setValue({ ...value, ...result.data })
      return result.data
    }
    fetchData()
    // console.log(fetchData(), 'i just fetched data too')
  }, [props.location.search, value])
  let page

  if (value.confirmed === '') {
    page = (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
  if (value.confirmed) {
    page = props.history.push('/login')
  }
  if (value.confirmed === false) {
    page = props.history.push('/resend-token')
  }

  return <div>{page}</div>
}

export default Confirmation
