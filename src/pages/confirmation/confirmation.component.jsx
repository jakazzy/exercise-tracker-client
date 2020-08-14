import React, { useEffect, useState } from 'react'
import queryString from 'query-string'

import { confirmation } from '../../api/api'
import SigninPage from '../signin-page/signin-page.component'
import ResendToken from '../resend-token/resend-token.component'

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

  const page = value.confirmed ? <SigninPage /> : <ResendToken />

  return <div>{page}</div>
}

export default Confirmation
